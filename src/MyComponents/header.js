import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
            {props.title}
        </div>
      </nav>
  )
}
Header.propTypes={
  title:PropTypes.string
}
