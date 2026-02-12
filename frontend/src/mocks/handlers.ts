import { getCustomersMock } from "./resolvers/customer/getCustomersMock";
import { getCustomerDetailMock } from "./resolvers/customer/getCustomerDetailMock";
import { getTradesMock } from "./resolvers/trade/getTradesMock";
export const handlers = [getCustomersMock, getCustomerDetailMock, getTradesMock];
