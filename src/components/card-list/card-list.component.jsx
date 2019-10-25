import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'

export const CardList = (props) => (
  <div className='card-list'>
    <div className ='card-list-bar'> 
      <p className ='bar-title'>Title</p>
      <p className ='bar-author'>Author</p>
      <p className ='bar-pages'>Pages</p>
    </div>    
    {props.books.map(book=> (
      <Card key={book.id} book={book}/>
    ))}
  </div>
)