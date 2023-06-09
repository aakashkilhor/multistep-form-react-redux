import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// Define the initial state of the form
const initialState = {
  step: 1,
  formData: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    floorHouseNo: '',
    area: '',
    district: '',
    state: '',
    pincode: '',
    about: '',
  },
};

// Define the reducer function
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'PREVIOUS_STEP':
      return {
        ...state,
        step: state.step - 1,
      };
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Middleware to save the Redux state to local storage
const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action); // Call the next middleware or reducer

  // Save the state to local storage
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));

  return result;
};

// Load state from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Create the Redux store with the middleware and initial state
const store = createStore(
  formReducer,
  loadFromLocalStorage(),
  applyMiddleware(saveToLocalStorage)
);

export default store;

