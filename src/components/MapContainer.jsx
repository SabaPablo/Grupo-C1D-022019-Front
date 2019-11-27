import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from "react";

export class Container extends React.Component {

render() {
        const style = {
            width: '75vw',
            height: '100vh'
        };

        return (
            <div style={style}>
                <Map google={this.props.google}
                     style={{width: '50%', height: '50%', position: 'relative'}}
                     zoom={15}
                     initialCenter={{
                         lat: -34.706501,
                         lng: -58.27853
                     }}>
                    <Marker
                        title={'Huevazos a Saba.'}
                        position={{lat: -34.706501, lng: -58.27853}} />
                </Map>
            </div>
        )
    }
}





export default GoogleApiWrapper({
    apiKey: 'AIzaSyBBWDc-nAFlszR3nqC4oEoTaBgXd3M-hfs'
})(Container);



