import React, { useState, useEffect } from 'react';

export default function Budget() {
  // 1. 初始化五天的預算結構
  const defaultExpenses = {
    day1: { food: 0, transport: 0, shopping: 0, hotel: 0 },
    day2: { food: 0, transport: 0, shopping: 0, hotel: 0 },
    day3: { food: 0, transport: 0, shopping: 0, hotel: 0 },
    day4: { food: 0, transport: 0, shopping: 0, hotel: 0 },
    day5: { food: 0, transport: 0, shopping: 0, hotel: 0 },
  };

  // 2. 讀取與寫入 LocalStorage (更換 key 避免與舊版格式衝突)
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('travel-budget-daily');
    return saved ? JSON.parse(saved) : defaultExpenses;
  });

  // 控制目前正在看哪一天的分頁
  const [activeDay, setActiveDay] = useState('day1');

  useEffect(() => {
    localStorage.setItem('travel-budget-daily', JSON.stringify(expenses));
  }, [expenses]);

  // 3. 處理輸入變更 (針對目前選擇的 activeDay 進行更新)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenses(prev => ({
      ...prev,
      [activeDay]: {
        ...prev[activeDay],
        [name]: Number(value) || 0
      }
    }));
  };

  // 4. 計算本日小計與旅程總計
  const currentDayData = expenses[activeDay];
  const dailyTotal = currentDayData.food + currentDayData.transport + currentDayData.shopping + currentDayData.hotel;

  const grandTotal = Object.values(expenses).reduce((acc, day) => {
    return acc + day.food + day.transport + day.shopping + day.hotel;
  }, 0);

  // 分頁籤設定
  const days = [
    { id: 'day1', label: 'Day 1' },
    { id: 'day2', label: 'Day 2' },
    { id: 'day3', label: 'Day 3' },
    { id: 'day4', label: 'Day 4' },
    { id: 'day5', label: 'Day 5' },
  ];

  // 輸入框樣式
  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '12px',
    border: '2px solid #f0ece2',
    backgroundColor: '#faf8f5',
    fontSize: '1rem',
    color: '#5d5d5d',
    boxSizing: 'border-box'
  };

  return (
    <div className="page-wrapper">
      <h2 className="page-title">旅行帳本 (日圓)</h2>

      {/* 手帳分頁籤 (可左右滑動) */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '5px 2px 15px', margin: '0 15px' }}>
        {days.map(day => (
          <button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: activeDay === day.id ? '#ffebf0' : '#ffffff',
              color: activeDay === day.id ? '#ff8fa3' : '#888888',
              fontWeight: activeDay === day.id ? 'bold' : 'normal',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* 每日輸入卡片 */}
      <div className="card" style={{ borderColor: '#ffebf0', marginTop: '5px' }}>
        <h3 style={{ borderBottom: '2px dashed #ffebee', paddingBottom: '10px', color: '#ff8fa3', fontSize: '1rem' }}>
          📝 {days.find(d => d.id === activeDay).label} 花費紀錄
        </h3>

        <div style={{ marginBottom: '15px', marginTop: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#ff8fa3', fontWeight: 'bold' }}>🍜 餐飲</label>
          <input type="number" name="food" value={currentDayData.food || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#81d4fa', fontWeight: 'bold' }}>🚗 交通 (租車/過路費)</label>
          <input type="number" name="transport" value={currentDayData.transport || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#a5d6a7', fontWeight: 'bold' }}>🛍️ 購物 (藥妝/伴手禮)</label>
          <input type="number" name="shopping" value={currentDayData.shopping || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#ce93d8', fontWeight: 'bold' }}>🏨 住宿</label>
          <input type="number" name="hotel" value={currentDayData.hotel || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ textAlign: 'right', color: '#888', fontSize: '0.9rem', marginTop: '10px' }}>
          本日小計：¥ {dailyTotal.toLocaleString()}
        </div>
      </div>

      {/* 總計結算卡片 */}
      <div className="card" style={{
        backgroundColor: '#fff3e0',
        borderColor: '#ffe0b2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div>
          <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '4px' }}>五天加總計算</div>
          <strong style={{ color: '#5d5d5d', fontSize: '1.1rem' }}>旅程總花費</strong>
        </div>
        <span style={{ color: '#ff8fa3', fontSize: '1.5rem', fontWeight: 'bold' }}>
          ¥ {grandTotal.toLocaleString()}
        </span>
      </div>
    </div>
  );
}