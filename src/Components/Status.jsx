import styled from 'styled-components'

const Container = styled.button`
    border-color : transparent;
    border-radius: 8px ;
    padding-top : 5px ;
    padding-bottom: 5px ;

    width: 100px ;
    background-color: ${(props)=>{
            if(props.status ==='approved'){
                return '#49d9f8'
            }else if(props.status === 'declined'){
                return '#ff8282'
            }else if(props.status==='pending'){
                return '#f7ffa5'
            }
    } };
    color: ${(props)=>{
            if(props.status ==='approved'){
                return '#03508d'
            }else if(props.status === 'declined'){
                return '#9a2929'
            }else if(props.status==='pending'){
                return '#586005'
            }}} ;
    font-size: 17px ;
    font-weight: 500;
`
const status = ({status}) => {
  return (
    <Container status = {status}>
        {status}
    </Container>
  )
}

export default status