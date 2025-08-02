import Link from "next/link";

export default function ButtonHero() {
  return (
    <Link href="#"
      className="cursor-target inline-block text-center px-6 py-3 rounded-2xl font-semibold text-white bg-violet-600 border border-violet-500 shadow-md
                 hover:bg-violet-700 hover:shadow-lg hover:border-violet-400
                 active:scale-95 transition-all duration-200 ease-in-out"
    >
      Learn More
    </Link>
  );
}
