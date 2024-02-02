import Image from "next/image";
import Icon from "../public/electric-scooter.svg";
import Header from "./header";

export default function Search() {
  return (
    <main className="bg-CBlue ">
      <section>
        <form className="flex items-center justify-end mx-10 my-5 gap-5">
          <h1 className="text-white font-medium text-xl">BUSCAR</h1>
          <input placeholder="|" className="p-2 rounded-md text-sm"></input>
        </form>
      </section>
    </main>
  );
}
