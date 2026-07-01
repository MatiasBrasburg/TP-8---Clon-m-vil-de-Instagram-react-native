import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './app/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const onLayout = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <AppNavigator />
    </View>
  );
}
