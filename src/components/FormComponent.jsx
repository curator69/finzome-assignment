import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  width: 500px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 500px;
`;

const FormComponent = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [weekday, setWeekday] = useState(false);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, contact, weekday, gender, dob };
    onSubmit(formData);
    setName("");
    setEmail("");
    setContact("");
    setWeekday(false);
    setGender("");
    setDob("");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          id="male"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        <Label htmlFor="male">MALE</Label>
        <Radio
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
        <Label htmlFor="female">FEMALE</Label>
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

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormComponent;
