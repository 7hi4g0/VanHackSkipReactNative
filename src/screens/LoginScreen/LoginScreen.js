import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { customerAuth } from '../../actions/customerActions';
import Icon from '../../components/Icon';
import styles from "./LoginScreenStyle";

const mapStateToProps = (state) => ({
	customer: state.customer
});

const mapDispatchToProps = (dispatch) => ({
	onLogin: (login) => dispatch(customerAuth(login)),
});

class LoginScreen extends Component {
	state = {
		email: '',
		password: '',
	};

	setEmail = (email) => this.setState({ email });
	setPassword = (password) => this.setState({ password });

	login = () => {
		this.props.onLogin({ email: this.state.email, password: this.state.password });
	};

	newCustomer = () => {
		const { navigation } = this.props;

		navigation.navigate('NewCustomer');
	};

    render() {
		const { customer } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login Screen</Text>
				<TextInput
					ref='EmailInput'
					placeholder='Input your email'
					onChangeText={this.setEmail}
					value={this.state.email}
					onSubmitEditing={() => this.refs.PasswordInput.focus()}
				/>
				<TextInput
					ref='PasswordInput'
					placeholder='Input your password'
					onChangeText={this.setPassword}
					value={this.state.password}
					secureTextEntry={true}
				/>
				{ customer.error !== '' &&
					<View style={{flexDirection: 'row'}}>
						<Icon size={20} nameIos='ios-alert-outline' nameAndroid='error-outline'/>
						<Text>{customer.error}</Text>
					</View>
				}
				<Button title='Login' onPress={this.login} />
				<Button title='New Customer' onPress={this.newCustomer} />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);