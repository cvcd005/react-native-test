import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Vehicle } from '../../shared/lib/types';
import vehiclesData from '../../../assets/vehiclesData.json';
import styles from './styles';

type Props = {};

export const VehicleMapScreen: React.FC<Props> = ({ navigation }) => {
  const onVehiclePress = useCallback((vehicle: Vehicle) => {
    navigation.navigate('VehicleDetails', { vehicle });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55.751244,
          longitude: 37.618423,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {vehiclesData.map(vehicle => (
          <Marker
            key={vehicle.id}
            coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
            title={vehicle.category}
            description={vehicle.driverName}
            onPress={() => onVehiclePress(vehicle)}
          />
        ))}
      </MapView>
    </View>
  );
};
