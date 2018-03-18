import { NavigationActions } from 'react-navigation';

import { MainNavigatorContainer } from '../navigators/MainNavigator';

export default (state, action) => {
	// switch (action.type) {
	// }
	return MainNavigatorContainer.router.getStateForAction(action, state);
};