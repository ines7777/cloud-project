
import "./App.css";
import Navbar from "./Components/Navbar";
import Map from "./Components/Mapp";




import React from 'react'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

const App = () => (
  <div className="App">
    
    <Navbar />
    <Map location={location} zoomLevel={17} /> {/* include it here */}
    
    
  </div>
)

export default App
  
  