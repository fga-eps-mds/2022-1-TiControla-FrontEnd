import DateField from 'react-native-datefield';
import { StyleSheet } from 'react-native';

<DateField
	labelDate="Input date"
	labelMonth="Input month"
	labelYear="Input year"
	defaultValue={new Date()}
	styleInput={styles.inputBorder}
	onSubmit={(value) => console.log(value)}
/>;

const styles = StyleSheet.create({
	inputBorder: {
		width: '30%',
		borderRadius: 8,
		borderColor: '#cacaca',
		borderWidth: 1,
		marginBottom: 20,
	},
});