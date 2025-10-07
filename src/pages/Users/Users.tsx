import Table from '../../components/Table/Table'
import type { IHeader } from '../../interfaces/IHeader';

const headers: IHeader[] = [
  {
    headerKey: "id",
    headerValue: "ID"    
  },
  {
    headerKey: "fname",
    headerValue: "First name"    
  },
  {
    headerKey: "lname",
    headerValue: "Last name"    
  },
];

const data = [
  { id: 1, fname: "Lucía", lname: "Fernández" },
  { id: 2, fname: "Mateo", lname: "Ramírez" },
  { id: 3, fname: "Valentina", lname: "Castro" },
  { id: 4, fname: "Sofía", lname: "Hernández" },
  { id: 5, fname: "Diego", lname: "Mendoza" },
  { id: 6, fname: "Camila", lname: "Vargas" },
  { id: 7, fname: "Tomás", lname: "Gutiérrez" },
  { id: 8, fname: "Isabela", lname: "Morales" },
  { id: 9, fname: "Samuel", lname: "Torres" },
  { id: 10, fname: "Mariana", lname: "Jiménez" },
];

const Users = () => {
  return (
    <section>
      <Table 
        headers={headers}
        data={data}
      />
    </section>
  )
}

export default Users