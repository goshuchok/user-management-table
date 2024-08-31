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
  const renderTextField = (name: string, label: string, value: string) => (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      size="small"
      value={value}
      onChange={(e) => onFilterChange(name, e.target.value)}
      className="w-full"
      InputProps={{
        style: { color: 'white' },
      }}
      InputLabelProps={{
        style: { color: 'white' },
      }}
    />
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {renderTextField('name', 'Search by name', filters.name)}
      {renderTextField('username', 'Search by username', filters.username)}
      {renderTextField('email', 'Search by email', filters.email)}
      {renderTextField('phone', 'Search by phone', filters.phone)}
    </div>
  );
};

export default UserFilters;