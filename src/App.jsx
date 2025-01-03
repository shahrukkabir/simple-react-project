import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex justify-center gap-6  max-w-7xl p-6 mx-auto'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}>
        </Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
