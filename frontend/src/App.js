import {useEffect} from 'react'
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import React from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

function App() { 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe(selectIsAuth))
  }, [])

  const isAuth = useSelector(selectIsAuth)
  
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<FullPost />} />
          <Route path='/posts/:id/edit' element={<AddPost />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
