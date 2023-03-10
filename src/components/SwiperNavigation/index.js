/* eslint-disable import/no-unresolved */
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function SwiperNavigation({ classBtns, ...rest }) {
  return (
    <>
      {}
      <Box position="absolute" top="50%" left="0" zIndex={1} {...rest}>
        <IconButton
          className={classBtns[0]}
          aria-label="delete"
          size="medium"
          color="secondary"
          sx={{
            bgcolor: 'rgba(20,20,20,0.20)',
            backdropFilter: 'blur(0.625em)',
          }}
        >
          <ArrowBackIosIcon
            sx={{
              color: '#fafafa',
              fontSize: { xs: 20, sm: 30, lg: 30, xl: 50 },
            }}
          />
        </IconButton>
      </Box>
      <Box position="absolute" top="50%" right="0" zIndex={1} {...rest}>
        <IconButton
          className={classBtns[1]}
          aria-label="delete"
          size="medium"
          color="secondary"
          sx={{
            bgcolor: 'rgba(20,20,20,0.20)',
            backdropFilter: 'blur(0.625em)',
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: '#fafafa',
              fontSize: { xs: 20, sm: 30, lg: 30, xl: 50 },
            }}
          />
        </IconButton>
      </Box>
    </>
  );
}

export default SwiperNavigation;
