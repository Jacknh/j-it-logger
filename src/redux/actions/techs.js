export const fetchTechs = () => async dispatch => {
  const res = await fetch('/techs')
  const data = await res.json()

  dispatch({type: 'SET_TECHS', payload: data})
}

export const addTech = tech => async dispatch => {
  const res = await fetch('/techs', {
    method: 'post',
    body: JSON.stringify(tech),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()

  dispatch({type: 'ADD_TECH', payload: data})
}

export const deleteTech = id => async dispatch => {
  await fetch(`/techs/${id}`, { method: 'delete' })

  dispatch({type: 'DELETE_TECH', payload: id})
}