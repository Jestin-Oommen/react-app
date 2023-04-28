import React from 'react'//rfc
import PropTypes from 'prop-types'//impt
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" typey="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li>
          </ul>
          {/* <li className="nav-item">
            <Link className="nav-a" to="/"  >
              Contact
            </a>
            {/* <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="/">Action</a></li>
              <li><Link className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" href="/">Something else here</a></li>
            </ul> */}
          {/* </li> */} 
          {/* <li className="nav-item">
            <Link className="nav-a disabled">Disabled</a>
          </li> */}
      
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px',width:'30px',cursor:'pointer',border:'2px solid',borderColor:'black'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px',width:'30px',cursor:'pointer',border:'2px solid',borderColor:'black'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px',width:'30px',cursor:'pointer',border:'2px solid',borderColor:'black'}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px',width:'30px',cursor:'pointer',border:'2px solid',borderColor:'black'}}></div>
          <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '30px',width:'30px',cursor:'pointer',border:'2px solid',borderColor:'black'}}></div>
          <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '30px',width:'30px',cursor:'pointer',border:'2px solid',borderColor:'black'}}></div>
        </div>
        {/* <div className={`"form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.backgroundMode}  id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ToggleMode</label>
        </div> */}
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string,
    aboutText: PropTypes.string,//pts
}

Navbar.defaultProps={
    title: 'set title here '
}