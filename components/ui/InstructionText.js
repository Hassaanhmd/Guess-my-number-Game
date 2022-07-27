import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>; //positioning of "style" in array of styles will determine whther it must overwrite or it can overwrite as necessary
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
