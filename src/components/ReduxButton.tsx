import * as React from "react";
import * as Redux from "react-redux";
import { GlobalState } from "../reducer/globalReducer";
type ButtonProps = {
  clicks: number;
};

type DispatchProps = {
  increment?: () => void;
  decrement?: () => void;
  setValue?: (nb: string) => void;
};

class ReduxButton extends React.Component<ButtonProps & DispatchProps, any> {
  render(): JSX.Element {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <button onClick={this.props.decrement && this.props.decrement}>
          -
        </button>
        <input
          value={this.props.clicks}
          onChange={(e) =>
            this.props.setValue && this.props.setValue(e.target.value)
          }
        />
        <button onClick={this.props.increment && this.props.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Redux.connect(
  (state: GlobalState): ButtonProps => ({
    clicks: state && state.clicks,
  }),
  (dispatch): DispatchProps => ({
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    },
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    setValue: (nb: string) => {
      if (nb) {
        dispatch({ type: "SETVALUE", payload: parseInt(nb) });
      }
    },
  }),
)(ReduxButton);
