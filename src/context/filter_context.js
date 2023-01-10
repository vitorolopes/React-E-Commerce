import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT,
  SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const  initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort:"price-lowest"
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const {products} = useProductsContext();

  useEffect(() => {
    dispatch({type: LOAD_PRODUCTS, payload: products})  
  }, [products])
//! HERE 1
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort])
// we pass products as a dependency because initially products is an empty array 
// and we want to run it when it changes, as well as when we filter stuff.


  const setGridView = () => {
    dispatch({type: SET_GRIDVIEW})
  }
  const setListView = () => {
    dispatch({type: SET_LISTVIEW})
  }

  const updateSort = (e) => { 
    const value = e.target.value
    dispatch({type: UPDATE_SORT, payload: value})
   }
  
  return (
    <FilterContext.Provider 
      value=
        {{
          ...state,
          setGridView,
          setListView,
          updateSort
        }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
