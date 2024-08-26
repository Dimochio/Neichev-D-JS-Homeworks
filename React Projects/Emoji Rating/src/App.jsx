import "./App.css";
import EmojiVoteClass from "./components/emoji-class-component";
import EmojiVoteFunc from "./components/emoji-func-component";

function App() {
  return (
    <div className="component-wrapper">
      <EmojiVoteFunc />
      <EmojiVoteClass />
    </div>
  );
}

export default App;
