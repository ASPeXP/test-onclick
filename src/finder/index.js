import React, {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {GetRandomSuccess, isLoadingRandomNumber} from './finderSlice'



export function Finder() {
   
   const {number, isLoading, error } = useSelector( (state) => state.finder)
   console.log(number)
   const dispatch = useDispatch()

   const GetRandomNumber = () => {
    dispatch(isLoadingRandomNumber())
    dispatch(GetRandomSuccess())
  }

  return (
    <>
    Number: {number}
    <div>Finder</div>
    <button onClick={GetRandomNumber}>Get number</button>
    </>
    
  )
}
