import React from 'react'
import {useSelector } from 'react-redux'

function setCookie(cookieName, cookieValue, expiryHour) {
  let d = new Date();
  d.setTime(d.getTime() + expiryHour * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
}

function getCookie(cookieName) {
  let name = cookieName + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}


 function checkCookie(cookieName) {
  let cookie = getCookie(cookieName);
  if (cookie !== '') {
    console.log(cookie + 'exist');
  } else {
    console.log('cookie doesnot exist set the cookie again');
  }
}


 function removeCookie(cookieName, path = '/') {
  document.cookie =
    cookieName + `=; Path=$; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export default function Expenses() {
  const {number, isLoading, error } = useSelector( (state) => state.finder)
   console.log(number)
  return (
    <>
    <div>Number in expense: {number}</div>
    <div>Number from Cookies : { getCookie('myNumber') }</div>
    </>
  )
}
