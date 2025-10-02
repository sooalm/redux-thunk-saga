export const logger = (store) => (next) => (action) => {
  console.log("###LOGGER### Dispatching action:", action);
  console.log("###LOGGER###  Before:", store.getState());
  const result = next(action);
  console.log("###LOGGER###  After:", store.getState());
  return result;
};
