import { Metadata } from "next";
import { categories } from "./Challenges";

export const metadata: Metadata = {
  title: "Tom Zhang - Python Challenges",
  description:
    "Explore categorized Python coding problems solved by Tom Zhang. Learn techniques, patterns, and coding insights.",
};


export default function PythonChallengesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Python Challenges</h1>
      <p className="text-center text-gray-600 mb-10">
        A categorized collection of cool Python problems. Enjoy and learn from
        the journey!
      </p>

      {categories.map((category) => (
        <section key={category.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <ul className="space-y-2">
            {category.challenges.map((challenge) => (
              <li key={challenge.id}>
                <a
                  href={challenge.link}
                  target='_blank'
                  className="block p-4 bg-white border border-gray-200 rounded hover:bg-gray-50 shadow-sm transition"
                >
                  <span className="font-medium text-gray-800">
                    #{challenge.id}
                  </span>
                  : {challenge.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>
          Some of the challenge inspiration comes from the book{" "}
          <em>
            <a
              href="https://www.amazon.ca/Python-Challenges-Programming-Designed-Anything/dp/1484273974"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Python Challenges: 100 Proven Programming Tasks Designed to
              Prepare You for Anything
            </a>
          </em>{" "}
          by Michael Inden.
        </p>
      </footer>
    </main>
  );
}
