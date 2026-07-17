import { z } from 'zod';

export const INTERESTS = [
  'Accommodation',
  'Private Dining',
  'Wellness Retreat',
  'Guided Tours',
  'Seasonal Experiences',
  'Custom Experience',
] as const;

export const reservationSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
    phone: z.string().optional(),
    arrivalDate: z.string().min(1, 'Arrival date is required'),
    departureDate: z.string().min(1, 'Departure date is required'),
    guests: z.number({ message: 'Number of guests is required' }).min(1, 'At least 1 guest').max(20, 'For groups over 20, please contact us directly'),
    interests: z.array(z.enum(INTERESTS)).min(1, 'Select at least one'),
    specialRequests: z.string().optional(),
    budgetRange: z.string().optional(),
    preferredAccommodation: z.string().optional(),
    occasion: z.string().optional(),
    dietary: z.string().optional(),
  })
  .refine((data) => !data.arrivalDate || !data.departureDate || data.departureDate > data.arrivalDate, {
    message: 'Departure must be after arrival',
    path: ['departureDate'],
  });

export type ReservationFormValues = z.infer<typeof reservationSchema>;
