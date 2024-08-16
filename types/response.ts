export type TResponse<T, E = Error> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: Partial<E>;
    };
