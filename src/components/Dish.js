import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <>
        <li className="menu-fish">
          <div className="menu-left">          <img src={image} alt={name} />
          </div>
          <div className="menu-right"><h3 className="fish-name">{name}
            <span className="price">{formatPrice(price)}</span>
          </h3>
            <p>{desc}</p>
            <button
              disabled={!isAvailable}
              onClick={() => { this.props.addToOrder(this.props.index); }}>
              {isAvailable ? 'Add To Order' : 'Sold Out'}
            </button></div>

        </li>
      </>
    )
  }
}

export default Dish;