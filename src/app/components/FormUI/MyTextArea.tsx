import TextField from "@mui/material/TextField";
import { useField } from "formik";

const MyTextArea = ({
    name,
    ...otherProps
  }) => {
    const [field, mata] = useField(name);
  
    const configTextfield = {
      ...field,
      ...otherProps,
      fullWidth: true,
    };
  
    if (mata && mata.touched && mata.error) {
      configTextfield.error = true;
      configTextfield.helperText = mata.error;
    }
  
    return (
      <TextField {...configTextfield} multiline
      rows={6}
     />
    );
  };

export default MyTextArea;