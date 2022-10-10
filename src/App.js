
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Question from './components/Question/Question';
import Statistics from './components/Statistics/Statistics';

import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router=createBrowserRouter([
    {
path:'/',
element:<Main></Main>,
errorElement:<Error></Error>,
children:[
  {
    path:'/',
    loader:async()=>{
      return fetch('https://openapi.programming-hero.com/api/quiz');
    },
    element:<Topics></Topics>,
   
  },
  {
    path:'/topic/:id',
    loader:async({params})=>{
return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
    },
    element:<Question></Question>

  },
 
  {
    path:'/statistics',
    element:<Statistics></Statistics>
  },
  {
    path:'/blogs',
    element:<Blogs></Blogs>
  }
]
    }
   
 
  ]);
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
