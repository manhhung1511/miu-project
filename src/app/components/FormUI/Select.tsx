import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import { FormControl, FormHelperText, InputLabel, Menu, MenuItem, Select } from "@mui/material";

export interface FormikSelectItem {
  label: string;
  value: string;
}

interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  label: string;
  required?: boolean;
  variant: string;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label: string;
  required: boolean;
  variant: string;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
  required,
  variant
}) => {
  return (
    <FormControl fullWidth variant={variant}>
      <InputLabel  required={required}>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value} defaultValue="">
        {children}
      </Select>
      <FormHelperText style={{color: "#d32f2f"}}>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({ name, items, label, required = false, variant}) => {
  return (
    <div className="FormikSelect">
      <Field
        name={name}
        as={MaterialUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
        required={required}
        variant={variant}
      >
        {items.map(item => (
          <MenuItem key={item._id} value={item.code}>
            {item.name}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

export default FormikSelect;