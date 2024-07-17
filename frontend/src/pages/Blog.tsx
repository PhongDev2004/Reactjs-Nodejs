import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import post2 from "src/components/blog-post.2.md";
// import post3 from "src/components/blog-post.3.md";
import FeaturedPost from 'src/components/FeaturedPost';
import Main from 'src/components/MainPost';
import MainFeaturedPost from 'src/components/MainFeaturedPost';
import Sidebar from 'src/components/SlideBarPost';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Xu hướng thời trang mùa xuân hè 2024',
  description: 'Khám phá những xu hướng thời trang đang làm mưa làm gió trong mùa xuân hè năm nay, từ phong cách đường phố đến những bộ trang phục dự tiệc sang trọng.',
  image: 'https://mensfolio.vn/wp-content/uploads/2023/07/MSW-THUMB1.jpg',
  imageText: 'mô tả hình ảnh chính',
  linkText: 'Đọc tiếp...',
};

const featuredPosts = [
  {
    title: 'Thời trang đường phố: Phong cách cá nhân hóa',
    date: 'Tháng 4, 2024',
    description: 'Đường phố đang trở thành sàn diễn thời trang lớn nhất với sự xuất hiện của những bộ trang phục thể thao phối hợp với phụ kiện nổi bật.',
    image: 'https://assets.vogue.com/photos/63d19420a1c8d7985db51cd0/3:4/w_1600%2Cc_limit/GettyImages-1459103647.jpg',
    imageLabel: 'Chú thích hình ảnh',
  },
  {
    title: 'Bữa tiệc đêm hè: Lựa chọn trang phục đẳng cấp',
    date: 'Tháng 5, 2024',
    description: 'Các sự kiện dưới ánh trăng trong mùa hè đòi hỏi những bộ trang phục sang trọng và lộng lẫy, hợp thời thượng.',
    image: 'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/4/14/anh-6-17130686701221187002914.jpg',
    imageLabel: 'Chú thích hình ảnh',
  },
];

const sidebar = {
  title: 'About',
  description: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" />

            <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social} />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
