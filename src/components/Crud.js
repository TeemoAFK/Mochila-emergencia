import React, { useState, useEffect } from 'react';
import { auth, database } from '../firebase/firebase';

const Crud = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchData(currentUser.uid);
      } else {
        setUser(null);
        setData([]);
      }
    });
  }, []);

  const fetchData = async (userId) => {
    const snapshot = await database.ref(`/items/${userId}`).once('value');
    const items = snapshot.val();
    if (items) {
      setData(Object.values(items));
    }
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = async () => {
    const newItemRef = database.ref(`/items/${user.uid}`).push();
    await newItemRef.set(newItem);
    setData([...data, newItem]);
    setNewItem('');
  };

  const handleDeleteItem = async (itemId) => {
    await database.ref(`/items/${user.uid}/${itemId}`).remove();
    const updatedData = data.filter((item) => item !== itemId);
    setData(updatedData);
  };

  return (
    <div>
      <h1>CRUD con React y Firebase</h1>
      <p>Bienvenido, {user.email}!</p>
      <button onClick={onLogout}>Cerrar sesión</button>
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Agregar</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
