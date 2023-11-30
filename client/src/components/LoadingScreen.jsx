import { Backdrop, CircularProgress } from '@mui/material';

const LoadingScreen = () => {
      return(<Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.modal + 1, background:"#d8d8d8"}}>
                <CircularProgress sx={{ color: 'white' }} />
            </Backdrop>);
}

export default LoadingScreen;