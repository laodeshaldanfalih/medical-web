import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import articles from "../data/articles";

type Article = {
  title: string;
  summary: string;
  content: string;
  image: string;
  slug: string;
};

function getSuggestions(currentSlug: string, n: number) {
  const filtered = articles.filter((a: Article) => a.slug !== currentSlug);
  const shuffled = filtered.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = articles.find((a: Article) => a.slug === slug);
  if (!article) return notFound();
  const suggestions = getSuggestions(article.slug, 3);
  return (
    <>
      <Header />
      <section className="py-20 bg-gradient-to-b from-white via-white to-primary/5 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-6 mt-10 animate-fadein">
            <Link
              href="/articles"
              className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali ke Daftar Artikel
            </Link>
          </div>
          <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="rounded-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
            </div>
            <h1 className="text-4xl font-extrabold text-secondary mb-2 text-center drop-shadow-sm">
              {article.title}
            </h1>
            <div className="flex justify-center items-center gap-3 mb-8 text-sm text-primary/70">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Admin Hear Speech Care
              </span>
              <span className="mx-2">•</span>
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                2025
              </span>
            </div>
            <div
              className="prose prose-lg text-primary mx-auto animate-fadein"
              style={{ animation: "fadein 1s" }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 rounded-full mb-16" />
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Artikel Lainnya
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suggestions.map((suggestion: Article) => (
                <Link
                  href={`/articles/${suggestion.slug}`}
                  key={suggestion.slug}
                  className="group bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-primary/10 hover:border-accent hover:-translate-y-1 hover:scale-[1.03]"
                >
                  <div className="h-32 w-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <Image
                      src={suggestion.image}
                      alt={suggestion.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-accent transition-colors">
                      {suggestion.title}
                    </h3>
                    <p className="text-primary mb-2 flex-1 text-sm">
                      {suggestion.summary}
                    </p>
                    <span className="mt-auto text-accent font-semibold text-sm">
                      Baca Selengkapnya &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
