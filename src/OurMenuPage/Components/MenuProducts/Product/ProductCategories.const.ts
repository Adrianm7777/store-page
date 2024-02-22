import {
  Beverages,
  Breakfast,
  Burgers,
  Chicken,
  FriesAndSides,
  HappyMeal,
  McCafe,
  McSetArray,
  McWrap,
  SweetsAndTreats,
  TwoForYou,
  WhatsNewArray,
} from "../Products/ProductsArray.const";

export const ProductCategories = [
  { title: "Co nowego?", product: WhatsNewArray, id: "coNowego" },
  { title: "McZestaw", product: McSetArray, id: "mcZestaw" },
  { title: "Burgery", product: Burgers, id: "burgery" },
  { title: "McWrap i sałatki", product: McWrap, id: "mcWrapISalatki" },
  { title: "Kurczak", product: Chicken, id: "kurczak" },
  { title: "2 for U", product: TwoForYou, id: "twoForU" },
  { title: "Frytki i dodatki", product: FriesAndSides, id: "frytkiIDodatki" },
  { title: "McCafé", product: McCafe, id: "mccafe" },
  { title: "Lody i desery", product: SweetsAndTreats, id: "lodyIDesery" },
  { title: "Napoje", product: Beverages, id: "napoje" },
  { title: "Happy Meal", product: HappyMeal, id: "happyMeal" },
  { title: "Śniadania", product: Breakfast, id: "sniadania" },
];
