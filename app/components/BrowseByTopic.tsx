import Link from "next/link";

const topics = [
  {
    title: "Follow the Money",
    href: "/budget",
    description: "Budgets, spending, and where tax dollars go",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Lucide-style dollar/receipt icon */}
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Accountability Tracker",
    href: "/accountability",
    description: "Votes, campaign donors, and legislative patterns",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Lucide-style search/magnifying glass icon */}
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="m11 8-3 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Explainers",
    href: "/explainers",
    description: "How local government actually works",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Lucide-style open book icon */}
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function BrowseByTopic() {
  return (
    <section className="py-14 border-t border-rule">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-3">
            Browse by Topic
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            What are you looking for?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group flex flex-col items-center text-center p-6 md:p-8 border border-rule bg-paper rounded-sm hover:border-red/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="text-gray group-hover:text-red transition-colors duration-200 mb-4">
                {topic.icon}
              </div>
              <h3 className="font-serif text-base md:text-lg font-bold text-ink group-hover:text-red transition-colors duration-200 mb-1.5">
                {topic.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-light leading-relaxed">
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
