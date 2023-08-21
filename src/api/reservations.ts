import {API} from './API';
import {commonHeaders} from './commonHeaders';
import {
  Reservation,
  ReservationApiResponse,
  ReservationDetailsApiResponse,
} from './types';

export const getReservations = async () => {
  const headers = await commonHeaders();
  const response = await API.get<ReservationApiResponse, {}>(
    '/api/reservations',
    {},
    {
      headers,
    },
  );
  return response.data.data;
};

export const getReservationDetails = async (
  id: string,
): Promise<Reservation> => {
  const headers = await commonHeaders();
  const response = await API.get<ReservationDetailsApiResponse, {}>(
    `/api/reservations/${id}`,
    {},
    {headers},
  );
  return response.data;
};

export const updateReservationDetails = async (
  id: string,
  updatedData: Reservation,
): Promise<Reservation> => {
  const headers = await commonHeaders();
  const response = await API.patch<ReservationDetailsApiResponse, Reservation>(
    `/api/reservations/${id}`,
    updatedData,
    {
      headers,
    },
  );
  return response.data;
};
