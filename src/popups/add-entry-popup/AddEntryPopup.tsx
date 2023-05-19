import React, { useState, FC } from 'react';
import './AddEntryPopup.scss';
import { IEntry } from '../../types/types';
import { addEntry } from '../../store/reducers/entryesSlice';
import Button from '../../components/button/Button';
import { useAppDispatch } from '../../hooks/hooks';

interface IAddEntryPopup {
    clickHandler: () => void
}

const AddEntryPopup: FC<IAddEntryPopup> = ({clickHandler}) => {

  const dispatch = useAppDispatch()
  const [entry, setEntry] = useState<IEntry>({ head: '', content: '', id: Date.now() });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleAddEntry = () => {
    if (entry.head.length && entry.content.length) {
        dispatch(addEntry(entry));
        setEntry({ head: '', content: '', id: 0 })
    }
    clickHandler()
  };

  return (
    <div className="add-entry-popup">
      <h2 className="add-entry-popup__title">Add Entry Popup</h2>
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
      <Button value='Add Entry' onClick={handleAddEntry}/>
    </div>
  );
};

export default AddEntryPopup;