export const logger = (store) => (next) => (action) => {
console.log('Dispatching action:', action);
console.log('Before:', store.getState());
const result = next(action);
console.log('After:', store.getState());
return result;
}