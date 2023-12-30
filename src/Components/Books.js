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
                <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='Search for the book you want to read it now Sherlock Holmes,Harry potter...'/>            
                <button onClick={fectchDetails}>Search</button>
                
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