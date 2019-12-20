import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  SEARCH_MOVIE,
  EDIT_MOVIE,
  SEARCH_RATE
} from "../actions/action-type";
import { movies } from "../Components/movielist/data";

const initState = { tabList: movies, searching: "", ratingSearch:""};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, tabList: [...state.tabList, action.payload] };

    case REMOVE_MOVIE:
      return {
        ...state,
        tabList: state.tabList.filter(el => el !== action.payload)
      };

    case SEARCH_MOVIE:
      return { ...state, searching: action.payload };

    case EDIT_MOVIE:
      return {
        ...state,
        tabList: state.tabList.map((e, i) =>
          i === action.payloadIndex ? { ...action.payloadaMovie } : e
        )
      };

      case SEARCH_RATE:
          return {
              ...state, ratingSearch: action.payload}
          ;

    default:
      return state;
  }
};

export default listReducer;