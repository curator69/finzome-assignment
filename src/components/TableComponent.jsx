import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
`;

const TableComponent = ({ data, onEdit, onDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>S.No</Th>
          <Th>Name</Th>
          <Th>Contact</Th>
          <Th>Email</Th>
          <Th>Weekday</Th>
          <Th>Gender</Th>
          <Th>DOB</Th>
          <Th>Action</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{row.name}</Td>
            <Td>{row.contact}</Td>
            <Td>{row.email}</Td>
            <Td>{row.weekday ? "Yes" : "No"}</Td>
            <Td>{row.gender}</Td>
            <Td>{row.dob}</Td>
            <Td>
              <ActionButton onClick={() => onEdit(index)}>Edit</ActionButton>
              <ActionButton onClick={() => onDelete(index)}>
                Delete
              </ActionButton>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
