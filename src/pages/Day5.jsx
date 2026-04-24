import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day5() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 5：準備賦歸</h2>
      {/* 2. 替換為動態天氣元件，Day 5 可設定顯示今日天氣 */}
      <WeatherWidget targetDay="today" />

      <div className="card">
        <h3>🚌 [交通] 前往福岡機場</h3>
        <p>搭乘市區地鐵或巴士前往機場。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>✈️ [交通] 航班起飛</h3>
        <ul>
          <li><strong>星宇航空 JX841</strong> 返回台北。</li>
          <li>泰毅、芮芮、Dora、Ollie：<code>FQTFW8</code></li>
          <li>媽媽：<code>DSCO5S</code> | 爸爸：<code>DSMCOH</code></li>
        </ul>
      </div>

      <div className="card">
        <h3>🛍️ [購物] 機場免稅店最後衝刺</h3>
        <p><strong>導遊筆記：</strong>國內線航廈的免稅店與伴手禮選擇較國際線豐富。時間充裕可先至國內線採買，再搭接駁車前往國際線。</p>
        <p><strong>🏷️ 必買清單：</strong>福砂屋長崎蛋糕、博多通饅頭、明太子、稚加榮明太子管。</p>
      </div>
    </div>
  );
}