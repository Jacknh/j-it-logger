const fetchLogs = () => async (dispatch) => {
  dispatch({type: 'SET_LOADING'})
  const res = await fetch('/logs')
  const data = await res.json();

  dispatch({type: 'SET_LOGS', payload: data});
  dispatch({ type: "CLEAR_LOADING" });

}

const addLog = (log) => async dispatch => {
  const res = await fetch('/logs', {
    method: 'post',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json();

  dispatch({type: 'ADD_LOG', payload: data})
}

const deleteLog = id => async dispatch => {
  await fetch(`/logs/${id}`, {
    method: 'delete'
  })

  dispatch({type: 'DELETE_LOG', payload: id})
}

const updateLog = log => async dispatch => {
  await fetch(`/logs/${log.id}`, {
    method: 'put',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  dispatch({type: 'UPDATE_LOG', payload: log})
}

const setCurrent = (current) => ({type: 'SET_CURRENT', payload: current})

const clearCurrent = () => ({type: 'CLEAR_CURRENT'})

export {
  fetchLogs,
  addLog,
  deleteLog,
  updateLog,
  setCurrent,
  clearCurrent
}