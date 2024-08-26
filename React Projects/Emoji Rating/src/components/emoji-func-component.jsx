import { useState, useEffect } from "react";

const emojis = ["😋", "😅", "😁", "😝", "😒", "😏"];

const EmojiVoteFunc = () => {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem("emojiVotesFunc");
    return savedVotes ? JSON.parse(savedVotes) : Array(emojis.length).fill(0);
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("emojiVotesFunc", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const showResults = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    setWinner(emojis[winnerIndex]);
  };

  const clearResults = () => {
    setVotes(Array(emojis.length).fill(0));
    setWinner(null);
    localStorage.removeItem("emojiVotesFunc");
  };

  return (
    <div className="card">
      <h2>Func component</h2>

      <div className="emoji-wrapper">
        {emojis.map((emoji, index) => (
          <div className="emoji-container" key={index}>
            <div onClick={() => handleVote(index)}>{emoji}</div>
            {votes[index]} votes
          </div>
        ))}
      </div>

      <div className="button-list">
        <button onClick={showResults}>Show Results</button>
        <button onClick={clearResults}>Clear Results</button>
      </div>

      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
};

export default EmojiVoteFunc;
