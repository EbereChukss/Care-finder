export interface Hospital {
  id: number;
  name: string;
  type: { name: string };
  state: { name: string };
  address: string;
  phone_number: string;
 }

export interface ApiResponse {
  data: Hospital[];
}
