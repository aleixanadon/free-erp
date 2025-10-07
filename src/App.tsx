import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      {/* must test in real phone before changing to p-4 */}
      <main className='p-3'>
        <Outlet />
      </main>
    </>
  )
}

export default App
