import React, { Component } from 'react';
import {connect} from "react-redux";
import "./../App.css";
import {Link} from "react-router-dom";

function description(props) {
    return (
        <div className="description-div1">
    {props.movieList.map((e,i)=>i===Number(props.match.params.id) && <div className="routed-element" key={i}><img className="movie-description-img" src={e.image} alt="."/> <h2 className="h2">{e.name}</h2> <span className="date-h2">{e.date}</span> <p> <h4>Synopsis: </h4> {e.synopsis} </p> <h3 className="h3"> rating: {e.rating} ★</h3>         <Link to ={`/`}><button className="btn btn-dark"> Go back </button></Link>
 </div>  )}
</div>)}

const mapStateToProps=(state)=>{
    return{ movieList:state.tabList}
 }
 
 export default connect(mapStateToProps,null) (description)
