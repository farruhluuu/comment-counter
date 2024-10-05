
const initialState = {
  count: 1
}

export const count_reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'increament' : {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'decrement' : {
      return {
        ...state,
        count: state.count - 1 
      }
    }
    case 'cleare' : {
      return {
        ...state,
        count: 1
      }
    }

    default : 
      return state
  }

}