import React, { Component } from "react";
import {connect} from "react-redux";
import {searchRate} from "../../actions/actions"

function RatingStars(props) {
  var stars = [];

  for (let i = 0; i < 5; i++) {
    props.rate > i
      ? stars.push(<span className="span1" onClick={()=>props.search(i!==0?i+1:i)}> ★ </span>)
      : stars.push(<span className="span2" onClick={() => props.search(i+1)}> ☆ </span>);
  }
  return <div className="stars-div"> {stars} </div>;
}

const mapDispatchToProps = dispatch => {
  return {
    search: payload => {
      dispatch(searchRate(payload));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RatingStars);
