import React, { useState, useEffect } from 'react';

export default function Budget() {
  // 初始化狀態，若 localStorage 有資料則讀取，否則給予預設值
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('travel-budget');
    return saved ? JSON.parse(saved) : {
      food: 0,
      transport: 0,
      shopping: 0,
      hotel: 0
    };
  });

  // 當 expenses 改變時，自動存入 localStorage
  useEffect(() => {
    localStorage.setItem('travel-budget', JSON.stringify(expenses));
  }, [expenses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenses(prev => ({
      ...prev,
      [name]: Number(value) || 0
    }));
  };

  const total = expenses.food + expenses.transport + expenses.shopping + expenses.hotel;

  return (
    <div className="page-wrapper">
      <h2 className="page-title">💰 記帳與預算 (日圓)</h2>

      <div className="card" style={{ padding: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>🍜 餐飲</label>
          <input
            type="number"
            name="food"
            value={expenses.food || ''}
            onChange={handleInputChange}
            placeholder="0"
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>🚗 交通 (租車/過路費/油資)</label>
          <input
            type="number"
            name="transport"
            value={expenses.transport || ''}
            onChange={handleInputChange}
            placeholder="0"
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>🛍️ 購物 (藥妝/伴手禮)</label>
          <input
            type="number"
            name="shopping"
            value={expenses.shopping || ''}
            onChange={handleInputChange}
            placeholder="0"
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>🏨 住宿 (Parkside Inn)</label>
          <input
            type="number"
            name="hotel"
            value={expenses.hotel || ''}
            onChange={handleInputChange}
            placeholder="0"
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>

        <hr style={{ border: '1px solid #eee', margin: '20px 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
          <span>總計花費：</span>
          <span style={{ color: '#d32f2f' }}>¥ {total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}