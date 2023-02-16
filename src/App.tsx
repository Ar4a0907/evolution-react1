import "./styles.css";
import { Filters } from "./filters/Filters";
import { List } from "./list/List";
import { ListRecord } from "./types";

export function App() {
  // todo: implement proper data and filters storing
  // and pass it down to the components
  let notes: ListRecord[] = [];

  // you can get fresh data by subscribing like this
  window.NotesStorage?.subscribe((updatedList) => {
    // as soon as Bob updates the data, this callback will be called
    // {updatedList} is the new data you have to display
    notes = updatedList;
  });

  return (
    <div className="App">
      <h1>Bob's list</h1>
      <Filters />
      <List data={notes} />
    </div>
  );
}
