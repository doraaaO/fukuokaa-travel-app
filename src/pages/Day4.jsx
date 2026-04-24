import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day4() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 4：博多歷史・天神血拼</h2>
      <div className="weather-container">
        {/* 2. 替換為動態天氣元件，Day 4 可設定顯示今日天氣 */}
        <WeatherWidget targetDay="today" /><span className="weather-tag">📅 5/3 週日 | 黃金週</span>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🚗 [交通] 還車：Times租車博多車站 博多口店</h3>
        <p><strong>時間：</strong>08:00 前需加滿油歸還。</p>
        <a href="https://maps.app.goo.gl/w7Zev1ygLaUSWja57" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>⛩️ [景點] 櫛田神社</h3>
        <p><strong>導遊筆記：</strong>建於西元 757 年的古老神社，是博多總鎮守，也是每年舉辦「博多祇園山笠祭」的重要舞台。境內擁有一棵超過千年的銀杏神木。</p>
        <a href="https://maps.app.goo.gl/D28wziJH119TAdt5A" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🛍️ [景點] 川端商店街</h3>
        <p><strong>導遊筆記：</strong>博多歷史最悠久的商店街，保有昭和風情與多樣的小吃店。設有採光雨棚，是帶長輩與幼童悠閒散步的好去處。</p>
        <a href="https://maps.app.goo.gl/qNesb3sM7ySJgBYo7" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🍜 [餐廳] 一蘭拉麵 總本店</h3>
        <p><strong>導遊筆記：</strong>24小時營業，整棟建築外觀掛滿紅燈籠，極具特色。二樓為傳統味集中座位，一樓設有屋台區。考量隨行人員組成，建議選擇一樓屋台區或一般桌位，以利長輩與孩童共餐。</p>
        <p><strong>🏷️ 必點：</strong>總本店限定重箱酸味豚骨拉麵。</p>
        <a href="https://maps.app.goo.gl/zaT3AEfAEkMRkTxN8" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>⛲ [景點] 博多運河城</h3>
        <p><strong>導遊筆記：</strong>水與光影的購物殿堂，大型半露天購物中心。每小時的音樂噴泉秀是必看亮點。</p>
        <a href="https://maps.app.goo.gl/jHiepegdMaDurBeJ9" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🛍️ [景點] Mina 天神</h3>
        <p><strong>導遊筆記：</strong>這裡集結了大型 Loft、Uniqlo、GU 與電器中心，是深度採買的終點站。</p>
        <a href="https://maps.app.goo.gl/tyfqU9j4rQACEkuD8" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🛍️ [景點] 天神地下街</h3>
        <p><strong>導遊筆記：</strong>採用歐式風格的大型地下購物中心，總長約 600 公尺，設有 12 條風格林立的商店與餐廳「大道」。</p>
        <a href="https://maps.app.goo.gl/EWtwi5YVqGnjePiS6" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>⛩️ [景點] 警固神社</h3>
        <p><strong>導遊筆記：</strong>警固的地名源起於當地曾為鴻臚館附近的太宰府防衛設施「警固所」。鬧區中的寧靜空間，適合採購間隙的小憩。</p>
        <a href="https://maps.app.goo.gl/oaWtgHZFMEwU9FG28" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🛒 [採買] BIC CAMERA 天神2館</h3>
        <p><strong>導遊筆記：</strong>集中採購家電與生活用品。天神區人潮密集，採購時請留意嬰兒推車的動線與安全。</p>
        <a href="https://maps.app.goo.gl/Wjc8nqpoFQHfD24P6" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🛒 [採買] 大國藥妝 天神南店：</h3>
        <p><strong>導遊筆記：</strong>各類熱門藥妝補貨點。黃金週期間人潮較多，建議預留充足時間。</p>
        <a href="https://maps.app.goo.gl/XdpdCVj1bDNbZA3T8" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#e8f5e9' }}>
        <h3>🛒 [採買] 唐吉訶德 天神本店：</h3>
        <p><strong>導遊筆記：</strong>24 小時營業的補貨聖地。天神本店規模龐大且地點便利，是深夜購物的最佳選擇。</p>
        <a href="https://maps.app.goo.gl/CoRuhsLGKocUwEQTA" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

    </div>
  );
}