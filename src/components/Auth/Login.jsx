import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

  const {handleLogin} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center border-2 border-teal-700 p-12 rounded">
        <form
          onSubmit={submitHandler}
          className="flex items-center flex-col gap-5 justify-center"
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
