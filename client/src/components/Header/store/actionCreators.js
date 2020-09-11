import axios from 'axios';
import { actionConstants } from './';
import { fromJS } from 'immutable';

const setFetchUser = (data) =>({
    type:actionConstants.FETCH_USER, 
    payload: fromJS(data)
});

export const fetchUser = ()=> async dispatch =>{
    const res = await axios.get('/api/current_user/');
    dispatch(setFetchUser(res.data));
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch(setFetchUser(res.data));
}