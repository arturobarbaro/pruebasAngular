import {Action} from '../ngrx-fake/ngrx'
//Usar el reducer

export const incrementadorAction: Action = {
  type: 'INCREMENTAR'
};
export const decrementadorAction: Action = {
  type: 'DECREMENTAR'
};
export const multiplicadorAction: Action = {
  type: 'MULTIPLICAR',
  payload: 2
};
