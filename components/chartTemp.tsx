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
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai" , "Avril", "Juil"],
    datasets: [
      {
        label: "Revenus",
        data: [12000, 2500, 3000, 5500, 2900, 4000],
        backgroundColor: "#1e7f43",
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return <Bar data={data} options={options} />;
}