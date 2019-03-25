// Dummy flux store
const createStore = initialState => {
  let listeners = [];
  let state = initialState;

  const addChangeListener = listener => listeners.push(listener);

  const removeChangeListener = listener =>
    (listeners = listeners.filter(l => l !== listener));

  const getState = () => state;

  return { addChangeListener, removeChangeListener, getState };
};

export default createStore;
