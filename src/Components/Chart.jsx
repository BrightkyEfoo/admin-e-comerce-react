import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin-left : 38px;
    margin-right : 0;
    margin-top : 20px;
    border-radius: 10px ;
    border-width: 1px;
    border-style: solid;
    box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.55);
    background-color: rgb(250,250,250) ;
    display:flex;
    flex-direction : column;
    justify-content: center;
    padding: 20px ;

`
const Title = styled.h2`
    margin-top : 20px;
    margin-bottom : 30px;
    margin-left : 30px;
`;

const Chart = ({Tit, DatA, Grid, DataKey,width }) => {
  return (
    <Container>
        <Title>{Tit}</Title>
        <center>
      <ResponsiveContainer width='100%'  aspect = {4/1}>
        <LineChart data={DatA}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey={DataKey} stroke="#5550bd"/>
          <Tooltip/>
          {Grid && <CartesianGrid stroke = "#6fc6de" strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
      </center>
    </Container>
  )
}

export default Chart