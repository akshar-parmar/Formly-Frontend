import { Alert } from "@mui/material";
const Toast = ({message, severity}) => {
    return (
        <Alert severity={severity} color="info">
            {message}
        </Alert>

    )
}
export default Toast;