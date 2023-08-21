import {useMutation} from 'react-query';
import {ReservationAPI} from '../api/API';
import {Reservation} from '../api/types';

export const useUpdateReservation = () => {
  return useMutation<
    Reservation,
    unknown,
    {id: string; updatedData: Reservation}
  >(async params => {
    const {id, updatedData} = params;
    const updatedReservation: Reservation =
      await ReservationAPI.updateReservationDetails(id, updatedData);
    return updatedReservation;
  });
};
