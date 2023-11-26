import axios from 'axios';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const searchSingleCocktailsQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    await queryClient.ensureQueryData(searchSingleCocktailsQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();

  const { data } = useQuery(searchSingleCocktailsQuery(id));

  if (!data) {
    // return <h2>something went wrong...</h2>;
    return <Navigate to="/" />;
  }

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
  } = singleDrink;

  // const ingredientsArray = [
  //   strIngredient1,
  //   strIngredient2,
  //   strIngredient3,
  //   strIngredient4,
  //   strIngredient5,
  //   strIngredient6,
  //   strIngredient7,
  //   strIngredient8,
  //   strIngredient9,
  //   strIngredient10,
  //   strIngredient11,
  //   strIngredient12,
  //   strIngredient13,
  //   strIngredient14,
  //   strIngredient15,
  // ];

  const ingredients2 = Object.keys(singleDrink)
    .filter((key) => {
      if (key.startsWith('strIngredient') && singleDrink[key] != null) {
        return key;
      }
    })
    .map((item) => singleDrink[item])
    .join(', ');

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients2}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
