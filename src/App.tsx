import './App.css'
import BookmarkContextProvider from './Context/BookmarkContext'
import RouterComponent from './router/RouterComponent'

function App() {


  return (
    <>
      <BookmarkContextProvider>
        <RouterComponent />
      </BookmarkContextProvider>
    </>
  )
}

export default App
