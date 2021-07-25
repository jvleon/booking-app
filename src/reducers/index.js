import { GET_CITIES } from '../actions/actionTypes'

const initialState = {
  cities: [],
}

const Cities = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: [...payload]
      }
    default:
      return state
  }
}

export default Cities
