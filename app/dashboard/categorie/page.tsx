import AddCategorie from "@/components/add-categorie";
import CategorieList from "@/components/categorielist";

export default function Categorie() {
  return (
    <div className="px-10">
      <section className="flex justify-between flex-col md:flex-row gap-3 md:gap-5">
        <div>
          <h1 className="text-4xl text-[#333333]">Gérer vos catégories</h1>
          <p className="text-lg text-[#444444]">
            Organisez vos finances en créant et gérant vos catégories de
            dépenses et de revenus.
          </p>
        </div>
        <div>
            <AddCategorie />
        </div>
        <div>
          <CategorieList/>
        </div>
      </section>
    </div>
  );
}
