import { Cocktail } from "./Cocktail";
import mojito from "../assets/cocktails/mojito.png";
import ginFizz from "../assets/cocktails/ginn_fizz.png";
import blue_lagoon from "../assets/cocktails/blue_lagoon.png";

export const cocktailList = [
  new Cocktail("mojito", mojito, [
    "6 cl rhum",
    "3 cl jus de citron vert",
    "7 feuilles de menthe",
    "2 cl sirop sucre de cannes",
    "eau gazeuse"
  ]),
  new Cocktail("gin fizz", ginFizz, [
    "6 cl gin",
    "4 cl jus de citron",
    "7 feuilles de menthe",
    "2 cl sirop sucre canne",
    "12 cl eau gazeuse"
  ]),
  new Cocktail("blue lagoon", blue_lagoon, [
    "4 cl vodka",
    "3 cl curacao",
    "2 cl jus de citron"
  ]),
  new Cocktail("mai tai", require("../assets/cocktails/mai_tai.png"), [
    "3 cl rhum ambré",
    "3 cl rhum blanc",
    "2 cl triple sec",
    "3 cl jus de citron",
    "1 cl sirop sucre canne"
  ]),
  new Cocktail(
    "sex on the beach",
    require("../assets/cocktails/sex-on-the-beach.png"),
    ["3 cl vodka", "5 cl jus ananas", "2 cl crème de pêche", "10 cl cramberrie"]
  ),
  new Cocktail("americano", require("../assets/cocktails/americano.png"), [
    "2 cl martini",
    "4 cl campari",
    "eau gazeuse"
  ]),
  new Cocktail("daiquiri", require("../assets/cocktails/daiquiri.png"), [
    "4 cl rhum",
    "2 cl citron vert",
    "1 cl sirop sucre canne"
  ]),
  new Cocktail("dry martini", require("../assets/cocktails/dry_martini.png"), [
    "5 cl gin",
    "2 cl martini"
  ]),
  new Cocktail("gimlet", require("../assets/cocktails/gimlet.png"), [
    "8 cl gin",
    "2 cl lime cordial"
  ]),
  new Cocktail("margarita", require("../assets/cocktails/margarita.png"), [
    "5 cl tequila",
    "3 cl triple sec",
    "2 cl jus citron vert"
  ]),
  new Cocktail("mimosa", require("../assets/cocktails/mimosa.png"), [
    "4 cl champagne",
    "8 cl jus d'orange",
    "1 cuillère triple sec"
  ]),
  new Cocktail("side car", require("../assets/cocktails/sidecar.png"), [
    "2 cl triple sec",
    "5 cl cognac",
    "2 cl jus citron"
  ]),
  new Cocktail(
    "tequila sunrise",
    require("../assets/cocktails/tequila_sunrise.png"),
    ["6 cl tequila", "12 cl jus d'orange", "2 cl sirop grenadine"]
  ),
  new Cocktail("ti' punch", require("../assets/cocktails/ti_punch.png"), [
    "6 cl rhum blanc",
    "2 cl sirop sucre canne",
    "1 tranche de citron vert"
  ]),
  new Cocktail(
    "vodka orange",
    require("../assets/cocktails/vodka_orange.png"),
    ["4 cl vodka", "12 cl jus d'orange"]
  ),
  new Cocktail("white lady", require("../assets/cocktails/white_lady.png"), [
    "2 cl gin",
    "2 cl triple sec",
    "2 cl jus citron vert"
  ])
];
