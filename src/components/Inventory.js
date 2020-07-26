import React from 'react';
import AddDishForm from './AddDishForm';
import EditDishForm from './EditDishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.dishes).map(key => <EditDishForm dish={this.props.dishes[key]} />)}
        <AddDishForm addDish={this.props.addDish} />
        <button onClick={this.props.loadSampledishes}>Load Sample dishes</button>
      </div>
    )
  }
}

export default Inventory;