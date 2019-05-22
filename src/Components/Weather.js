// NEW WAY using ES6 arrow functions without CLASS COMPONENT
import React from 'react';

const Weather = props => (
        <div>
            { props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
            { props.temperature && <p>Tempurature: {props.temperature}</p> }
            { props.humidity && <p>Humidity: {props.humidity}</p> }
            { props.description && <p>Conditions: {props.description}</p> }
            { props.error && <p>{props.error}</p>}
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