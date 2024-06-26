import sprite from "assets/icons/sprite.svg";

const FaviIcon = ({ width, height }) => {
  return (
    <svg id="fav-icon" width={width} height={height}>
      <use href={`${sprite}#icon-fav`}></use>
    </svg>
  );
};

export default FaviIcon;