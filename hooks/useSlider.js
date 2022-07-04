import { useCallback, useEffect, useReducer } from "react";

const moveRight = () => ({
    type: "MOVE_RIGHT"
});

const moveLeft = () => ({
    type: "MOVE_LEFT"
});

const updateState = (payload) => ({
    type: "UPDATE_STATE",
    payload
});

const reducer = (state, action) => {
    switch (action.type) {
        case "MOVE_LEFT":
            return {
                left: state.left + 1,
                right: state.right + 1
            };
        case "MOVE_RIGHT":
            return {
                left: state.left - 1,
                right: state.right - 1
            };
        case "UPDATE_STATE":
            return action.payload;
        default:
            return state;
    }
};

const initialState = (visible, total) => ({
    left: 0,
    right: total > visible ? visible - 1 : total - 1
});

const useSlider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState(props.visible, props.total));

    useEffect(() => {
        dispatch(
            updateState({
                left: 0,
                right: props.total > props.visible ? props.visible - 1 : props.total - 1
            })
        );
    }, [props.visible, props.total]);

    const slideLeft = useCallback(() => {
        dispatch(moveLeft());
    }, [dispatch]);

    const slideRight = useCallback(() => {
        dispatch(moveRight());
    }, [dispatch]);

    return {
        ...state,
        slideLeft: state.right === props.total - 1 ? null : slideLeft,
        slideRight: state.left === 0 ? null : slideRight
    };
};

export default useSlider;
