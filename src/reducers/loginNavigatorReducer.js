import { NavigationActions } from 'react-navigation';

import { LoginNavigatorContainer } from '../navigators/LoginNavigator';

export default (state, action) => {
	// switch (action.type) {
	// }
	return LoginNavigatorContainer.router.getStateForAction(action, state);
};