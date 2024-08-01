import React from 'react';
import { Box, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const features = [
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: 'High Quality',
    description: 'Crafted from top materials',
  },
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: 'Warranty Protection',
    description: 'Over 2 years',
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: 'Free Shipping',
    description: 'Order over 150 $',
  },
  {
    icon: <HeadsetMicIcon fontSize="large" />,
    title: '24 / 7 Support',
    description: 'Dedicated support',
  },
];

const FeatureIcons: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      padding="20px"
      bgcolor="#FAF3EA;
      
"
      mt={5}
    >
      {features.map((feature, index) => (
        <Box key={index} textAlign="center" mx={2}>
          {feature.icon}
          <Typography variant="h6" fontWeight="bold">
            {feature.title}
          </Typography>
          <Typography variant="body2">{feature.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FeatureIcons;
