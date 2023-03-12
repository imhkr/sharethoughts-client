import { ACTION_TYPES } from "../redux/actions/postMessage";
const intialState = {
  list: [],
  currentId: 0,
};
export const postMessage = (state = intialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state, // keep other info without any change
        list: [...action.payload],
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.list.map((x) =>
          x._id == action.payload._id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        list: state.list.filter((x) => x._id != action.payload),
      };
    case ACTION_TYPES.SET_CURRENTID:
      return {
        ...state,
        currentId: action.payload,
      };

    default:
      return state;
  }
};
