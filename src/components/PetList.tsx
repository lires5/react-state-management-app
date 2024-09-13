import React from 'react';
import { Pet } from '../types';

interface PetListProps {
  pets: Pet[];
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  if (pets.length === 0) {
    return <p>No pets found for this user.</p>;
  }

  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          {pet.name} ({pet.type})
        </li>
      ))}
    </ul>
  );
};

export default PetList;