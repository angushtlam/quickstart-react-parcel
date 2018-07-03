const example = (state = [], action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return [
        ...state,
        'New Item',
      ]
    default:
      return state
  }
}

export default example
