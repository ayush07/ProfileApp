import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, updateData } from '../actions';

import '../assets/css/app.css';
class Form extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  state = {
    name: '',
    email: '',
  };
  nameHandler = (event) => {
    let val = event.target.value;
    this.setState({ name: val });
  };
  emailHandler = (event) => {
    let val = event.target.value;
    this.setState({ email: val });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateData(this.state);
  };
  render() {
    console.log(this.state);
    console.log(this.props.data);
    return (
      <div>
        <form
          className='ui form'
          onSubmit={this.handleSubmit}>
          <img
            alt='pic'
            className='ui small circular image center'
            src={require('../assets/images/pic.png')}
            style={{ padding: '10px' }}></img>
          <div className='field marg'>
            <label>
              <h2>Name</h2>
            </label>
            <input
              onChange={this.nameHandler}
              type='text'
              name='name'
              placeholder={this.props.data.name}></input>
          </div>
          <div className='field marg'>
            <label>
              <h2>Email</h2>
            </label>
            <input
              onChange={this.emailHandler}
              type='text'
              name='email'
              placeholder={this.props.data.email}></input>
          </div>
          <div className='marg'>
            <button className='ui red button fluid marg'>
              <h2>Confirm</h2>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { data: state.data };
};
export default connect(mapStateToProps, {
  fetchData,
  updateData,
})(Form);
