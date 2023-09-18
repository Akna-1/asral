import React from "react";
import { Transition } from "@headlessui/react";
import { useToast } from "@hanseo0507/react-toast";
import Link from "next/link";
export default function Home() {
  const [loaded, setLoaded] = React.useState(false);
  const { toast } = useToast();
  React.useEffect(() => {
    setLoaded(false);

    setInterval(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      <Transition
        as={React.Fragment}
        show={loaded ? false : true}
        enter="transform transition duration-[5ms]"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-0 transition ease-in-out"
        leaveFrom="opacity-0"
        leaveTo="opacity-0"
      >
        <div>
          <div id="hero" className="p-10 animate-pulse">
            <div>
              <div className="flex justify-center items-center">
                <h1 className="font-bold text-2xl md:text-5xl tracking-tight ms-2 text-black dark:text-white">
                  <div className=" h-6 w-[220px] h-[35px] bg-slate-700 rounded" />
                </h1>
              </div>
              <br />
              <div className="grid w-[140px]  gap-4">
                <div className="col-span-5" />
                <div className="h-4 w-[150px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[130px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[50px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[190px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[100px] bg-slate-700 rounded col-span-1" />
              </div>
              <div className="grid w-[140px]  gap-4">
                <div className="col-span-5" />
                <div className="h-4 w-[120px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[160px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[40px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[120px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[110px] bg-slate-700 rounded col-span-1" />
              </div>
              <div className="grid w-[140px]  gap-4">
                <div className="col-span-5" />
                <div className="h-4 w-[130px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[190px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[50px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[120px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[110px] bg-slate-700 rounded col-span-1" />
              </div>
              <div className="grid w-[140px]  gap-4">
                <div className="col-span-5" />
                <div className="h-4 w-[120px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[160px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[40px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[120px] bg-slate-700 rounded col-span-1" />
                <div className="h-4 w-[110px] bg-slate-700 rounded col-span-1" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        as={React.Fragment}
        show={loaded ? true : false}
        enter="transform transition duration-[500ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transform duration-0 transition ease-in-out"
        leaveFrom="opacity-0"
        leaveTo="opacity-0"
      >
        <div>
          <div id="hero" className="p-10">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-2xl md:text-5xl tracking-tight ms-2 text-black dark:text-white">
                <span className="dark:text-[#454FBF] text-[#5865F2] hover:text-[#454FBF] dark:hover:text-[#5865F2]">
                  AstralBot hakkında
                </span>
              </h1>
            </div>
<br />
            <p className="text-lg leading-7 text-black dark:text-white">Göt</p>
            <p className="text-lg leading-7 text-black dark:text-white">Göt bir göttür</p>
            <p className="text-lg leading-7 text-black dark:text-white">Sen bir götsün</p>
            <p className="text-lg leading-7 text-black dark:text-white">Götünü yüyüm</p>
          </div>
        </div>
      </Transition>
    </>
  );
}
