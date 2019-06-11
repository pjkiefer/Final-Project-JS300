import React from 'react';
import pic from './Images/beer.jpg';

class Home extends React.Component{
    

    render(){
        return(
            <div style={{textAlign:'center'}}>
                
                <p className='App-p'><a href="https://www.nasa.gov/" rel="noopener noreferrer" target="_blank">NASA</a> opened for business on 
                    October 1, 1958 and for the last 60 years has gone to the moon, 
                    launched probes to Mars and more.  Two of the popular image services available 
                    from NASA are the Astronomy Picture of the Day (APOD) and the Image Library.
                </p>
                
                <p style={{marginTop:'10px'}}><button onClick={this.props.apodButtonClick}>APOD</button></p>
                <p style={{marginTop:'10px'}}><button onClick={this.props.searchButtonClick}>Image Library Search</button></p>

                <img src={pic} alt='pic'/>
            </div>
        );
    }

}
export default Home;