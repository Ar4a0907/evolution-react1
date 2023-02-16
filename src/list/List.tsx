import * as React from "react";
import {ListProps, ListRecord} from "../types";
import { ListItem } from "./ListItem";
import { ListHeader } from "./ListHeader";
import {ListItemErrorBoundary} from "./ListItemErrorBoundary";

export class List extends React.Component<ListProps> {
  public render() {
    return (
      <div data-test="notes-list">
        <ListHeader />
        {this.props.data.map((listItem: ListRecord) => (
          <ListItemErrorBoundary  key={listItem.id} >
            <ListItem {...listItem} />
          </ListItemErrorBoundary>
        ))}
      </div>
    );
  }
}
