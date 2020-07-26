import React from 'react';

class EditDishForm extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" />
        <input type="text" name="price" />
        <select type="text" name="status">
          <option type="available">Fresh!</option>
          <option type="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" />
        <input type="text" name="image" />

      </div>
    )
  }
}

export default EditDishForm;