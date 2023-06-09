import { createStore } from 'redux';

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

// Create the Redux store
const store = createStore(formReducer);

export default store;
