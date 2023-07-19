import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  food_item_id: yup.string().nullable(),
  delivery_guy_id: yup.string().nullable(),
});
