const initialState = {
  comments: []
}
export const comment_reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { comments } = state
  switch (type) {
    case 'addCommet': {
      const newItem = {
        title: payload,
        id: Date.now(),
        completed: false
      }
      const newArr = [...comments, newItem]
      return {
        ...state,
        comments: newArr
      }
    }
    case 'deleteItem' : {
      const removeItem = comments.filter((i) => {
        return i.id !== payload
      })
      return {
        ...state,
        comments: removeItem
      }
    }
    default:
      return state
  }
}