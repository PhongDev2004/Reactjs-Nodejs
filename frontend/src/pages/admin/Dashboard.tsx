import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Pagination, IconButton, Stack, Button, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { IProduct } from 'src/interfaces/Product';
import { getProducts, handleDeleteProduct } from 'src/service/product';
import Loading from 'src/components/ui/Loading';
import ConfirmDialog from 'src/components/ui/ConfirmDialog';
import toast from 'react-hot-toast';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState(false);
  const [idDelete, setIdDelete] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 10;

  const onDelete = async (id: string) => {
    await handleDeleteProduct(id);
    setProducts(products.filter((item) => item._id !== id));
    toast.success('Product deleted successfully!');
  };

  const handleConfirm = (id: string) => {
    setConfirm(true);
    setIdDelete(id);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Admin Dashboard
      </Typography>
      <Stack direction="row" justifyContent="flex-end" mb={2}>
        <Link to="/admin/product-add">
          <Button variant="contained" startIcon={<AddIcon />}>
            Add new product
          </Button>
        </Link>
      </Stack>
      <Loading isShow={loading} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Stock</StyledTableCell>
              <StyledTableCell align="right">Brand</StyledTableCell>
              <StyledTableCell align="right">Num Reviews</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleProducts.map((product) => (
              <StyledTableRow key={product._id}>
                <StyledTableCell component="th" scope="row">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <img src={product.image} alt={product.name} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                    <Typography
                      noWrap
                      sx={{
                        wordWrap: 'break-word',
                        width: '18rem',
                      }}
                    >
                      {product.name}
                    </Typography>
                  </Stack>
                </StyledTableCell>
                <StyledTableCell align="right">{product.price}</StyledTableCell>
                <StyledTableCell align="right">{product.countInStock}</StyledTableCell>
                <StyledTableCell align="right">{product.brand}</StyledTableCell>
                <StyledTableCell align="right">{product.numReviews}</StyledTableCell>
                <StyledTableCell align="right">
                  <Typography noWrap sx={{ wordWrap: 'break-word', width: '18rem' }}>
                    {product.description}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <Link to={`/admin/product-edit/${product._id}`}>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      color="secondary"
                      onClick={() => handleConfirm(product._id!)} // Pass id to handleConfirm
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <ConfirmDialog
          confirm={confirm}
          onConfirm={setConfirm}
          onDelete={onDelete} // Pass onDelete function
          idDelete={idDelete} // Pass idDelete state
        />
      </TableContainer>
      <Pagination className="mt-4" count={totalPages} color="primary" page={page} onChange={(event, value) => setPage(value)} />
    </Container>
  );
};

export default Dashboard;
