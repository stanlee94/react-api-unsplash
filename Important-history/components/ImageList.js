import React from "react";

const ImageList = props => {
  const imgList = props.images.map(image => (
    <img alt={image.description} key={image.id} src={image.urls.regular} />
  ));

  return <div>{imgList}</div>;
};

export default ImageList;
