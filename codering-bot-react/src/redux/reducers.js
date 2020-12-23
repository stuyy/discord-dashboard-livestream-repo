import * as actions from './actions';

const initialState = {
  details: {}
};

export default function userDetails( state = initialState, action ) {
  switch ( action.type ) {
    case actions.USER_DETAILS_FETCHING:
      return state;
    case actions.USER_DETAILS_SUCCESS:
      return state;
    default:
      return state;
  }
}