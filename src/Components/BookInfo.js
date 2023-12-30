import React from "react";

const BookInfo=({bookinfo})=>{
    return(
        <div>
          
        {bookinfo.map((book) => (
          <div key={book.id} className="bookinfo">
            <div>
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            <p>Description: {book.volumeInfo.description}</p>
            </div>
            <div>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />

            </div>
            
          </div>
        ))}
      
    </div>
  );
};



export default BookInfo;