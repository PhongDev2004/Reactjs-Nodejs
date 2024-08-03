import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { handleAddProduct } from 'src/service/product';
import { IProduct } from 'src/interfaces/Product';
import { Box, Button, TextField, Typography, Paper, Grid } from '@mui/material';
import { useState } from 'react';

const schemaProduct = Joi.object({
  name: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ''),
  countInStock: Joi.number(),
  brand: Joi.string(),
  image: Joi.any().optional(),
});

// const [file, setFile] = useState<File | null>(null);

const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (files && files[0]) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageDisplay = document.getElementById('imageDisplay') as HTMLImageElement;
      const deleteButton = document.getElementById('deleteButton');
      if (imageDisplay && event.target) {
        imageDisplay.src = event.target.result as string;
        imageDisplay.style.display = 'block';
      }
      if (deleteButton) {
        deleteButton.style.display = 'block';
      }
    };
    reader.readAsDataURL(file);
  }
}

function deleteImage(e: React.MouseEvent<HTMLButtonElement>) {
  const imageDisplay = document.getElementById('imageDisplay') as HTMLImageElement;
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  if (imageDisplay) {
    imageDisplay.src = '';
    imageDisplay.style.display = 'none';
  }
  if (e.target) {
    (e.target as HTMLButtonElement).style.display = 'none';
  }
  if (fileInput) {
    fileInput.value = '';
  }
};

const ProductAdd = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: joiResolver(schemaProduct),
  });

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data: IProduct) => {
    if (data.image && (data.image as unknown as FileList).length > 0) {
      const file = (data.image as unknown as FileList)[0];
      try {
        data.image = await convertFileToBase64(file);
      } catch (error) {
        console.error('Failed to convert image to base64', error);
      }
    }

    const newProduct = await handleAddProduct(data);

    if (newProduct) {
      toast.success('Product added successfully!');
      navigate('/admin');
    }
  };

  return (
    <Box component={Paper} p={4} mt={2}>
      <Typography variant="h4" component="h2" gutterBottom>
        Add a new product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Product Name" {...register('name')} error={!!errors.name} helperText={errors.name?.message} variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Price" {...register('price')} error={!!errors.price} helperText={errors.price?.message} variant="outlined" type="number" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Stock" {...register('countInStock')} error={!!errors.countInStock} helperText={errors.countInStock?.message} variant="outlined" type="number" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Brand" {...register('brand')} error={!!errors.brand} helperText={errors.brand?.message} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Description" {...register('description')} error={!!errors.description} helperText={errors.description?.message} variant="outlined" multiline rows={4} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Cover photo</Typography>
            <input
              type="file"
              id='fileInput'
              {...register('image', { onChange: (e) => getFile(e) })}
            />
            <img width={100} src="" id='imageDisplay' alt="" />
            <Button onClick={(e) => deleteImage(e)} sx={{ display: 'none' }} type='button' id='deleteButton'>Delete</Button>
            {errors.image && (
              <Typography variant="caption" color="error">
                {errors.image.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ProductAdd;
