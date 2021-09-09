let lastID = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case 'bugAdded':
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: action.payload.resolved
        }
      ];
    case 'bugRemoved':
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
