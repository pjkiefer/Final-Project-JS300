import React from 'react';
import './App.css';

class SearchResult extends React.Component{

    render(){

        const mediaType = this.props.value.data[0].media_type;
        let link = '';
        if(mediaType !== 'audio'){
            link = this.props.value.links[0].href;
        }
        
        const desc = this.props.value.data[0].description;
       
        return(
            <div>
                {mediaType === 'audio' && 
                    <div></div>}
                {mediaType !== 'audio' && 
                    <div className='searchResultDiv' onClick ={(e)=> this.props.onTitleClick( link, desc)}>
                        <p>{this.props.value.data[0].title}</p>
                    </div>
                }
            </div>
        )
    }
}
export default SearchResult;