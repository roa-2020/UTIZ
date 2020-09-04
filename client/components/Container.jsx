import React from "react";
import ListView from "./ListView";

const Container = () => {
  return (
    <div className="columns is-centered">
      <div className="is-three-fifths">
        {
          <ListView
            restaurant="Gorilla Burger"
            city="Wellington"
            address="Leeds Street, Wellington"
            cuisine="Borgahs"
          />
        }
      </div>
    </div>
  );
};

export default Container;
