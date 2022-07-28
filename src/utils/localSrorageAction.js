const LS_KEY = 'savedContacts';

const setToLocalStorage = contacts => {
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

export { setToLocalStorage, getFromLocalStoreage };
