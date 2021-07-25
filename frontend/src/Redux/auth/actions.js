import * as actionTypes from "./actionTypes";
import axios from "axios";
const loginSuccess = (response) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: response.profileObj,
  };
};

const loginFailure = (response) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: response.error,
  };
};

const logout = () => {
  console.log("ajmal")
  return {
    type: actionTypes.LOGOUT,
  };
};

const addCustomerMongoRequest = () => {
  return {
    type: actionTypes.ADD_CUSTOMER_MONGO_REQUEST,
  };
};
const addCustomerMongoSuccess = (id) => {
  return {
    type: actionTypes.ADD_CUSTOMER_MONGO_SUCCESS,
    payload: id,
  };
};
const addCustomerMongoFailure = () => {
  return {
    type: actionTypes.ADD_CUSTOMER_MONGO_FAILURE,
  };
};

const addCustomerMongo = (profileObj) => {
  console.log(profileObj.name)
  console.log(profileObj.email)
  return async (dispatch) => {
    dispatch(addCustomerMongoRequest());
    try {
      let customer = {
        name: profileObj.name,
        email: profileObj.email,
        googleId: profileObj.googleId,
        profilePicture: profileObj.imageUrl,
      };
      const res = await axios.post(
        "http://localhost:8000/v1/api/users",
        customer
      );
      console.log("response from db: ", res);
      dispatch(addCustomerMongoSuccess(res.data._id.toString()));
    } catch (err) {
      console.log("error", err);
      dispatch(addCustomerMongoFailure());
    }
  };
};
export { loginSuccess, loginFailure, logout, addCustomerMongo };
