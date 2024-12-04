import React from 'react'

const Nav = () => {
  return (
    <div id='all'>
      <div id="getapp">
        <h6>Getapp</h6>
      </div>
      <div id='navall'>
        <h6>Investor Relation</h6>
        <h6>Book Restraunt</h6>
        <h6>Signup</h6>
        <h6>Login</h6>
      </div>
      <div id='info'>
        <h1>Zomatoo</h1>
        <h3>Discover the best food & drinks in Pune</h3>
      </div>
      <div id='question'>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
    </div>
  )
}

export default Nav
