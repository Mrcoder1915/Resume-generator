import './App.css'
import { useEffect } from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import ProtectedRoutes from './components/protectedRoute/ProtectedRoutes'
import SignUp from './pages/signUpPage/SignUp'
import Home from './pages/homePages/Home'
import RootLayout from './sharedComponents/layouts/Root-Layout'
import CreatedResume from './pages/CreatedResume/CreatedResume'
import GenerateResume from './pages/GenerateResume/GenerateResume'
import Api from './axios/Api'

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route element = {<RootLayout />}>
              <Route path = "/" element = {<Home />}/>
              <Route path = "/SignUp" element = {<SignUp />}/>
                <Route element = {<ProtectedRoutes />} >
                    <Route path='/CreatedResume' element = {<CreatedResume />} />
                    <Route path='/GenerateResume/:id' element = {<GenerateResume />} />
                </Route>
            </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
