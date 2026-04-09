import {
  Facebook,
  Instagram,
  Music2,
  MapPin,
  Mail,
  Phone,
  HandCoins,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="px-10 py-15 bg-[#0e3d20] cursor-pointer text-white">
      <div className="flex md:items-center justify-between gap-7 md:flex-row flex-col">
        <div>
          <div className="flex gap-2">
            <HandCoins size={30} className="text-[#1E7F43]" />
            <h1 className="text-2xl text-[#1E7F43]">BUDGEST</h1>
          </div>
          <p className="mt-5 w-80 text-10 text-[#7c7c7c]">
            Votre application de gestion budgetaire au quotidien.
          </p>
          <div className="flex gap-7 mt-5">
            <Facebook className="w-6 h-6 text-[#1E7F43]  cursor-pointer" />
            <Instagram className="w-6 h-6 text-[#1E7F43] cursor-pointer" />
            <Music2 className="w-6 h-6 text-[#1E7F43] cursor-pointer" />
          </div>
        </div>

        <div className="">
          <h2 className="text-xl text-white">Liens Rapides</h2>
          <ul className="text-10 text-[#7c7c7c]">
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              A Propos
            </li>
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              Fonctionalités
            </li>
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              Tarification
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-white">Fonctionalités</h2>
          <ul className="text-10 text-[#7c7c7c]">
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              Gérez vos revenus et dépenses facilement
            </li>
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              Organisez vos dépenses intelligemment
            </li>
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              Fixez votre budget
            </li>
            <li className="mt-2 hover:text-[#1E7F43] cursor-pointer">
              Visualisez vos finances en un coup dœil
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-white">Contact</h2>
          <ul className="text-10 text-[#7c7c7c]">
            <li className="mt-2">
              <MapPin className="w-5 h-5 inline mr-2 text-[#1E7F43]" /> Douala,
              Cameroun.
            </li>
            <li className="mt-2">
              <Mail className="w-5 h-5 inline mr-2 text-[#1E7F43]" />{" "}
              budgestcontact@gmail.com
            </li>
            <li className="mt-2">
              <Phone className="w-5 h-5 inline mr-2 text-[#1E7F43]" /> +237 6 xx
              xx xx xx
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className="block w-full h-0.5 bg-gray-500 mx-auto mt-10"></span>
        <p className="text-center text-10 text-[#7c7c7c] mt-5">
          &copy; 2026 BUDGEST. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
