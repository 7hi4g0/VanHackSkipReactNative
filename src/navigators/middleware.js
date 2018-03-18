import { LoginNavigator } from "./LoginNavigator";
import { MainNavigator } from './MainNavigator';

const middlewares = [
	LoginNavigator.middleware,
	MainNavigator.middleware
];

export default middlewares;