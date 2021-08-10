import {
  REQUEST_API,
  SUCCESS_REQUEST,
  ADD_EXPENSE,
  DEL_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  loading: false,
};

const currencies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };

  case SUCCESS_REQUEST:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.payload.id)],
    };
  default:
    return state;
  }
};

export default currencies;
