import {useEffect, useState} from "react";
import Config from "../assets/configs/configs.json";
import EngmtList from "../components/EngmtList";
import EngmtGraph from "../components/EngmtGraph";
import axios from "axios";

const EngmtPage = () => {
  const [engmtList, setEngmtList] = useState([]);
  const [res, setRes] = useState({});
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const fetchEngmtList = async () => {
      try {
        const res = await axios.get(
          `${Config.BACKEND_URL}/api/v1/restaurants/stats`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res.data);
        setEngmtList(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEngmtList();
  }, []);

  useEffect(() => {
    if (index > -1) {
      setRes(engmtList[index]?.statistics);
    }
  }, [index]);

  return (
    <div className="engmtpage-container">
      <div className="engmt-container">
        <EngmtList
          engmtList={engmtList}
          engmtSelected={index}
          setEngmtSelected={setIndex}
        />
        {Object.keys(res).length > 0 && <EngmtGraph res={res} />}
      </div>
    </div>
  );
};
export default EngmtPage;
