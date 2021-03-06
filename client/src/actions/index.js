import axios from 'axios';
import {FETCH_USER} from './types';
import fromJS from 'immutable';


export const fetchUser = ()=> async dispatch =>{
    const res = await axios.get('/api/current_user/');
    dispatch({type:FETCH_USER, payload: fromJS(res.data)});
};