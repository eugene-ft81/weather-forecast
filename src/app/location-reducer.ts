import { Action } from '@ngrx/store';

export const initialState = {
    location: undefined,
    currentLocation: undefined
};
export const SET_LOCATION = 'SET_LOCATION';
export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';

export function locationReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LOCATION:
            return { location: action.payload, currentLocation: undefined };
        case SET_CURRENT_LOCATION:
            return { location: undefined, currentLocation: action.payload };
        default:
            return state;
    }
}
