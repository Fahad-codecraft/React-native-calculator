import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, SafeAreaView, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
        <StatusBar style="auto" />
        <View style={styles.keyboardContainer}>
          <MyKeyboard />
        </View>
        <View style={styles.switchContainer}>
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  keyboardContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switchContainer: {
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
  },
});
