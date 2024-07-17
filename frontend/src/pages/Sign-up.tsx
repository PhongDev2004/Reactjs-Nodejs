import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { IUser } from 'src/interfaces/User';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { registerUser } from 'src/service/auth';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

const schemaRegister = zod.object({
  username: zod.string().min(6, { message: 'Username must be at least 6 characters long' }),
  email: zod.string().email({ message: 'Invalid email address' }),
  password: zod.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(schemaRegister),
  });

  const onSubmit = async (data: IUser) => {
    const response = await registerUser(data);

    if (response) {
      toast.success('Registration successfully!');
      navigate('/login');
    }
    try {
    } catch (error) {
      console.log(error);
      toast.error('Registration failed!');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="username" label="Username" autoComplete="username" autoFocus {...register('username')} error={!!errors.username} helperText={errors.username ? errors.username.message : ''} />
            <TextField margin="normal" required fullWidth id="email" label="Email Address" autoComplete="email" autoFocus {...register('email')} error={!!errors.email} helperText={errors.email ? errors.email.message : ''} />
            <TextField margin="normal" required fullWidth label="Password" type="password" id="password" autoComplete="current-password" {...register('password')} error={!!errors.password} helperText={errors.password ? errors.password.message : ''} />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
