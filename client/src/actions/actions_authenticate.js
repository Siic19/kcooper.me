
import * as types from './actionTypes';

// import axios from "axios";
// import setAuthorizationToken from "../utils/setAuthorizationToken";
// import jwt from "jsonwebtoken";
// import { loginInvalidUserError, loginPasswordError } from "./actions_errors";

export default function authenticateUser(values) {
  return {
    type: types.SET_CURRENT_USER,
    values,
  };
}

// export function logout() {
//   return dispatch => {
//     localStorage.removeItem('jwtToken');
//     setAuthorizationToken(false);
//     dispatch(setCurrentUser({}));
//   }
// }


// export function authenticateUser(auth) {
//   let config = {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: `email=${auth.email}&password=${auth.password}`
//   };

//   return dispatch => {
//     return fetch("http://localhost:3001/users", config)
//       .then(handleErrors)
//       .then(response => response.json())
//       .then(json => {

//         localStorage.setItem("jwtToken", json.token);
//         setAuthorizationToken(json.token);
//         dispatch(setCurrentUser(jwt.decode(json.token)));
//       })
//       .catch(error => {
//       if (error.status === 401) {
//         dispatch(loginPasswordError(true));
//       } else if (error.status === 402) {
//         dispatch(loginInvalidUserError(true));
//       }
//       });
//   };
// }
