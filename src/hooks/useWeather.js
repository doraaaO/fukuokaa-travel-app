import { useState, useEffect } from 'react';

// JMA 天氣代碼對應極簡 Emoji 的映射表
const JMA_WEATHER_EMOJIS = {
    '100': '☀️', '101': '🌤️', '104': '🌥️', '110': '🌤️',
    '200': '☁️', '201': '☁️', '202': '🌧️', '204': '🌨️',
    '300': '🌧️', '311': '🌧️', '313': '🌧️', '314': '🌧️',
    '400': '🌨️', '402': '🌨️',
};

export function useWeather(areaCode = '400000') {
    // 初始化狀態：優先讀取本機快取
    const [weather, setWeather] = useState(() => {
        const cached = localStorage.getItem(`weather_${areaCode}`);
        return cached ? JSON.parse(cached) : null;
    });
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    const [lastUpdated, setLastUpdated] = useState(() => {
        return localStorage.getItem(`weather_update_${areaCode}`) || null;
    });

    useEffect(() => {
        const fetchJMA = async () => {
            try {
                const res = await fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${areaCode}.json`);
                if (!res.ok) throw new Error('JMA API Error');
                const data = await res.json();

                // 解析 JMA 複雜結構 (萃取福岡地方的今日/明日預報)
                const areaForecast = data[0].timeSeries[0].areas[0];
                const tempsData = data[0].timeSeries[2].areas[0];

                const parsedData = {
                    today: {
                        code: areaForecast.weatherCodes[0],
                        emoji: JMA_WEATHER_EMOJIS[areaForecast.weatherCodes[0].substring(0, 3)] || '🌡️',
                        high: tempsData.temps[1] || '--', // 今日高溫 (若超過發布時間可能為空)
                        low: tempsData.temps[0] || '--',  // 今日低溫
                    },
                    tomorrow: {
                        code: areaForecast.weatherCodes[1],
                        emoji: JMA_WEATHER_EMOJIS[areaForecast.weatherCodes[1].substring(0, 3)] || '🌡️',
                        high: tempsData.temps[3] || '--', // 明日高溫
                        low: tempsData.temps[2] || '--',  // 明日低溫
                    }
                };

                // 寫入狀態與 PWA 本機快取
                setWeather(parsedData);
                const now = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
                setLastUpdated(now);
                localStorage.setItem(`weather_${areaCode}`, JSON.stringify(parsedData));
                localStorage.setItem(`weather_update_${areaCode}`, now);
                setIsOffline(false);

            } catch (error) {
                console.error('天氣更新失敗，載入離線資料', error);
                setIsOffline(true);
            }
        };

        // 網路狀態監聽器
        const handleOnline = () => { setIsOffline(false); fetchJMA(); };
        const handleOffline = () => setIsOffline(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // 初始執行
        if (navigator.onLine) fetchJMA();

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [areaCode]);

    return { weather, isOffline, lastUpdated };
}