export type ProductProps = {
  _id: string;
  title: string;
  type: string;
  serialNumber: string;
  isNew: number;
  photo: string;
  specification: string;
  date: string;
  guarantee?: {
    start: string;
    end: string;
  }
  price: { value: number, symbol: string, isDefault: boolean}[];
}
