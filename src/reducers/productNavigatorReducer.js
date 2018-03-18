import { NavigationActions } from 'react-navigation';

import { ProductNavigatorContainer } from '../navigators/ProductNavigator';

export default (state, action) => {
	// switch (action.type) {
	// }
	return ProductNavigatorContainer.router.getStateForAction(action, state);
};