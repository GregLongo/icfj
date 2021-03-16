import { React, Component } from "react"
import styled from "@emotion/styled"
import Hamburger from "hamburger-react"

const Menu = styled.div`
  top: 0;
  z-index: 2;
  position: fixed;
  transition: transform 0.3s ease;
  height: 100vh;
  width: 600px;
  padding: 32px 32px 32px 220px;
  background: #ddaf24;
  transform: ${props =>
    props.isOpen ? "translate(-50%)" : "translate(-120%)"};
  @media (min-width: 480px) {
    transform: ${props =>
      props.isOpen ? "translate(-50%) skew(-15deg)" : "translate(-120%)"};
  }
`
const Toggle = styled.div`
  cursor: pointer;
  outline: none;
  z-index: 1000;
  position: relative;
  &.open {
    position: fixed;
    top: 60px;
    left: 100px;
  }
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  span {
    list-style: none;
    text-decoration: none;
    color: white;
    font-family: ubuntu;
    font-size: 1.5em;
    line-height: 2;
    padding-left: 40%;
    white-space: nowrap;
    cursor: pointer;
  }
`
class MenuContainer extends Component {
  closeMenu = id => {
    document.getElementById(id).scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    })
    this.props.onLinkClick()
  }
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
  render() {
    return (
      <Menu isOpen={this.props.open}>
        <List>
          <ListItem>
            <span onClick={() => this.closeMenu("Mission-To")}>Mission</span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Joyce-To")}>
              A Letter from the President
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Change-To")}>
              Our Vast Network
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Resources-To")}>
              New Resources
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Networks-To")}>
              Investigative Networks
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Innovation-To")}>
              Innovation
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Sustainability-To")}>
              Sustainability
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Leadership-To")}>
              Thought Leadership
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Honorees-To")}>Honorees</span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Financials-To")}>
              Financials
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Board-To")}>
              Board Members
            </span>
          </ListItem>
          <ListItem>
            <span onClick={() => this.closeMenu("Donors-To")}>Donors</span>
          </ListItem>
        </List>
      </Menu>
    )
  }
}

class MenuSlant extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      open: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = e => {
        var scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop
        if (this.state.open && scrollTop > 300) {
          this.toggleMenu()
        }
      }
    }
  }
  toggleMenu() {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    return (
      <div>
        <Toggle className={`${this.state.open ? "open" : ""}`}>
          <Hamburger
            color={this.state.open ? "white" : "#757575"}
            size={80}
            toggled={this.state.open}
            toggle={this.toggleMenu}
          />
        </Toggle>
        <MenuContainer onLinkClick={this.toggleMenu} open={this.state.open} />
      </div>
    )
  }
}

export default MenuSlant
