import { useState } from "react";
import "./Notes.scss";
import Note from "./Note/Note";
import Button from "../button/Button";
import { useAppSelector } from "../../hooks/hooks";
import AddEntryPopup from "../../popups/add-entry-popup/AddEntryPopup";

const Notes = () => {

  const [reverse, setReverse] = useState(false);
  const [search, setSearch] = useState("");

  const [addEntryOpen, setAddEntryOpen] = useState(false);

  const { entryes } = useAppSelector((state) => state.entryesSlice);

  const clickHandler = () => {
    setAddEntryOpen((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  let searchEntryes = entryes.filter((item) => item.head.includes(search));

  searchEntryes = reverse ? searchEntryes.slice().reverse() : searchEntryes 

  const sortReverseClickHandler = () => {
    setReverse(true)
  }

  const sortNotReverseClickHandler = () => {
    setReverse(false)
  }

  return (
    <div className="Notes">
      <div className="Notes__options">
        <Button value="+ Заметка" onClick={clickHandler} />
        <input
          value={search}
          onChange={handleChange}
          className="Notes__search large-text"
          type="text"
          placeholder="Поиск..."
        />
        <p className="large-text">
          сортировать по{" "}
          <span className="Notes__sort">
            {reverse ? 'возрастанию даты' : 'убыванию даты'}
            <div className="Notes__sort__points">
              <span onClick={sortNotReverseClickHandler} className="Notes__sort">убыванию даты</span>
              <span onClick={sortReverseClickHandler} className="Notes__sort">возрастанию даты</span>
            </div>
          </span>
        </p>
      </div>
      <div className="Notes__entries">
        {searchEntryes.length
          ? searchEntryes.map((entry) => <Note key={entry.id} {...entry} />)
          : "ничего не найдено"}
      </div>
      {addEntryOpen && <AddEntryPopup clickHandler={clickHandler} />}
    </div>
  );
};

export default Notes;
