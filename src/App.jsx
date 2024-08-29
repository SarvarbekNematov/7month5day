import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Button } from '@mui/material'
import { Actions } from './redux/actions'
import Cards from './components/cards'
import { useEffect } from 'react'
import { useAxios } from './hooks/useAxios'

function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  
  useEffect(() => {
    useAxios().get("products").then((res) => {
      dispatch({type:Actions.GET_DATA , payload: res.data})
    })
  },[])
  return (
    <>
    <div className='flex flex-wrap justify-center gap-5 '>
      {products.map((item) =>  <Cards item={item}/>)}
     
    </div>
    </>
  )
}

export default App
