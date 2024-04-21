import MainContainer from "../../Layout/MainContainer";
import { HeroTitle, HeroSection, ImgWrap, HeroText } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <ImgWrap>
        <MainContainer>
            <HeroTitle>
            Campers rental in Ukraine
          </HeroTitle>
          <HeroText>
              Test-Camper provides the most versatile line of one-section camper trucks rental for film production and television industry, advertising projects, film festivals, as well as for show business, concerts, sports and social events. Camper trucks rental for film and TV production industries. The current Test-Camper fleet includes one-section camper trucks for the comfortable work of several make-up and costume designers. All campers are equipped with dressing rooms, compartment for suits, shower and WC.
           </HeroText>
        </MainContainer>
      </ImgWrap>
    </HeroSection>
  );
};

export default Hero;