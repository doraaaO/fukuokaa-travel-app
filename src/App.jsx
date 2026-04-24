import { Routes, Route, NavLink } from 'react-router-dom';

// 匯入各分頁元件
import Day1 from './pages/Day1'
import Day2 from './pages/Day2'
import Day3 from './pages/Day3'
import Day4 from './pages/Day4'
import Day5 from './pages/Day5'
import Info from './pages/Info'
import Budget from './pages/Budget'

function App() {
  return (
    <div className="app-container">
      <nav className="bottom-nav">
        <NavLink to="/" end>🗓️ <span>Day 1</span></NavLink>
        <NavLink to="/day2">🚗 <span>Day 2</span></NavLink>
        <NavLink to="/day3">⛩️ <span>Day 3</span></NavLink>
        <NavLink to="/day4">🛍️ <span>Day 4</span></NavLink>
        <NavLink to="/day5">✈️ <span>Day 5</span></NavLink>
        <NavLink to="/info">ℹ️ <span>資訊</span></NavLink>
        <NavLink to="/budget">💰 <span>預算</span></NavLink>
      </nav>

      {/* 內容區塊 */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day4" element={<Day4 />} />
          <Route path="/day5" element={<Day5 />} />
          <Route path="/info" element={<Info />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </main>
    </div>
  )
}

export default App