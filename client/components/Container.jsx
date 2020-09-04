import React from "react";
import ListView from "./ListView";

const Container = (props) => {
  // console.log(props.restaurants);
  const rest = props.restaurants;
  return (
    <div className="columns is-centered">
      <div className="is-three-fifths">
        <h1 className="title">{props.category}</h1>
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
      </div>
    </div>
  );
};

export default Container;
