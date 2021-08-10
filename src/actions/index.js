export const LOGIN = 'LOGIN';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const login = (email) => ({
  type: LOGIN, payload: email,
});

export function requestAPI() {
  return {
    type: REQUEST_API,
  };
}

export function getAPI(data) {
  return {
    type: SUCCESS_REQUEST,
    payload: data,
  };
}

export function addExpenseToStore(expense) {
  return {
    type: ADD_EXPENSE,
    payload: expense,
  };
}

export function deleteExpenseFromStore(expense) {
  return {
    type: DEL_EXPENSE,
    payload: expense,
  };
}

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(API_URL)
      .then((response) => response.json())
      .then((json) => (json))
      .then((data) => dispatch(getAPI(data)));
  };
}
