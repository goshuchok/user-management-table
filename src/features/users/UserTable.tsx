import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchUsers, setFilter } from '../slices/usersSlice';
import { Table, TableBody, CircularProgress } from '@mui/material';
import UserRow from './UserRow';
import UserFilters from './UserFilters';
import UserTableHead from './UserTableHead';
 

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, filters } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (name: string, value: string) => {
    dispatch(setFilter({ [name]: value }));
  };

  const filteredUsers = users.filter((user) =>
    Object.keys(filters).every((key) =>
      user[key as keyof typeof filters]
        .toString()
        .toLowerCase()
        .includes(filters[key as keyof typeof filters].toLowerCase())
    )
  );

  return (
    <div className="p-4"> 
      <UserFilters filters={filters} onFilterChange={handleFilterChange} />
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress style={{ color: 'white' }} />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-transparent">         
            <UserTableHead />
            <TableBody>
              {filteredUsers.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UserTable;