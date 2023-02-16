import * as React from "react";
import {WrongItemPlaceholder} from "./WrongItemPlaceholder";
import {ListItemErrorBoundaryState} from "../types";

export class ListItemErrorBoundary extends React.Component<React.PropsWithChildren, ListItemErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    return this.state.hasError ? <WrongItemPlaceholder/> : this.props.children
  }
}
