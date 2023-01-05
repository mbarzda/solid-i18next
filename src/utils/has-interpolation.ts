import { InterpolationOptions } from 'i18next';

export const hasInterpolation = (value: string, { prefix, suffix }: InterpolationOptions) =>
  value.includes(prefix) && value.includes(suffix);
