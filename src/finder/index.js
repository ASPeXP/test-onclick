import React, {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {GetRandomSuccess, isLoadingRandomNumber} from './finderSlice'
import { useCookies } from 'react-cookie'

function setCookie(cookieName, cookieValue, expiryHour) {
  let d = new Date();
  d.setTime(d.getTime() + expiryHour * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

export function Finder() {
   
   const {number, isLoading, error } = useSelector( (state) => state.finder)
   setCookie('myNumber', number, 1)

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
