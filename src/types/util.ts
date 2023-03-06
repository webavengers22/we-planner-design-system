type GetColorList<T> = {
  readonly [P in keyof T]: `${P extends number | string ? P : never}_${keyof T[P] extends
    | string
    | number
    ? keyof T[P]
    : never}`;
}[keyof T];

type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type { GetColorList, SizeType };
