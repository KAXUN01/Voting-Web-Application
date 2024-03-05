import React, { useState } from 'react';
import Player from './player.js';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

const Voting = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Lionel Messi', country: 'Argentina', img: img1, votes: 0 },
    { id: 2, name: 'Cristiano Ronaldo', country: 'Portugal', img: img2, votes: 0 },
    { id: 3, name: 'Robert Lewandowski', country: 'Poland', img: img3, votes: 0 },
  ]);

  const handleVote = (id) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, votes: player.votes + 1 } : player
      )
    );
  };

  return (
    <div className="voting-container">
      {players.map((player) => (
        <Player
          key={player.id}
          name={player.name}
          country={player.country}
          image={player.img}
          votes={player.votes}
          onVote={() => handleVote(player.id)}
        />
      ))}
    </div>
  );
};

export default Voting;