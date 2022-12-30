import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`
const Title = styled.div`
  font-size : 35px;
  font-weight : 700;
  margin-bottom: 18px ;
`
const Form =styled.form`
  font-size : 20px;
  color: gray;
`
const Input = styled.input`
  width:90% ;
  height : 40px;
  border-radius: 5px;
  border-style: solid ;
  border-color: gray;
  border-width : 1px;
  font-size : 19px;
  padding-left: 10px ;
  margin : 5px;
`
const Inpu = styled.input`
  margin-right: 10px ;
`
const Submit = styled.input`
  margin-top : 25px;
  height : 35px;
  width : 25%;
  font-size : 18px;
  border-style: none;
  border-radius:5px ;
  background-color: #3d0cdd;
  color : white;
  transition : all ease 300ms;
  &:hover{
    background-color: #a8bed5 ;
    color : darkblue;

  }
`
const Label = styled.label`
  display: block;
  margin : 5px;
  font-weight : 600;
`
const Labe = styled.label`
  color : black;
`
const Bloc = styled.div`
  width : 47%;
`
const SmallBloc = styled.div`
  margin : 0 10px 0 5px ;

`
const Select = styled.select`
  width: 92%;
  height : 40px;
  border-color: gray;
  border-width:1px;
  border-radius : 5px;
  margin-left:7px ;
  padding-left: 10px ;
  font-size : 20px;
  color:darkgray;
`

const Option = styled.option`
`
const Wrapper = styled.div`
  display:flex;
  flex-wrap:wrap ;
`
const SmContainer = styled.div`
  display:flex;
`
const NewUser = () => {
  return (
    <Container>
      <Title>NewUser</Title>
      <Form>
        <Wrapper>
        <Bloc>
          <Label for = 'username'>Username</Label>
          <Input type = 'text' placeholder='JonSnow' name='username'/>
        </Bloc>
        <Bloc>
          <Label for='fullname'>Full Name</Label>
          <Input type = 'text' name = 'fullname' placeholder='Jon Snow' />
        </Bloc>
        <Bloc>
          <Label for='email'>Email</Label>
          <Input name= 'email' type = 'email' placeholder='jonsnow@gmail.com'/>
        </Bloc>
        <Bloc>
          <Label for = 'password'>Password</Label>
          <Input name='password' type = 'password' placeholder='password'/>
        </Bloc>
        <Bloc>
          <Label for='phone'>Phone</Label>
          <Input name = 'phone' type = 'text' placeholder='+237123456789'/>
        </Bloc>
        <Bloc>
          <Label for = 'address'>Address</Label>
          <Input name= 'address' type = 'text' placeholder='Dubai center'/>
        </Bloc>
        
        <Bloc>
          <Label>Gender</Label>
          <SmContainer>
            <SmallBloc>
              <Inpu name = 'gender' type='radio'/>
              <Labe >Male</Labe>
            </SmallBloc>
            <SmallBloc>
              <Inpu name='gender' type='radio'/>
              <Labe >Female</Labe>
            </SmallBloc>
            <SmallBloc>
              <Inpu name = 'gender' type='radio'/>
              <Labe >Other</Labe>
            </SmallBloc>
          </SmContainer>
        </Bloc>
        <Bloc>
          <Label for = 'active'>Active</Label>
          <Select name = 'active'>
            <Option value = 'yes'>Yes</Option>
            <Option value = 'no'>No</Option>
          </Select>
        </Bloc>
        </Wrapper>
        <Submit type='submit' value= 'create'/>
      </Form>
    </Container>
  )
}

export default NewUser