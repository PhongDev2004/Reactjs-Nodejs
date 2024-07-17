import Button from '@mui/material/Button';
import React from 'react';

interface IconLabelButtons {
  endIcon?: React.ReactNode;
  title?: string;
  className?: string;
}

const IconLabelButtons: React.FC<IconLabelButtons> = ({ endIcon, title, className }) => {
  return (
    <Button variant="contained" endIcon={endIcon} className={className}>
      {title}
    </Button>
  );
};

export default IconLabelButtons;
