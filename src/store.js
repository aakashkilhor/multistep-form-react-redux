import { createStore } from 'redux';

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
const allReducers = (state = initialState, action) => {
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
const loadFromLocalStorage = () => {
  try {
    const storedData = localStorage.getItem('reduxState');
    if (storedData === null) {
      return undefined;
    }
    return JSON.parse(storedData);
  } catch (error) {
    return undefined;
  }
};
const store = createStore(
  allReducers,
  loadFromLocalStorage(),
);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

