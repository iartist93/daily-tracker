const logger = (store) => (next) => (action) => {
  console.group(`${action.type}`);
  console.log('Looger ', action.type);
  next(action);
  console.log('Logger ', store.getState());
  console.groupEnd();
};

export default logger;
