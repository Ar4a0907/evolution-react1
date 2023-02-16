declare global {
  interface Window {
    NotesStorage: Storage;
  }
}

export type StorageData = ListRecord[];

export type StorageSubscriber = (data: StorageData) => void;

export interface Storage {
  subscribe: (subscriber: StorageSubscriber) => () => void;
  __modifyStorage: (data: StorageData) => void;
  __getData: () => StorageData;
}

export interface ListRecord {
  id: string;
  name: string;
  date: string;
  favouriteDish: {
    name: string;
    note?: string;
  };
  grades: number[];
}

export interface FiltersProps {
  onFilterChange: (keyword: string, order: "asc" | "desc" | "") => void;
}

export interface FiltersState {
  keyword: string;
  order: "asc" | "desc" | "";
}

export interface ListProps {
  data: ListRecord[]
}

export interface ListItemErrorBoundaryState {
  hasError: boolean
}
