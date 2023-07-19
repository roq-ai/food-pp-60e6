import * as yup from 'yup';

export const foodItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().integer().required(),
  restaurant_id: yup.string().nullable(),
});
