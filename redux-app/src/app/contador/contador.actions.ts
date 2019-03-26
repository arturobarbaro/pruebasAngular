import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';

export class IncrementarAction implements Action {
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
  readonly type = MULTIPLICAR;
}

// export class Reset implements Action {
//   readonly type = ActionTypes.Reset;
// }
