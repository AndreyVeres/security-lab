'use client';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema, type UserType } from '@/entities/user';
import { CreateUserFormComponent } from './create-user-form.component';

const defaultValues = {
  username: '',
  password: '',
};

export const CreateUserFormContainer = () => {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm<UserType>({
    defaultValues,
    resolver: zodResolver(UserSchema),
  });

  const values = useWatch({ control });
  const formErrors = Object.fromEntries(Object.entries(errors).map(([key, val]) => [key, val.message]));

  const handleChange = (field: keyof UserType, value: string) => setValue(field, value);
  const onSubmit = handleSubmit((data) => {
    console.log('submit:', data);
    reset();
  });

  return <CreateUserFormComponent values={values} onSubmit={onSubmit} errors={formErrors} onChange={handleChange} />;
};
