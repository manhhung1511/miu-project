import React, { FC } from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

interface ButtonProps {
  children?: any;
}

const ButtonWrapper: FC<ButtonProps> = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton}
      sx={{padding: "10px 20px", background:"#FA58A6", border: "1px solid rgba(51, 51, 51, 0.2)", borderRadius:"20px", color: "#FFF", fontWeight: "600", width: "100%" }}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
