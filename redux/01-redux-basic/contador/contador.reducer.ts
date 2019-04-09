import {Action} from '../ngrx-fake/ngrx'

function contadorReducer( state = 10, action: Action ) {
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
