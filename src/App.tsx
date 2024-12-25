import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/Login'
import Sidebar from './layouts/Sidebar'
import Home from './pages/Home'
import VideoCall from './pages/VideoCall'
import Chats from './pages/Chats'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<Sidebar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
