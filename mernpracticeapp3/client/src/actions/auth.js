import { AUTH } from '../constants/actionTypes'
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
    try {
       // Login User

       history.push('/');
    } catch(err) {
        console.log(err)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
       // Signup User

       history.push('/');
    } catch(err) {
        console.log(err)
    }
}