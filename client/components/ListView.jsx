import React from "react";

class ListView extends React.Component {
  render() {
    return (
      <>
        <section className="hero is-primary my-3">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"> {this.props.restaurant}</h1>
              <h2 className="subtitle">{this.props.cuisine}</h2>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p>
                <strong>
                  {this.props.city}, {this.props.address}
                </strong>
              </p>
              <p>
                <i>Opening Hours: {this.props.hours}</i>
              </p>
              {/* <p>{this.props.description}</p> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ListView;
