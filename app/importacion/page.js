import Image from "next/image";
import Placeholder from "../../public/placeholder.svg";
/* import Placeholder from "../public/placeholder.svg"; */

let num1 = 10;
let price = 400;

export default function Home() {
  return (
    <main className="mx-24 my-16">
      <h1 className="text-white text-3xl font-medium">Importación ({num1})</h1>

      <section className="my-16 flex justify-between">
        <div className="grid grid-cols-4 gap-6">
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
          <div className="w-[200px] h-[360px] bg-white rounded p-1">
            <div className="h-auto]">
              <Image src={Placeholder} />
            </div>
            <h1 className="text-xl my-2">Patinete</h1>
            <p className="text-sm">La estructura del nuevo pat...</p>
            <button className="w-[78px] h-[30px] text-center bg-COrange mt-9 rounded text-white font-semibold text-sm">
              Más info
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col  w-[600px] h-full rounded overflow-hidden ">
          <h1 className=" bg-CGrey p-1  text-lg px-5 text-white">TOP</h1>
          <div className="flex flex-col gap-3.5 p-5">
            <div className="flex justify-between">
              <h1 className="">Xiaomi Mi Electric Scooter Pro</h1>
              <button className="bg-black text-sm rounded px-2  font-semibold text-white">
                {price} €
              </button>
            </div>
            <hr className="mx-5 border-COrange"></hr>
            <div className="flex justify-between">
              <h1 className=" ">Xiaomi Mi Electric Scooter Pro</h1>
              <button className="bg-black text-sm rounded px-2  font-semibold text-white">
                {price} €
              </button>
            </div>
            <hr className="mx-5 border-COrange"></hr>
            <div className="flex justify-between">
              <h1 className="  ">Xiaomi Mi Electric Scooter Pro</h1>
              <button className="bg-black text-sm rounded px-2  font-semibold text-white">
                {price} €
              </button>
            </div>
            <hr className="mx-5 border-COrange"></hr>
            <div className="flex justify-between">
              <h1 className="  ">Xiaomi Mi Electric Scooter Pro</h1>
              <button className="bg-black text-sm rounded px-2  font-semibold text-white">
                {price} €
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
