import { Component } from "react";

const emojis = ["😀", "😂", "😍", "😎", "😢", "😡"];

class EmojiVoteClass extends Component {
  constructor(props) {
    super(props);
    const savedVotes = localStorage.getItem("emojiVotesClass");
    this.state = {
      votes: savedVotes ? JSON.parse(savedVotes) : Array(emojis.length).fill(0),
      winner: null,
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem("emojiVotesClass", JSON.stringify(this.state.votes));
    }
  }

  handleVote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index] += 1;
    this.setState({ votes: newVotes });
  };

  showResults = () => {
    const maxVotes = Math.max(...this.state.votes);
    const winnerIndex = this.state.votes.indexOf(maxVotes);
    this.setState({ winner: emojis[winnerIndex] });
  };

  clearResults = () => {
    this.setState({
      votes: Array(emojis.length).fill(0),
      winner: null,
    });
    localStorage.removeItem("emojiVotesClass");
  };

  render() {
    return (
      <div className="card">
        <h2>Class component</h2>
        <div className="emoji-wrapper">
          {emojis.map((emoji, index) => (
            <div className="emoji-container" key={index}>
              <div onClick={() => this.handleVote(index)}>{emoji}</div>
              {this.state.votes[index]} votes
            </div>
          ))}
        </div>

        <div className="button-list">
          <button onClick={this.showResults}>Show Results</button>
          <button onClick={this.clearResults}>Clear Results</button>
        </div>

        {this.state.winner && <h2>Winner: {this.state.winner}</h2>}
      </div>
    );
  }
}

export default EmojiVoteClass;
