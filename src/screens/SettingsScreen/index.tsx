import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../../shared/i18n';

export const SettingsScreen: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = useCallback((lng: 'en' | 'ru') => {
    i18n.changeLanguage(lng);
  }, []);

  return (
    <View>
      <Text>{t('settings')}</Text>
      <Button title={t('eng')} onPress={() => changeLanguage('en')} />
      <Button title={t('rus')} onPress={() => changeLanguage('ru')} />
    </View>
  );
};
