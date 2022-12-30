import styled from 'styled-components'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
import { Link } from 'react-router-dom';


const Container = styled.div`
    display : flex;
    width : 16vw;
    position : sticky;
`

const Wrapper = styled.div`
    position : sticky;
    top : 50px;
    z-index : 1;
    flex :1;
    height:calc(100vh - 50px);
    background-color : rgb(251,251,251);

`
const Part = styled.div`

`

// const Div = styled.div`
//     position : sticky;
//     top : 0;
//     background : blue;
//     flex : 5;
// `;
const List = styled.ul`
    padding : 4.5px;
    list-style : none;
    padding-inline-start: 15px;
    color : #555;
`
const Title = styled.p`
    font-size : 13px;
    color : rgb(187,186,186);
`
const ListItem = styled.li`
    margin : 7px;
    display : flex;
    align-items : center;
    border-radius : 5px;
    text-decoration : none;
    &:hover,
    &.active {
        background-color : rgb(240,240,255);
    }
`
const Icon = styled.div`
    padding : 5px;
    display : flex;
    align-items : center;
    margin-right:5px;
`
const SideBar = () => {
  return (
      <>
        <Container>
            <Wrapper>
                <Part>
                    <List>
                        <Title>Dashboard</Title>
                        <Link to = '/' style = {{textDecoration : 'none'}}>
                            <ListItem className = 'active'><Icon><LineStyle/></Icon> Home</ListItem>
                        </Link>
                        <ListItem><Icon><Timeline/></Icon> Analytics</ListItem>
                        <ListItem><Icon><TrendingUp/></Icon> Sales</ListItem>
                    </List>
                    <List>
                        <Title>Quick Menu</Title>
                        <Link to = '/users' style = {{textDecoration : 'none'}}>
                            <ListItem ><Icon><PermIdentity/></Icon> Users</ListItem>
                        </Link>
                        <Link to = '/products' style = {{textDecoration : 'none'}}>
                            <ListItem><Icon><Storefront/></Icon> Products</ListItem>
                        </Link>
                        <ListItem><Icon><AttachMoney/></Icon>Transactions</ListItem>
                        <ListItem ><Icon><BarChart/></Icon>Reports</ListItem>
                    </List>
                    <List>
                        <Title>Notification</Title>
                        <ListItem><Icon><MailOutline/></Icon> Mail</ListItem>
                        <ListItem><Icon><DynamicFeed/></Icon> Feedback</ListItem>
                        <ListItem ><Icon><ChatBubbleOutline/></Icon> Messages</ListItem>
                    </List>
                    <List>
                        <Title>Staff</Title>
                        <ListItem><Icon><Timeline/></Icon> Manage</ListItem>
                        <ListItem><Icon><WorkOutline/></Icon> Analytics</ListItem>
                        <ListItem><Icon><Report/></Icon> Reports</ListItem>
                    </List>
                </Part>
            </Wrapper>
        </Container>
      </>
  )
}

export default SideBar