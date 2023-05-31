import React, { useEffect, useState } from 'react';
import { app } from './Firebase';
import AnimalList from './components/AnimalList';
import Donations from './components/Donations';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      setUser(user);
      setIsAdmin(user && user.uid === 'rXfdGLYV7ANywxZMe7DLyEymIwy1');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    app.auth().signOut();
  };

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      setUser(user);
      setIsAdmin(user && user.uid === 'rXfdGLYV7ANywxZMe7DLyEymIwy1');
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  const handleSelectAnimal = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <div className="app-container">
      <h1>Animal Shelter</h1>
      {user ? (
        <div className="authenticated-content">
          <p className="welcome-message">Welcome, {user.email}!</p>
          {isAdmin && <p className="admin-message">Admin privileges enabled.</p>}
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <AnimalList onSelectAnimal={handleSelectAnimal} />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
