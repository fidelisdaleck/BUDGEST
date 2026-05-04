import Chart from "@/components/chartTemp";
import PieChart from "@/components/PieChart";
export default function Statistiques() {
  return (
    /* DIAGRAMME */
    <section className="px-10 mt-5">
      <div className="mb-15 space-y-2">
        <h1 className="text-4xl text-[#1e7f43]">Évolution de votre budget</h1>
        <p className="text-lg text-[#444444]">
          Visualisez l’évolution de vos revenus et dépenses au fil du temps pour
          mieux comprendre votre situation financière.
        </p>
      </div>
      <div className="flex justify-between items-center lg:flex-row flex-col">
        <div className="space-y-10  md:mb-10 ">
          <h1 className="text-3xl text-[#333333]">Répartition des revenus</h1>
          <Chart />
        </div>
        <div className="space-y-10">
          <h2 className="text-3xl text-[#333333]">Répartition des dépenses</h2>
          <div className="w-64 h-64 mx-auto">
            <PieChart />
          </div>
        </div>
      </div>
    </section>
  );
}
