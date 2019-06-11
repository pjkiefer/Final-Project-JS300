import React, { Component } from 'react'

import './menuContent.css'

class MenuContent extends Component {
  

  render() {
    return (
      <div className="menu">
        <div className='menu-item' onClick = {()=> this.props.setPageClick('HOME')}>
            Home 
        </div>
        <div className='menu-item' onClick = {()=> this.props.setPageClick('APOD')}>
            APOD
        </div>
        <div className='menu-item' onClick = {()=> this.props.setPageClick('SEARCH')}>
            Image and Video Library
        </div>
        
      </div>
    )
  }
}


export default MenuContent
