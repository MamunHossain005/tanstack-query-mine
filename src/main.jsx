import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WithoutQuery from './pages/WithoutQuery.jsx'
import WithQuery from './pages/WithQuery.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Post from './pages/Post.jsx'
import PaginatedQuery from './pages/PaginatedQuery.jsx'
import WithInfiniteQuery from './pages/WithInfiniteQuery.jsx'
import Tasks from './pages/Tasks.jsx'
import TasksOptimistic from './pages/OptimisticUpdateForMultipleConsumer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  }, 
  {
    path: '/withoutQuery',
    element: <WithoutQuery></WithoutQuery>
  },
  {
    path: '/withQuery',
    element: <WithQuery></WithQuery>
  },
  {
    path: '/withQuery/:id',
    element: <Post></Post>
  },
  {
    path: '/paginatedQuery',
    element: <PaginatedQuery></PaginatedQuery>
  },
  {
    path: '/paginatedQuery/:id',
    element: <Post></Post>
  },
  {
    path: '/withInfiniteQuery',
    element: <WithInfiniteQuery></WithInfiniteQuery>
  },
  {
    path: '/withInfiniteQuery/:id',
    element: <Post></Post>
  },
  {
    path: '/tasks',
    element: <Tasks></Tasks>
  },
  {
    path: '/tasksOptimistic',
    element: <TasksOptimistic></TasksOptimistic>
  }
])

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 2000
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
    </QueryClientProvider>
  </StrictMode>,
)
