const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    case 'SIGN_IN':
      return { ...state, user: action.payload };
    case 'SIGN_OUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
