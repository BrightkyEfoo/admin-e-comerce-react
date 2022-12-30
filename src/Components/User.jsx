import styled from 'styled-components'
import UserSectionLine from './UserSectionLine'
import { CalendarToday, Email, LocationOn, Person, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display:flex;
    justify-content: center;
    width : 97%;
    height: 90% ;
    margin: 15px;
`
const Left = styled.div`
    margin : 7.5px;
    padding: 20px ;
    flex : 1;
    background-color: #f4f6f6;
    box-shadow: 0px 1px 40px -11px rgba(0,0,0,0.74) ;
    border-radius : 7px;
`
const Right = styled.div`
    border-radius : 7px;
    padding : 25px;
    margin : 7.5px;
    flex : 2.5;
    height:100% ;
    background-color: #f4f6f6;
    box-shadow: 0px 1px 40px -11px rgba(0,0,0,0.74) ;
`
const SuperContainer = styled.div`
    height:100%;
    width:95%;
`
const Title = styled.div`
    height : 60px;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const TextTitle = styled.div`
    font-size : 40px;
    font-weight : 700;
`
const TitleButton = styled.button`
    border-radius: 5px;
    border-style : none;
    background-color:#26ad9fff ;
    color : #fff;
    font-size : 17px;
    padding : 10px;
    margin-right : 10px;
`
const Profile = styled.div`
    display : flex;
`
const ProileInfo = styled.div`
    margin-left : 20px;
`
const ProfileName = styled.p`
    font-weight:700;
    font-size : 23px;
`
const ProfileWork = styled.p`
    font-size: 23px;
    color: gray ;
`
const ProfileImage = styled.img`
    height: 60px;
    object-fit : cover;
    aspect-ratio : 1/1;
    border-radius : 50%;
    border-style: none ;
`
const SectionInfo = styled.div`
    font-size : 23px;
`
const SectionTitle = styled.p`
    color : gray;
    margin : 30px 0;
`
const RightTitle = styled.div`
    margin-bottom : 20px;
    font-size : 25px;
    font-weight: 700;
`
const Wrapper = styled.div`
    display : flex;
    justify-content: space-between ;
`
const Form = styled.form`
    font-size : 20px;
    width : 50%;
`
const Finish = styled.div`
    display : flex;
    flex-direction: column ;
    justify-content: space-between;
`
const FinishImage = styled.img`
    height: 140px;
    aspect-ratio : 1/1;
    border-radius : 10px;
    object-fit: cover ;
    margin-right : 25px;
`
const FinishWrapper = styled.div`
    display : flex;
    justify-content: center ;
    align-items:center ;
`
const Button = styled.button`
    background-color: #746eea;
    color : white;
    padding: 10px ;
    border-radius : 7px;
    border-style : none;
    transition: all ease 300ms;
    &:hover{
        transform : scale(1.2);
        background-color: #9ab7ee ;
        color : gray;
    }
`

const Input = styled.input`
    background-color: transparent ;
    font-size : 20px;
    border-style : none;
    width : 100%;
    border-bottom-style: solid ;
    border-color: gray ;
    border-bottom-width: 1px ;
    margin:10px 0;
`
const Label = styled.div`
    font-weight : 600;
    margin:10px 0;
`
const User = () => {
  return (
    <SuperContainer>
        <Title><TextTitle>Edit User</TextTitle> 
            <Link to='/users/newUser'>
                <TitleButton>Create</TitleButton>
            </Link>
            </Title>
        <Container>
            <Left>
                <Profile>
                    <ProfileImage src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                    <ProileInfo>
                        <ProfileName>Jon Snow</ProfileName>
                        <ProfileWork>Social Engineer</ProfileWork>
                    </ProileInfo>
                </Profile>
                <SectionInfo>
                    <SectionTitle>Account details</SectionTitle>
                    <UserSectionLine Text = 'JonSnow' Icon = {Person}/>
                    <UserSectionLine Text = '07.06.2022' Icon = {CalendarToday}/>
                    <SectionTitle>Contact details</SectionTitle>
                    <UserSectionLine Text = '+237123456789' Icon = {PhoneAndroid}/>
                    <UserSectionLine Text = 'jonSnow@gmail.com' Icon = {Email}/>
                    <UserSectionLine Text = 'Dubai center' Icon = {LocationOn}/>
                </SectionInfo>
            </Left>
            <Right>
                <RightTitle>Edit</RightTitle>
                <Wrapper>
                    <Form>
                        <Label>Username</Label>
                        <Input type = 'text' placeholder='JonSnow'/>

                        <Label>Fullname</Label>
                        <Input type = 'text' placeholder='Jon Snow'/>

                        <Label>Email</Label>
                        <Input type = 'email' placeholder='Jonsnow@gmail.com'/>

                        <Label>Phone</Label>
                        <Input type = 'text' placeholder='+237123456789'/>

                        <Label>Address</Label>
                        <Input type = 'text' placeholder='Dubai center'/>
                    </Form>
                    <Finish>
                        <FinishWrapper>
                            <FinishImage src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                            <Publish/>
                        </FinishWrapper>
                        <Button>Update</Button>
                    </Finish>
                </Wrapper>
            </Right>
        </Container>
    </SuperContainer>
  )
}

export default User