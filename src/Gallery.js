import React from 'react';

function Gallery(props) {
  return (
    <div style={{ width: '100%' }}>
      {props.objectImg ? (
        <>
          <img src={props.objectImg} alt={props.title} style={{ width: '50%' }} />
          <p>{props.title}</p>
          <p>{props.artist}</p>
          <p>{props.medium}</p>
        </>
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

export default Gallery;
