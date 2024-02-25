import css from './App.module.css';
import ContentComponent from './components/ContentComponent.js';
import { useSelector, useDispatch } from 'react-redux';
import { updateContent } from './store/store.js';
import { useState } from 'react';

export default function App() {
  const [path, setPath] = useState('');
  const [newValue, setNewValue] = useState('');
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const handleApply = () => {
    if (path === '' || newValue === '') {
      return;
    }
    dispatch(updateContent(path, newValue));
    setNewValue('');
    setPath('');
  };

  return (
    <div className={css.dataForm}>
      <div className={css.inputField}>
        <input
          type="text"
          id="path"
          placeholder="Путь"
          value={path}
          onChange={(evt) => setPath(evt.target.value)}
        />
        <input
          type="text"
          id="newValue"
          placeholder="Новое значение"
          value={newValue}
          onChange={(evt) => setNewValue(evt.target.value)}
        />
        <button onClick={handleApply}>Применить</button>
      </div>
      <div id="displayArea" className={css.displayArea}>
        <ContentComponent content={content} />
      </div>
    </div>
  );
}
