import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Container, Form, Label, Input, Button } from "components/ContactForm/ContactForm.styled";

export class ContactForm extends Component {
  state = {
      name: '',
      number: ''
  }
  nameInputId = nanoid(5);
  numberInputId = nanoid(5);
  
  handleChange = (e) => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
    
  reset = () => {
    this.setState({name: '', number: ''})
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name <Input
              id={this.nameInputId}
              type="text"
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor={this.numberInputId}>
            Number <Input
              id={this.numberInputId}
              type="tel"
              name='number'
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button>Add contact</Button>
        </Form>
    </Container>
  )};
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}