import styled from 'styled-components'
import Status from "./Status"

const Title = styled.div`
    margin : 20px 20px 0 20px;
    font-size: 30px;
    font-weight : 700;

`
const Container = styled.div`
`
const Transaction = styled.table`
    margin: 0 25px;
    width : 100%;

`
const Tr = styled.tr`
    height: 70px;
`
const Th = styled.th`
    text-align: start ;
    font-size: 25px ;
    height : 50px;

`
const Td = styled.td`

`
const Image = styled.img`
    width: 50px ;
    height : 50px;
    border-radius:50% ;
`
const Div = styled.div`
    display : flex;
    justify-content: flex-start;
    align-items: center;
`
const Name = styled.div`
    margin: 20px 0 20px 20px;
    font-size: 18px ;
    font-weight: 600 ;
`
const WidgetLa = () => {
  return (
      <Container>
        <Title>Latest transactions</Title>
        <Transaction>
            <Tr>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
            </Tr>
            <Tr>
                <Td><Div><Image src = {'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt=''/><Name>Susan Karol</Name></Div></Td>
                <Td>20 Jun 2022</Td>
                <Td>$78.25</Td>
                <Td><Status status ='approved' /></Td>
            
            </Tr>
            <Tr>
                <Td><Div><Image src = {'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt=''/><Name>Susan Karol</Name></Div></Td>
                <Td>20 Aug 2022</Td>
                <Td>$225.02</Td>
                <Td><Status status ='declined' /></Td>
            
            </Tr>
            <Tr>
                <Td><Div><Image src = {'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt=''/><Name>Susan Karol</Name></Div></Td>
                <Td>20 Jan 2022</Td>
                <Td>$148.99</Td>
                <Td><Status status ="approved" /></Td>
            
            </Tr>
            <Tr>
                <Td><Div><Image src = {'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt=''/><Name>Susan Karol</Name></Div></Td>
                <Td>20 Nov 2022</Td>
                <Td>$409.99</Td>
                <Td><Status status ="declined" /></Td>
            
            </Tr>
        </Transaction>
      </Container>
  )
}

export default WidgetLa