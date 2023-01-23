import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import Logo from '../../components/Logo';

function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ nickname: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: '' });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: (theme) =>
          `linear-gradient(to Right Bottom,${theme.palette.secondary.dark} 10%, ${theme.palette.primary.light} 80%,${theme.palette.primary.dark} 100% )`,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: -3,
      }}
    >
      <Box
        sx={{
          p: 4,
          m: 1,
          boxShadow: 20,
          bgcolor: 'background.default',
          width: {
            xs: '90%',
            sm: '450px ',
            md: '30%',
          },
          minHeight: '525px',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Logo />
        {}
        <Typography variant="h4" align="left" mb={5} mt={2}>
          ¡Bienvenido!
        </Typography>
        <Typography variant="body1" align="left" color="textSecondary">
          Inicie sesión para continuar.
        </Typography>
        <form onSubmit={() => window.alert(':P')}>
          <TextField
            required
            error={error.error}
            autoFocus
            id="nickname"
            name="nickname"
            label="Usuario"
            margin="normal"
            value={formValues.nickname}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            error={error.error}
            id="password"
            name="password"
            type="password"
            margin="normal"
            label="Contraseña"
            value={formValues.password}
            variant="outlined"
            onChange={handleChange}
            helperText={error.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenOutlinedIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <br /> <br />
          {isLoading ? (
            <CircularProgress
              sx={{
                m: 'auto',
              }}
            />
          ) : (
            <Button
              title="Iniciar sesión"
              type="submit"
              variant="contained"
              endIcon={<LoginIcon />}
              fullWidth
              color="primary"
            >
              Iniciar Sesión
            </Button>
          )}
        </form>

        <Button
          title="Registrarse"
          sx={{ mt: 2 }}
          variant="outlined"
          fullWidth
          color="secondary"
          onClick={() => {
            navigate('/signup');
          }}
        >
          Registrarse
        </Button>
        <Link
          title="Recuperar Contraseña"
          to="/login"
          variant="body2"
          component={RouterLink}
          sx={{ mt: 2, mb: 0 }}
        >
          ¿Has olvidado tu contraseña?
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
