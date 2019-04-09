import {Action} from './ngrx-fake/ngrx'
import {incrementadorAction} from './contador/contador.actions'

function reducer( state = 10, action: Action ) {
  switch ( action.type ) {
    case 'INCREMENTAR':
    return state +=1;

    case 'DECREMENTAR':
    return state +=1;

    case 'MULTIPLICAR':
    return state * action.payload;

    default:
    return state;
  }
}

console.log(reducer(10,incrementadorAction));
