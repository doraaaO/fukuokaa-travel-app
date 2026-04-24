import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day4() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 4：歷史、運河與天神採購</h2>
      {/* 2. 替換為動態天氣元件，Day 4 可設定顯示今日天氣 */}
      <WeatherWidget targetDay="today" />

      <div className="card">
        <h3>🚗 [交通] 還車：時代租車</h3>
        <p><strong>時間：</strong>上午 08:00 前需加滿油歸還。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>⛩️ [景點] 櫛田神社</h3>
        <p><strong>導遊筆記：</strong>鑑於奈良時代西元757年的城市遺址，每年都會舉辦博多祇園山笠祭。神社有一棵超過千年的銀杏神木。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🛍️ [景點] 川端商店街</h3>
        <p><strong>導遊筆記：</strong>博多歷史最悠久的商店街，保有昭和風情與多樣的小吃店。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🍜 [餐廳] 一蘭拉麵 總本店</h3>
        <p><strong>導遊筆記：</strong>24小時營業，整棟紅燈籠裝飾是拍照聖地。</p>
        <p><strong>🏷️ 必點：</strong>總本店限定重箱酸味豚骨拉麵。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>⛲ [景點] 博多運河城</h3>
        <p><strong>導遊筆記：</strong>水與光影的購物殿堂。每小時的音樂噴泉秀是必看亮點。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🛍️ [景點] Mina 天神 / 天神地下街</h3>
        <p><strong>Mina：</strong>集結大型 Loft、Uniqlo 與電器中心，深度採買終點站。</p>
        <p><strong>地下街：</strong>歐式風格，設有12條商店和餐廳風格林立的大道。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>⛩️ [景點] 警固神社</h3>
        <p><strong>導遊筆記：</strong>地名源起於當地曾為防衛設施「警固所」。</p>
        <a href="#" className="nav-link" target="_blank" rel="noreferrer">📍 啟動導航</a>
      </div>

      <div className="card">
        <h3>🛒 [採買] 藥妝與電器補貨</h3>
        <ul>
          <li><strong>BIC CAMERA 天神2館：</strong>採買家電 (留意推車動線)。</li>
          <li><strong>大國藥妝 天神南店：</strong>熱門藥妝補貨。</li>
          <li><strong>唐吉訶德 天神本店：</strong>24小時營業的深夜購物選擇。</li>
        </ul>
      </div>
    </div>
  );
}