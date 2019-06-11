import React from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './menuContent';



  class Menu extends React.Component{
      constructor(props){
          super(props);

          this.state = {
              menuOpen: false
              
          }
      }
      openMenu(){
          this.setState({menuOpen: true})
      }
      closeMenu(){
          this.setState({menuOpen: false})
      }
      //setPageClick(page){
      //    this.props.newPageClick(page);
      //}
    render(){

        return(
            <div>
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <MenuContent 
                        closeCallback={this.closeMenu.bind(this)}
                        setPageClick = {this.props.newPageClick}
                    />
                </CheeseburgerMenu>
      
                <HamburgerMenu 
                    isOpen={this.state.menuOpen}
                    menuClicked={this.openMenu.bind(this)}
                    width={32}
                    height={24}
                    strokeWidth={3}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
        )
    }
  }
  export default Menu;