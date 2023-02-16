import * as React from "react";
import {FiltersProps, FiltersState} from "../types";

export class Filters extends React.Component<FiltersProps, FiltersState> {
  constructor(props: FiltersProps) {
    super(props)

    this.state = {
      keyword: "",
      order: "",
    }
  }

  handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value
    const {order} = this.state
    this.setState({keyword})
    this.props.onFilterChange(keyword, order)
  }

  handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const order = event.target.value as "asc" | "desc" | ""
    const {keyword} = this.state
    this.setState({order})
    this.props.onFilterChange(keyword, order)
  }

  public render() {
    const {keyword, order} = this.state

    return (
      <div className="row">
        <div className="column column-50">
          <label>Keyword</label>
          <input type="text" data-test="keyword-input" value={keyword} onChange={this.handleKeywordChange}/>
        </div>
        <div className="column column-50">
          <label>Grades Order</label>
          <select data-test="order-selector" value={order} onChange={this.handleOrderChange}>
            <option value="">Select option</option>
            <option value="asc">asc ↑</option>
            <option value="desc">desc ↓</option>
          </select>
        </div>
      </div>
    )
  }
}
