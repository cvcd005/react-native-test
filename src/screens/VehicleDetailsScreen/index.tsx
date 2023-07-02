import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Vehicle } from '../../shared/lib/types';
import styles from './styles';

type Props = {};

export const VehicleDetailsScreen: React.FC<Props> = ({ route }) => {
  const {
    params: { vehicle },
  } = route;

  const handleCallDriver = () => {
    const phoneNumber = vehicle.driverContact;
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleSendMessage = () => {
    const message = 'Добрый день';
    const phoneNumber = vehicle.driverContact;
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Детали ТС</Text>
      <Text style={styles.label}>Имя водителя:</Text>
      <Text style={styles.value}>{vehicle?.driverName}</Text>
      <Text style={styles.label}>Категория ТС:</Text>
      <Text style={styles.value}>{vehicle?.category}</Text>
      <Text style={styles.label}>Контактный номер водителя:</Text>
      <Text style={styles.value}>{vehicle?.driverContact}</Text>
      <TouchableOpacity style={styles.callButton} onPress={handleCallDriver}>
        <Text style={styles.callButtonText}>Позвонить</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendMessageButton} onPress={handleSendMessage}>
        <Text style={styles.sendMessageButtonText}>Написать</Text>
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: vehicle.latitude,
          longitude: vehicle.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }} />
      </MapView>
    </View>
  );
};
