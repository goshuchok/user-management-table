import React from 'react';
import { TableRow, TableCell } from '@mui/material';

interface UserRowProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <TableRow className="hover:bg-gray-700">
      <TableCell sx={{ color: 'white' }}>{user.name}</TableCell>
      <TableCell sx={{ color: 'white' }}>{user.username}</TableCell>
      <TableCell sx={{ color: 'white' }}>{user.email}</TableCell>
      <TableCell sx={{ color: 'white' }}>{user.phone}</TableCell>
    </TableRow>
  );
};

export default UserRow;