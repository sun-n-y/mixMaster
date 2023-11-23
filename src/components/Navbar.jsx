import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <StyledBtn>button</StyledBtn>
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
