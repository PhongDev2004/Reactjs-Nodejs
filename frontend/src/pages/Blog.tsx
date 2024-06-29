import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  CardMedia,
} from "@mui/material";

const mockPosts = [
  {
    id: 1,
    title: "Sample Post 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Sample Post 2",
    body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "Sample Post 3",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://picsum.photos/200",
  },
];

const Sidebar = () => (
  <Paper elevation={3} style={{ padding: "15px", marginBottom: "20px" }}>
    <Typography variant="h6" gutterBottom>
      Categories
    </Typography>
    <List component="nav" aria-label="categories">
      <ListItem button>
        <ListItemText primary="Technology" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Travel" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Food" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Fashion" />
      </ListItem>
    </List>
  </Paper>
);

const PostList = () => {
  return (
    <>
      {/* Header */}
      <header style={{ backgroundColor: "#f0f0f0", padding: "10px 0" }}>
        <Container>
          <Typography variant="h4" component="h1" align="center">
            My Blog
          </Typography>
        </Container>
      </header>

      {/* Main content */}
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {mockPosts.map((post) => (
                <Grid item xs={12} key={post.id}>
                  <Card
                    elevation={3}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <CardMedia
                        component="img"
                        image={post.image}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />

                      <CardContent style={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {post.body}
                        </Typography>
                      </CardContent>
                    </div>

                    <CardActions>
                      <Button
                        component={Link}
                        to={`/post/${post.id}`}
                        size="small"
                        color="primary"
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PostList;
