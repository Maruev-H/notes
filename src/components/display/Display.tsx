import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteEntry,} from "../../store/reducers/entryesSlice";
import Button from "../button/Button";
import "./Display.scss";
import ChangeEntryPopup from "../../popups/change-entry-popup/ChangeEntryPopup";

const Display = () => {
  const dispatch = useAppDispatch();

  const { entryes, selectedEntryId } = useAppSelector((state) => state.entryesSlice)
  const selectedEntry = entryes.find(item => item.id === selectedEntryId) || {id: 0, head: '', content: ''}
  const { id, head, content } = selectedEntry

  const removeEntryHandler = () => dispatch(deleteEntry(id));

  const [changeOpen, setChangeOpen] = useState(false);

  const clickHandler = () => {
    setChangeOpen((prev) => !prev);
  };

  return (
    <div className="Display">
      <div className="Node__change">
        {!!head.length && (
          <>
            <Button onClick={clickHandler} value="Редактировать" />
            <Button onClick={removeEntryHandler} value="Удалить" />
          </>
        )}
      </div>
      <p className="Node__head">{head}</p>
      <p className="Node__content">{content}</p>
      {changeOpen && <ChangeEntryPopup clickHandler={clickHandler} />}
    </div>
  );
};

export default Display;
