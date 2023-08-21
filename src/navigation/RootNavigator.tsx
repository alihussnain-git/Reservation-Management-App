import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationRoutes} from './NavigationRoutes';
import ReservationList from '../screens/reservationList/ReservationList';
import EditInvoiceAddressScreen from '../screens/editInvoiceAddressScreen/EditInvoiceAddressScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackNavigatorProps = {
  ReservationsList: undefined;
  EditInvoiceAddress: {id: string};
};
const AppStackNavigator = createStackNavigator<StackNavigatorProps>();

export type NavigationProps = NativeStackScreenProps<
  StackNavigatorProps,
  NavigationRoutes.EditInvoiceAddress
>;

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator
        initialRouteName={NavigationRoutes.ReservationsList}>
        <AppStackNavigator.Screen
          options={{title: 'Reservations'}}
          name={NavigationRoutes.ReservationsList}
          component={ReservationList}
        />
        <AppStackNavigator.Screen
          options={{title: 'INVOICE'}}
          name={NavigationRoutes.EditInvoiceAddress}
          component={EditInvoiceAddressScreen}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
