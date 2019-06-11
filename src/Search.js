import React from 'react';
import SearchResult from './SearchResult';



class Search extends React.Component{

    render(){
        const searchData = this.props.data;
        let dataFound = false;
        let imageFound = false;
        if(searchData){
            if(searchData.collection.items.length > 0){
                dataFound = true;
            }
        }
        if(this.props.searchImg){
            imageFound = true;
        }
        let data;
        if(dataFound === true){
            data = searchData.collection.items.map((data, idx)=>
                <SearchResult 
                    value = {data} 
                    key= {idx} 
                    onTitleClick = {this.props.onTitleClick.bind(this)}
                />)
            
        }else if(!this.props.searchInput){
            data = <div></div>
        }else{
            data = <p className='APOD-p'>No Results</p>
        }
        const collapse = this.props.setCollapseBool;
        
        return(
            <div style={{textAlign:'center'}}>
                <p className='apodTitle'>NASA Image and Video Library</p>
                <input type='search' id='librarySearch' placeholder='search term' className='apodDateInput' tabIndex='1' onChange={this.props.change}/>
                <button className='apodSearch' onClick={this.props.searchHandler}>Search</button>
                <hr style={{marginTop:'20px',color:'rgb(29, 64, 73)', marginBottom:'20px'}}/>

                <button style={{width:'100%', height: '20px', fontSize:'12px'}} onClick={this.props.collapse}>Show / Hide Results</button>
                {collapse === false && 
                    <div>{data}</div>
                }
                {collapse === true && <div></div>}
                
                <hr style={{marginTop:'20px',color:'rgb(29, 64, 73)', marginBottom:'20px', width:'100%'}}/>
                
                <div>
                    <p className='APOD-p' dangerouslySetInnerHTML = {{__html:this.props.description}}/>
                    {imageFound === true && <img src={this.props.searchImg} alt='clicked'></img>}
                </div>
            </div>
        );
    }
}
export default Search;