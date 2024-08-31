import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

const UserTableHead: React.FC = () =>{
  return (
    <TableHead>
      <TableRow>
         <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
         <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Username</TableCell>
         <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Email</TableCell>
         <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Phone</TableCell>
      </TableRow>
    </TableHead>
    )
};

export default UserTableHead