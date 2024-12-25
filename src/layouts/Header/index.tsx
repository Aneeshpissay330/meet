import { NavLink, Outlet } from 'react-router';
import './header.css';

const Header = () => {
    return (
        <div style={{ overflow: 'auto' }}>
            <header className="transparent-header">
                <div className="brand">
                    <span className="material-symbols-outlined brand-icon">groups</span>
                    <h2 className="brand-name">Meet</h2>
                </div>
                <nav className="navigation">
                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        <span className="material-symbols-outlined">home</span>
                        Home
                    </NavLink>
                    <NavLink
                        to="/chats"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        <span className="material-symbols-outlined">chat</span>
                        Chats
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        <span className="material-symbols-outlined">settings</span>
                        Settings
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                    >
                        <span className="material-symbols-outlined">account_circle</span>
                        Profile
                    </NavLink>
                </nav>
                <a
                    className="logout-link"
                    style={{ cursor: 'pointer' }}
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </a>
            </header>
            <main className='content'>
                <Outlet />
            </main>
        </div>
    );
};

export default Header;
