import { Routes, Route, Link } from 'react-router-dom'

// 匯入各分頁元件 (需自行建立對應的 jsx 檔案並貼入行程內容)
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
      {/* 底部或頂部導覽列 */}
      <nav className="bottom-nav">
        <Link to="/">Day 1</Link>
        <Link to="/day2">Day 2</Link>
        <Link to="/day3">Day 3</Link>
        <Link to="/day4">Day 4</Link>
        <Link to="/day5">Day 5</Link>
        <Link to="/info">資訊</Link>
        <Link to="/budget">預算</Link>
      </nav>

      {/* 路由切換區塊 */}
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