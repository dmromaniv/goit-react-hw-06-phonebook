const STORAGE_KEY = 'contacts';

export function getContactsFromLocalStorage() {
  try {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    return serializedData ? JSON.parse(serializedData) : [];
  } catch (error) {
    console.log(error);
  }
}

export function setContactsToLocalStorage(newData) {
  try {
    const serializedData = JSON.stringify(newData);
    localStorage.setItem(STORAGE_KEY, serializedData);
  } catch (error) {
    console.log(error);
  }
}
