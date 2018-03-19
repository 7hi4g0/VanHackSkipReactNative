import { NavigationActions } from 'react-navigation';

import { CousineNavigatorContainer } from '../navigators/CousineNavigator';

export default (state, action) => {
	// switch (action.type) {
	// }
	return CousineNavigatorContainer.router.getStateForAction(action, state);
};