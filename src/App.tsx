import React, { useState } from "react";
import "./styles.css";
import Modal from "react-modal";
import { CocktailForm } from "./Components/CocktailForm/CocktailForm";
import { CocktailCard } from "./Components/CocktailCard/CocktailCard";
import { cocktailList } from "./model/CocktailList";
import { AppBar } from "./Components/AppBar/AppBar";
import { Icocktail } from "./model/Cocktail";

export const CocktailContext = React.createContext<[Icocktail[], Function]>([
  cocktailList,
  () => {}
]);

export default function App() {
  const [cocktails, setCocktails] = useState<Icocktail[]>(cocktailList);
  const [cocktailDisplayed, setCocktailDisplayed] = useState<Icocktail[]>(
    cocktailList
  );
  const [cocktailOpen, setCocktailOpen] = useState<Icocktail | undefined>(
    undefined
  );

  const handleSearch = (text: string): void => {
    console.log(text);
    if (text === "") {
      setCocktails(cocktailList);
    } else {
      setCocktails(
        cocktailList.filter((cocktail) =>
          cocktail.name.toLowerCase().startsWith(text.toLowerCase())
        )
      );
    }
  };

  const likeFilter = (like: boolean) => {
    if (like) {
      setCocktailDisplayed(
        cocktails.filter((cocktail) => cocktail.liked === true)
      );
    } else {
      setCocktailDisplayed(cocktails);
    }
  };

  return (
    <CocktailContext.Provider value={[cocktails, setCocktails]}>
      <div className="App">
        <AppBar filter={handleSearch} likeFilter={likeFilter} />
        {cocktailDisplayed.map((cocktail) => (
          <CocktailCard cocktail={cocktail} openForm={setCocktailOpen} />
        ))}
        <Modal
          className="modalStyle"
          isOpen={cocktailOpen !== undefined}
          onRequestClose={() => setCocktailOpen(undefined)}
        >
          <CocktailForm cocktail={cocktailOpen} closeModal={setCocktailOpen} />
        </Modal>
      </div>
    </CocktailContext.Provider>
  );
}
