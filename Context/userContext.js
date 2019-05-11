import React, { createContext } from 'react';

const userContext = createContext({
  userSession: {},
  userDate: {},
  userName: [],
  userAuth: Boolean,
  newUserSession: () => {},
  loadBlockstackUserData: () => {},
  setUserName: () => {}
});

export default userContext;