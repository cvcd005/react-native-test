import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  vehicleItem: {
    marginBottom: 8,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  driverName: {
    fontSize: 14,
    color: '#666',
  },
  vehicleCategory: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
