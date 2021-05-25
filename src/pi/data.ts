import type { anhuai } from './interfaces/pi.interface';

const item: anhuai.esr.grpc.PiItem = {
  id: 1,
  piCode: 'piCode1',
  exporterId: 1,
  exporterType: 0,
  contact: 'contact1',
  telephone: 'telephone1',
  piNo: 'piNo1',
  piDate: '2021-05-25T06:27:52.685Z',
  buyerName: 'buyerName1',
  buyerAddr: 'buyerAddr1',
  remark: 'remark1',
  trafMode: 'trafMode1',
  iePort: 'iePort1',
  cusPort: 'cusPort1',
  transMode: 'transMode1',
  amt: 1,
  currency: 'currency1',
  tradeCountry: 'tradeCountry1',
  tradeArea: 'tradeArea1',
  lcMode: 'lcMode1',
  lcModeOther: 'lcModeOther1',
  wrapType: 'wrapType1',
  volume: 1,
  netWet: 1,
  mark: 'mark1',
  lcl: true,
  container20gp: 1,
  container40gp: 1,
  container40hc: 1,
  container45hc: 1,
  deliveryDate: '2021-05-25T06:27:52.685Z',
  piFile: 'piFile1',
  clerkId: 1,
  clerk: 'clerk1',
  insUser: 'insUser1',
  insDate: '2021-05-25T06:27:52.685Z',
  status: 0,
  checkStep: 0,
};

const dataSource: anhuai.esr.grpc.PiItem[] = new Array(21).fill(Math.random()).map((v, id) => ({
  ...item,
  id: id + 1,
}));

export default dataSource;
