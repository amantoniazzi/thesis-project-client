interface User {
  name: string
  surname: string
  email: number
}

interface RgisterUserAction {
  type: string
  payload: User
}

const initialState = {
  name: "",
  surname: "",
  email: "",
};

export default function (state = initialState, action: RgisterUserAction) {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
}