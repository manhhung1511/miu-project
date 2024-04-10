import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import { Button } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface SnackbarProps {
  value?: boolean,
  handleClose?: () => void;
  messenger?: string;
  severity: AlertColor;
  time?: number
}

const CustomSnackbar: React.FC<SnackbarProps> = ({
  value, handleClose, messenger, severity, time = 5000
}) => {
  
  return (
    <div>
    <Snackbar open={value} autoHideDuration={time} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'right'}} sx={{mt:10}}>
    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {messenger}
    </Alert>
  </Snackbar>
    </div>
  );
};

export default CustomSnackbar;