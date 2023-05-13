import { Handlers } from '../types';

import { SET_ERROR, SET_LOADING, SET_USERS } from './constants';
import { Actions, State, User } from './types';

const handlers: Handlers<State, Actions> = {
  [SET_ERROR]: (state) => ({ ...state, error: 'error' }),
  [SET_LOADING]: (state) => ({ ...state, isLoading: !state.isLoading }),
  [SET_USERS]: (state, { payload }) => ({ ...state, data: payload as User[] }),
  default: (state) => state,
};

const reducer = (state: State, action: Actions): State => {
  const handler = handlers[action.type] || handlers.default;

  return handler(state, action);
};

export default reducer;
