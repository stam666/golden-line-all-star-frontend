import { useEffect, useState } from 'react';
import Config from '../assets/configs/configs.json';
import EngmtList from '../components/EngmtList';
import EngmtGraph from '../components/EngmtGraph';
import axios from 'axios';

const mock = [
  {
    name: 'Molly Cummerata',
    statistics: {
      allVisitors: 4,
      daily: {
        labels: [
          '2023-05-04T13:00',
          '2023-05-04T14:00',
          '2023-05-04T15:00',
          '2023-05-04T16:00',
          '2023-05-04T17:00',
          '2023-05-04T18:00',
          '2023-05-04T19:00',
          '2023-05-04T20:00',
          '2023-05-04T21:00',
          '2023-05-04T22:00',
          '2023-05-04T23:00',
          '2023-05-05T00:00',
          '2023-05-05T01:00',
          '2023-05-05T02:00',
          '2023-05-05T03:00',
          '2023-05-05T04:00',
          '2023-05-05T05:00',
          '2023-05-05T06:00',
          '2023-05-05T07:00',
          '2023-05-05T08:00',
          '2023-05-05T09:00',
          '2023-05-05T10:00',
          '2023-05-05T11:00',
          '2023-05-05T12:00',
          '2023-05-05T13:00',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
          1, 1,
        ],
        count: 3,
      },
      weekly: {
        labels: [
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 3],
        count: 3,
      },
      monthly: {
        labels: [
          '2023-04-05',
          '2023-04-06',
          '2023-04-07',
          '2023-04-08',
          '2023-04-09',
          '2023-04-10',
          '2023-04-11',
          '2023-04-12',
          '2023-04-13',
          '2023-04-14',
          '2023-04-15',
          '2023-04-16',
          '2023-04-17',
          '2023-04-18',
          '2023-04-19',
          '2023-04-20',
          '2023-04-21',
          '2023-04-22',
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 3,
        ],
        count: 3,
      },
      topVisitors: [
        {
          count: 4,
          user: {
            name: 'admin1',
            email: 'admin1@gmail.com',
          },
        },
      ],
    },
  },
  {
    name: 'Mable Kirlin DDS',
    statistics: {
      allVisitors: 0,
      daily: {
        labels: [
          '2023-05-04T13:00',
          '2023-05-04T14:00',
          '2023-05-04T15:00',
          '2023-05-04T16:00',
          '2023-05-04T17:00',
          '2023-05-04T18:00',
          '2023-05-04T19:00',
          '2023-05-04T20:00',
          '2023-05-04T21:00',
          '2023-05-04T22:00',
          '2023-05-04T23:00',
          '2023-05-05T00:00',
          '2023-05-05T01:00',
          '2023-05-05T02:00',
          '2023-05-05T03:00',
          '2023-05-05T04:00',
          '2023-05-05T05:00',
          '2023-05-05T06:00',
          '2023-05-05T07:00',
          '2023-05-05T08:00',
          '2023-05-05T09:00',
          '2023-05-05T10:00',
          '2023-05-05T11:00',
          '2023-05-05T12:00',
          '2023-05-05T13:00',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        count: 0,
      },
      weekly: {
        labels: [
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        count: 0,
      },
      monthly: {
        labels: [
          '2023-04-05',
          '2023-04-06',
          '2023-04-07',
          '2023-04-08',
          '2023-04-09',
          '2023-04-10',
          '2023-04-11',
          '2023-04-12',
          '2023-04-13',
          '2023-04-14',
          '2023-04-15',
          '2023-04-16',
          '2023-04-17',
          '2023-04-18',
          '2023-04-19',
          '2023-04-20',
          '2023-04-21',
          '2023-04-22',
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
        ],
        count: 0,
      },
      topVisitors: [],
    },
  },
  {
    name: 'Dr. Bonnie Reinger',
    statistics: {
      allVisitors: 0,
      daily: {
        labels: [
          '2023-05-04T13:00',
          '2023-05-04T14:00',
          '2023-05-04T15:00',
          '2023-05-04T16:00',
          '2023-05-04T17:00',
          '2023-05-04T18:00',
          '2023-05-04T19:00',
          '2023-05-04T20:00',
          '2023-05-04T21:00',
          '2023-05-04T22:00',
          '2023-05-04T23:00',
          '2023-05-05T00:00',
          '2023-05-05T01:00',
          '2023-05-05T02:00',
          '2023-05-05T03:00',
          '2023-05-05T04:00',
          '2023-05-05T05:00',
          '2023-05-05T06:00',
          '2023-05-05T07:00',
          '2023-05-05T08:00',
          '2023-05-05T09:00',
          '2023-05-05T10:00',
          '2023-05-05T11:00',
          '2023-05-05T12:00',
          '2023-05-05T13:00',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        count: 0,
      },
      weekly: {
        labels: [
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        count: 0,
      },
      monthly: {
        labels: [
          '2023-04-05',
          '2023-04-06',
          '2023-04-07',
          '2023-04-08',
          '2023-04-09',
          '2023-04-10',
          '2023-04-11',
          '2023-04-12',
          '2023-04-13',
          '2023-04-14',
          '2023-04-15',
          '2023-04-16',
          '2023-04-17',
          '2023-04-18',
          '2023-04-19',
          '2023-04-20',
          '2023-04-21',
          '2023-04-22',
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
        ],
        count: 0,
      },
      topVisitors: [],
    },
  },
  {
    name: 'Randall Turcotte IV',
    statistics: {
      allVisitors: 2,
      daily: {
        labels: [
          '2023-05-04T13:00',
          '2023-05-04T14:00',
          '2023-05-04T15:00',
          '2023-05-04T16:00',
          '2023-05-04T17:00',
          '2023-05-04T18:00',
          '2023-05-04T19:00',
          '2023-05-04T20:00',
          '2023-05-04T21:00',
          '2023-05-04T22:00',
          '2023-05-04T23:00',
          '2023-05-05T00:00',
          '2023-05-05T01:00',
          '2023-05-05T02:00',
          '2023-05-05T03:00',
          '2023-05-05T04:00',
          '2023-05-05T05:00',
          '2023-05-05T06:00',
          '2023-05-05T07:00',
          '2023-05-05T08:00',
          '2023-05-05T09:00',
          '2023-05-05T10:00',
          '2023-05-05T11:00',
          '2023-05-05T12:00',
          '2023-05-05T13:00',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
          0, 0,
        ],
        count: 1,
      },
      weekly: {
        labels: [
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 1],
        count: 1,
      },
      monthly: {
        labels: [
          '2023-04-05',
          '2023-04-06',
          '2023-04-07',
          '2023-04-08',
          '2023-04-09',
          '2023-04-10',
          '2023-04-11',
          '2023-04-12',
          '2023-04-13',
          '2023-04-14',
          '2023-04-15',
          '2023-04-16',
          '2023-04-17',
          '2023-04-18',
          '2023-04-19',
          '2023-04-20',
          '2023-04-21',
          '2023-04-22',
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1,
        ],
        count: 1,
      },
      topVisitors: [
        {
          count: 1,
          user: {
            name: 'admin1',
            email: 'admin1@gmail.com',
          },
        },
      ],
    },
  },
  {
    name: 'Deanna Heaney',
    statistics: {
      allVisitors: 1,
      daily: {
        labels: [
          '2023-05-04T13:00',
          '2023-05-04T14:00',
          '2023-05-04T15:00',
          '2023-05-04T16:00',
          '2023-05-04T17:00',
          '2023-05-04T18:00',
          '2023-05-04T19:00',
          '2023-05-04T20:00',
          '2023-05-04T21:00',
          '2023-05-04T22:00',
          '2023-05-04T23:00',
          '2023-05-05T00:00',
          '2023-05-05T01:00',
          '2023-05-05T02:00',
          '2023-05-05T03:00',
          '2023-05-05T04:00',
          '2023-05-05T05:00',
          '2023-05-05T06:00',
          '2023-05-05T07:00',
          '2023-05-05T08:00',
          '2023-05-05T09:00',
          '2023-05-05T10:00',
          '2023-05-05T11:00',
          '2023-05-05T12:00',
          '2023-05-05T13:00',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        count: 0,
      },
      weekly: {
        labels: [
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        count: 0,
      },
      monthly: {
        labels: [
          '2023-04-05',
          '2023-04-06',
          '2023-04-07',
          '2023-04-08',
          '2023-04-09',
          '2023-04-10',
          '2023-04-11',
          '2023-04-12',
          '2023-04-13',
          '2023-04-14',
          '2023-04-15',
          '2023-04-16',
          '2023-04-17',
          '2023-04-18',
          '2023-04-19',
          '2023-04-20',
          '2023-04-21',
          '2023-04-22',
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
        ],
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
        ],
        count: 0,
      },
      topVisitors: [],
    },
  },
];

const EngmtPage = () => {
  const [engmtList, setEngmtList] = useState(mock);
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
