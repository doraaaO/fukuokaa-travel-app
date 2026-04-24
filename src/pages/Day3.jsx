import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day3() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 3：神社結緣・在地日常</h2>
      <div className="weather-container">
        {/* 2. 替換為動態天氣元件，Day 3 可設定顯示今日天氣 */}
        <WeatherWidget targetDay="today" /><span className="weather-tag">📅 5/2 週六 | 黃金週</span>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>⛩️ [景點] 竈門神社</h3>
        <p><strong>導遊筆記：</strong>以結緣與方除著名的神社。其「超守」不僅是護身符，更是精神象徵，鼓勵人們克服障礙，達成心願，迎接更好的自己。</p>
        <a href="https://maps.app.goo.gl/bzvHCer4jcqEVo3u7" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🛍️ [景點] 西新商店街</h3>
        <p><strong>導遊筆記：</strong>充滿在地生活氣息的傳統商店街。這裡的「推車路邊攤」販售當季蔬果，是體驗福岡日常的最佳地點。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🗼 [景點] 福岡塔</h3>
        <p><strong>導遊筆記：</strong>高 234 公尺，全鏡面設計。觀景台可 360 度俯瞰福岡市區與海港夜景。雨天景觀雖受影響，但室內活動不受限。</p>
        <p><strong>費用：</strong>成人 1000 日圓，4 歲以上 200 日圓，4 歲以下免費。</p>
        <a href="https://maps.app.goo.gl/CbWdm7Xexep8z7eDA" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>
    </div>
  );
}
