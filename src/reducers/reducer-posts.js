import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {

    switch (action.type) {
        case FETCH_POSTS:

        // LONG WAY: action.payload.data.reduce((acc, val) => 
        // Object.assign(acc, {[val['id']] : val}), {})
        
        return  _.mapKeys(action.payload.data, 'id')
    default:
        return state;
    }

}