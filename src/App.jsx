import { puppyList } from '../src/data.js';
import { useState } from 'react';
import '../src/App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Step 1: Create a variable named featuredPup
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  // Step 2: Log featuredPup
  console.log('Featured Puppy:', featuredPup);

  // Step 3: Click handler to set featPupId
  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}

      {/* Step 4: Conditionally render p tag if featPupId is not null */}
      {featPupId && <p>{featPupId}</p>}

      {/* Step 5: Render Puppy Data */}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
