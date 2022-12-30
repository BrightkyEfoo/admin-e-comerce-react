import { DeleteOutline } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { productRows } from '../Data'
const UserName = styled.div`
  display : flex;
  justify-content : center;
  align-items: center ;
`
const Button = styled.button`
  display : flex;
  justify-content : center;
  align-items: center ;
  color : white;
  background-color: lightcoral ;
  border-style:none;
  border-radius : 8px;
  margin-right : 10px;
  height : 20px;
  width : 45px;
  font-size: 14px ;
  text-decoration : none ;
`
const UserImg = styled.img`
  margin: 10px;
  width : 35px;
  height : 35px;
  border-style:none;
  border-radius: 50% ;
  object-fit: cover ;
`
const Action = styled.div`
  color : lightcoral;
  display : flex;
  justify-content: center;
  align-items: center ;
  cursor : pointer;
  &>button {
    cursor : pointer;
  }
`
const Container = styled.div`
  width:100% ;
  margin: 30px ;
`

const Products = () => {
    const [data,setData] = useState(productRows);

    const handleDelete = (id)=>{
      setData(data.filter((item)=> item.id !== id));
      console.log(data)
    }
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Product', width: 230, renderCell : (params)=>{
        return (
          <UserName>
            <UserImg src={params.row.img} alt=""/>
            {params.row.name}
          </UserName>
        )
      } },
      { field: 'stock', headerName: 'Stock', width: 250 },
      {
        field: 'status', headerName: 'Status', width: 190
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 200,
      },
      {
        field: 'action', headerName: 'action', width: 200, renderCell: (params)=> {
          return (
            <Action>
              <Link to = {'/products/'+params.row.id} style={{textDecoration:'none'}}>
                <Button>Edit</Button>
              </Link>
              <DeleteOutline onClick= {()=>handleDelete(params.id)}/>
            </Action>
          )
        }
      },
    ];
    
    return (
      <Container>
        <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          style={{textJustify : 'left'}}
        />
      </div>
  
      </Container>
  )
}

export default Products