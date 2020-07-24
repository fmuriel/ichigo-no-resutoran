import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleDishes from '../sample-dishes';
import Dish from './Dish';
import base from '../base';

class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };
  //remember, state and methods that update state have to live at the same component

  componentDidMount() {
    const { params } = this.props.match;
    //reinstate my local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${params.storeId}/dishes`, {
      context: this,
      state: 'dishes'
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addDish = dish => {
    //copy existing state to avoid mutation
    const dishes = { ...this.state.dishes };
    //add my new fish to the copy
    dishes[`dish${Date.now()}`] = dish;
    this.setState({ dishes });
  };
  //my method will pass through props, here check below

  loadSampledishes = () => {
    this.setState({ dishes: sampleDishes })
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    //does order exist? then add 1, otherwise set it to 1 yeah
    this.setState({ order });
  };

  render() {
    return (
      <>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh japanese food market" />
            <ul className="dishes">
              {Object.keys(this.state.dishes).map(key => (
                <Dish
                  key={key}
                  index={key}
                  details={this.state.dishes[key]}
                  addToOrder={this.addToOrder} />))}
              {/*what i've done: when loadSampledishes is called by clicking the button at inventory, it modifies the state of dishes adding the sampledishes object. then, since i can't map an object, i get the all the keys of sampledishes, and then I map: per key, I render a Fish component that'll have the prop details, which has the state of the fish I passed the key upon before, such state being composed by the properties of each object.*/}
            </ul>
          </div>
          <Order dishes={this.state.dishes} order={this.state.order} />
          <Inventory
            addDish={this.addDish}
            loadSampledishes={this.loadSampledishes}
          />
        </div>
      </>
    )

  }
}

export default App;