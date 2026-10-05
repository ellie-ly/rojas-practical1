import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usersData } from '../data/users';

export default function UserDetail() {
  const { id } = useParams();
  const user = usersData.find(u => u.id === parseInt(id));

  useEffect(() => {
    if (user) {
      document.title = `${user.name} - Team Directory`;
    } else {
      document.title = `User Not Found`;
    }
  }, [user]);

  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600 mb-4">User not found.</h2>
        <Link to="/users" className="text-blue-600 hover:underline">Back to Users page</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4 bg-white dark:bg-gray-800 shadow rounded-lg mt-8 border border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{user.name}</h1>
      <p className="text-lg text-blue-600 mb-6">{user.role} at {user.company}</p>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <div className="mt-6">
        <Link to="/users" className="text-blue-600 hover:underline">Back to Users page</Link>
      </div>
    </div>
  );
}