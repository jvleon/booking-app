import {
  SET_TO_CART,
  CLEAN_CART,
  REMOVE_FROM_CART,
  SEARCH_SUCCESS,
  SET_INFO
} from '../actions/actionTypes'

const initialState = {
  orders: [],
  search: [],
  personalInfo: {
    name: null,
    lastName: null,
    address: null,
    email: null
  }
}

const Cart = (state = initialState, { type, payload }) => {
  switch(type) {
    case SET_TO_CART:
      const { orders } = state
      const newOrders = [...orders, payload]
      return {
        ...state,
        orders: newOrders,
        search: []
      }
    case CLEAN_CART:
      const cleanedCart = state.orders.filter(({ id }) => id !== payload)
      return {
        ...state,
        orders: [...cleanedCart],
        search: [],
        personalInfo: {
          name: null,
          lastName: null,
          address: null,
          email: null
        }
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
    case SET_INFO:
      return {
        ...state,
        personalInfo: { ...payload }
      }
    default:
      return {
        ...state
      }
  }
}

export default Cart
