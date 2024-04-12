// components/ProductRow.js

import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const ProductRow = ({ id, ProductID, ProductName }) => {
  const handleEdit = () => {
    // Add your edit logic here
  };

  const handleDelete = () => {
    // Add your delete logic here
  };

  return (
    <Tr>
      <Td>{ProductID}</Td>
      <Td>{ProductName}</Td>
      {/* Add more Td components for other product properties */}
      <Td>
        <Button colorScheme="blue" onClick={handleEdit}>
          <AiFillEdit />
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          <AiFillDelete />
        </Button>
      </Td>
    </Tr>
  );
};

export default ProductRow;
