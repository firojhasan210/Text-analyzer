import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
    return (
        <nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <a className ="navbar-brand" href="/">{props.title}</a>
            <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
  
            <div className ="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className ="navbar-nav mr-auto">
                <li className ="nav-item active">
                  <a className ="nav-link" href="/">Home <span className ="sr-only"></span></a>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href="/">Link</a>
                </li>
              </ul>
      {/* <ul>
        <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" for="form1">Search</label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fa fa-search"></i>
        </button>
        </div>
      </ul> */}
             </div>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
      </nav>
    )
}

Navbar.propTypes = {
          title: PropTypes.string
}
// default props **********

// Navbar.defaultProps = {
//   title : 'Set title here'
// }


