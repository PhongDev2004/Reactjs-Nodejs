import Favorite from '../models/Favourite';
import catchAsync from '../Utils/catchAsync';

export const addProductToFavorite = catchAsync(async (req, res, next) => {
  const { productId } = req.body;
  const userId = req.user._id;

  let favorite = await Favorite.findOne({ userId });

  if (!favorite) {
    favorite = await Favorite.create({ userId, products: [productId] });
  } else {
    const productExists = favorite.products.some((id) => id.toString() === productId.toString());

    if (productExists) {
      return res.status(200).json({
        status: 'success',
        // message: 'Product already exists in favorites',
        data: {
          favorite,
        }
      });
    } else {
      favorite.products.push(productId);
      await favorite.save();
    }
  }

  res.status(200).json({
    status: 'success',
    data: {
      favorite,
    },
  });
});

export const removeProductFromFavorite = catchAsync(async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.user._id;

  const favorite = await Favorite.findOne({ userId });

  if (favorite) {
    favorite.products = favorite.products.filter(
      (id) => id && id.toString() !== productId.toString()
    );
    await favorite.save();
  }

  res.status(200).json({
    status: 'success',
    data: {
      favorite,
    },
  });
});

export const getFavorite = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const favorite = await Favorite.findOne({ userId }).populate('products');

  res.status(200).json({
    status: 'success',
    data: {
      favorite,
    },
  });
});
