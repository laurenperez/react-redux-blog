import React from "react";
import { connect } from "react-redux";

// this gives our component "articles" from state
//which lives in the redux store
const mapStateToProps = state => {
  return { articles: state.articles }
}

// here we pass the state object to a middle component
const ConnectedList = ({articles}) => (
  <ul>
  {articles.map((el, index) => (
    <li key={index}>{el.title}</li>
  ))}
  </ul>
)

//List uses connect() to get state from redux and apply it to some JSX
const List = connect(mapStateToProps)(ConnectedList)

export default List
