import React from 'react';
import './ListOptions.css';

const ListOptions = (props) => {
  return (
    <div className='list-container'>
      <a href={props.link} target="_blank"
        rel="noopener noreferrer">
        <img src={props.image} alt="" /></a>
      <div className='disc'>
        <h2>Title: {props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>Discription: {props.discription}</p>
      </div>
    </div>
  )
}

export default ListOptions;