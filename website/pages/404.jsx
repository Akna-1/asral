import Link from "next/link";
import Image from "next/image";

export default function Error() {
  return (
    <>
      <div className="p-10 flex flex-col items-center pt-1 space-x-2 bg-opacity-25 rounded-xl">
        <a className="w-42 mt-2 py-2 font-medium px-7 text-zinc-900 dark:text-white hover:bg-opacity-50 transition duration-200">
          Sayfa Bulunamadı
        </a>
        <Link legacyBehavior href="/">
          <button class="w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-[#5865F2] hover:bg-opacity-50 transition duration-200">
            <i class="fa fa-arrow-left mr-2"></i>Geri dön
          </button>
        </Link>
      </div>
    </>
  );
}
