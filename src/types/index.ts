export type PossiblyUndefined<T> = T | undefined
export type Partialize<T, P = keyof T> = {
  [K in keyof T]: K extends P ? PossiblyUndefined<T[K]> : T[K]
}
