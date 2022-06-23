export const loadState = name => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return false;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return false;
  }
};

export const saveState = (name, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (err) {}
};

export const removeState = name => localStorage.removeItem(name);
