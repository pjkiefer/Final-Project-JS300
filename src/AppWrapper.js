import React from 'react';
import Header from './Header';
import BaseClass from './BaseClass';
import './App.css';

class AppWrapper extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            page:'HOME'
        }

        this.setPage = this.setPage.bind(this);
    }

    setPage(page){
        this.setState({
          page: page
        })

      };
    render(){

        return(

            <div>
                <Header
                    setPage = {this.setPage}
                />
                <BaseClass
                    page = {this.state.page}
                />
            </div>
        )
    }

}
export default AppWrapper;