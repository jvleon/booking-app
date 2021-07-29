import {
  SET_TO_CART,
  CLEAN_CART,
  REMOVE_FROM_CART,
  SEARCH_SUCCESS,
  SET_INFO
} from '../actions/actionTypes'

const initialState = {
  orders: {},
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
      return {
        ...state,
        orders: { ...payload },
        search: []
      }
    case CLEAN_CART:
      return {
        ...state,
        orders: {},
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
