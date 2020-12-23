const initialState = {
  user: {
    
  }
}

export default function reducer( state = initialState, action ) {
  console.log( state );
  console.log( action );
  switch ( action.type ) {
    case "SET_USER":
      console.log( action.user );
      return {
        user: action.user.data
      };
    default:
      return state;
  }
  return state;
}