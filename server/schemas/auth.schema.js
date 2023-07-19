import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Nombre de usuario necesario.',
    }),
    email: z.string({
        required_error: 'Email necesario.',
    }).email({
        message: 'Email no valido.',
    }),
    password: z.string({
        required_error: 'Contraseña necesaria.',
    }).min(6, {
        message: 'La contraseña mínimo debe tener 6 carácteres.',
    }),
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email necesario.',
    }).email({
        message: 'Email no valido.',
    }),
    password: z.string({
        required_error: 'Contraseña necesaria.',
    }).min(6, {
        message: 'La contraseña mínimo debe tener 6 carácteres.',
    }),
})