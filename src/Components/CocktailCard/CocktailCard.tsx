import React, { useContext } from "react";
import "./CocktailCard.scss";
import { CocktailContext } from "../../App";
import { Icocktail } from "../../model/Cocktail";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

interface IcocktailCard {
  cocktail: Icocktail;
  openForm: Function;
}

export function CocktailCard(props: IcocktailCard): JSX.Element {
  const [cocktails, setCocktails] = useContext(CocktailContext);
  return (
    <div className="cocktailCardContainer">
      <Checkbox
        onClick={() => {
          const cocktailToChangeIndex = cocktails.findIndex((cocktail) => {
            return cocktail.name === props.cocktail.name;
          });
          const cocktailUpdated = [...cocktails];
          cocktailUpdated[cocktailToChangeIndex] = {
            ...props.cocktail,
            liked: !props.cocktail.liked
          };
          setCocktails(cocktailUpdated);
        }}
        style={{ position: "absolute", right: "10px" }}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        name="checkedH"
        checked={props.cocktail.liked}
      />
      <div
        className="cocktailCard"
        onClick={() => props.openForm(props.cocktail)}
      >
        <img
          className="cocktailImg"
          alt={props.cocktail.name}
          src={props.cocktail.image}
        />
        <h1 className="cocktailName">
          {props.cocktail.name[0].toUpperCase() + props.cocktail.name.slice(1)}
        </h1>
        <div className="separator"></div>
        <ol className="ingredientList">
          {props.cocktail.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
