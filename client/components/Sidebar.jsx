import React from 'react'
import { Link } from "react-router-dom";
import { getCategories } from '../api'

class Sidebar extends React.Component {
    state = {
    categories: [],
  }

  componentDidMount(){
    this.getCategoryData()
  }
  
  getCategoryData = () => {
    getCategories()
    .then(categoryData => {
      this.setState({categories: categoryData.categories}) 
      return true
    })
    .catch(err => {
      console.log(err)
    })
  }
   
  render(){
    return (
      <div className='sidebar column'>
        <p className="subtitle">Categories</p>
        <ul className="cat-list">
          {this.state.categories.map((category, i) => {
            return (
              <li key={i}>
                <Link to="#" onClick={()=>{this.props.selectCategory(category.categories.id, category.categories.name)}}>
                  {category.categories.name}
                </Link>
              </li>)
          })} 
        </ul>
      </div>
    )
  }
}

export default Sidebar
