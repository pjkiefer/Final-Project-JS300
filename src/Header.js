import React from 'react';
import './App.css';
import Menu from './Menu';


class Header extends React.Component{

    render(){
    return(
        <div className="App-title">
            <div style={{float:'left',marginTop:'20px',marginLeft:'15px'}}>
                <Menu
                    newPageClick = {this.props.newPageClick}
                />
                
            </div>
            <h1 style={{paddingTop:'15px'}}>NASA Images from Space</h1>
        </div>
    );
    }

}
export default Header;