const mapping: Record<string, string> = {
  'food-items': 'food_item',
  orders: 'order',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
