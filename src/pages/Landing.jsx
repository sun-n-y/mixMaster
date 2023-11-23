import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm: searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
