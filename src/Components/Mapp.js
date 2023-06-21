import React from "react";
import LocationPin from './LocationPin'
import GoogleMapReact from 'google-map-react'


// const Mapp = () => {
//   return (
//     <div>
//       {/* <Map google={props.google} zoom={14}>
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />

//         <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
//       </Map> */}
//     </div>
//   );
// };
const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;
// export default GoogleApiWrapper({
//   apiKey: "YOUR_GOOGLE_API_KEY_GOES_HERE",
// })(Mapp);
