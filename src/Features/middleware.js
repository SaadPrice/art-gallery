// features/middleware.js
const loggerMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    
    console.log('Dispatching:', action);
    console.log('State before:', store.getState());
    const result = next(action);
    console.log('State after:', store.getState());
    return result;
  };
  
  export default loggerMiddleware;
  