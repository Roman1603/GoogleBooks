import React from 'react';
import ListOptions from '../ListOptions/ListOptions'

const BookList = (props) => {
  return (
    <div className='list'>
      {
        props.booklist && props.booklist.map((book, i) => {
          return <ListOptions
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            price={book.saleInfo.listPrice}
            discription={book.searchInfo.textSnippet}
          />
        })
      }
    </div>
  )
}

export default BookList;