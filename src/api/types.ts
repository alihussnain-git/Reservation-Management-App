export interface Reservation {
  id: string;
  createdAt: string;
  updatedAt: string;
  booking: Booking;
  unitGroupName: string;
  billingAddress: BillingAddress;
}

interface Booking {
  id: string;
}

export interface BillingAddress {
  addressLine1: string;
  postalCode: string;
  city: string;
  companyName: string;
  countryCode: string;
  firstName: string;
  lastName: string;
}

export interface ReservationDetailsApiResponse {
  success: boolean;
  data: Reservation;
}

export interface ReservationApiResponse {
  success: boolean;
  data: {
    data: Reservation[];
  };
}
