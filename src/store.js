const loggerMiddleware = (storeAPI) => (next) => (action) => {
    try {
      return next(action);
    } catch (err) {
      console.error('Redux error:', err);
      throw err;
    }
  };
  
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
  