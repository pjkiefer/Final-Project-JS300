import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPlayer from 'react-player';

class APOD extends React.Component{

    render(){
        const type = this.props.mediaType;

        return(
            <div style={{textAlign:'center'}}>
                <p className='apodTitle'>Astronomy Picture of the Day</p>
                <div>
                    <span className='apodDateLabel'>Date</span>
                    <DatePicker
                        selected={this.props.apodDate}
                        onChange = {this.props.setDate}
                        dateFormat = 'yyyy-MM-dd'
                        className = 'apodDateInput'
                    />
                    
                </div>
                <hr style={{marginTop:'20px',color:'rgb(29, 64, 73)', marginBottom:'20px'}}/>
                <div>
                    <h4 className='apodH4'>{this.props.title}</h4>
                    <p className='APOD-p'>{this.props.explanation}</p>
                    {type === 'video' && 
                        <div>
                            <ReactPlayer className='apod-iframe-div' url={this.props.imageUrl} playing ={true} controls = {true} volume={0.8}  />
                        </div>
                    }
                    {type !== 'video' && 
                        <img src={this.props.imageUrl} alt='APOD' style={{maxWidth:'95%',height:'auto'}}/>
                    }
                    
                </div>
            </div>
        )
    }
    componentDidMount() {
        const today = new Date();
        this.props.setDate(today);
    }
}
export default APOD;