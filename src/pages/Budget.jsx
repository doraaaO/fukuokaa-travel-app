import React, { useState, useEffect } from 'react';

export default function Budget() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('travel-budget');
    return saved ? JSON.parse(saved) : { food: 0, transport: 0, shopping: 0, hotel: 0 };
  });

  useEffect(() => {
    localStorage.setItem('travel-budget', JSON.stringify(expenses));
  }, [expenses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenses(prev => ({ ...prev, [name]: Number(value) || 0 }));
  };

  const total = expenses.food + expenses.transport + expenses.shopping + expenses.hotel;

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '12px',
    border: '2px solid #f0ece2',
    backgroundColor: '#faf8f5',
    fontSize: '1rem',
    color: '#5d5d5d',
    boxSizing: 'border-box' // 避免超出父元素寬度
  };

  return (
    <div className="page-wrapper">
      <h2 className="page-title">旅行帳本 (日圓)</h2>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#ff8fa3', fontWeight: 'bold' }}>🍜 餐飲</label>
          <input type="number" name="food" value={expenses.food || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#81d4fa', fontWeight: 'bold' }}>🚗 交通 (租車/過路費)</label>
          <input type="number" name="transport" value={expenses.transport || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#a5d6a7', fontWeight: 'bold' }}>🛍️ 購物 (藥妝/伴手禮)</label>
          <input type="number" name="shopping" value={expenses.shopping || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#ce93d8', fontWeight: 'bold' }}>🏨 住宿</label>
          <input type="number" name="hotel" value={expenses.hotel || ''} onChange={handleInputChange} placeholder="0" style={inputStyle} />
        </div>

        <div style={{
          marginTop: '25px',
          padding: '15px',
          backgroundColor: '#fff3e0',
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 'bold'
        }}>
          <span style={{ color: '#5d5d5d' }}>總計花費</span>
          <span style={{ color: '#ff8fa3', fontSize: '1.3rem' }}>¥ {total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}