import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";

const EngmtGraph = ({res}) => {
  const timeFrameList = ["daily", "weekly", "monthly"];
  const [timeFrame, setTimeFrame] = useState("daily");
  const [graphData, setGraphData] = useState({});

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${timeFrame} engagement`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  useEffect(() => {
    const {labels, data} = res?.[timeFrame];
    const newGraphData = {
      labels,
      datasets: [
        {
          label: "visit count",
          data,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    setGraphData(newGraphData);
  }, [res, timeFrame]);

  return (
    <div className="engmtgraph-container">
      {Object.keys(graphData).length > 0 ? (
        <>
          <Line options={options} data={graphData} />
          <div className="timeframe">
            {timeFrameList.map((tf) => (
              <button key={tf} onClick={() => setTimeFrame(tf)}>
                {tf}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>No data</>
      )}
    </div>
  );
};
export default EngmtGraph;
