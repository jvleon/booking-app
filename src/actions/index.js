import {
  GET_CITIES,
  SEARCH_SUCCESS,
  SET_TO_CART,
  CLEAN_CART,
  RESET_SEARCH,
  CLEAN_SEARCH
} from './actionTypes'

export const getCities = (payload) => ({
  type: GET_CITIES,
  payload
})

export const setSearch = (payload) => ({
  type: SEARCH_SUCCESS,
  payload
})

export const setToCart = (payload) => ({
  type: SET_TO_CART,
  payload
})

export const cleanCart = (payload) => ({
  type: CLEAN_CART,
  payload
})


export const resetSearch = () => ({
  type: RESET_SEARCH
})

export const clearSearch = () => ({
  type: CLEAN_SEARCH
})