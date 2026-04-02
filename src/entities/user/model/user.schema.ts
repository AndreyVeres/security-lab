import z from 'zod';

export const UserSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(3, 'Password must be at least 3 characters').max(10, 'Maximum 10 characters allowed'),
});

export type UserType = z.infer<typeof UserSchema>;
