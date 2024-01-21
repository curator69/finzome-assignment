import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import EditModalComponent from "./components/EditModalComponent";

function App() {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (data) => {
    if (editIndex !== null) {
      // Update existing row if in edit mode
      const updatedFormData = [...formData];
      updatedFormData[editIndex] = data;
      setFormData(updatedFormData);
      setEditIndex(null);
    } else {
      // Add new row if not in edit mode
      setFormData([...formData, data]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleModalClose = () => {
    setEditIndex(null);
  };

  return (
    <div>
      <FormComponent onSubmit={handleFormSubmit} />
      <TableComponent
        data={formData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {editIndex !== null && (
        <EditModalComponent
          rowData={formData[editIndex]}
          onSave={handleFormSubmit}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
