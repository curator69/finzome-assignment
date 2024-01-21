import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

const EditModalComponent = ({ rowData, onSave, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [weekday, setWeekday] = useState(false);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    setName(rowData.name || "");
    setEmail(rowData.email || "");
    setContact(rowData.contact || "");
    setWeekday(rowData.weekday || false);
    setGender(rowData.gender || "");
    setDob(rowData.dob || "");
  }, [rowData]);

  const handleSave = () => {
    const updatedData = { name, email, contact, weekday, gender, dob };
    onSave(updatedData);
    onClose();
  };

  return (
    <Modal>
      <Form>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Contact:</Label>
          <Input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Weekday:</Label>
          <Checkbox
            type="checkbox"
            checked={weekday}
            onChange={(e) => setWeekday(e.target.checked)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Gender:</Label>
          <Radio
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
          />
          <Radio
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={() => setGender("female")}
          />
        </FormGroup>

        <FormGroup>
          <Label>Date of Birth:</Label>
          <Input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </FormGroup>

        <ButtonGroup>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default EditModalComponent;
