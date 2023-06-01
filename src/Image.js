const Image = ({ image }) => {
  return (
    <div className="image-container">
      <img src={image} className="person-img"></img>
    </div>
  );
};

export default Image;
