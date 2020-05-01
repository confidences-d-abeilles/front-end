import {
  CREATE_BEEHIVE,
  CREATE_BEEHIVE_FAIL,
  CREATE_BEEHIVE_SUCCESS,
  FETCH_BEEHIVES_SUCCESS
} from './beehives.actions';
import { SUCCESS, WARNING } from '../../../components/alert';

const initialState = {
  beehives: [],
  message: null,
  severity: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEEHIVES_SUCCESS:
      return {
        ...state,
        beehives: action.beehives,
      };
    case CREATE_BEEHIVE:
      return {
        ...state,
        message: null,
      };
    case CREATE_BEEHIVE_FAIL:
      return {
        ...state,
        message: action.message,
        severity: WARNING,
      };
    case CREATE_BEEHIVE_SUCCESS:
      return {
        ...state,
        message: 'La ruche a été créée avec succès',
        severity: SUCCESS,
      };
    default:
      return state;
  }
};


export default reducer;
