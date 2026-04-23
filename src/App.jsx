import { Routes, Route, Link } from 'react-router-dom'

// 匯入各分頁元件 (需自行建立對應的 jsx 檔案並貼入行程內容)
import Day1 from './pages/Day1'
import Day2 from './pages/Day2'
import Day3 from './pages/Day3'
import Day4 from './pages/Day4'
import Day5 from './pages/Day5'
import Info from './pages/Info'
import Budget from './pages/Budget'

// ...前方的 import 省略

function App() {
  return (
    {/* 1. 最外層必須是 app-container */ }
    < div className = "app-container" >

      {/* 2. 導航列必須在裡面，且 className 是 bottom-nav */ }
      < nav className = "bottom-nav" >
        <Link to="/">Day 1</Link>
        <Link to="/day3">Day 3</Link>
  {/* ... 其他連結 */ }
      </nav >

    {/* 3. 內容區塊 */ }
    < main className = "content" >
      <Routes>
        <Route path="/" element={<Day1 />} />
        <Route path="/day3" element={<Day3 />} />
        {/* ... 其他路由 */}
      </Routes>
      </main >
      
    </div >
  )
}

export default App