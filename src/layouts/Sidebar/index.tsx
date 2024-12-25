import { NavLink, Outlet } from "react-router"
import './sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar-header">
                    <span className="material-symbols-outlined">groups</span>
                    <h2>Meet</h2>
                </div>
                <hr className="divider" />
                <ul className="menu">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <span className="material-symbols-outlined">home</span>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/video-call"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <span className="material-symbols-outlined">video_call</span>
                            Video Call
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/chats"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <span className="material-symbols-outlined">chat</span>
                            Chat
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <span className="material-symbols-outlined">person</span>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <span className="material-symbols-outlined">settings</span>
                            Settings
                        </NavLink>
                    </li>
                </ul>
                <ul className="logout">
                    <li>
                        <NavLink
                            to="/logout"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <span className="material-symbols-outlined">logout</span>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
            <main className="sidebar-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Sidebar