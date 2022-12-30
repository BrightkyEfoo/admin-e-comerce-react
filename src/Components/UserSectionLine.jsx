import styled from 'styled-components'

const Div = styled.div`
    margin : 30px 0;
    display : flex;

    align-items:center ;
`

const UserSectionLine = ({ Text, Icon }) => {
  return (
    <Div>
        <Icon style = {{marginRight : '15px'}}/> {Text} 
    </Div>
  )
}

export default UserSectionLine