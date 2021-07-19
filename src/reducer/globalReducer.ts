import { action } from "../type";

export type GlobalState = {
  clicks: number;
};

const initialState: GlobalState = {
  clicks: 0,
};

const globalReducer = function (
  state: GlobalState = initialState,
  action: action,
): any {
  if (action.type == "DECREMENT") {
    return { ...state, clicks: state.clicks && state.clicks - 1 };
  }

  if (action.type == "INCREMENT") {
    return { ...state, clicks: state.clicks && state.clicks + 1 };
  }

  if (action.type == "SETVALUE") {
    return { ...state, clicks: action.payload };
  }

  return state;
};

export default globalReducer;
