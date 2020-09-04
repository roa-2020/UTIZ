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
                <i>10:30am - 9pm</i>
              </p>
              <p>We are a burger police, and we like primates.</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ListView;
