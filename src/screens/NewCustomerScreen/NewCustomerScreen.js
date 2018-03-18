import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';
import { customerCreate } from '../../actions/customerActions';
import styles from "./NewCustomerScreenStyle";

const mapStateToProps = (state) => ({
	customer: state.customer
});

const mapDispatchToProps = (dispatch) => ({
	onCreate: (customer) => dispatch(customerCreate(customer)),
});

class NewCustomerScreen extends Component {
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
		this.props.onCreate(this.state);
	};

    render() {
		const { customer } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Creation Screen</Text>
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
				{ customer.error !== '' &&
					<View style={{flexDirection: 'row'}}>
						<Icon size={20} nameIos='ios-alert-outline' nameAndroid='error-outline'/>
						<Text>{customer.error}</Text>
					</View>
				}
				<Button title='Create' onPress={this.createCustomer} />
            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCustomerScreen);