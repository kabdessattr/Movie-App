import React, { Component } from "react";
import RatingStars from "./rating";
import { connect } from "react-redux";
import { removeMovie } from "../../actions/actions";
import Edit from "../movielist/Edit";
import "../../App.css";
import {Link} from "react-router-dom"

function Moviecard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="movie-image" src={props.movielist.image} />
        <p>
          {" "}
          <RatingStars rate={props.movielist.rating} />
        </p> <div><p>
          {props.movielist.name}</p> <p> {props.movielist.date}</p> </div>
        
        <div className="buttons-div">
          <button
            className="btn btn-warning delete-button"
            onClick={() => props.remove(props.movielist)}
          >
            {" "}
            Remove{" "}
          </button>
          <Edit
            className="edit-button"
            movieEl={props.movielist}
            id={props.id}
          />
          <Link to ={`/description/${props.id}`}> <button className="btn btn-secondary"> Description </button> </Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    remove: payload => {
      dispatch(removeMovie(payload));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Moviecard);
