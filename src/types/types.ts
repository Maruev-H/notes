export interface IEntry {
    head: string;
    content: string;
    id: number;
}

export interface IEntryesSlice {
    entryes: IEntry[]
    selectedEntryId: number
}