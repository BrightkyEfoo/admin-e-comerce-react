import React from 'react'
import styled from 'styled-components'
import MemberWidget from './MemberWidget'

const Container = styled.div`
    margin-right: 25px ;
    padding-left: 20px;
    padding-top: 20px;
`

const ListMember = styled.div``

const Title = styled.h1``



const WidgetSm = () => {
  return (
    <Container>
          <Title>New join members</Title>
          <ListMember>
            <MemberWidget Nom = 'Anna KELLER' Img = 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' Prof = 'Software engineer'/>
            <MemberWidget Nom = 'Anna KELLER' Img = 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' Prof = 'Software engineer'/>
            <MemberWidget Nom = 'Anna KELLER' Img = 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' Prof = 'Software engineer'/>
            <MemberWidget Nom = 'Anna KELLER' Img = 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' Prof = 'Software engineer'/>
            <MemberWidget Nom = 'Anna KELLER' Img = 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' Prof = 'Software engineer'/>              
          </ListMember>
      </Container>  
      )
}

export default WidgetSm