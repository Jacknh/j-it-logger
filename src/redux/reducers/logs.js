const initialState = {
  logs: [],
  loading: false,
  current: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_LOADING":
      return {
        ...state,
        loading: false,
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: action.payload
      }
    case 'CLEAR_CURRENT':
      return {
        ...state,
        current: null
      }
    case "ADD_LOG":
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };
    case "DELETE_LOG":
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
      }
    case 'UPDATE_LOG':
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
      }
    case "SET_LOGS":
      return {
        ...state,
        logs: action.payload,
      };
    default:
      return state;
  }
}