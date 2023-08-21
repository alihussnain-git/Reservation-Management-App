import {useQuery} from 'react-query';
import {ReservationAPI} from '../api/API';
import {Reservation} from '../api/types';

export const useGetReservationById = (id: string) => {
  return useQuery<Reservation>(['reservation', id], () =>
    ReservationAPI.getReservationDetails(id),
  );
};
