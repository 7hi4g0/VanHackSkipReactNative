import { NavigationActions } from 'react-navigation';

import { LoginNavigatorContainer } from '../navigators/LoginNavigator';
import {
	CUSTOMER_AUTHED,
	CUSTOMER_CREATED
} from '../actions/customerActions';

export default (state, action) => {
	switch (action.type) {
		case CUSTOMER_AUTHED:
		case CUSTOMER_CREATED:
			action = NavigationActions.reset({
				index: 0,
				actions: [
					NavigationActions.navigate({ routeName: 'MainNav' })
				]
			});
	}
	return LoginNavigatorContainer.router.getStateForAction(action, state);
};