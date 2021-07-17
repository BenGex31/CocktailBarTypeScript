import React from "react";
import "./AppBar.css";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

interface IAppBar {
  filter: Function;
}

export function AppBar(props: IAppBar) {
  return (
    <div className="AppBar">
      <h1>Cocktail Bar</h1>
      <Checkbox
        //style={{ position: "absolute", right: "10px" }}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        name="checkedH"
        //checked={props.cocktail.liked}
      />
      <input
        placeholder="Search..."
        onChange={(event) => {
          props.filter(event.target.value);
        }}
      />
    </div>
  );
}
