import { LOGIN, ADD_EXPENSE, DEL_EXPENSE } from '../actions';

const INITIAL_STATE = {
  email: '',
  totalExpense: 0,
};

const userLogin = (state = INITIAL_STATE, action) => {
  const expenseValue = (actionHandler) => Number(actionHandler.payload.value)
  * Object.values(actionHandler.payload.exchangeRates).find(
    (rate) => rate.code === actionHandler.payload.currency,
  ).ask;

  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.payload };

  case ADD_EXPENSE:
    return { ...state, totalExpense: state.totalExpense + expenseValue(action) };

  case DEL_EXPENSE:
    return { ...state, totalExpense: state.totalExpense - expenseValue(action) };

  default:
    return state;
  }
};

export default userLogin;
