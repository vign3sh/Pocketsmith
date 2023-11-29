import { useRouteError, Link } from "react-router-dom";
import {Box} from '@mui/material';



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" // to make it take the full height of the viewport
    >

        <Box 
        display="flex" 
        flexDirection="column"
        justifyContent="center" 
        alignItems="center" 
        height="100vh" // to make it take the full height of the viewport
        >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p><Link to="/authentication" >Click here to return to HomePage</Link></p>
        </Box>
    </Box>
  );
}