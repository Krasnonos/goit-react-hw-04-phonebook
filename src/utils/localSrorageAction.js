const LS_KEY = 'saveContacts';

const addToLoacalStorage = contacts => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

const getFromLocalStoreage = () => {
  try {
    const contacts = localStorage.getItem(LS_KEY);
    if (contacts) {
      return JSON.parse(contacts);
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

const removeFromLocalStorage = contacts => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

export { addToLoacalStorage, getFromLocalStoreage, removeFromLocalStorage };
