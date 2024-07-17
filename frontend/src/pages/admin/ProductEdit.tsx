import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import * as Joi from "joi";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getProduct, handleEditProduct } from "src/service/product";
import { IProduct } from "src/interfaces/Product";
import { Button, Grid, TextField, Typography, Paper, Box } from "@mui/material";

const schemaProduct = Joi.object({
  name: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ""),
  countInStock: Joi.number(),
  brand: Joi.string(),
  image: Joi.any().optional(),
});

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(id!);
        setProduct(data.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProduct>({
    resolver: joiResolver(schemaProduct),
  });

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("description", product.description);
      setValue("countInStock", product.countInStock);
      setValue("brand", product.brand);
      setValue("image", product.image);
    }
  }, [product, setValue]);

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64Image = await convertFileToBase64(file);
        setValue("image", base64Image);
      } catch (error) {
        console.error("Failed to convert image to base64", error);
      }
    }
  };

  const onSubmit = async (data: IProduct) => {
    const updatedData = { ...data, _id: id };
    try {
      const updatedProduct = await handleEditProduct(updatedData);
      if (updatedProduct) {
        toast.success("Product edited successfully!");
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error editing product:", error);
      toast.error("Failed to edit product. Please try again.");
    }
  };

  return (
    <Box component={Paper} p={4} mt={2}>
      <Typography variant="h5" gutterBottom>
        Edit Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="edit-name"
              label="Product Name"
              variant="outlined"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="edit-price"
              label="Price"
              variant="outlined"
              fullWidth
              {...register("price")}
              error={!!errors.price}
              helperText={errors.price?.message}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="edit-stock"
              label="Stock"
              variant="outlined"
              fullWidth
              type="number"
              {...register("countInStock")}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="edit-brand"
              label="Brand"
              variant="outlined"
              fullWidth
              {...register("brand")}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="edit-desc"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              {...register("description")}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              id="file_input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <label htmlFor="file_input">Cover photo</label>
            <div>
              {product?.image && (
                <img
                  src={product.image}
                  alt="Product"
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ProductEdit;
