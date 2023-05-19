import { useState } from "react";
import "./Notes.scss";
import Note from "./Note/Note";
import Button from "../button/Button";
import { useAppSelector } from "../../hooks/hooks";
import AddEntryPopup from "../../popups/add-entry-popup/AddEntryPopup";

const Notes = () => {

  const [sort, setSort] = useState("убыванию даты");
  const [search, setSearch] = useState("");

  const [addEntryOpen, setAddEntryOpen] = useState(false)

  const {entryes} = useAppSelector(state => state.entryesSlice)  

  const clickHandler = () => {
    setAddEntryOpen(prev => !prev)
  }

  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }

  const searchEntryes = entryes.filter(item => item.head.includes(search))

  return (
    <div className="Notes">
      <div className="Notes__options">
        <Button value='+ Заметка' onClick={clickHandler}/>
        <input
        value={search}
        onChange={handleChange}
          className="Notes__search large-text"
          type="text"
          placeholder="Поиск..."
        />
        <p className="large-text">
          сортировать по <span>{sort}</span>
        </p>
      </div>
      <div className="Notes__entries">
        {searchEntryes.length ? searchEntryes.map(entry => <Note key={entry.id} {...entry} />) : 'ничего не найдено'}    
      </div>
      {addEntryOpen && <AddEntryPopup clickHandler={clickHandler} />}
    </div>
  );
};

export default Notes;
