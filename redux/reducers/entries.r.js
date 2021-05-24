import { ADD_ENTRY, RECIEVE_ENTIRES, REMOVE_ENTRY } from '../actions/entries.a';

const entries = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_ENTIRES:
      return { ...state, ...action.entries };
    case ADD_ENTRY:
      return { ...state, ...action.entry };
    case REMOVE_ENTRY: {
      const newState = { ...state };
      newState[action.key] = undefined;
      delete newState[action.key];
      console.log('Reducer ', newState);
      return newState;
    }
    default:
      return state;
  }
};

export default entries;
