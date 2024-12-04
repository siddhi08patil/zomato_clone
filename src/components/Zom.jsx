import React from 'react'

const Zom = () => {
  return (
    <div id='zoom'>
      <div id="imgg">
        <img src='zdo-removebg-preview.png' height="500px" width="300px"/>
      </div>
      <div id='information'>
        <h1>Install Zomatoo</h1>
        <h4>We will send you a link, open it on your phone to download the app</h4>
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="email" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">get</button>
    </form>
      </div>
    </div>
  )
}

export default Zom
