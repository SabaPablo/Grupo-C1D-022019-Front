/*
import React, { useEffect } from 'react';
import {GoogleMapReact} from 'google-map-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = () => {

    const style = {
        width: '75vw',
        height: '100vh'
    };

    const defaultProps = {
        center: {
            lat: -34.706501,
            lng: -58.27853
        },
        zoom: 11
    };

    useEffect( ()=> {
    Geocode.setApiKey(process.env.REACT_APP_GMAP_KEY);
    console.log( Geocode.fromAddress("Mitre 914, Quilmes"));
    });


    return (
        // Important! Always set the container height explicitly
        <div style={style}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
             <AnyReactComponent
                    lat={-34.706501}
                    lng={-58.27853}
                    text="Huevazos a Saba 12/12"
                />
            </GoogleMapReact>
        </div>
    );
};






export default MapContainer;


*/
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import React from "react";
import {AxiosInstance as axios} from "axios";

export class Container extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.gcode = {lat: -34.706501 , lng: -58.27853}

        this.state={
            lat:null,
            lng:null,
            markers:[]
        }
    }



    mapClicked = (event) =>{
        const { markers } = this.state;
        this.setState({
            markers:[
                {
                    position:event.latLng,
                    key: Date.now(),
                    defaultAnimation: 2,
                },
                ...markers
            ]

        });
        console.log(event,"clickmap");
    };

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
                         lat: this.gcode.lat,
                         lng: this.gcode.lng
                     }}
                     onClick={this.mapClicked}>
                    <Marker
                        title={'Huevazos a Saba.'}
                        position={{lat: this.gcode.lat, lng: this.gcode.lng}}
                    />
                </Map>
            </div>
        )
    }
}





export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GMAP_KEY
})(Container);
