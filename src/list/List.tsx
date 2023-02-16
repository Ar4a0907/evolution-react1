import * as React from "react";
import { ListRecord } from "../types";
import { ListItem } from "./ListItem";
import { ListHeader } from "./ListHeader";
import { WrongItemPlaceholder } from "./WrongItemPlaceholder";

interface ListProps {
  data: ListRecord[];
}

export class List extends React.Component<ListProps> {
  public render() {
    return (
      <div data-test="notes-list">
        <ListHeader />
        {/* todo: display real data here */}
        {/* todo: use ListItemErrorBoundary to display WrongItemPlaceholder if error is thrown */}
        <ListItem
          name="Kyiv"
          date="15/02/2021"
          favouriteDish={{ name: "Chicken Kyiv" }}
          grades={[10]}
        />
        <WrongItemPlaceholder />
      </div>
    );
  }
}
