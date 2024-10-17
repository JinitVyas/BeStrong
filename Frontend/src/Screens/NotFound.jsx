import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-600">
          The page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-md 
          hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
