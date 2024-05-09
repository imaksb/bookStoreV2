import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const typesOfCharts = ["Bar", "Line", "Doughnut"];

function Stats({ books }) {
  const [chart, setChart] = useState("bar");

  function handleChangeChart(type) {
    setChart(type.toLowerCase());
  }

  const data = {
    labels: books.map((book) => book.title),
    datasets: [
      {
        label: "Кількість",
        data: books.map((book) => book.count),
      },
    ],
  };
  return (
    <div>
      {chart === "bar" && <Bar data={data} />}
      {chart === "line" && <Line data={data} />}
      {chart === "doughnut" && (
        <Doughnut
          data={data}
          options={{
            aspectRatio: 2,
          }}
        />
      )}
      <div className="change-type">
        {typesOfCharts.map((type) => (
          <button
            key={type}
            onClick={() => handleChangeChart(type)}
            className={chart === type.toLowerCase() ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Stats;
