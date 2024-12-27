import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <Link to="/main" className="text-xl font-bold text-gray-800">
                AI Summarizer
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/main"
                className="py-2 px-3 text-gray-700 hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                to="/saved-summaries"
                className="py-2 px-3 text-gray-700 hover:text-indigo-600"
              >
                Saved Summaries
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
