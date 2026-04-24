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
        <h3>⛩️ [景點] 寶滿宮 竈門神社</h3>
        <p><strong>導遊筆記：</strong>以結緣與方除著名的神社。其「超守」不僅是護身符，更是精神象徵，鼓勵人們克服障礙，達成心願，迎接更好的自己。</p>
        <a href="https://maps.app.goo.gl/bzvHCer4jcqEVo3u7" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🛍️ [景點] 太宰府天滿宮</h3>
        <p><strong>導遊筆記：</strong>祭祀學問之神。表參道兩側商店林立，逢假日人潮擁擠。參道周邊設有多處座椅，便於同行長輩隨時入座休息。</p>
        <p><strong>必吃美食：</strong>梅枝餅 (梅ヶ枝餅) - 推薦熱騰騰現吃。</p>
        <a href="https://maps.app.goo.gl/ALkjWgxK7nNYHR9BA" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🍜 [餐廳] 縁結び食堂 蕎麦なみ満</h3>
        <p><strong>必吃美食：</strong>手打蕎麥麵、親子丼。</p>
        <a href="https://maps.app.goo.gl/otGwgGbEMgiJM8pJ9" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>☕ [餐廳] 隈研吾星巴克 (太宰府天滿宮表參道店)</h3>
        <p><strong>導遊筆記：</strong>由著名建築師隈研吾設計，運用大量木條拼切出獨特的店面空間。使用超過 2000 根木頭，完全不使用釘子組合而成，是現代建築工藝與傳統文化的完美結合。</p>
        <a href="https://maps.app.goo.gl/XqQmUHWDqibj94D5A" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🛍️ [購物] WORKMAN Plus 筑紫野店</h3>
        <p><strong>導遊筆記：</strong>專注於登山、露營等戶外運動與休閒機能服飾。具備極高 CP 值。</p>
        <a href="https://maps.app.goo.gl/6ciq1Ew1tCTqUCkSA" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🛍️ [購物] ベビー・子供用品バースデイ (Birthday) 春日フォレストシティ店</h3>
        <p><strong>導遊筆記：</strong>大型連鎖嬰幼兒用品店。自駕前來最合適，方便載運採買的大件商品或成堆服飾。</p>
        <a href="https://maps.app.goo.gl/tK5AvYQq6tLiMgwd7#" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
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
