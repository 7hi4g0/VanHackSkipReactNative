import { NavigationActions } from 'react-navigation';

import { StoreNavigatorContainer } from '../navigators/StoreNavigator';

export default (state, action) => {
	// switch (action.type) {
	// }
	return StoreNavigatorContainer.router.getStateForAction(action, state);
};