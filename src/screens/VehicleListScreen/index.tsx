import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import vehiclesData from '../../../assets/vehiclesData.json';
import { Vehicle } from '../../shared/lib/types';
import styles from './styles';

export const VehicleListScreen: React.FC = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

  // Загрузка данных из JSON-файла при монтировании компонента
  useEffect(() => {
    setVehicles(vehiclesData);
  }, []);

  // Фильтрация списка транспортных средств по выбранной категории
  useEffect(() => {
    const tmp = selectedCategory ? vehicles.filter(vehicle => vehicle.category === selectedCategory) : vehicles;
    setFilteredVehicles(tmp);
  }, [selectedCategory, vehicles]);

  // Обработчик нажатия на кнопку фильтрации
  const handleFilter = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Обработчик нажатия на элемент списка
  const handleItemPress = (vehicle: Vehicle) => {
    navigation.navigate('VehicleDetails', { vehicle });
  };

  // Функция для отрисовки элемента списка
  const renderItem = ({ item }: { item: Vehicle }) => (
    <TouchableOpacity
      style={styles.vehicleItem}
      onPress={() => {
        handleItemPress(item);
        console.log('work');
      }}
    >
      <Text style={styles.vehicleName}>ТС #{item?.id}</Text>
      <Text style={styles.driverName}>{item?.driverName}</Text>
      <Text style={styles.vehicleCategory}>{item?.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Грузовой')}>
          <Text style={styles.filterButtonText}>Грузовой</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Пассажирский')}>
          <Text style={styles.filterButtonText}>Пассажирский</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Спецтранспорт')}>
          <Text style={styles.filterButtonText}>Спецтранспорт</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={filteredVehicles} keyExtractor={item => item.id.toString()} renderItem={renderItem} />
    </View>
  );
};
