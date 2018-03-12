import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from "./actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super()
    this.state = {
      title: ""
    }
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title } = this.state
    this.props.addArticle({ title })
    this.setState({ title: "" })
  }

  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={this.handleChange} />
        <button type="submit">ADD</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)



export default Form
