import React from "react";
import ListView from "./ListView";

const Container = (props) => {
  console.log(props.restaurants);
  const rest = props.restaurants;
  return (
    <div className="column is-three-fifths">
        {rest.map((r, i) => {
          {
            console.log(r.restaurant);
          }

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
  );
};

export default Container;
