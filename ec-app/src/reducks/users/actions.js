export const SING_IN = "SING_IN";
export const signInAction = (userState) => {
  return {
    type: "SING_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SING_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
    },
  };
};
