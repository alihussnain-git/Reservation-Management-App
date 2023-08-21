import React, {useEffect, useState} from 'react';
import {View, Alert, StyleSheet, Text, ScrollView} from 'react-native';
import {NavigationProps} from '../../navigation/RootNavigator';
import {BillingAddress, Reservation} from '../../api/types';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useGetReservationById} from '../../react-query-hooks/useGetReservationById';
import {useUpdateReservation} from '../../react-query-hooks/useUpdateReservation';

const EditInvoiceAddressScreen: React.FC<NavigationProps> = ({route}) => {
  const {id} = route.params;
  const [billingAddress, setBillingAddress] = useState<BillingAddress>({
    companyName: '',
    addressLine1: '',
    city: '',
    postalCode: '',
    countryCode: '',
    firstName: '',
    lastName: '',
  });

  const {data: reservationDetails, isError} = useGetReservationById(id);
  const updateReservationMutation = useUpdateReservation();

  useEffect(() => {
    if (reservationDetails?.billingAddress) {
      setBillingAddress(reservationDetails?.billingAddress);
    }
  }, [reservationDetails]);

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'Failed to fetch reservations details');
    }
  }, [isError]);

  const handleUpdateAddress = async () => {
    if (reservationDetails) {
      if (
        !billingAddress.firstName.trim() ||
        !billingAddress.lastName.trim() ||
        !billingAddress.addressLine1.trim() ||
        !billingAddress.postalCode.trim() ||
        !billingAddress.city.trim() ||
        !billingAddress.countryCode.trim()
      ) {
        Alert.alert('Validation Error', 'Please fill in all required fields');
        return;
      }

      const updatedReservation: Reservation = {
        ...reservationDetails,
        billingAddress: billingAddress,
      };

      try {
        await updateReservationMutation.mutateAsync({
          id,
          updatedData: updatedReservation,
        });
        Alert.alert('Success', 'Invoice address updated successfully');
      } catch (error) {
        Alert.alert('Error', 'Failed to update invoice address');
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>UPDATE BILLING ADDRESS</Text>
        <CustomInput
          label="First Name*"
          placeHolder="John"
          value={billingAddress.firstName}
          onChangeText={text =>
            setBillingAddress({...billingAddress, firstName: text})
          }
        />
        <CustomInput
          label="Last Name*"
          placeHolder="Doe"
          value={billingAddress.lastName}
          onChangeText={text =>
            setBillingAddress({...billingAddress, lastName: text})
          }
        />
        <CustomInput
          label="Street and Number*"
          placeHolder="Aronstrasse 7"
          value={billingAddress.addressLine1}
          onChangeText={text =>
            setBillingAddress({...billingAddress, addressLine1: text})
          }
        />
        <CustomInput
          label="Postal Code*"
          placeHolder="12335"
          inputMode="numeric"
          value={billingAddress.postalCode}
          onChangeText={text =>
            setBillingAddress({...billingAddress, postalCode: text})
          }
        />
        <CustomInput
          label="City*"
          placeHolder="Berlin"
          value={billingAddress.city}
          onChangeText={text =>
            setBillingAddress({...billingAddress, city: text})
          }
        />
        <CustomInput
          label="Country Code*"
          placeHolder="DE"
          value={billingAddress.countryCode}
          onChangeText={text =>
            setBillingAddress({...billingAddress, countryCode: text})
          }
        />
        <CustomButton title="Update Address" onPress={handleUpdateAddress} />
      </View>
    </ScrollView>
  );
};

export default EditInvoiceAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
});
