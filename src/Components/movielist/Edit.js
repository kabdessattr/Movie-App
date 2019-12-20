import React from "react";
import { connect } from "react-redux";
import { editMovie } from "../../actions/actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: "",
      image: "",
      date: "",
      modal: false
    };
  }

  showModal = () => {
    this.setState({
      modal: true
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  getMovie = () => {
    this.setState({
      rating: this.props.movieEl.rating,
      image: this.props.movieEl.image,
      name: this.props.movieEl.name,
      date: this.props.movieEl.date
    });
  };

  setMovie = id => {
    let newMovie = {
      rating: this.state.rating,
      image: this.state.image,
      name: this.state.name,
      date: this.state.date
    };
    this.props.edit(id, newMovie);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={() => {
            this.getMovie();
            this.toggle();
          }}
        >
          Edit
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Movie</ModalHeader>
          <ModalBody>
            <input
              type="text"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
              placeholder="insert rating "
            />

            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
              placeholder="insert image"
            />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="insert title "
            />
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="insert duration"
            />
            <input
              type="text"
              name="rating"
              onChange={this.handleChange}
              placeholder="insert type"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.setMovie(this.props.id);
                this.toggle();
              }}
            >
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    edit: (id, newMovie) => dispatch(editMovie(id, newMovie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Edit);
