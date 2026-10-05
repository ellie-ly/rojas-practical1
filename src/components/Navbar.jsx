import { NavLink } from 'react-router-dom';

export default function Navbar({ favoriteCount, darkMode, setDarkMode }) {
  const linkClass = ({ isActive }) => 
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-blue-600 text-white font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex space-x-4">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/users" className={linkClass}>Users</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full">
            Favorites: {favoriteCount}
          </span>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-sm dark:text-white">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}