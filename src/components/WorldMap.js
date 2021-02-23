import {React,Component} from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import world from "../maps/world.json";
import styled from '@emotion/styled';
import { gsap } from "gsap" ;


const Button = styled.button`
`
const MapContainer = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	height: 700px
`

const geoUrl = world

const locations =[
	[-124.082840, 40.866516], //Arcata
	[-74.006, 40.7128], //NYC
	[-73.561668, 45.508888], //Montreal
	[139.691711, 35.689487], //Tokyo
	[-0.127758, 51.507351], //London
	[116.407394, 39.904202], //Beijing
	[-43.172897, -22.906847], //Rio
	[144.946014, -37.815018], //Melbourn
	[3.406448, 6.465422], //Lagos
	[37.618423, 55.751244], //Moscow
]

class WorldMap extends Component{
	constructor(props){
		super(props)
		this.state = {
			lat: 3.406448,
			long: 6.465422,
			zoom: 200
		}
	}

	handleReset(e){
		e.preventDefault()
		this.setState({
			zoom:0,
			lat:0,
			long:0
		})
	}

	handleMarkerClick(e, mylat, mylong){
		 e.stopPropagation();
		 	var prevLat = this.state.lat
			gsap.to(prevLat,0.8, {
				value:10000
			})
			console.log(prevLat);
			this.setState({
				lat: mylat,
				long: mylong,
				zoom: 1500
			})

	}

	render(){

	return (
		<div>
		<MapContainer>
		<ComposableMap
			width={1000}
			height={600}
		      projectionConfig={{
		        scale: this.state.zoom,
		       center: [this.state.lat, this.state.long]
		      }}
			>
				<Geographies
				 geography={geoUrl}
				 fill='none'
				 stroke='white'>
				{({ geographies }) =>
					geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
				}
				</Geographies>
				{locations.map(location =>
					<Marker coordinates={location} onClick={e => this.handleMarkerClick(e, location[0],location[1])} >
						<circle r={4} fill="#ddaf24" />
					</Marker>
					)}
		</ComposableMap>
		</MapContainer>
		<Button onClick={e => this.handleReset(e)}>Reset</Button>
		</div>
		)
	}
}

export default WorldMap