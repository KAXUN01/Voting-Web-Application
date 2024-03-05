import React from 'react';

const Player = ({ name, country, image, votes, onVote }) => (
  <div className="player">
    <img src={image} alt={name} className="player-image" />
    <div className="player-info">
      <h3 className="player-name">{name}</h3>
      <p className="player-country">{country}</p>
    </div>
    <button className="player-vote-button" onClick={onVote}>
      Vote
    </button>
    <div className="player-vote-count">{votes}</div>
  </div>
);

export default Player;