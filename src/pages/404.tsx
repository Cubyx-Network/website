import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Image from "next/image";

const Page404 = () => {
  return (
    <>
      <Header
        title={"Fehler 404"}
        description={"Diese Seite konnte nicht gefunden werden."}
        noIndex={true}
      />

      <main className="flex h-screen w-full items-center justify-center">
        <div className="flex items-center gap-8">
          <Image
            src={"/img/netzwerk.png"}
            alt={"Netzwerk logo"}
            width={200}
            height={200}
            className="hidden md:block"
          />
          <div className="hidden h-48 w-1 rounded-2xl bg-text-primary dark:bg-text-primary-dark md:block"></div>
          <div>
            <h1 className="text-center text-6xl font-bold md:text-left">
              Fehler <span className="gradient">404</span>
            </h1>
            <p className="mt-4 text-center text-lg md:text-left">
              Diese Seite konnte nicht gefunden werden.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page404;
