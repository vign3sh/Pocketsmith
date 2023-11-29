import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from "../../images/backgroundImage.jpg"
import { register,login } from '../../actions/auth';
import { useSelector, connect } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import CSRFToken from '../../components/CSRFToken';
  
  // TODO remove, this demo shouldn't need to reset the theme.
const authentication = ({dispatch}) => {

  /*
    const navigate = useNavigate();
    let base_url = window.location.origin;
    if (isAuthenticated && base_url!=='http://localhost:5173'){
      navigate("/friends");
    }
    */

    const defaultTheme = createTheme();

    const [formData, setFormData] = useState({
      username: '',
      password: '',
      re_password: ''
    });


    const { username, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const register_request = () => {
      if (password === re_password) {
        //console.log('registering');
        dispatch(register(username,password,re_password))
        }
      else {
        console.log('Passwords do not match');
      }
    };
  
    const login_request = () => {    
      //console.log('logging in');
      dispatch(login(username,password))
    };

      
    const onSubmit = e => {
        e.preventDefault();
        basePage === 'register' ? register_request():login_request();
        
    };

      // Use state to mange switching between login and register pages
    const [basePage, setBasePage] = useState('login'); // initial value
    const switchPages = () => {
        setBasePage(basePage === 'register' ? 'login' : 'register');
      };
      

      let ConfirmPasswordField = basePage==='register' ?
            (<TextField
                margin="normal"
                required
                fullWidth
                name="re_password"
                label="Confirm Password"
                type="password"
                id="re_password"
                autoComplete="confirm-password"
                onChange={e => onChange(e)}
            />):null;
      
    
      return (
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                //backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CssBaseline />
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                <CssBaseline />
                <form onSubmit={onSubmit}>
                  <CSRFToken/>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={e => onChange(e)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => onChange(e)}
                  />
                  {ConfirmPasswordField}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {basePage === 'register' ? "Sign Up":"Log In"}
                  </Button>
                  </form>
                  <Grid container>
                    <Grid item xs>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2" onClick={switchPages}>
                        {basePage === 'register' ? "Already have an account? Log in":"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                  </Grid>
                  
                
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
}

export default connect() (authentication);


