"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// enregistrer les modules nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const data = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai"],
    datasets: [
      {
        label: "Revenus",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#1e7f43",
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return <Bar data={data} options={options} />;
}