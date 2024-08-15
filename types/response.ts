export type TResponse<T, E = Error> = {
  data: T | null;
  error: Partial<E> | null;
};
