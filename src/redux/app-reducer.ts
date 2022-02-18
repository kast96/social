import { getAuthUserData } from "./auth-reducer";
import { BaseThunkType, InferActionsType } from "./redux-store";

const INITIALIZED_SUCCESS = 'social/app/INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS}) as const
}

type ThunkType = BaseThunkType<ActionsType>

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
}

export default appReducer;