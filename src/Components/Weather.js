// NEW WAY using ES6 arrow functions without CLASS COMPONENT
import React from 'react';

const Weather = props => (
        <div className="weather__info">
            { 
                props.city && props.country && <p className='weather__key'>Location: 
                    <span className='weather__value'> {props.city}, {props.country}</span>
                </p> 
            }
            { 
                props.temperature && <p className='weather__key'>Tempurature: 
                    <span className='weather__value'> {props.temperature}</span>
                </p> 
            }
            { 
                props.humidity && <p className='weather__key'>Humidity: 
                    <span className='weather__value'> {props.humidity}</span>
                </p> 
            }
            { 
                props.description && <p className='weather__key'>Conditions: 
                    <span className='weather__value'> {props.description}</span>
                </p> 
            }
            { 
                props.error && <p className='weather__error'> {props.error}</p>}
        </div>  
);

export default Weather;


// OLD WAY USING CLASS COMPONENT

// import React, { Component } from 'react';

// class Weather extends Component {
//     render() {
//         return(
//             <div>
//                 { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
//                 { this.props.tempurature && <p>Tempurature: {this.props.temperature}</p> }
//                 { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
//                 { this.props.description && <p>Conditions: {this.props.description}</p> }
//                 { this.props.error && <p>{this.props.error}</p>}
//             </div>
//         )
//     }
// }

// export default Weather;