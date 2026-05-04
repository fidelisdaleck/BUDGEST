"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

// Enregistrer les éléments nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Alimentation", "Transport", "Loisirs", "Autres"],
    datasets: [
      {
        label: "Dépenses",
        data: [3000, 1500, 1000, 800],
        backgroundColor: [
          "#3B82F6",
          "#1e7f43",
          "#F59E0B",
          "#EF4444",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return <Pie data={data} options={options} />;
}