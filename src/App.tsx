import "./styles.css";
import {Filters} from "./filters/Filters";
import {List} from "./list/List";
import {ListRecord} from "./types";
import {useEffect, useState} from "react";

export function App() {
  const [notes, setNotes] = useState<ListRecord[]>([])

  useEffect(() => {
    window.NotesStorage?.subscribe((updatedList) => {
      setNotes(updatedList)
    })
  }, [])

  const handleFilterChange = (keyword: string, order: "asc" | "desc" | "") => {
    if (order === 'asc') {
      setNotes(prev => {
        const sortedNotes = [...prev]
        sortedNotes.sort((city1, city2) => {
          const avg1 = city1.grades.reduce((sum, grade) => sum + grade, 0) / city1.grades.length
          const avg2 = city2.grades.reduce((sum, grade) => sum + grade, 0) / city2.grades.length
          return avg1 - avg2
        })
        return sortedNotes
      })
    } else if (order === 'desc') {
      setNotes(prev => {
        const sortedNotes = [...prev]
        sortedNotes.sort((city1, city2) => {
          const avg1 = city1.grades.reduce((sum, grade) => sum + grade, 0) / city1.grades.length
          const avg2 = city2.grades.reduce((sum, grade) => sum + grade, 0) / city2.grades.length
          return avg2 - avg1
        });
        return sortedNotes
      })
    }

    if (keyword) {
      setNotes(prev => {
        const keyWordNotes = prev.filter(elem => elem.name.toLocaleUpperCase().includes(keyword.toLocaleUpperCase()))
        return keyWordNotes
      })
    }
  }


  return (
    <div className="App">
      <h1>Bob's list</h1>
      <Filters onFilterChange={handleFilterChange}/>
      <List data={notes}/>
    </div>
  );
}
