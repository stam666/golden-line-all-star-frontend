import { useEffect, useState } from 'react';
import Config from "../assets/configs/configs.json";
import EngmtList from '../components/EngmtList';
import EngmtGraph from '../components/EngmtGraph';
import axios from 'axios';

const EngmtPage = () => {
  const [engmtList, setEngmtList] = useState([]);
  const [engmtSelected, setEngmtSelected] = useState('');

  useEffect(() => {
    const fetchEngmtList = async () => {
      try {
        // const res = await axios.get(
        //   `${Config.BACKEND_URL}/user/chatRooms/${userId}`,
        //   {
        //     withCredentials: true,
        //   }
        // );
        // setEngmtList(res.data.chats);
      } catch (error) {
        console.error(error);
      }
    };

    // fetchEngmtList();
  }, []);

  return (
    <div className="engmtpage-container">
      <div className="engmt-container">
        <EngmtList
          engmtList={engmtList}
          engmtIDSelected={engmtSelected}
          setEngmtIDSelected={setEngmtSelected}
        />
        <EngmtGraph res={[]} />
      </div>
    </div>
  );
};
export default EngmtPage;
