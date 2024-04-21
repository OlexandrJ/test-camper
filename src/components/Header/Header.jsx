import MainContainer from "Layout/MainContainer";
import { HeaderBlock, Nav, NavigLink } from "./Header.styled";

const Header = () => {

  return (
    <HeaderBlock>
      <MainContainer>
        <Nav>
          <ul>
            <li>
              <NavigLink to="/">Home</NavigLink>
            </li>
            <li>
              <NavigLink to="/catalog">Catalog</NavigLink>
            </li>
            <li>
              <NavigLink to="/favorites">Favorites</NavigLink>
            </li>
          </ul>
        </Nav>
      </MainContainer>
    </HeaderBlock>
  );
};

export default Header;