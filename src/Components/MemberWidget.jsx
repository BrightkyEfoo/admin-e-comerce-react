import styled from 'styled-components'
import { Visibility } from '@mui/icons-material'

const Picture = styled.img`
    width: 50px;
    height : 50px;
    object-fit: cover;
    border-radius : 50%;
`

const Desc = styled.div`
    font-size: 13px ;
    color : #314f55;
`

const Name = styled.span`
    font-size: 18px ;
    font-weight: 700 ;
    color : black;
`

const Member = styled.div`
    margin : 22.5px 0;
    display : flex;
    justify-content: space-between ;
    align-items: center;
`
const Profession = styled.div``

const Button = styled.button`
    display : flex;
    width: 6vw;
    justify-content: space-around ;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(240,240,255) ;
    border-color: transparent ;
`
const MemberWidget = ({Img,Nom,Prof}) => {
  return (
    <Member>
    <Picture src = {Img} alt = ''/>
    <Desc>
        <Name>
          {Nom}
        </Name>
        <Profession>
          {Prof}
        </Profession>
    </Desc>
    <Button>
        <Visibility/> Display
    </Button>
</Member>
  )
}

export default MemberWidget