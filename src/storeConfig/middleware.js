const logger = (store) => (next) => (action) => {
  console.debug('dispatching', action);
  const result = next(action);
  console.debug('next state', store.getState());

  return result;
};


export default logger;
