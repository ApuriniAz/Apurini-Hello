import {
  login
} from "../../data/user";

export async function loginUser(dispatch, loginPayload) {
  const {
    userName,
    password
  } = loginPayload;

  try {
    dispatch({
      type: 'REQUEST_LOGIN'
    });
    const data = await login(userName, password);
    console.log(data)
    if (data.user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data
      });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }

    dispatch({
      type: 'LOGIN_ERROR',
      error: data.errors[0]
    });
    return;

  } catch (error) {
    dispatch({
      type: 'LOGIN_ERROR',
      error: error
    });
  }
}

export async function logout(dispatch) {
  dispatch({
    type: 'LOGOUT'
  });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}