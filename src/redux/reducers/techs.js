const initialState = {
  techs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TECHS':
      return {
        ...state,
        techs: action.payload
      }
    case 'ADD_TECH':
      return {
        ...state,
        techs: [...state.techs, action.payload]
      }
    case 'DELETE_TECH':
      return {
        ...state,
        techs: state.techs.filter(t => t.id !== action.payload)
      }
    default:
      return state;
  }
}