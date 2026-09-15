import { Table } from "@mantine/core"
const ManageProducts = () => {
  return (
   <>
    
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product Name</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody></Table.Tbody>
    </Table>
 
   </>
  )
}

export default ManageProducts