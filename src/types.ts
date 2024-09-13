export interface Pet {
    id: number;
    name: string;
    type: string;
}
  
export interface User {
    id: number;
    name: string;
    email: string;
    pets: Pet[];
}