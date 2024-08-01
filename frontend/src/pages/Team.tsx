import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: 'Lương Bá Phong',
    role: 'Frontend Developer',
    description: 'Passionate about creating interactive user interfaces.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Nguyễn Tiến Việt',
    role: 'Backend Developer',
    description: 'Loves working with APIs and databases.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bùi Minh Phương',
    role: 'Frontend Developer',
    description: 'Passionate about creating interactive user interfaces.',
    image: 'https://via.placeholder.com/150',
  },
];

const TeamPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        We are a group of passionate individuals dedicated to making the best products.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Avatar src={member.image} alt={member.name} sx={{ width: 100, height: 100, mb: 2 }} />
                </Box>
              </CardMedia>
              <CardContent>
                <Typography variant="h6" align="center">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" paragraph>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamPage;
