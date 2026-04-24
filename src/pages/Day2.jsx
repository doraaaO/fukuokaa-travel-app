import React from 'react';
import WeatherWidget from '../components/WeatherWidget'; // 1. 引入元件

export default function Day2() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">📍 Day 2：山口自駕・絕景探索</h2>
      <div className="weather-container">
        {/* 2. 替換為動態天氣元件，Day 2 可設定顯示今日天氣 */}
        <WeatherWidget targetDay="today" /><span className="weather-tag">📅 5/1 週五 | 黃金週</span>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🚗 [交通] 取車：Times租車博多車站 博多口店</h3>
        <p><strong>時間：</strong>08:00</p>
        <p><strong>預約代號：</strong><code>202600359229</code></p>
        <p><strong>車型：</strong><code>W-4 (兩張兒童安全座椅、ETC、多語言導航)</code></p>
        <p style={{ fontSize: '0.85rem', color: '#888' }}>必帶：台灣汽車駕照、日文譯本</p>
        <a href="https://maps.app.goo.gl/w7Zev1ygLaUSWja57" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🍣 [景點/餐廳] 山口縣　唐戶市場</h3>
        <p><strong>導遊筆記：</strong>山口縣的廚房。週末限定的「活跳跳馬關街」可直接買到現做的握壽司。這裡也以下關名物「河豚」聞名，物美價廉。</p>
        <p><strong>營業時間：</strong>週五至週六 10:00-15:00 / 週日及國定假日 08:00-15:00。黃金週人潮極多，強烈建議中午前抵達。</p>
        <p><strong>必吃美食：</strong>河豚生魚片、各式河豚料理、握壽司(黑鮪魚腦天)、炸干貝。</p>
        <p><strong>💡攻略：</strong>大多數攤位僅限現金支付。建議直接購買多間不同攤位的壽司混搭成一套。</p>
        <a href="https://maps.app.goo.gl/mZccHyvmgXzecBkr9" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>⛩️ [景點] 山口縣　元乃隅神社</h3>
        <p><strong>導遊筆記：</strong>曾被 CNN 評選為日本最美景點之一。123座紅色鳥居沿著海岸懸崖排列，與藍天綠海形成強烈對比。這裡的賽錢箱設在鳥居頂端，非常有挑戰性且獨特。</p>
        <a href="https://maps.app.goo.gl/Evp3MNeAYRJYR55J6" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🚶‍♂️ [景點] 關門隧道人行道 (下關進 ➡️ 門司出)</h3>
        <p><strong>導遊筆記：</strong>世界罕見的海底人行隧道，全長780公尺，步行約15分鐘。內部平坦，嬰兒車可輕鬆推行，並設有山口縣與福岡縣的交界標誌可供合影。</p>
        <a href="https://maps.app.goo.gl/GiqRZ1ru8vf8oshC6" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>⛩️ [景點] 和布刈神社</h3>
        <p><strong>導遊筆記：</strong>歷史氛圍濃厚的場所，可俯瞰繁忙的關門海峽，看著大型貨輪近距離駛過，感受壯觀的航道景緻。</p>
        <a href="https://maps.app.goo.gl/4nknkRVs1aYHfWfz7" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>

      <div className="card" style={{ borderColor: '#ffebf0' }}>
        <h3>🌃 [景點] 皿倉山展望台</h3>
        <p><strong>導遊筆記：</strong>登高俯瞰北九州與若松大橋。這裡的夜景被列為「新日本三大夜景」，呈現工業城市特有的璀璨美感。</p>
        <p><strong>💡資訊：</strong></p>
        <ul>
          <li>登頂方式：搭乘纜車和爬坡車共約 10 分鐘可抵達山頂。</li>
          <li>開車：從都市高速公路「大谷出入口」出發約 5 分鐘。</li>
          <li>導航定位：皿倉山纜車山麓站（福岡縣北九州市八幡東區大字尾倉 1481-1）。</li>
          <li>停車場：帆柱公園立體停車場(市營)，山麓站附近有付費停車場。</li>
          <li>運行時間：4∼10月 10:00～22:00 (上行末班車 21:20)。</li>
          <li>停運日：每週星期二 (國定假日除外)。</li>
          <li>票價：纜車與爬坡車來回套票 成人 1,230 日圓 (每一位購票大人可免費帶一位幼兒)。</li>
        </ul>
        <a href="https://maps.app.goo.gl/fuQQTjpw1xpDMzrm6" className="nav-link" target="_blank" rel="noreferrer">🧭 啟動導航</a>
      </div>
    </div >
  );
}