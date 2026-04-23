import React from 'react';

export default function Info() {
  return (
    <div className="page-wrapper">
      <h2 className="page-title">ℹ️ 預約與重要資訊</h2>

      <div className="card">
        <h3>✈️ 航班預約代號</h3>
        <ul>
          <li><strong>去程：</strong>4/30 星宇 JX840</li>
          <li><strong>回程：</strong>5/4 星宇 JX841</li>
          <hr style={{ border: '0.5px solid #eee', margin: '10px 0' }} />
          <li>泰毅、芮芮、Dora、Ollie：<code>FQTFW8</code></li>
          <li>媽媽：<code>DSCO5S</code></li>
          <li>爸爸：<code>DSMCOH</code></li>
        </ul>
      </div>

      <div className="card">
        <h3>🏨 住宿資訊</h3>
        <ul>
          <li><strong>飯店：</strong>Parkside Inn Hakata</li>
          <li><strong>日期：</strong>4/30 - 5/4 (共 4 晚)</li>
          <li><strong>狀態：</strong>已確認 (15:00 後入住)</li>
        </ul>
      </div>

      <div className="card">
        <h3>🚗 租車資訊</h3>
        <ul>
          <li><strong>公司：</strong>時代租車 (博多車站博多口店)</li>
          <li><strong>訂單：</strong><code>202600359229</code></li>
          <li><strong>期間：</strong>5/1 08:00 - 5/3 08:00</li>
          <li><strong>車型：</strong>W-4 / 兩張安全座椅</li>
        </ul>
      </div>
    </div>
  );
}