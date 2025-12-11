import type { UseFormReturnType } from '@mantine/form';
import type { JSX } from 'react';

export type FormInputProps<T extends object, P extends object = {}> = {
    form: UseFormReturnType<T>,
    name: Extract<keyof T, string>,
    label: string,
    placeholder: string,
    type: string = 'text',
    required?: boolean,
    Icon?: JSX.Element,
};
