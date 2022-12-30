import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { userRows } from '../Data';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
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
  object-fit:cover;
  border-radius: 50% ;
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
const UserList = () => {
  const [data,setData] = useState(userRows);

  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !== id));
    console.log(data)
  }
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'username', width: 230, renderCell : (params)=>{
      return (
        <UserName>
          <UserImg src={params.row.avatar} alt=""/>
          {params.row.username}
        </UserName>
      )
    } },
    { field: 'email', headerName: 'email', width: 250 },
    {
      field: 'status', headerName: 'status', width: 190
    },
    {
      field: 'transaction',
      headerName: 'transaction',
      width: 200,
    },
    {
      field: 'action', headerName: 'action', width: 200, renderCell: (params)=> {
        return (
          <Action>
            <Link to = {'/users/'+params.row.id} style={{textDecoration:'none'}}>
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

export default UserList