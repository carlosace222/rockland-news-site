export default function Footer() {
  return (
    <footer>
      <div className="border-t-[3px] border-red" />
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-xs text-gray">
          &copy; {new Date().getFullYear()} rockland.news
          <span className="mx-2 text-rule-dark">|</span>
          <span className="italic text-gray-light">Not left. Not right. Just the numbers.</span>
        </p>
      </div>
    </footer>
  );
}
