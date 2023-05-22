import React, { useState, useEffect } from 'react';
import { loadItems, addItem, deleteItem, updateItem } from '../components/api';

function Inventario() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editedItemIndex, setEditedItemIndex] = useState(null);
  const [editedItemName, setEditedItemName] = useState('');

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const loadedItems = await loadItems();
      setItems(loadedItems);
    } catch (error) {
      console.error('Error al cargar los items:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await addItem(newItem);
      setItems([...items, newItem]);
      setNewItem('');
    } catch (error) {
      console.error('Error al agregar el item:', error);
    }
  };

  const handleDeleteItem = async (index) => {
    try {
      const updatedItems = await deleteItem(index, items);
      setItems(updatedItems);
    } catch (error) {
      console.error('Error al eliminar el item:', error);
    }
  };

  const handleEditItem = (index) => {
    const itemName = items[index];
    setEditedItemIndex(index);
    setEditedItemName(itemName);
  };

  const handleUpdateItem = async () => {
    try {
      const updatedItems = await updateItem(editedItemIndex, editedItemName, items);
      setItems(updatedItems);
      setEditedItemIndex(null);
      setEditedItemName('');
    } catch (error) {
      console.error('Error al actualizar el item:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditedItemIndex(null);
    setEditedItemName('');
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Inventario de Items</h1>
      <div className="flex mb-4">
        <input
          className="flex-grow mr-2 border border-gray-300 p-2 rounded"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Nuevo item"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddItem}
        >
          Agregar
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            {editedItemIndex === index ? (
              <input
                className="flex-grow mr-2 border border-gray-300 p-2 rounded"
                type="text"
                value={editedItemName}
                onChange={(e) => setEditedItemName(e.target.value)}
              />
            ) : (
              <span>{item}</span>
            )}
            {editedItemIndex === index ? (
              <div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={handleUpdateItem}
                >
                  Guardar
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                  onClick={handleCancelEdit}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleEditItem(index)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteItem(index)}
                >
                  Eliminar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventario;
