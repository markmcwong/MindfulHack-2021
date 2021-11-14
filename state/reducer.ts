import * as actions from "./actions";
import store from "./store";

const initialState = {
  user: { name: null, uid: null, isNewUser: true, isPsych: null },
  fab: { show: false, page: null },
};

export default (state = initialState, action: any) => {
  console.log(state);
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.userName ?? state.user.name,
          uid: action.uid,
          isNewUser: action.isNewUser,
          // isYouth: action.isYouth,
        },
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: { name: null, uid: null, isNewUser: false, isYouth: false },
      };
    case actions.FINISH_ONBOARD:
      return {
        ...state,
        user: { ...state.user, isNewUser: false },
      };
    case actions.HIDE_FAB:
      return {
        ...state,
        fab: {
          show: false,
          page: null,
        },
      };
    case actions.SHOW_FAB:
      return {
        ...state,
        fab: {
          show: true,
          page: action.page,
        },
      };
    case actions.READ_USER_DETAILS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
          isPsych: action.isPsych,
          uid: action.uid ?? state.user.uid,
          isNewUser: action.isNewUser,
        },
      };
    default:
      return state;
  }
};
