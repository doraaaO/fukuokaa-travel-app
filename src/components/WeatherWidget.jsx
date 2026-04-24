import React from 'react';
import { useWeather } from '../hooks/useWeather';

export default function WeatherWidget({ targetDay = 'today' }) {
    // 呼叫自訂 Hook 獲取福岡 (400000) 氣象資料
    const { weather, isOffline, lastUpdated } = useWeather('400000');

    // 防呆：若初次載入且無快取時的骨架狀態
    if (!weather) {
        return <p className="weather-tag skeleton">天氣資訊載入中...</p>;
    }

    const data = weather[targetDay];

    return (
        <div className="weather-container">
            <p className="weather-tag">
                {data.emoji} 福岡即時預報 | {data.low}°C / {data.high}°C
            </p>
            {/* 離線狀態的極簡提示 */}
            {isOffline && (
                <span className="offline-badge">
                    ⚠️ 離線模式 (最後更新: {lastUpdated})
                </span>
            )}
        </div>
    );
}