import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width; // for iOS = no difference, for Android = 'screen' = entire available width/height (screen + status bar) vs 'window' which excludes status bar

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24, //use deviceWidth in a function to choose value based on limits of deviceWidth value OR use deviceWidth as part of a formula
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
