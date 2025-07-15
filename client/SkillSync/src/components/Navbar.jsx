import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SkillSync</h1>
        <ul className="flex gap-4 text-sm">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/add-log" className="hover:underline">Add Log</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/logout" className="hover:underline">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
