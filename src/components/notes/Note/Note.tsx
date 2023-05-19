import React,{FC} from "react";
import { AiTwotoneDelete } from 'react-icons/ai';
import "./Note.scss";
import { IEntry } from "../../../types/types";
import { useAppDispatch } from "../../../hooks/hooks";
import { deleteEntry, selectEntry } from "../../../store/reducers/entryesSlice";

const Note:FC<IEntry> = ({head, content, id}) => {

  const dispatch = useAppDispatch()

  const clickHandler = () => {
    dispatch(selectEntry(id))
  }

  const removeEntryHandler = () => {
    dispatch(deleteEntry(id))
  }

  return (
    <div onClick={clickHandler} className="Note">
      <h1 className="Note__head large-text">{head.length > 20 ? `${head.substring(0, 20)}...` : head}</h1>
      <p className="Note__content">{content.length > 30 ? `${content.substring(0, 20)}...` : content}</p>
      <div className="Note__delete" onClick={removeEntryHandler}><AiTwotoneDelete /></div>
    </div>
  );
};

export default Note;
