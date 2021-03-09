import { React, Component } from "react"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"
import {Link} from "gatsby"

const Menu = styled.div`
	top: 0;
	z-index: 2;
	position: fixed;
	transform: ${ props => props.isOpen ? 'translate(-50%) skew(-15deg)' : 'translate(-120%)' };
	transition: transform .3s ease;
	height: 100vh;
	width: 600px;
	padding: 32px 32px 32px 220px;
	background:#ddaf24;
`
const Toggle = styled.div`
	cursor: pointer;
	outline: none;
		z-index: 1000;
		position: relative;
`
const List = styled.ul`
	list-style: none;
`
const ListItem = styled.li`
a{
	list-style: none;
	text-decoration: none;
	color: white;
	font-family: ubuntu;
	font-size: 1.5em;
	line-height: 2;
	padding-left: 40%;
	white-space: nowrap
}`
class MenuContainer extends Component{
		closeMenu = () => {
		        this.props.onLinkClick();
		    }
		render(){
		return(
			<Menu isOpen={this.props.open}>
				<List>
					<ListItem><Link onClick={this.closeMenu} to="/#Mission">Mission</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Joyce">A Letter from the President</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Change">Our Vast Network</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Resources">New Resources</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Networks">Investigative Networks</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Innovation">Innovation</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Sustainability">Sustainability</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Leadership">Thought Leadership</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Honorees">Honorees</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Financials">Financials</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Board">Board Members</Link></ListItem>
					<ListItem><Link onClick={this.closeMenu} to="/#Donors">Donors</Link></ListItem>
				</List>
			</Menu>
			)
		}
	}

class MenuSlant extends Component {
	constructor(props, context){
		super(props, context);
		this.state={
			open: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu(){
		this.setState({
					open: !this.state.open
				})
		console.log(this.state.open)
	}
	render(){

		return(
			<div>
				<Toggle><Hamburger
				 color= {this.state.open ? "white" : "#757575"}
				 size={80}
				 toggled={this.state.open}
				 toggle={this.toggleMenu}/></Toggle>
				<MenuContainer onLinkClick={this.toggleMenu} open={this.state.open} />
			</div>


			)
	}
}

export default MenuSlant