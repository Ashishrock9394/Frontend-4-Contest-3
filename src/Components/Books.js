import React,{useState} from 'react'
import axios from 'axios'


const Books=({setBookInfo,bookinfo})=>{
    
    const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
    
    
    async function fectchDetails(){
        try{
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
           
        console.log(response.data.items)
        setBooks(response.data.items)

        }
        catch(e){
            console.log(e.message)
        }
        
    }
    return(
        <div>
            <div className='inputdata'>
                <div><img src="./logo.png" alt='img'></img></div>
                <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='Search for the book you want to read it now Sherlock Holmes,Harry potter...'/>            
                <button onClick={fectchDetails}>Search</button>
                <div><img src="./bx_bx-book-heart.png" alt='img'></img></div>
                <div><img src="./Vector.png" alt='img'></img></div>
                <div><img src="./Group.png" alt='img'></img></div>
                <div><img src="./image.png" alt='img'></img></div>
                
                
            </div>
        <div>
            
        {books.map((book) => (
          <div key={book.id} className='books'>

            
            <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} onClick={()=>setBookInfo(...bookinfo,book)} />
          </div>
        ))}
      
    





            </div>
           


        </div>
    )
}

export default Books