import { Component } from 'react';
import s from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = uuidv4();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.container}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            <p className={s.form__label}>Name</p>
            <input
              type="text"
              name="name"
              className={s.form__name}
              value={name}
              onChange={this.handleInputChange}
              id={this.nameId}
              placeholder="Enter name"
              required
            ></input>
          </label>
          <label>
            <p className={s.form__label}>Number</p>
            <input
              type="tel"
              name="number"
              className={s.form__name}
              value={number}
              onChange={this.handleInputChange}
              maxLength="9"
              minLength="7"
              pattern="[0-9]{3}-{0,1}[0-9]{2}-{0,1}[0-9]{2}"
              required
              placeholder="123-45-67"
            ></input>
          </label>
          <button
            className={s.form__button}
            type="submit"
            disabled={name === '' || number === ''}
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
