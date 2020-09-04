import React from "react"
import { singleView } from '../api'

class SingleListItem extends React.Component {
  
  state = {
    restaurant: {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.getRestaurant(id)
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id
    const id = this.props.match.params.id

    if(prevId != id) {
      this.getRestaurant(id)
    }
  }

  getRestaurant = (id) => {
    singleView(id)
      .then(data => {
        this.setState({
          restaurant: data
        })
        return true
      })
      .catch(err => err)
  }

  render() {
    return (
      <>
           <h1>{this.state.restaurant.name}</h1>
      </>
    )
  }
}




export default SingleListItem
