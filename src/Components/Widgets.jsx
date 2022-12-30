import React from 'react'
import styled from 'styled-components'
import WidgetLa from './WidgetLa'
import WidgetSm from './WidgetSm'

const Container = styled.div`
    display:flex;
    margin : 40px 0 40px 40px;

`
const Small = styled.div`
    flex : 1;
    border-radius: 10px ;
    border-style: solid;
    border-width: 1px;
    margin-right: 20px ;
    background-color: rgb(251,251,251);
    box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.55);

`
const Large = styled.div`
    background-color: rgb(251,251,251);
    flex : 2.5;
    box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.55);
    border-radius: 10px ;
    border-style: solid;
    border-width: 1px;

`

const Widgets = () => {
  return (
    <Container>
        <Small><WidgetSm/> </Small>
        <Large><WidgetLa/></Large>
    </Container>
  )
}

export default Widgets