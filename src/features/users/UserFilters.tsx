import React from 'react';
import { TextField } from '@mui/material';

interface UserFiltersProps {
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  onFilterChange: (name: string, value: string) => void;
}

const UserFilters: React.FC<UserFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <TextField
        name="name"
        label="Search by name"
        variant="outlined"
        size="small"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
        className="w-full"
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <TextField
        name="username"
        label="Search by username"
        variant="outlined"
        size="small"
        value={filters.username}
        onChange={(e) => onFilterChange('username', e.target.value)}
        className="w-full"
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <TextField
        name="email"
        label="Search by email"
        variant="outlined"
        size="small"
        value={filters.email}
        onChange={(e) => onFilterChange('email', e.target.value)}
        className="w-full"
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <TextField
        name="phone"
        label="Search by phone"
        variant="outlined"
        size="small"
        value={filters.phone}
        onChange={(e) => onFilterChange('phone', e.target.value)}
        className="w-full"
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
    </div>
  );
};

export default UserFilters;