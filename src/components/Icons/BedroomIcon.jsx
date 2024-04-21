import sprite from "assets/icons/sprite.svg";


const BedroomIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-bedroom`}></use>
    </svg>
  );
};

export default BedroomIcon;