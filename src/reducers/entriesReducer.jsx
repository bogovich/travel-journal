function entriesReducer(state, action) {
    switch (action.type) {
      case 'INIT_ENTRIES':
        return action.entries;
      case 'ADD_ENTRY':
        return [...state, action.newEntry];
      case 'DELETE_ENTRY':
        return state.filter(entry => entry.id !== action.id);
      case 'UPDATE_ENTRY':
        return state.map(entry => entry.id === action.id ? action.updatedEntry : entry);
      default:
        throw new Error();
    }
}

export default entriesReducer;