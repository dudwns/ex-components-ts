import { ChangeEvent, FormEvent, useState } from "react";

export interface FormValues {
  email: string;
  password: string;
  [key: string]: string;
}

interface useFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void | Promise<void>;
  validate?: (values: { email?: string; password?: string }) => {
    email?: string;
    password?: string;
  };
}

const useForm = ({ initialValues, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // 바뀐 input의 name과 value를 가져옴
    setValues({ ...values, [name]: value }); // 기존 값과 변경된 값을 할당
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate ? validate(values) : {}; // validate가 존재하면 검사, 아니면 {} 할당

    // 에러가 없으면 onSubmit 실행
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
