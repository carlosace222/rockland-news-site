import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="border-t-[3px] border-red" />
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center gap-3 text-center">
        <p className="text-xs text-gray">
          &copy; {new Date().getFullYear()} rockland.news
          <span className="mx-2 text-rule-dark">|</span>
          <span className="italic text-gray-light">
            Public records, made more understandable.
          </span>
        </p>
        <p className="text-xs text-gray-light">
          Created by{" "}
          <Link
            href="/about#editor"
            className="text-ink hover:text-red transition-colors underline underline-offset-2"
          >
            Carlos Acevedo
          </Link>
        </p>
      </div>
    </footer>
  );
}
