import Link from "next/link";
import articles from "@/app/articles/data/articles";
import Image from "next/image";

function getRandomArticles(arr: typeof articles, n: number) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const Articles = () => {
  const randomArticles = getRandomArticles(articles, 3);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Artikel & Tips
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            Temukan informasi, tips, dan edukasi seputar kesehatan, terapi, dan
            layanan kami.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomArticles.map((article: (typeof articles)[0]) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article.slug}
              className="group bg-white/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-primary/10 hover:border-accent"
            >
              <div className="h-48 w-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-primary mb-4 flex-1">{article.summary}</p>
                <span className="mt-auto text-accent font-semibold">
                  Baca Selengkapnya &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
