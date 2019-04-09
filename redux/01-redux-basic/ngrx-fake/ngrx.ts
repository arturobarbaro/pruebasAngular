// Acciones
export interface Action {
  type: string;
  payload?: number;
}

export interface Reducer<T> {
  (state: T, action): T
}
