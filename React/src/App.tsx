import { Routes, Route } from 'react-router-dom' 
import StudentList from './components/Screens/StudentList'
import Home from './components/Screens/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-list" element={<StudentList />} />
    </Routes>
  )
}

export default App
