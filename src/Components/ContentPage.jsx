import styled from 'styled-components'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Feature = styled.div`
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  padding : 40px;
  margin: 20px 20px;
  width : 27%;
  box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.55);
  background-color: rgb(251,251,251);

  cursor: pointer;
`
const Title = styled.h2`

  
`
const FeatureInfo = styled.div`
  
`
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 40px ;
  font-weight : 600;

`
const FeatureInfoText = styled.div`
  color : rgb(112, 102, 102);
`
const Variation = styled.span`
  font-size: 20px;
  margin-left : 40px;
`
const Container = styled.div`
  margin-left : 15px;
  width : 100%;
  height: fit-content;
`
const Icon = styled.div`
  display:flex;
  justify-content : center;
  align-items : center;
`
const ContentPage = () => {
  return (
    <Container>
      <TopWrapper>
        <Feature>
          <Title>Reward</Title>
          <FeatureInfo>
            <Price>$2,415<Variation style = {{color : 'red'}}>-6.2</Variation> <Icon><ArrowDownward style = {{color : 'red'}}/></Icon></Price>
            <FeatureInfoText>Compared to the lasy month </FeatureInfoText>
          </FeatureInfo>
        </Feature>
        <Feature>
          <Title>Sales</Title>
          <FeatureInfo>
            <Price>$5,415<Variation style = {{color : 'red'}}>-11.2</Variation><Icon><ArrowDownward style = {{color : 'red'}}/></Icon></Price>
            <FeatureInfoText>Compared to the lasy month </FeatureInfoText>
          </FeatureInfo>
        </Feature>
        <Feature>
          <Title>Cost</Title>
          <FeatureInfo>
            <Price>$2,415<Variation style = {{color : 'lightgreen'}}>+9.3</Variation><Icon><ArrowUpward style = {{color : 'lightgreen'}}/></Icon></Price>
            <FeatureInfoText>Compared to the lasy month </FeatureInfoText>
          </FeatureInfo>
        </Feature>
      </TopWrapper>
    </Container>
  )
}

export default ContentPage