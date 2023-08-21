import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ListRenderItem,
  ActivityIndicator,
} from 'react-native';
import {useGetReservations} from '../../react-query-hooks/useGetReservations';
import {Reservation} from '../../api/types';
import {NavigationRoutes} from '../../navigation/NavigationRoutes';
import {StackNavigatorProps} from '../../navigation/RootNavigator';
import {formatDate} from '../../utils/dateFormat';

const ReservationList: React.FC = () => {
  const {data: reservations, isLoading, isError} = useGetReservations();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        StackNavigatorProps,
        NavigationRoutes.EditInvoiceAddress
      >
    >();

  const handleEditInvoiceAddress = useCallback(
    (reservationId: string) => {
      navigation.navigate(NavigationRoutes.EditInvoiceAddress, {
        id: reservationId,
      });
    },
    [navigation],
  );

  const renderListItem = useCallback<ListRenderItem<Reservation>>(
    ({item}) => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleEditInvoiceAddress(item.id)}
          style={styles.listItem}>
          <Text style={styles.heading}>Booking ID: {item.booking.id}</Text>
          <Text style={styles.subText}>
            Created At: {formatDate(item.createdAt)}
          </Text>
          {item.updatedAt ? (
            <Text style={styles.subText}>
              Updated At: {formatDate(item.updatedAt)}
            </Text>
          ) : (
            <></>
          )}
          <Text style={styles.subText}>Unit Group: {item.unitGroupName}</Text>
        </TouchableOpacity>
      );
    },
    [handleEditInvoiceAddress],
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : isError ? (
        <Text style={styles.errorText}>Failed to fetch reservations</Text>
      ) : (
        <FlatList
          data={reservations}
          keyExtractor={item => item.id}
          renderItem={renderListItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ReservationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: 'black',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 12,
  },
});
