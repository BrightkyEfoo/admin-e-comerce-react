import styled from 'styled-components'

const Container = styled.div`
    
`
const Form = styled.form`
    padding: 35px;
    width : 30%;
    margin: 20px;
    border-radius : 10px;
    box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.55);
    background-color: rgb(250,250,250) ;
`
const Label = styled.label`
    color :gray;
    font-size : 20px;
`
const Select = styled.select`
    width : 100%;
    padding : 15px;
    margin : 7.5px 0;
`
const Submit = styled.input`
    width : 70px;
    padding: 10px ;
    background-color:#3701c0 ;
    color : white;
    border-style: none;
    border-radius : 10px;
    margin-top : 30px;
    cursor : pointer;
`
const Input = styled.input`
    width : 91.5%;
    padding: 15px ;
    border-radius : 5px;
    border-color : gray;
    border-style:solid ;
    border-width:1px ;
    margin : 7.5px 0;

`
const Title = styled.div`
    font-size : 40px;
    font-weight : 700;
    margin-bottom: 30px ;

`
const NewProduct = () => {
  return (
    <Container>
        
        <Form>
            <Title>New Product</Title>
            <Label for='image'>Image</Label>
            <Input name ='image' type='file' />
            <Label for = 'name'>Name</Label>
            <Input type='text'/>
            <Label for ='stock'>Stock</Label>
            <Input type='number' name='stock'/>
            <Label for = 'active'>Active</Label>
            <Select name = 'active'>
                <option selected>yes</option>
                <option>no</option>
            </Select>
            <Submit type='submit' value = 'Create'/>
        </Form>
    </Container>
  )
}

export default NewProduct