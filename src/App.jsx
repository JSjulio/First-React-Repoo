import {puppyList} from '../src/data.js'

import { useState } from 'react'

function App() {
const [puppies, setPuppies] = useState(puppyList)
console.log("puppyList:", puppyList);
  return (
      <div>
        {
          puppies.map((puppy) => {
          return <p key ={puppy.id}>{puppy.name}</p>;
          })
        }
      </div>
      // a key is a special attribute you need to inlcude
      // when creating a list of elements in React
  );
}

export default App
