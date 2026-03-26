export default function Depense() {
  return (
    <div className="px-10 py-5">
      {/* TRANSACTIONS */}
      <section className="">
        <div className=" text-center space-y-3">
          <h1 className="text-4xl text-[#1e7f43]">Transactions récentes</h1>
          <p className="text-xl text-[#444444]">
            Consultez vos dernières opérations financières.
          </p>
        </div>
        <div className="w-full mt-15">
          <table className="w-full border">
            <thead className="bg-[#1e7f43] text-white">
              <tr>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Catégorie</th>
                <th className="p-3 border">Montant</th>
              </tr>
            </thead>
          </table>
          <p className="text-center text-xl text-[#444444]  mt-5">
            Aucune transaction pour le moment. Commencez par ajouter un revenu
            ou une dépense.
          </p>
        </div>
      </section>
    </div>
  );
}
