import React, { Component } from "react";
import "./App.css";
import Search from "../src/Components/Search/Search";
import Movielist from "../src/Components/movielist/Movielist";
import { movies } from "../src/Components/movielist/data";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Components/movielist/Add";
import UpdatedComponent from "./spinner";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import description from "./Components/description"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchname: "",
      rating: 0
    };
  }

  search = newname => {
    this.setState({ searchname: newname });
  };

  ratingState = val => {
    this.setState({
      rating: val
    });
  };

  render() {
    return (

      <BrowserRouter>
      <Switch>
      <Route exact path="/"  >
  
      <div className="App">
        <header className="Header">
          <h1 className="titleApp"> Movies on Command </h1>
        </header>
        <div>
          <Search
            searchMovie={this.search}
            rate={this.state.rating}
            raterProp={this.ratingState}
          />
        </div>
        <div>
          <Movielist
            raterProp={this.ratingState}
          />
          <Add className="Add-button" />
        </div>
      </div>
      </Route>
  <Route path="/description/:id" component={description}  />
  
    </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
