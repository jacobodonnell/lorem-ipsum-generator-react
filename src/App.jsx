import data from './data.js';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const newText = data.slice(0, parseInt(count));
    setText(newText);
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      {text.length > 0 && (
        <article className="lorem-text">
          {text.map(paragraph => {
            return <p key={nanoid()}>{paragraph}</p>;
          })}
        </article>
      )}
    </section>
  );
};
export default App;
