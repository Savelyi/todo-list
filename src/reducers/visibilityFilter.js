import { VisibilityFilters } from '../actions/VisibilityFilters';

const defaultState = {
  filter: VisibilityFilters.SHOW_ALL
};

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default visibilityFilter;
