import logo from './logo.svg';
import './App.css';

import Dialogue from "./components/DialogueTools/Dialogue";
import DialogueEditor from "./components/DialogueTools/DialogueEditor";
import {DEFAULT_DIALOGUE} from "./components/DialogueTools/dialogue-constants.js"

function App() {
  return (
    <div className="App">
        <Dialogue dialogueJson={DEFAULT_DIALOGUE} />
        <br />
        <hr />
        <br /><br /><br /><br />
        <DialogueEditor />
        <br /><br /><br /><br />
    </div>
  );
}

export default App;
