import React, { useContext, useState } from "react";
import "./CocktailForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Icocktail } from "../../model/Cocktail";
import { CocktailContext } from "../../App";

interface IcocktailForm {
  cocktail: Icocktail | undefined;
  closeModal: Function;
}

export function CocktailForm(props: IcocktailForm) {
  const [cocktails, setCocktails] = useContext<[Icocktail[], Function]>(
    CocktailContext
  );

  const [ingredients, setIngredients] = useState<string[]>(
    props.cocktail !== undefined ? props.cocktail.ingredients : []
  );

  const changeIngredient = (ingredient: string, index: number) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = ingredient;
    setIngredients(newIngredients);
  };

  const validateCocktail = () => {
    const newCocktails = [...cocktails];
    let cocktailIndex = 0;
    const cocktailTocChange = cocktails.find((cocktail, index) => {
      cocktailIndex = index;
      return props.cocktail ? cocktail.name === props.cocktail.name : false;
    });
    if (cocktailTocChange !== undefined) {
      cocktailTocChange.ingredients = ingredients;
      newCocktails[cocktailIndex] = cocktailTocChange;
      setCocktails(newCocktails);
    }
    props.closeModal(undefined);
  };

  return (
    <div className="cocktailForm">
      <div className="CocktailName">
        {props.cocktail !== undefined
          ? props.cocktail.name[0].toUpperCase() + props.cocktail.name.slice(1)
          : ""}
      </div>
      <div className="CocktailFormImages">
        <img
          className="cocktailFormImg"
          src={props.cocktail !== undefined ? props.cocktail.image : ""}
          alt={props.cocktail !== undefined ? props.cocktail.name : ""}
        />
        <img
          className="beachImg"
          src={
            "https://plongee-merveilles.com/wp-content/uploads/2020/01/mer-maldives.jpg"
          }
          alt="beach"
        />
      </div>
      <div className="cocktailFormIngredients">
        {props.cocktail !== undefined
          ? props.cocktail.ingredients.map(
              (ingredient: string, index: number) => {
                return (
                  <TextField
                    style={{ marginTop: "10px" }}
                    id={ingredient}
                    key={ingredient}
                    className="outlined-basic"
                    label="ingredient"
                    variant="outlined"
                    value={ingredients[index]}
                    onChange={(event) =>
                      changeIngredient(event.target.value, index)
                    }
                  />
                );
              }
            )
          : null}
      </div>
      <div className="buttonFormModal">
        <Button
          className="buttonCancel"
          variant="contained"
          onClick={() => props.closeModal(undefined)}
        >
          Annuler
        </Button>
        <Button
          className="buttonValidate"
          variant="contained"
          color="primary"
          onClick={() => validateCocktail()}
        >
          Valider
        </Button>
      </div>
    </div>
  );
}
