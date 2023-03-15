import { ICardDesignType, ICustomCard } from "../types";
import { Widgets } from "../components/widgets";
import CustomCard from "../components/dashboard/CustomCard";

export default function cardGenerator(
  { type, subtype }: ICardDesignType,
  cardData: ICustomCard,
  selector: any
): React.ReactNode {
  const Widget: any = Widgets[type];
  return (
    <CustomCard {...cardData}>
      <Widget selector={selector} tab={cardData.tab} index={cardData.index} />
    </CustomCard>
  );
}
