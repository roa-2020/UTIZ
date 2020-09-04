import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { searchCategory } from "../api";

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
        <section className="section">
          <Header />
          <div className="columns">
            {/* <Sidebar selectCategory={this.selectCategory} />
            <Container restaurants={this.state.restaurants} /> */}
            <Sidebar selectCategory={this.selectCategory} />
            <Container restaurants={this.state.restaurants} category={this.state.categoryName}/>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
