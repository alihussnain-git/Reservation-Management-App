import {useQuery, UseQueryResult} from 'react-query';
import {ReservationAPI} from '../api/API';
import {Reservation} from '../api/types';

export const useGetReservations = (): UseQueryResult<Reservation[]> => {
  return useQuery('reservations', ReservationAPI.getReservations);
};
