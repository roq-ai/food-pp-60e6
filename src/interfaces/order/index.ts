import { UserInterface } from 'interfaces/user';
import { FoodItemInterface } from 'interfaces/food-item';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id?: string;
  food_item_id?: string;
  delivery_guy_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_order_customer_idTouser?: UserInterface;
  food_item?: FoodItemInterface;
  user_order_delivery_guy_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  food_item_id?: string;
  delivery_guy_id?: string;
  status?: string;
}
