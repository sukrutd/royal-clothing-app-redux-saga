import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HfPXUEOLTL76NuMidiGVuZz86Dhe5dWufnzYzUrmkF2OGt6mQU3J1awA1SDSMerR1l7EYoR7TmUkL121AmpSAvl005ch3ftaw';

	const onToken = async (token) => {
		try {
			await axios.post('/payment', { token, amount: priceForStripe });
			alert('Payment successful!');
		} catch (error) {
			console.log('Payment Error: ', error.message);
			alert(
				'There was an issue with your payment. Please make sure you use the provided test credit card'
			);
		}
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Royal Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ₹${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			currency='INR'
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
