import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to="/about">about page</Link>
      <a href="https://www.google.com">google</a>
    </div>
  );
};
export default HomeLayout;
