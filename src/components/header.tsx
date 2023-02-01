import Link from "next/link";

const Header = () => {
  return (
    <div className="flex">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-2 mx-5">
        <Link href="/" className="hover:underline">
          hotman&apos;s HP
        </Link>
      </h2>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-2 mx-5">
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </h2>
    </div>
  );
};

export default Header;
