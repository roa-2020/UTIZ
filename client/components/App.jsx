import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { searchCategory } from "../api";
import SingleListItem from "../SingleListItem";

class App extends React.Component {
  state = {
    categoryID: "",
    restaurants: [],
    categoryName: ''
  };

  componentDidMount(){
    this.selectCategory(1, 'Delivery')
  }

  selectCategory = (categoryID, categoryName) => {
    searchCategory(categoryID).then((results) => {
      this.setState(
        {
          restaurants: results.restaurants,
          offset: results.results_start,
          count: results.results_shown,
          categoryName: categoryName,
          categoryID: categoryID
        });
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <div className="columns">
          <Sidebar selectCategory={this.selectCategory} />
          <Route exact path="/" render={(props) => {
            return <Container 
              {...props} 
              restaurants={this.state.restaurants} 
              category={this.state.categoryName}
            />
          }} />
          <Route path="/restaurant/:id" component={SingleListItem} /> //props.match.params.id
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
