import Footer from "@/components/block/landing/home/footer";
import Header from "@/components/block/landing/home/header";
import ArticleBreadcrumb from "@/components/block/landing/news/article-breadcrumb";
import ArticleContent from "@/components/block/landing/news/article-content";
import ArticleHeader from "@/components/block/landing/news/article-header";
import ArticleImage from "@/components/block/landing/news/article-image";
import { getNewsByUuid } from "@/lib/services/news-service";

export default function Article({ params }) {
  const { slug } = params;

  const data = getNewsByUuid(slug);

  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="flex-col flex items-center justify-center mt-[20vh]">
        <div className="flex-col items-center justify-center w-full mb-16">
          <ArticleBreadcrumb path={`/news/${slug}`} />
        </div>
        <div className="flex-col items-center justify-center w-full mb-16">
          <ArticleHeader
            type={data.type}
            headline={data.headline}
            subheadline={data.subheadline}
            date={data.date}
            writer={data.writer}
          />
        </div>
        <div className="flex-col items-center justify-center w-full mb-20">
          <ArticleImage uuid={data.uuid} blurhash={data.blurhash} />
        </div>
        <div className="flex-col items-center justify-center w-full mb-10">
          <ArticleContent content={data.content} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
