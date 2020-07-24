import React from 'react';

class AddDishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  //is there a way to do all of this at once?

  createDish = event => {
    event.preventDefault();
    const dish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      //could convert to boolean
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addDish(dish);
    //refresh the form
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createDish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef} type="text" placeholder="Status">
          <option type="available">Fresh!</option>
          <option type="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc">
        </textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Dish</button>
      </form>
    )
  }
}

export default AddDishForm;