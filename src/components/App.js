import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  //remember, state and methods that update state have to live at the same component

  addFish = (fish) => {
    //copy existing state to avoid mutation
    const fishes = { ...this.state.fishes };
    //add my new fish to the copy
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };
  //my method will pass through props, here check below

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh seafood market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
              {/*what i've done: when loadSampleFishes is called by clicking the button at inventory, it modifies the state of fishes adding the sampleFishes object. then, since i can't map an object, i get the all the keys of sampleFishes, and then I map: per key, I render a Fish component that'll have the prop details, which has the state of the fish I passed the key upon before, such state being composed by the properties of each object.*/}
            </ul>
          </div>
          <Order />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
          />
        </div>
      </>
    )

  }
}

export default App;