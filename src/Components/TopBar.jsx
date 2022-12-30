import styled from 'styled-components'
import { LanguageOutlined , NotificationsOutlined, Settings} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';


const Left = styled.div`
    margin-left : 20px;
`

const Right = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`

const Wrapper = styled.div`
    background-color: rgb(240, 240, 240);
    display : flex;
    align-items : center;
    justify-content : space-between;
    position : sticky;
    top : 0;
    z-index : 2;
`

const Logo = styled.span`
    color : blue;
    font-size : 35px;
    font-weight : 900;
    letter-spacing : 2px;
`

const Icon = styled.div`
    margin : 8px;
    cursor : pointer;
`

const TopBar = () => {

  return (
    <>
        <Wrapper>
            <Left>
                <Logo>ADMIN</Logo>
            </Left>
            <Right>
                <Icon>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsOutlined/>
                </Badge>
                </Icon>
                <Icon>
                <Badge badgeContent={1} color="success">
                    <LanguageOutlined/>
                </Badge>
                </Icon>
                <Icon>
                    <Settings/>
                </Icon>
                <Icon>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </Icon>
            </Right>
        </Wrapper>
    </>
    );
}

export default TopBar
