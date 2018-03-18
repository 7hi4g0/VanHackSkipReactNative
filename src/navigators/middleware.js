import { LoginNavigator } from "./LoginNavigator";
import { MainNavigator } from './MainNavigator';
import { ProductNavigator } from "./ProductNavigator";
import { StoreNavigator } from "./StoreNavigator";

const middlewares = [
	LoginNavigator.middleware,
	MainNavigator.middleware,
	ProductNavigator.middleware,
	StoreNavigator.middleware
];

export default middlewares;