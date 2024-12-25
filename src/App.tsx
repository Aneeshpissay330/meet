import { Route, Routes } from 'react-router'
import './App.css'
import Header from './layouts/Header'
import Chats from './pages/Chats'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Host from './pages/Host'
import Join from './pages/Join'

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<Header />}>
        <Route path="/home" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/host" element={<Host />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
