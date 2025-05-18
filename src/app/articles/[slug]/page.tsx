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

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a: Article) => a.slug === params.slug);
  if (!article) return notFound();
  const suggestions = getSuggestions(article.slug, 3);
  return (
    <>
      <Header />
      <section className="py-20 bg-gradient-to-b from-white via-white to-primary/5 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-2xl w-full h-64 object-cover mb-8 shadow-lg"
            />
            <h1 className="text-4xl font-extrabold text-secondary mb-6 text-center drop-shadow-sm">
              {article.title}
            </h1>
            <div
              className="prose prose-lg text-primary mx-auto"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Artikel Lainnya
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suggestions.map((suggestion: Article) => (
                <Link
                  href={`/articles/${suggestion.slug}`}
                  key={suggestion.slug}
                  className="group bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-primary/10 hover:border-accent"
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
