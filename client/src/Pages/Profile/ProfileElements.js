import styled from "styled-components";
import { Button, Card, Form, Input, Label, NavLink } from "reactstrap";

export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  z-index: 0;
  overflow-x: auto;
  background: #EAE7E7;
  flex: 1;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 25rem;
`
export const ProfileImage = styled.img`
    position: absolute;
    width: 12%;
    top: 19rem;
    left: 3rem;
    border-radius: 100%;
    background: white;
`
export const ContainerCard = styled(Card)`
  position: absolute;
  left:25%;
  height: 45rem;  
  width: 60rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  top: 10%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  background: white;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const StandingCard = styled(Card)`
  left:86%;
  position: absolute;
  height: 9rem;  
  width: 8rem;
  text-align: center;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  top: 50%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  background: white;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const NameTitle = styled.h1`
  position: absolute;
  display: inline-block;
  top: 18rem;
  left: 20rem;
  color: white;
  text-decoration-thickness: 1px;
  font-size: 2.5rem;
  font-family: 'Bebas Neue',sans-serif;
`;

export const PostsTitle = styled.h1`
  position: absolute;
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: from-font;
  top: 34rem;
  left: 45%;
  color: black;
  text-decoration-thickness: 1px;
  font-size: 2.5rem;
  font-family: 'Bebas Neue',sans-serif;
`;

export const standingsTitle = styled.h1`

  color: black;
  position: absolute;
  text-decoration-thickness: 1px;
  left:10px;
  text-align: center;
  font-weight: bold;
  margin-top:50px;
  font-size: 2.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;


export const UsernameTitle = styled.h1`
  position: absolute;
  display: inline-block;
  top: 21rem;
  left: 20rem;
  color: white;
  /*{color: rgb(0, 0, 0, 0.5);}*/
  font-size: 1.8rem;
  
  font-weight: 200;
`;
export const StyledButton = styled(Button)`
  position: absolute;
  top: 5%;
  right: 4%;
  border: none;
  justify-content: center;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.8);
  background: linear-gradient(to right, #ff3838 0%, #ff4d4d 0%, #ffffff 2000%);
`;

export const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 25rem;
  left: 16%;
  color: black;
  font-weight: bold;
  &:hover {
      color: #c31432;
      transition: 200ms ease-in;
  }
`

export const TeamTitle = styled.h1`
  position: absolute;
  top: 18rem;
  right: 7%;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-family: 'Bebas Neue',sans-serif;
`;

export const DropDownContainer = styled("div")`
  width: 10.5rem;
  margin: 0 auto;
  position: absolute;
  top: 21rem;
  right: 4.5%;
`;
export const PostContainer = styled("div")`
  width: 45rem;
  margin: 0 auto;
  position: absolute;
  top: 39rem;
  left: 32%;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 0.8rem;
  color: red;
  text-align: center;
  background: #ffffff;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: red;
  font-size: 0.8rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;