import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day1() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 1：福岡抵達與市區初探</h2>
      {/* 2. 替換為動態天氣元件，Day 1 可設定顯示今日天氣 */}
      <WeatherWidget targetDay="today" />

      <div className="card">
        <h3>✈️ [交通] 航班抵達</h3>
        <ul>
          <li><strong>星宇航空 JX840</strong> 抵達福岡機場。</li>
          <li>泰毅、芮芮、Dora、Ollie：<code>FQTFW8</code></li>
          <li>媽媽：<code>DSCO5S</code> | 爸爸：<code>DSMCOH</code></li>
        </ul>
      </div>

      <div className="card">
        <h3>🏨 [住宿] Parkside Inn Hakata</h3>
        <p><strong>備註：</strong>15:00 可以辦理入住，寄放行李。</p>
        {/* 請將 href 換成您 Google Maps 的精確分享連結 */}
        <a href="https://maps.app.goo.gl/DwH3t6PX9WuCHeJc8" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🍜 [景點/餐廳] 中洲屋台橫丁</h3>
        <p><strong>導遊筆記：</strong>福岡標誌性的路邊攤文化。傍晚在那珂川畔點起燈火，拉麵、黑輪、烤雞肉串的香氣滿溢。這不僅是美食，更是體驗博多人情味的場所。</p>
        <p><strong>🏷️ 必吃美食：</strong>博多豚骨拉麵、明太子玉子燒、一口餃子。</p>
        <a href="https://maps.app.goo.gl/6bKSdhgNop6iPCRs5" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🛍️ [景點] 唐吉訶德 中洲店</h3>
        <p><strong>導遊筆記：</strong>24小時營業的補貨聖地。中洲店規模龐大且地點便利，是深夜購物的最佳選擇。</p>
        <a href="https://maps.app.goo.gl/TmhrF5PZRwX3gu3ZA" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>
    </div>
  );
}