import React, { useState } from "react";
import "./AppBar.css";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

interface IAppBar {
  filter: Function;
}

export function AppBar(props: IAppBar) {
  const [likeFilter, setLikeFilter] = useState(false);
  return (
    <div className="AppBar">
      <h1>Cocktail Bar</h1>
      <div>
        <Checkbox
          onClick={() => setLikeFilter(!likeFilter)}
          style={{ marginRight: "80px" }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
          checked={likeFilter}
        />
        <input
          placeholder="Search..."
          onChange={(event) => {
            props.filter(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
