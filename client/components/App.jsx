import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { HashRouter as Router, Route ,Link } from "react-router-dom";
import { searchCategory } from '../api'
class App extends React.Component{
    state = {
    categoryID: ''
  }

  selectCategory = (categoryID) => {
    searchCategory(categoryID)
    .then( results => {
      console.log(results.body)
      this.setState({ restaurants: results.restaurants, offset: results.results_start, count: results.results_shown },() =>{
        console.log(this.state)})
      } 
    )
  }

  render(){
  return (
    <Router>
    <section className="section">
       <Header />
       <Sidebar selectCategory={this.selectCategory} />

    </section>
    </Router>
  )
  }
}

export default App
