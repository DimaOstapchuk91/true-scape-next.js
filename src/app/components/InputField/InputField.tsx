'use client';

import { Field, FieldAttributes } from 'formik';
import { ReactNode } from 'react';

type InputProps = {
  as?: 'input';
} & FieldAttributes<HTMLInputElement>;

type SelectProps = {
  as: 'select';
  children: ReactNode;
} & FieldAttributes<HTMLSelectElement>;

export type InputFieldProps = (InputProps | SelectProps) & {
  label?: string;
};

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}
