import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/teams').then(response => {
      setTeams(response.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='cubes' content='Bet in Bed' />
        <List>
          {teams.map((team: any) => (
            <List.Item key={team.id}>
              {team.name}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
