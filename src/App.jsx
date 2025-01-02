import { useContext } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmpDashboard from './components/Dashboard/EmpDashboard';
import { AuthContext } from './components/context/AuthProvider';

function App() {
  
  const { user } = useContext(AuthContext); // Access `user` from context

  return (
    <div className="p-3">
      {
        !user ? (
          <Login />
        ) : user.role === 'admin' ? (
          <AdminDashboard />
        ) : (
          <EmpDashboard />
        )
      }
    </div>
  );
}

export default App;
