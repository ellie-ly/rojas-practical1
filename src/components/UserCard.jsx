import { Link } from 'react-router-dom';
import Button from './Button';

export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h3>
          <button onClick={() => onToggleFavorite(user.id)} className="text-sm px-2 py-1 border rounded focus:outline-none">
            {isFavorite ? "Favorited" : "Favorite"}
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{user.role} at <span className="font-semibold">{user.company}</span></p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Email: {user.email}</p>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <Link to={`/users/${user.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
        <Button 
          variant={isFavorite ? "danger" : "primary"} 
          onClick={() => onToggleFavorite(user.id)}
        >
          {isFavorite ? "Remove" : "Add"}
        </Button>
      </div>
    </div>
  );
}