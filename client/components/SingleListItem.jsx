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
      <section className="column is-four-fifths">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.state.restaurant.name}</h1>
              <h2 className="subtitle">{this.state.restaurant.cuisines}</h2>
              {console.log('hi', this.state)}
              
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p>
                <strong>
             
                </strong>
              </p>
              <p>
                
              </p>
              {/* <p>{this.props.description}</p> */}
            </div>
          </div>
        </section>
      </>
    )
  }
}




export default SingleListItem
