import { useState, useEffect } from 'react';
import { usersData } from '../data/users';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export default function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!loading) {
      document.title = `Users (${filteredUsers.length}) - Team Directory`;
    }
  }, [filteredUsers.length, loading]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team Members</h1>
        <input 
          type="text"
          placeholder="Search user by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full md:w-80 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}