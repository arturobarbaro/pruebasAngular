import {Reducer} from './ngrx-fake/ngrx';
import {contadorReducer} from '../contador/contador.reducer';

class Store<T> {
  private state: T;

  constructor(
    private reducer: Reducer<T>,
    state: T
  ) { }

  getState() {
    return this.state;
  }
}

const store = new Store(contadorReducer, 10);
