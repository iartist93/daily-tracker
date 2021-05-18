const logger = (store) => (next) => (action) => {
  console.log(action.type);
  next(action);
  console.log(store.getState());
};

export default logger;
