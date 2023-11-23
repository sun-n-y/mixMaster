import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'af';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h2>Landing</h2>;
};
export default Landing;
