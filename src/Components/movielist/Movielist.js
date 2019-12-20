import React, { Component } from "react";
import Moviecard from "../Movie card/movie-card";
import { connect } from "react-redux";

function Movielist(props) {
  return (
    <div className="Movielist-container">
      {props.movieliste
        .filter(el =>
          el.name.toLowerCase().includes(props.searching.toLowerCase()) && el.rating >= props.ratingStar
        )
        .map((el, i) => (
          <div>
            <Moviecard movielist={el} id={i} />
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = state => {
  return { movieliste: state.tabList, searching: state.searching, ratingStar: state.ratingSearch };
};

export default connect(
  mapStateToProps,
  null
)(Movielist);
