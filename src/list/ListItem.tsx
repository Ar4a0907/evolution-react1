import * as React from "react";
import { ListRecord } from "../types";

type ListItemProps = Omit<ListRecord, "id">;

export class ListItem extends React.Component<ListItemProps> {
  private getAverageGrade = (): number => {
    const { grades } = this.props
    if (!Array.isArray(grades))
      throw new Error('Grades must be an array')

    if (grades.length === 0)
      return 0;

    const sum = grades.reduce((total, grade) => total + grade)
    return sum / grades.length
  }

  public render() {
    const averageGrade = this.getAverageGrade().toFixed(2)

    return (
      <div className="row listItem" data-test="list-item">
        <div className="column column-25">{this.props.name}</div>
        <div className="column column-25">{this.props.date}</div>
        <div className="column column-35">{this.props.favouriteDish.name}</div>
        <div className="column column-15">{averageGrade}</div>
      </div>
    )
  }
}
