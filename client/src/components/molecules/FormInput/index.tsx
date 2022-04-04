import React from "react";
import { Input, Label } from "./style";

interface Props {
  label: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormInput = ({ label, value, id, onChange }: Props) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input type="text" id={id} name={id} value={value} onChange={onChange} />
    </>
  );
};

export default FormInput;
