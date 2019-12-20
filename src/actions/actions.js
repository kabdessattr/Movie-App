import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  SEARCH_MOVIE,
  EDIT_MOVIE,
  SEARCH_RATE} from "../actions/action-type";

export const addMovie = newMovie => {
  return { type: ADD_MOVIE, payload: newMovie };
};

export const removeMovie = Movie => {
  return { type: REMOVE_MOVIE, payload: Movie };
};
export const searchMovie = theMovie => {
  return { type: SEARCH_MOVIE, payload: theMovie };
};

export const editMovie = (id,aMovie) => {
  return { type: EDIT_MOVIE, payloadIndex:id, payloadaMovie:aMovie };
};

export const searchRate = (theSearch) => {
    return {type: SEARCH_RATE, payload: theSearch}
}
