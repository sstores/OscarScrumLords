import React, {Component} from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';
import Calendar from './Calendar.jsx';
import UserProfile from './UserProfile.jsx';

const AppStyles = styled.div`
`;
class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <AppStyles>
        <div>
          <header>
            <h1>Bike Around and Find Out</h1>
            <h3>New Orleans Interactive Community Bike Map</h3>
          </header>
          <nav>
          </nav>
          <Map />
          <Calendar />
          <UserProfile />
        </div>
      </AppStyles>
    );
  }
}

export default App;
