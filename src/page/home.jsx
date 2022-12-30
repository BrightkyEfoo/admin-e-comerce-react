import TopBar from "../Components/TopBar";
import styled from 'styled-components'
import SideBar from "../Components/SideBar";
import ContentPage from "../Components/ContentPage";
import Chart from "../Components/Chart"
import {userData} from "../Data"
import Widgets from "../Components/Widgets";
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import UserList from "../Components/UserList";
import User from "../Components/User";
import NewUser from "../Components/NewUser";
import Products from "../Components/Products";
import Product from "../Components/Product";
import NewProduct from "../Components/NewProduct";
const Main = styled.div`
  display : flex;
  flex-direction:raw ;
  z-index : 1;
  width:100% ;
`;
const Container = styled.div`
  position: sticky;
`
const SubMain = styled.div`
  width: 82% ;
`


const home = () => {
  return (
    <Router>
      <Container>
        <TopBar/>
        <Main>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <SubMain>
                <ContentPage/>
                <Chart DatA = {userData} Grid DataKey = "Active User" Tit = "Sales Analytics" />
                <Widgets/>
              </SubMain>
            </Route>
            <Route exact path="/users">
              <SubMain>
                <UserList />
              </SubMain>
            </Route>
            <Route path="/users/newUser">
              <SubMain>
                <NewUser/>
              </SubMain>
              
            </Route>
            <Route path="/users/:UserID">
              <SubMain>
                <User/>
              </SubMain>
            </Route>
            <Route exact path="/products">
              <SubMain> 
                <Products/>
              </SubMain>
            </Route>
            <Route path="/products/newProduct">
              <SubMain>
                <NewProduct/>
              </SubMain>
            </Route>
            <Route path="/products/:ProductId">
              <SubMain>
                <Product/>
              </SubMain>
            </Route>
            
          </Switch>
        </Main>
      </Container>   
    </Router>
    )
}

export default home