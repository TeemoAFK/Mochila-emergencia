import {db} from '../firebase/firebase';


export async function loadItems() {
  try {
    const querySnapshot = await db.collection('items').get();
    const loadedItems = querySnapshot.docs.map((doc) => doc.data().name);
    return loadedItems;
  } catch (error) {
    console.error('Error al cargar los items:', error);
    throw error;
  }
}

export async function addItem(newItem) {
  try {
    await db.collection('items').add({
      name: newItem
    });
  } catch (error) {
    console.error('Error al agregar el item:', error);
    throw error;
  }
}

export async function updateItem(index, updatedName, items) {
  try {
    const itemName = items[index];
    const querySnapshot = await db.collection('items').where('name', '==', itemName).get();
    querySnapshot.forEach((doc) => {
      doc.ref.update({ name: updatedName });
    });
    const updatedItems = [...items];
    updatedItems[index] = updatedName;
    return updatedItems;
  } catch (error) {
    console.error('Error al actualizar el item:', error);
    throw error;
  }
}

export async function deleteItem(index, items) {
  try {
    const itemName = items[index];
    const querySnapshot = await db.collection('items').where('name', '==', itemName).get();
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    return updatedItems;
  } catch (error) {
    console.error('Error al eliminar el item:', error);
    throw error;
  }
}
