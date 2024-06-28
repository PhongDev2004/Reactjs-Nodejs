import Button from "@mui/material/Button";
import React from "react";

interface IconLabelButtons {
  endIcon?: React.ReactNode;
  title?: string;
}

const IconLabelButtons: React.FC<IconLabelButtons> = ({ endIcon, title }) => {
  return (
    <Button variant="contained" endIcon={endIcon}>
      {title}
    </Button>
  );
};

export default IconLabelButtons;
