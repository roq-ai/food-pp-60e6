import { OrderInterface } from 'interfaces/order';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface FoodItemInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    order?: number;
  };
}

export interface FoodItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  restaurant_id?: string;
}
