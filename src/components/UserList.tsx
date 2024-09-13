import React from 'react';
import { User } from '../types';
import PetList from './PetList';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '20px' }}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <PetList pets={user.pets} />
        </div>
      ))}
    </div>
  );
};

export default UserList;