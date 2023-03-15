import ICardDataSelector from "./ICardDataSelector";

export default interface ICustomCard extends ICardDataSelector {
  children?: any;
  title?: string;
  date?: Date;
  Icon?: any;
}
