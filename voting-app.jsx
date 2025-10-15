 App.jsx
import React, { useState } from 'react'; import './App.css';
function App() {
const [candidates, setCandidates] = useState([
{ name: 'Candidate 1', votes: 0 },
{ name: 'Candidate 2', votes: 0 },
{ name: 'Candidate 3', votes: 0 },
]);
const voteForCandidate = (index) => { const newCandidates = [...candidates];
newCandidates[index].votes += 1; setCandidates(newCandidates);
};
return (
<div className="App">
<h1>Voting Application</h1>
<div className="candidates">
{candidates.map((candidate, index) => (
<div key={index} className="candidate">
<h2>{candidate.name}</h2>
<p>Votes: {candidate.votes}</p>
<button onClick={() => voteForCandidate(index)}> Vote
</button>
</div>
))}
</div>
</div>
);
}
export default App;
App.css
.App {
text-align: center;
font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;
}
h1 {
margin-bottom: 20px;
}
.candidates { display: flex;
justify-content: space-around;
}
.candidate {
border: 1px solid #ccc; border-radius: 8px; padding: 20px;
width: 200px; background-color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
.candidate h2 { margin: 0 0 10px 0;
}
.candidate p { margin: 0 0 10px 0;
}
.candidate button { padding: 10px 20px; border: none;
border-radius: 4px; background-color: #4CAF50; color: white;
cursor: pointer;
transition: background-color 0.3s ease;
}
.candidate button:hover { background-color: #45a049;
}
