import React from 'react'
import Home from './Home';
import APOD from './APOD';
import Search from './Search';
import spinner from './Images/giphySmall.gif';
import Header from './Header';

class BaseClass extends React.Component{
    constructor(props){
        super(props);

        const date = new Date();
        const dateString = this.setDateString(date);
        

        this.state = {
            page: 'HOME',
            openMenu: false,
            apodDate: date,
            apodDateString: dateString,
            apodExplanation:'',
            apodImageType:'',
            apodTitle:'',
            apodIsLoading: false,
            searchIsLoading: false,
            apodImg: '',
            searchResult: '',
            searchTotalHits: 0,
            searchPage: 1,
            error: '',
            searchInput: '',
            searchResultsCollapse: false,
            searchImg:'',
            searchDesc:''
        };
        this.apodButtonClick = this.apodButtonClick.bind(this);
        this.searchButtonClick = this.searchButtonClick.bind(this);
        this.setApodDate = this.setApodDate.bind(this);
        this.searchInputOnChange = this.searchInputOnChange.bind(this);
        this.fetchSearchResult = this.fetchSearchResult.bind(this);
        this.showSearchPicture = this.showSearchPicture.bind(this);
        this.collapseSearchResults = this.collapseSearchResults.bind(this);
        this.changePageClick = this.changePageClick.bind(this);
    }
    
    fetchApodImage(date){
        const dte = this.setDateString(date);
        //const dte = date.toISOString().split('T')[0];
        const url = `https://api.nasa.gov/planetary/apod?date=${dte}&api_key=J69lSYgF3VBluYwmPaby52MY10FMdqOn6xnbbDbI`;
        fetch(url, {mode: 'cors'})
        .then(response=> response.json())
        .then(data=>
            this.setState({
                apodImg: data.url,
                apodExplanation: data.explanation,
                apodImageType: data.media_type,
                apodTitle: data.title,
                apodIsLoading: false
            })
        )
        .catch(error=> this.setState({error:error}));
    };

    fetchSearchResult(){
        
        if(!this.state.searchInput){
            alert('Please enter a search term');
            return;
        }
        this.resetStateOnNewSearch();
        let searchTerm = this.state.searchInput;
        searchTerm = encodeURI(searchTerm);
        const page = this.state.searchPage.toString();
        const url = `https://images-api.nasa.gov/search?q=${searchTerm}&page=${page}`;
        
        fetch(url,{mode:'cors'})
        .then(response=> response.json())
        .then(data=>

            this.setState({
                searchResult: data,
                searchTotalHits: data.collection.metadata.total_hits
            })
        )
    }
    resetStateOnNewSearch(){
        this.setState({
            searchResult: '',
            searchTotalHits: 0,
            searchResultsCollapse: false,
            searchImg:'',
            searchDesc:''
        })
    }
    searchInputOnChange(event){
        this.setState({
            searchInput:event.target.value
        });
        
    }
    changePageClick(newPage){
        this.setState({
            page: newPage
        })
    }
    apodButtonClick(){
        this.setState({
            page:'APOD'
        })
    }
    searchButtonClick(){
        this.setState({
            page:'SEARCH'
        })
    }
    setDateString(d){
        
        let date = [
            d.getFullYear(),
            ('0' + (d.getMonth() + 1)).slice(-2),
            ('0' + d.getDate()).slice(-2)
        ].join('-');
        return date;
    }
    setApodDate(date){
        const now = new Date();
        if(date > now){
            return;
        }else if(date == null){
            return;
        }
        this.setState({
            apodIsLoading:true
        })
        this.fetchApodImage(date);
        this.setState({
            apodDate: date
        })
    }
    showSearchPicture( url, desc){
        
        this.setState({
            searchImg: url,
            searchDesc: desc,
            searchResultsCollapse: true
        })
    }
    collapseSearchResults(){
        const nextCollapseState = !this.state.searchResultsCollapse;
        if(nextCollapseState === false){
            this.setState({
                searchImg:'',
                searchDesc:''
            })
        }
        this.setState({
            searchResultsCollapse: !this.state.searchResultsCollapse
        })
    }
    render(){
        const {page, apodIsLoading, apodImg } = this.state;
        const loadApodImg = apodIsLoading === false ? apodImg : spinner;
        
            return(
                <div>
                    <Header
                        newPageClick = {this.changePageClick}
                    />
                    {page === 'HOME' &&
                        <Home 
                            apodButtonClick ={this.apodButtonClick} 
                            searchButtonClick={this.searchButtonClick}
                        />
                    }
                    {page === 'APOD' &&
                        <APOD
                            apodDate = {this.state.apodDate}
                            explanation = {this.state.apodExplanation}
                            mediaType = {this.state.apodImageType}
                            setDate = {this.setApodDate}
                            imageUrl = {loadApodImg}
                            title = {this.state.apodTitle}
                        />
                    }
                    {page === 'SEARCH' &&
                        <Search
                            change = {this.searchInputOnChange}
                            searchHandler = {this.fetchSearchResult}
                            collapse = {this.collapseSearchResults}
    
                            searchInput = {this.searchInput}
                            data = {this.state.searchResult}
                            onTitleClick = {this.showSearchPicture}
                            searchImg = {this.state.searchImg}
                            description = {this.state.searchDesc}
                            setCollapseBool = {this.state.searchResultsCollapse}
                        />
                    }
                </div>
            );

    }
}
export default BaseClass;