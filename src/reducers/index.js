const initialState = {
  items: null,
  loading: false,
  disabled: false
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOADED':
      return {
        ...state,
        loading: false
      }
    case 'DISABLING':
      return {
        ...state,
        disabled: true
      }
    case 'DISABLED':
      return {
        ...state,
        disabled: false
      }
    case 'USERS:SET_ITEMS':
      return {
        ...state,
        items: payload
      }
    case 'CONTACTS:SET_ITEMS':
      return {
        ...state,
        items: payload
      }
    case 'CONTACTS:SET_ITEM':
      return {
        ...state,
        item: payload
      }
    case 'CONTACTS:REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      }
    case 'CONTACTS:ADD_ITEM':
      return {
        ...state,
        items: state.items ? [...state.items, payload] : [payload]
      }
    case 'CONTACTS:EDIT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? [...item, payload] : item
        )
      }
    default:
      return state
  }
}
