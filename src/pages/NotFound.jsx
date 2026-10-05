import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">Page Not Found</p>
      <Link to="/" className="text-blue-600 underline mt-4 block">Back to Home</Link>
    </div>
  );
}