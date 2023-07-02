import React from 'react';
import { View, Text, Button } from 'react-native';
//import i18n, { setLanguage } from '../../shared/i18n/i18n';

export const SettingsScreen: React.FC = () => {
  const switchToEnglish = () => {
    //setLanguage('en');
  };

  const switchToRussian = () => {
    //setLanguage('ru');
  };

  return (
    <View>
      <Text>Настройки</Text>
      <Button title={'Английский'} onPress={switchToEnglish} />
      <Button title={'Русский'} onPress={switchToRussian} />
    </View>
  );
};
