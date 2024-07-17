import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

const BlogPost = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Fashion Forward: Exploring the Latest Trends in Clothing
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        August 1, 2024 by <Link href="/">Phuong Bui</Link>
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" paragraph>
        In today's fashion landscape, trends evolve rapidly, offering a myriad of styles that cater to diverse tastes and preferences. From casual wear to haute couture, the world of clothing continues to inspire and innovate, reflecting both cultural influences and individual expression.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Embracing Diversity in Fashion
      </Typography>

      <Typography variant="body1" paragraph>
        Fashion is more than just fabric and stitching; it's a statement of identity and creativity. Whether you prefer timeless classics or bold, avant-garde designs, there's something for everyone in the realm of clothing.
      </Typography>

      <Typography variant="h6">The Essence of Casual Chic</Typography>

      <Typography variant="body1" paragraph>
        Casual wear remains a cornerstone of modern fashion, blending comfort with style effortlessly. Think relaxed denim jeans paired with oversized shirts or chic athleisure ensembles that seamlessly transition from day to night.
      </Typography>

      <Typography variant="h6">Elegance Redefined: Formal Attire</Typography>

      <Typography variant="body1" paragraph>
        For formal occasions, elegance takes center stage. Classic suits tailored to perfection exude sophistication, while flowing evening gowns adorned with intricate details captivate attention. It's about making a lasting impression with every stitch.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Timeless Classics" secondary="Embrace the enduring appeal of pieces that withstand fleeting trends, such as the crisp white shirt or the little black dress." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Statement Pieces" secondary="Experiment with bold colors, patterns, and textures to elevate your wardrobe and make a memorable fashion statement." />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        Sustainability in Fashion
      </Typography>

      <Typography variant="body1" paragraph>
        Beyond style, sustainability has emerged as a pivotal consideration in the fashion industry. From eco-friendly materials to ethical manufacturing practices, the shift towards sustainable fashion reflects a growing awareness of environmental impact and social responsibility.
      </Typography>

      <Typography variant="h6">Choosing Wisely: Eco-Friendly Fashion</Typography>

      <Typography variant="body1" paragraph>
        Opt for garments crafted from organic cotton, recycled fabrics, or innovative materials that minimize ecological footprint. By supporting sustainable brands and practices, you contribute to a greener, more responsible fashion ecosystem.
      </Typography>

      <Typography variant="h6">Empowering Change: Ethical Fashion Choices</Typography>

      <Typography variant="body1" paragraph>
        Explore brands committed to fair labor practices and transparent supply chains. Your choices matter, shaping a future where fashion aligns with ethical values and empowers communities worldwide.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" paragraph>
        Fashion transcends mere attire; it's a canvas for self-expression and a catalyst for societal change. Whether you're embracing laid-back casuals, elegant formals, or advocating for sustainable fashion, your wardrobe tells a story uniquely yours. Embrace the diversity, celebrate
        individuality, and step into a world where every outfit is an opportunity to make a statement.
      </Typography>
    </Box>
  );
};

export default BlogPost;
