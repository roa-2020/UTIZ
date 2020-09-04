import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { searchCategory } from "../api";
import SingleListItem from "./SingleListItem";

class App extends React.Component {
  state = {
    categoryID: "",
    restaurants: [],
    categoryName: "",
    offset: 0,
    count: 20,
    records: 0
  };

  componentDidMount() {
    this.selectCategory(1, "Delivery");
  }

  selectCategory = (categoryID, categoryName) => {
    searchCategory(categoryID).then((results) => {

      this.setState({
        restaurants: results.restaurants,
        offset: results.results_start,
        count: results.results_shown,
        categoryName: categoryName,
        categoryID: categoryID,
        records: results.results_found
      });
    });
  };

  prev = () => {
    const offset = this.state.offset;
    const count = this.state.count;
    const start = offset - count;
    searchCategory(this.state.categoryID, null, count, start).then(
      (results) => {
        this.setState({
          restaurants: results.restaurants,
          offset: results.results_start,
          count: results.results_shown,
        });
        return true;
      }
    );
  };

  next = () => {
    const offset = this.state.offset;
    const count = this.state.count;
    const start = offset + count;
    searchCategory(this.state.categoryID, null, count, start)
      .then((results) => {
        return this.setState({
          restaurants: results.restaurants,
          offset: results.results_start,
          count: results.results_shown,
        });
      })
      .catch(err => err);
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
              prev={this.prev}
              next={this.next}
              records={this.state.records}
              current={this.state.offset}
              count={this.state.count}
            />
          }} />
          <Route path="/restaurant/:id" component={SingleListItem} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
