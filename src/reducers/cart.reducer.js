import {
  SET_TO_CART,
  CLEAN_CART,
  REMOVE_FROM_CART,
  SEARCH_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  orders: {},
  search: []
}

const Cart = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_TO_CART:
      return {
        ...state,
        orders: { ...payload },
        search: []
      }
    case CLEAN_CART:
      return {
        ...state,
        orders: {}
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        orders: { ...payload }
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        search: [...payload]
      }
    default:
      return {
        ...state
      }
  }
}

export default Cart
