import axios from 'axios';
import Config from '../assets/configs/configs.json';
import { useState } from 'react';

const BotPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const sendText = async () => {
    try {
      const res = await axios.post(
        `${Config.BACKEND_URL}/restaurants/menu`,
        { ingredient: text },
        {
          withCredentials: true,
        }
      );

    //   console.log(res.data);
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="botpage-container">
      <h3>What ingredient do you want to eat?</h3>
      <input value={text} onChange={handleChange} />
      <button onClick={sendText}>Send</button>
      {result !== '' && <h3 className="result">{result}</h3>}
    </div>
  );
};
export default BotPage;
