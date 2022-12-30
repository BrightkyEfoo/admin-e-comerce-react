import { Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { productData } from '../Data'
import Chart from './Chart'


const Container = styled.div`
    padding : 10px;
`
const Title = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper = styled.div`
    width : 100%;
    padding: 5px;
`

const Top = styled.div`
    display: flex ;
    margin-bottom: 40px ;
`
const TopChart = styled.div`
    flex : 2;
    margin-right : 25px;
`
const TopProduct = styled.div`
    flex : 1;
    margin-left : 25px;
    margin-top: 20px;
    padding: 25px ;
    border-style : solid;
    border-radius: 10px ;
    border-width : 1px;
    border-color : gray;
    box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.55);
    background-color: rgb(250,250,250) ;
`
const Bottom = styled.form`
    width : 98%;
    display : flex;
    justify-content:space-between ;
    align-items: center;
    padding-left: 35px ;
    padding-right : 20px;
`
const BottomProduct = styled.div`
    width : 250px;

`
const Finish = styled.div`
    width : 170px;
`
const FinishHeader = styled.div`
    height : 70%;
    margin-bottom : 30px;
    display:flex;
    align-items: center;
`
const FinishImage = styled.img`
    height : 120px;
    width : 120px;
    border-radius : 10px;
    margin-top : 20px;
    margin-bottom : 20px;
    margin-right : 20px;
    object-fit : cover;
`
const TopImage = styled.img`
    height : 60px;
    width: 60px;
    object-fit : cover;
    border-radius : 50%;
    margin-right : 20px;
`
const TopImageTitle = styled.div`
    font-size : 27px;
    font-weight : 600;
`
const TopProductHeader = styled.div`
    display: flex;
    align-items: center ;
    margin-bottom : 25px;
`
const TopProductDetails = styled.div`
    font-size:17px;
`
const Label = styled.span`
    
    font-weight : 600;
`
const Value = styled.span`

`
const Row = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 8px 8px;
    width : 70%;
`
const Input = styled.input`
    width : 94.5%;
    border-style : none;
    border-bottom-style: solid;
    margin : 6px 0;
    height : 35px;
    padding-left:10px ;
    
`
const LabelForm = styled.label`
    font-size : 20px;
    color : gray;
`

const Select = styled.select`
    width : 100%;
    padding: 10px;
    color : gray;
    border-color : gray;
    margin : 6px 0;
`
const Submit = styled.input`
    background-color: #0e2ced;
    border-radius: 5px ;
    color : white;
    width : 90%;
    padding: 10px ;
    cursor : pointer;
`
const TitleText = styled.div`
    font-size: 35px;
    font-weight : 700;
`
const Button = styled.button`
    width : 100px;
    padding: 15px;
    background-color: #08a1a3;
    border-radius : 10px;
    color : white;
    border-style:none;
`
const Product = () => {
  return (
    <Container>
        <Title><TitleText>Product</TitleText> <Link to='/products/newProduct'><Button>Create</Button></Link></Title>
         <Wrapper>
           <Top>
                <TopChart>
                    <Chart width = "700px" Tit='Sales Performance' DatA={productData} DataKey = "Sales" />
                </TopChart>
                <TopProduct>
                    <TopProductHeader>
                        <TopImage src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt = ''/>
                        <TopImageTitle>Airpods Apple</TopImageTitle>
                    </TopProductHeader>
                    <TopProductDetails>
                        <Row><Label>id:</Label> <Value>123</Value></Row>
                        <Row><Label>sales:</Label> <Value>5123</Value></Row>
                        <Row><Label>active:</Label> <Value>yes</Value></Row>
                        <Row><Label>in stock:</Label> <Value>no</Value></Row>
                    </TopProductDetails>
                </TopProduct>
            </Top>

            <Bottom>
                <BottomProduct>
                    <LabelForm for = 'productName'>Product Name</LabelForm>
                    <Input type='text' name = 'productName' placeholder='Apple Airpods'/>
                    <LabelForm for = 'inStock'>in stock</LabelForm>
                    <Select name = 'inStock'>
                        <option selected>yes</option>
                        <option>no</option>
                    </Select>
                    <LabelForm for = 'active'>active</LabelForm>
                    <Select name = 'active'>
                        <option>yes</option>
                        <option selected>no</option>
                    </Select>
                </BottomProduct>
                <Finish>
                    <FinishHeader>
                        <FinishImage src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
                        <Publish/>
                    </FinishHeader>
                    <Submit type = 'submit' value='Update' />
                </Finish>
            </Bottom> 
        </Wrapper> 
    </Container>
  )
}

export default Product