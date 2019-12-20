import React, { Component } from "react";

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount = () =>
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 2000);

    render() {
      if (this.state.loading === true)
        return (
          <div className="spinner-position">
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </div>
        );
      else return <OriginalComponent {...this.props} />;
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
