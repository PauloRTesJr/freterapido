export type Currency = {
  code: string;
  name: string;
  value: number;
  updateAt: Date;
  variation: number;
};

export type RequestCurrency = {
  [key: string]: RequestData;
};

type RequestData = {
  bid: number;
  varBid: number;
};
