import { timeToString } from '../../utils/helpers';
import { UPDATE_CURRENT_DATA } from '../actions/currentDate.a';

const currentDate = (state = timeToString(), action) => {
  switch (action.type) {
    case UPDATE_CURRENT_DATA:
      return action.currentDate;
    default:
      return state;
  }
};

export default currentDate;
