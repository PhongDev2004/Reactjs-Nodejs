import * as React from 'react';
import * as zod from 'zod';
import { useForm } from 'react-hook-form';
import { IUser } from 'src/interfaces/User';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { loginUser } from 'src/service/auth';
import { useUser } from 'src/context/UserContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const schemaLogin = zod.object({
  email: zod.string().email({ message: 'Invalid email address' }),
  password: zod.string().min(6, { message: 'Password must be at least 6 characters long' }),
});
export interface LoginDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function LoginDialog({ open, handleClose }: LoginDialogProps) {
  const { setUser, setIsLoggedIn } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit = async (data: IUser) => {
    const response = await loginUser(data);

    if (response) {
      document.cookie = `jwt=${response.token}`;
      setUser(response.data.user);
      setIsLoggedIn(true);
      toast.success('Login successfully!');
      handleClose();
      reset();
    }
    try {
    } catch (error) {
      console.log(error);
      toast.error('Login failed!');
    }
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit(onSubmit),
        }}
        sx={{ p: 2 }}
      >
        <DisabledByDefaultIcon onClick={handleClose} sx={{ m: 2, ml: 'auto', mb: 0, cursor: 'pointer' }} />
        <Typography textAlign="center" fontWeight="bold" color="#B88E2F" fontSize={24} p={0}>
          Login
        </Typography>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Email Address" type="email" fullWidth variant="standard" sx={{ mb: 2 }} {...register('email')} error={!!errors.email} helperText={errors.email ? errors.email.message : ''} />
          <TextField autoFocus margin="dense" label="Password" type="password" fullWidth variant="standard" sx={{ mb: 2 }} {...register('password')} error={!!errors.password} helperText={errors.password ? errors.password.message : ''} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained">
            <FacebookIcon sx={{ mr: 1 }} />
            Facebook
          </Button>
          <Button variant="text" type="submit" sx={{ backgroundColor: '#F9F1E7', color: '#000', fontWeight: 700, px: 3 }}>
            Login
          </Button>
          <Button variant="text" sx={{ backgroundColor: '#fff', color: '#000', fontWeight: 700, px: 3, border: '1px solid black' }}>
            <GoogleIcon fontSize="small" sx={{ mr: 1 }} />
            Google
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
