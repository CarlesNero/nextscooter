import Image from "next/image";
import Icon from "../public/electric-scooter.svg";

export default function Header() {
  return (
    <nav className="bg-CGrey p-4 flex justify-between items-center px-10">
      <div className="flex items-center gap-10 ">
        <div className="flex gap-3">
          <Image className="w-8" src={Icon} />
          <h1 className="text-CBlue font-bold text-2xl">ElecScoot</h1>
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="/" className="text-white font-semibold">
              HOME
            </a>
          </li>
          <li>
            <a href="scooter" className="text-white font-semibold">
              SCOOTERS
            </a>
          </li>
          <li>
            <a href="importacion" className="text-white font-semibold">
              IMPORTACIÓN
            </a>
          </li>
        </ul>
      </div>
      <div className="w-14 h-7 bg-CRed rounded-2xl flex items-center p-1  shadow-[inset_0px_0px_6px_1px_#000]">
        <a href="">
          <div className="rounded-full shadow-[0px_0px_6px_1px_grey] w-5 h-5 bg-COrange"></div>
        </a>
      </div>
    </nav>
  );
}
