import React from 'react';
import background from '../assets/banner.png';
import { Box, Typography } from '@mui/material';

interface HeaderPageProps {
   page: string;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ page }) => {
   return (
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height={316} sx={{ background: `url(${background})` }}>
         <img src="./logo.png" width={50} alt="" />
         <Typography variant='h3' fontWeight='medium'>{page}</Typography>
         <Typography display='flex' alignItems='center' fontWeight='bold'>Home {`>`} <Typography variant='body2' ml={1} fontWeight={500}>{page}</Typography></Typography>
      </Box >
   );
};

export default HeaderPage;