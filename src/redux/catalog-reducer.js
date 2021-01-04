const ADD_CATALOG_LIST = 'catalog/ADD_CATALOG_LIST'

const initialState = {
  catalogData: []
}

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATALOG_LIST:
      return {...state,  catalogData: action.list }
    default:
      return state
  }
}

export const addCatalogList = (list) => ({ type: ADD_CATALOG_LIST, list })

export default catalogReducer
