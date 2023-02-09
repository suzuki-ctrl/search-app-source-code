import axios from 'axios';
import { useState , useEffect } from 'react';

import { CardType } from './types/CardType';
import './App.css';
import Card from './components/Card';

function App() {
  const [fil , setFil] = useState('');
  const [users , setUsers] = useState<Array<CardType>>([]);

  useEffect(() => {
    axios.get<Array<CardType>>('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setUsers(res.data);
    })
  },[])

  return (
    <div className="App">
      <h1>検索アプリ</h1>
      <input 
        type="text" 
        placeholder='名前で検索' 
        value={fil} 
        onChange={(e) => setFil(e.target.value)}
      />
        <div className='container'>
      {users
        .filter((user) => {
          const match = user.name.indexOf(fil) !== -1;
          return match;
        })
        .map((user) => (
          <Card name={user.name} email={user.email} />
          ))}
          </div>
    </div>
  );
}

export default App;
