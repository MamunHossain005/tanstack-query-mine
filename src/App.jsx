import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-5'>Tanstack Table Practice</h1>
      <div className='text-center space-x-2'>
        <Link to={'/withoutQuery'}>
          <button className='btn btn-primary btn-outline'>Without Query</button>
        </Link>
        <Link to={'/withQuery'}>
          <button className='btn btn-secondary btn-outline'>With Query</button>
        </Link>
        <Link to={'/paginatedQuery'}>
          <button className='btn btn-accent btn-outline'>Paginated Query</button>
        </Link>
        <Link to={'/withInfiniteQuery'}>
          <button className='btn btn-accent btn-outline'>Infinite Query</button>
        </Link>
        <Link to={'/tasks'}>
          <button className='btn btn-accent btn-outline'>Tasks</button>
        </Link>
        <Link to={'/tasksOptimistic'}>
          <button className='btn btn-accent btn-outline'>Optimistic updates of Tasks</button>
        </Link>
      </div>
    </>
  )
}

export default App
