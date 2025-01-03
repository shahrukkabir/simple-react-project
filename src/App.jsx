import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'

function App() {

  return (
    <>
      
      <Header></Header>
      <div className='md:flex justify-center items-center max-w-7xl p-6 mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
