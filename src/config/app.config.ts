interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: [],
  tenantRoles: ['Restaurant Owner', 'Delivery Guy', 'Customer'],
  tenantName: 'Restaurant',
  applicationName: 'food PP',
  addOns: [],
};
