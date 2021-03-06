import * as actionTypes from "./actionTypes";
import { loadData, saveData } from "../../Utils/localStorage";
const isAuth = loadData("auth") || false;
const token = loadData("token") || {};

const initState = {
  isAuth: isAuth,
  token:token,
  isLoggedIn: false,
  currentCustomer: "",
  error: false,
  isLoading: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      saveData("auth", true)
      saveData("token", action.payload)
      return {
        ...state,
        isLoggedIn: true,
        currentCustomer: {
          name: action.payload.name,
          googleId: action.payload.googleId,
          email: action.payload.email,
          profilePicture: action.payload.imageUrl,
        },
        error: false,
        isAuth:true
      };

    case actionTypes.LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, error: true };

    case actionTypes.LOGOUT:
      saveData("auth", false)
      saveData("token", {})
      return { ...state, isLoggedIn: false,isAuth:false,currentCustomer: "" };

    case actionTypes.ADD_CUSTOMER_MONGO_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.ADD_CUSTOMER_MONGO_SUCCESS:

      if (Array.isArray(action.payload)) {
        return state;
      }
      return {
        ...state,
        isLoading: false,
        error: false,
        currentCustomer: { ...state.currentCustomer, _id: action.payload },
      };
    case actionTypes.ADD_CUSTOMER_MONGO_FAILURE:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};
export { authReducer };
