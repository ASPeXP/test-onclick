import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function index() {
  return (
    <>
    <div>Bookkeeper</div>
    <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem"}}>
      <Link to="/">Home</Link>
      <Link to="/invoices">Invoices</Link> | {" "}
      <Link to="/expenses">Expenses</Link>
      <Link to="/finder">Finder</Link>
    </nav>
    </>
  )
}
