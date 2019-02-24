export function reducer(state = {}, action) {
  switch( action.type ) {
    case 'MARK_USER_NAME':
      console.log('MARK_USER_NAME', action)
      return {
        ...state,
        isMarkUserName: action.isMarkUserName
      }
    default:
      return state;
  }
}