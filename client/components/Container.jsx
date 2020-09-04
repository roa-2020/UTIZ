import React from "react";
import ListView from "./ListView";
import {Link} from "react-router-dom"

const Container = (props) => {
  // console.log(props.restaurants);
  const rest = props.restaurants;
  return (
    <div className="column is-four-fifths">
      <h1 className="title">{props.category}</h1>
      <p className="pagination">{props.current > 0 && <Link className="pagination-previous" to="/" onClick={props.prev}>&lt; Prev</Link>} {(props.current + props.count < props.records) && <Link className="pagination-next" to="/" onClick={props.next}>Next &gt;</Link>}</p>
      {rest.map((r, i) => {
        // {
        //   console.log(r.restaurant);
        // }
        return (
          <ListView
            key={i}
            restaurant={r.restaurant.name}
            city={r.restaurant.location.city}
            address={r.restaurant.location.address}
            cuisine={r.restaurant.cuisines}
            hours={r.restaurant.timings}
          />
        );
      })}
      <p className="pagination">{props.current > 0 && <Link className="pagination-previous" to="/" onClick={props.prev}>&lt; Prev</Link>} {(props.current + props.count < props.records) && <Link className="pagination-next" to="/" onClick={props.next}>Next &gt;</Link>}</p>
    </div>
  );
};

export default Container;
