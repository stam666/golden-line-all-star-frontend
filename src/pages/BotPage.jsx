import axios from 'axios';
import Config from '../assets/configs/configs.json';
import { useState } from 'react';

const BotPage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const sendText = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${Config.BACKEND_URL}/api/v1/restaurants/menu`,
        { ingredient: text },
        {
          withCredentials: true,
        }
      );

      console.log(res.data.data);
      setResult(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="botpage-container">
      <h3>What ingredient do you want to eat?</h3>
      <input value={text} onChange={handleChange} />
      <button disabled={isLoading} onClick={sendText}>Send</button>
      {isLoading ? (
        <p>Loading ...</p>
      ) : result !== '' ? (
        <h3 className="result">{result}</h3>
      ) : (
        <></>
      )}
    </div>
  );
};
export default BotPage;
