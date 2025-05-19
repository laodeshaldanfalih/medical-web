"use client";
import { useState } from "react";
import articles from "@/app/articles/data/articles";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <section className="py-40 bg-gradient-to-b from-white via-white to-primary/5 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Daftar Artikel
            </h1>
            <p className="text-primary max-w-2xl mx-auto mb-6">
              Temukan berbagai artikel, tips, dan edukasi seputar kesehatan,
              terapi, dan layanan kami.
            </p>
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" hidden w-full max-w-md px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 text-secondary bg-white shadow mb-4"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center text-primary text-lg">
                Tidak ada artikel ditemukan.
              </div>
            ) : (
              filtered.map((article) => (
                <Link
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                  className="group bg-white/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-primary/10 hover:border-accent"
                >
                  <div className="h-48 w-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-primary mb-4 flex-1">
                      {article.summary}
                    </p>
                    <span className="mt-auto text-accent font-semibold">
                      Baca Selengkapnya &rarr;
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
