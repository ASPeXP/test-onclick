import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

export default function Expenses() {
  const {number, isLoading, error } = useSelector( (state) => state.finder)
   console.log(number)
  return (
    <div>Number in expense: {number}</div>
  )
}
