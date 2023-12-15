import { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

// Create a context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    authenticate();
  }, []);

  const logout = () => {
    Cookies.remove('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  const authenticate = async () => {
    const token = Cookies.get('authToken');
    if (token) {
      const response = await axios.get('http://localhost:8000/api/user/userdata', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      setIsAuthenticated(true);
    }
    setAuthenticating(false);
  };
  
  // ...
  
  const login = async (credentials) => {
    const response = await axios.post('http://localhost:8000/api/login', credentials);
    const { token } = response.data;
    Cookies.set('authToken', token);
    await authenticate();
  };

  if (authenticating) {
    return <div>Loading....</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);