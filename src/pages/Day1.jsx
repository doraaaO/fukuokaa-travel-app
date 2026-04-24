import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day1() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 1：福岡抵達・市區散策</h2>
      {/* 2. 替換為動態天氣元件，Day 1 可設定顯示今日天氣 */}
      <WeatherWidget targetDay="today" />

      <div className="card">
        <h3>✈️ 航班抵達　JX840　13:05</h3>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>FQTFW8: <strong><code>泰毅、芮芮、Dora、Ollie</code></strong></p>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>DSCO5S: <strong><code>媽媽</code></strong></p>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>DSMCOH: <strong><code>爸爸</code></strong></p>
      </div>

      <div className="card" style={{ borderColor: '#E1F5FE' }}>
        <h3>🏨 Parkside Inn Hakata</h3>
        <p><strong>備註：</strong>15:00 可以辦理入住，寄放行李。</p>
        <a href="https://maps.app.goo.gl/DwH3t6PX9WuCHeJc8" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#E1F5FE' }}>
        <h3>🍜 屋台美食：中洲橫丁</h3>
        <p><strong>導遊筆記：</strong>福岡標誌性的路邊攤文化。傍晚在那珂川畔點起燈火，拉麵、黑輪、烤雞肉串的香氣滿溢。這不僅是美食，更是體驗博多人情味的場所。建議可作為感受博多夜生活氣氛的散步路線，用餐則可挑選周邊空間較寬敞的實體居酒屋，讓長輩與幼童能舒適入座。</p>
        <p><strong>🏷️ 必吃美食：</strong>博多豚骨拉麵、明太子玉子燒、一口餃子。</p>
        <a href="https://maps.app.goo.gl/6bKSdhgNop6iPCRs5" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#E1F5FE' }}>
        <h3>🛍️ 唐吉訶德 中洲店</h3>
        <p><strong>導遊筆記：</strong>24小時營業的補貨聖地。中洲店規模龐大且地點便利，是深夜購物的最佳選擇。</p>
        <a href="https://maps.app.goo.gl/TmhrF5PZRwX3gu3ZA" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#E1F5FE' }}>
        <h3>🛍️ Yodobashi 博多</h3>
        <p><strong>導遊筆記：</strong>博多車站旁的電器巨頭。除了3C產品，還有豐富的扭蛋、模型與生活用品。</p>
        <a href="https://maps.app.goo.gl/ZurNDpjWTs7nuuXY8" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

    </div>
  );
}