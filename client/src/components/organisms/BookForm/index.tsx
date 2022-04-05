import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import FormInput from "../../molecules/FormInput";
import { Form, InputContainer } from "./style";

interface Props {
  isLoading: boolean;
  onFormSubmit: (data: any) => void;
  isCreate?: boolean;
  defaultValues?: any;
}
const BookForm = ({
  isCreate,
  defaultValues,
  isLoading,
  onFormSubmit,
}: Props) => {
  const [formValues, setFormValues] = useState({
    id: "",
    author: "",
    title: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formValues);
  };

  useEffect(() => {
    if (defaultValues) setFormValues(defaultValues);
  }, [defaultValues]);

  return (
    <Form onSubmit={onSubmit}>
      <InputContainer>
        {isCreate && (
          <FormInput
            label="ID"
            value={formValues.id}
            id="id"
            onChange={onChange}
          />
        )}
      </InputContainer>
      <InputContainer>
        <FormInput
          label="Title"
          value={formValues.title}
          id="title"
          onChange={onChange}
        />
      </InputContainer>
      <InputContainer>
        <FormInput
          label="Author"
          value={formValues.author}
          id="author"
          onChange={onChange}
        />
      </InputContainer>
      <Button mt="10" fullWidth>
        {isLoading ? "로딩중" : "전송"}
      </Button>
    </Form>
  );
};

export default BookForm;
