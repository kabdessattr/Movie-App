import React from "react";
import { connect } from "react-redux";
import {addMovie} from '../../actions/actions'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      image: "",
      date: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="button-class">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add New Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInput}
                  className="input-name"
                  placeholder="Enter Name of New Movie"
                />
                <input
                  name="rating"
                  type="number"
                  maxLength={1}
                  value={this.state.rating}
                  onChange={this.handleInput}
                  className="input-rating"
                  placeholder="Enter Movie rating"
                />
                <input
                  name="date"
                  type="number"
                  maxLength={4}
                  value={this.state.date}
                  onChange={this.handleInput}
                  className="input-date"
                  placeholder="Enter Movie Date"
                />
                <input
                  name="image"
                  value={this.state.image}
                  onChange={this.handleInput}
                  className="input-image"
                  placeholder="Enter Movie image link"
                />
                <button
                  className="Submit"
                  onClick={() => this.props.add(this.state)}
                  data-dismiss="modal"
                >
                  Add Movie
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: payload => {
      dispatch(addMovie(payload));
    }
  };
};

export default connect(null,mapDispatchToProps)(Add);
