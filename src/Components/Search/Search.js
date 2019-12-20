import React, { Component } from "react";
import "../Search/Search.css";
import RatingStars from "../Movie card/rating";
import UpdatedComponent from "../../spinner";
import { connect } from "react-redux";
import { searchMovie } from "../../actions/actions";
import '../../App.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div className="form-div">
        <div className="form">
          <div className="search-block">
          <span className="search_text1"> Search Movie:  </span> 
          <input
          className="form-control"
            type="text"
            placeholder="Enter your movie name"
            onChange={e => this.props.search(e.target.value)}
          />
          ²
          <img
            className="search-icon"
            src="https://www.icone-png.com/png/1/1417.png"
          /> </div> <p className="the-rating"> Choose your rating: </p>  
          <RatingStars rate={this.props.rating}  />
        </div>
        <hr />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: payload => {
      dispatch(searchMovie(payload));
    }
  };
};

const mapStateToProps = state => {
  return { rating: state.tabList.rating};
};

export default connect (mapStateToProps, mapDispatchToProps) (Search);
