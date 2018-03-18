import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import styles from "./NewCustomerScreenStyle";
import axios from 'axios';

export default class NewCustomerScreen extends Component {
	state = {
		name: '',
		email: '',
		address: '',
		password: ''
	};

	setName = (name) => this.setState({ name });
	setEmail = (email) => this.setState({ email });
	setAddress = (address) => this.setState({ address });
	setPassword = (password) => this.setState({ password });

	createCustomer = () => {
		axios.post('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer', this.state)
			.then((res) => {
				this.setState({
					jwt: res.data
				});
			}, (err) => {
				this.setState({
					err: err.response.data.error
				});
			});
	};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login Screen</Text>
				<TextInput
					ref='NameInput'
					placeholder='Input your name'
					onChangeText={this.setName}
					value={this.state.name}
					onSubmitEditing={() => this.refs.EmailInput.focus()}
				/>
				<TextInput
					ref='EmailInput'
					placeholder='Input your email'
					onChangeText={this.setEmail}
					value={this.state.email}
					onSubmitEditing={() => this.refs.AddressInput.focus()}
				/>
				<TextInput
					ref='AddressInput'
					placeholder='Input your address'
					onChangeText={this.setAddress}
					value={this.state.address}
					onSubmitEditing={() => this.refs.PasswordInput.focus()}
				/>
				<TextInput
					ref='PasswordInput'
					placeholder='Input your password'
					onChangeText={this.setPassword}
					value={this.state.password}
					secureTextEntry={true}
				/>
				<Text>{this.state.jwt}</Text>
				<Text>{this.state.err}</Text>
				<Button title='Create' onPress={this.createCustomer} />
            </View>
        )
    }
}