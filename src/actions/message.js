import {SET_MESSAGE} from '../types/message';

export const setMessage = (message) => {
    return dispatch => {
        const setMessageAction = {
            type:SET_MESSAGE,
            payload: {
                  message
                }
         }
         dispatch(setMessageAction)
    }
}