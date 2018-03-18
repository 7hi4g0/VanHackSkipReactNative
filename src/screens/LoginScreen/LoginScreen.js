import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import styles from "./LoginScreenStyle";
import axios from 'axios';

export default class LoginScreen extends Component {
	state = {
		email: '',
		password: '',
		jwt: '',
		err: ''
	};

	setEmail = (email) => this.setState({ email });
	setPassword = (password) => this.setState({ password });

	login = () => {
		axios.post('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer/auth', null, {params: { email: this.state.email, password: this.state.password }})
			.then((res) => {
				this.setState({
					jwt: res.data,
					err: ''
				});
			}, (err) => {
				this.setState({
					jwt: '',
					err: err.response.data.error
				})
			});
	};

	newCustomer = () => {
		const { navigation } = this.props;

		navigation.navigate('NewCustomer');
	};

    render() {
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
				{ this.state.err !== '' && <Text>{this.state.err}</Text> }
				<Button title='Login' onPress={this.login} />
				<Button title='New Customer' onPress={this.newCustomer} />
            </View>
        )
    }
}