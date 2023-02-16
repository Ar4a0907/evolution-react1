import * as React from "react";
import { ListRecord } from "../types";

type ListItemProps = Omit<ListRecord, "id">;

export class ListItem extends React.Component<ListItemProps> {
  public render() {
    return (
      <div className="row listItem" data-test="list-item">
        <div className="column column-25">{this.props.name}</div>
        <div className="column column-25">{this.props.date}</div>
        <div className="column column-35">{this.props.favouriteDish.name}</div>
        <div className="column column-15">{this.props.grades[0]}</div>
      </div>
    );
  }
}
