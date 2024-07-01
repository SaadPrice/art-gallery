import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setArtId, fetchArtData } from './Features/artSlice';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';
import './App.css';

function App({ artId, data, dispatchSetArtId, dispatchFetchArtData }) {
  useEffect(() => {
    document.title = `Art ID: ${artId}`;
    dispatchFetchArtData(artId);
  }, [artId, dispatchFetchArtData]);

  const handleIterate = (e) => {
    dispatchSetArtId(artId + Number(e.target.value));
  };

  const handleInputChange = (e) => {
    dispatchSetArtId(Number(e.target.value));
  };

  return (
    <div className="App">
      <input
        type="number"
        value={artId}
        onChange={handleInputChange}
        min="1"
        max="471581"
      />
      <Gallery
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
        medium={data.medium}
      />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  artId: state.art.artId,
  data: state.art.data,
});

const mapDispatchToProps = {
  dispatchSetArtId: setArtId,
  dispatchFetchArtData: fetchArtData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
