export const LOGIN = "LOGIN";

export const HIDE_FAB = "HIDE_FAB";

export const SHOW_FAB = "SHOW_FAB";

export const LOGOUT = "LOGOUT";

export const LOAD_LOGGED_IN = "LOAD_LOGGED_IN";

export const READ_USER_DETAILS = "READ_USER_DETAILS";

export const FINISH_ONBOARD = "FINISH_ONBOARD";

export const loginAction = (name: string, uid: string, isNewUser: boolean) => ({
  type: LOGIN,
  payload: { userName: name, uid: uid, isNewUser: isNewUser ?? false },
});

export const logoutAction = () => ({
  type: LOGOUT,
});

// export const loadLoggedInUser = (name: string, uid: string) => ({
//   type: LOAD_LOGGED_IN,
//   payload: { userName: name, uid: uid },
// });

export const finishOnboard = () => ({
  type: FINISH_ONBOARD,
});

export const showFab = (page: string) => ({
  type: SHOW_FAB,
  payload: { page },
});

export const hideFab = () => ({
  type: HIDE_FAB,
});

export const readUserDetails = (
  name: number,
  isPsych: boolean,
  uid: string
) => ({
  type: READ_USER_DETAILS,
  payload: { name, isPsych, uid },
});
