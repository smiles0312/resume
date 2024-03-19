import { FC, ReactNode } from "react";

export enum TimeOrPlaceItemType {
  TIME = "time",
  PLACE = "place",
}

interface TimeOrPlaceItemProps {
  type: TimeOrPlaceItemType.TIME | TimeOrPlaceItemType.PLACE;
  item: string | ReactNode;
}

const TimeOrPlaceItem: FC<TimeOrPlaceItemProps> = ({ type, item }) => {
  const icon = type === "place" ? "/address-icon.svg" : "/calendar-icon.svg";
  return (
    <div className="education-item">
      <img src={icon} alt="icon" height="18px" />
      {item}
    </div>
  );
};
export default TimeOrPlaceItem;
