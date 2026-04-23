import React from 'react';

export default function Day2() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 2：山口縣自駕與璀璨夜景</h2>
      <p className="weather-tag">🌤️ 5/1 週五 (黃金週) | 22°C / 15°C 晴朗</p>

      <div className="card">
        <h3>🚗 [交通] 取車：時代租車 (博多口店)</h3>
        <ul>
          <li><strong>時間：</strong>08:00</li>
          <li><strong>預約代號：</strong><code>202600359229</code></li>
          <li><strong>車型：</strong>W-4 (附兩張安全座椅)</li>
          <li><strong>必帶：</strong>台灣汽車駕照、日文譯本</li>
        </ul>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🍣 [景點/餐廳] 唐戶市場</h3>
        <p><strong>導遊筆記：</strong>山口縣的廚房。週末限定的「活跳跳馬關街」可直接買到現做的握壽司。這裡也以下關名物「河豚」聞名，物美價廉。</p>
        <p><strong>💡 攻略：</strong>大多數攤位僅限現金支付。建議中午前抵達，混搭各攤位壽司。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>⛩️ [景點] 元乃隅神社</h3>
        <p><strong>導遊筆記：</strong>123座紅色鳥居沿著海岸懸崖排列，與藍天綠海形成強烈對比。賽錢箱設在鳥居頂端，極具特色。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🚶‍♂️ [景點] 關門隧道人行道 (下關進 ➡️ 門司出)</h3>
        <p><strong>導遊筆記：</strong>全長 780 公尺的海底隧道，用雙腳跨越九州與本州的縣界。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>⛩️ [景點] 和布刈神社</h3>
        <p><strong>導遊筆記：</strong>可俯瞰繁忙的關門海峽，近距離觀看大型貨輪駛過。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🌃 [景點] 皿倉山展望台</h3>
        <p><strong>導遊筆記：</strong>「新日本三大夜景」，呈現工業城市特有的璀璨美感。</p>
        <p><strong>💡 資訊：</strong>需搭乘纜車與爬坡車 (成人 1230 日圓，每一位成人可免費帶一位幼兒)。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>
    </div>
  );
}