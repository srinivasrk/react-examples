import React from 'react';

const ImageList = (props) => {
  console.log(props);
  const images = props.images.map(({description, urls, id}) => {
    return <img key={id} src={urls.regular} alt={description}/>
  })
  return <div>{images}</div>
};

export default ImageList;