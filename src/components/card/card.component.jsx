import React from 'react';
import './card.styles.css';

function deleteCard(e){
  console.log('Delete card');
}

export const Card = (props) => (
  <div className = "card">
    <p className='title'>{props.book.title}</p>
    <p className = 'author'>{props.book.author}</p>
    <p className = 'pages'>{props.book.pages}</p>
    <button className = 'deleteCard' onClick={deleteCard}>X</button>
  </div>
)

