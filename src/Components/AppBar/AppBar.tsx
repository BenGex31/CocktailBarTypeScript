import React, { useState } from "react";
import "./AppBar.css";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

interface IAppBar {
  filter: Function;
  likeFilter: Function;
}

export function AppBar(props: IAppBar) {
  const [like, setLike] = useState(false);

  const activateLikeFilter = () => {
    props.likeFilter(!like);
    setLike(!like);
  };

  return (
    <div className="AppBar">
      <h1>Cocktail Bar</h1>
      <div>
        <Checkbox
          onClick={activateLikeFilter}
          style={{ marginRight: "80px" }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
          checked={like}
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
