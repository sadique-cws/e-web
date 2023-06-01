import React from 'react'

const Header = () => {
  return (
    <nav className="header">
        <div className="logo"><h1>E-Web.com</h1></div>
        <div className="search">
            <form action="">
                <input type="text" className="control" />
                <input type="submit" value="Go" className="btn" />
            </form>
        </div>
        <div className="links">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Our Teams</a>
            <a href="">Our Vision</a>
        </div>
    </nav>
  )
}

export default Header