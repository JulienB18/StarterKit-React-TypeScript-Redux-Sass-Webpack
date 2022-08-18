import * as React from "react";
import * as Redux from "react-redux";
import { GlobalState } from "../reducer/globalReducer";

type ButtonProps = {
    clicks: number;
};

type DispatchProps = {
    increment: () => void;
    decrement: () => void;
    setValue: (nb: string) => void;
};

class ReduxButton extends React.PureComponent<ButtonProps & DispatchProps, any> {
    render(): JSX.Element {
        const { increment, decrement, setValue } = this.props;
        const { clicks } = this.props;

        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "16px",
                }}
            >
                <button
                    type="button"
                    onClick={() => {
                        decrement();
                    }}
                >
                    -
                </button>
                <input value={clicks} onChange={(e) => setValue(e.target.value)} />
                <button type="button" onClick={() => increment()}>
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
                dispatch({ type: "SETVALUE", payload: parseInt(nb, 10) });
            }
        },
    }),
)(ReduxButton);
