export interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  birthday: string;
  gender: string;
  address: Address;
}

interface Address {
  country: string;
  city: string;
}