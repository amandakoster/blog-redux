import lodash from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
        console.log(action.payload.data);

        // LONG WAY: action.payload.data.reduce((acc, val) => 
        // Object.assign(acc, {[val['id']] : val}), {})
        
        return  _.mapKeys(action.payload.data, 'id')

        default:
        return state;
    }

}