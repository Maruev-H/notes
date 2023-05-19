import React, { useState, FC } from "react";
import "./ChangeEntryPopup.scss";
import { IEntry } from "../../types/types";
import { changeEntry } from "../../store/reducers/entryesSlice";
import Button from "../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

interface IChangeEntryPopup {
  clickHandler: () => void;
}

const ChangeEntryPopup: FC<IChangeEntryPopup> = ({ clickHandler }) => {
  const dispatch = useAppDispatch();

  const { entryes, selectedEntryId } = useAppSelector((state) => state.entryesSlice)
  const selectedEntry = entryes.find(item => item.id === selectedEntryId) || {id: 0, head: '', content: ''}
  const { id, head, content } = selectedEntry


  const [entry, setEntry] = useState<IEntry>({ head, content, id });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleChangeEntry = () => {
    if (entry.head.length && entry.content.length) {
        console.log(entry);
        
      dispatch(changeEntry(entry));
      setEntry({ head: "", content: "", id: 0 });
    }
    clickHandler();
  };

  return (
    <div className="add-entry-popup">
      <h2 className="add-entry-popup__title">Change Entry Popup</h2>
      <input
        type="text"
        name="head"
        value={entry.head}
        onChange={handleInputChange}
        placeholder="Head"
        className="add-entry-popup__input large-text"
      />
      <textarea
        name="content"
        value={entry.content}
        onChange={handleInputChange}
        placeholder="Content"
        className="add-entry-popup__textarea large-text"
      />
      <Button value="Change Entry" onClick={handleChangeEntry} />
    </div>
  );
};

export default ChangeEntryPopup;
