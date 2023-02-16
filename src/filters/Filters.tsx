import * as React from "react";

interface FiltersProps {}

export class Filters extends React.Component<FiltersProps> {
  public render() {
    return (
      <div className="row">
        <div className="column column-50">
          <label>Keyword</label>
          <input type="text" data-test="keyword-input" />
        </div>
        <div className="column column-50">
          <label>Grades Order</label>
          <select data-test="order-selector">
            <option value="asc">asc ↑</option>
            <option value="desc">desc ↓</option>
          </select>
        </div>
      </div>
    );
  }
}
