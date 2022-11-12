import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Impressum = () => {
  return (
    <>
      <Header title={"Impressum"} description={"Impressum"} />

      <main className="flex w-full flex-col justify-center gap-8 p-16 py-32 lg:h-screen">
        <div>
          <h1 className="m-0 text-4xl font-extrabold">Impressum</h1>
          <h2 className="mt-2 text-2xl font-bold">Angaben gemäß §5 TMG</h2>
        </div>

        <section>
          <h3 className="text-xl font-bold">Ihre Ansprechpartner</h3>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col">
              <span>Rudolf Müller</span>
              <span>Siedlung Roßweiner Straße 20</span>
              <span>Untermieter vom Baumhaus</span>
              <span>04720 Döbeln</span>
              <a href="mailto:l.master.rudolf@gmail.com">
                l.master.rudolf@gmail.com
              </a>
            </div>

            <div className="flex flex-col">
              <span>Maurice Reyher</span>
              <span>Ernstweg 4</span>
              <span>98716 Elgersburg</span>
              <a href="mailto:z0eyby@cubyx.eu">z0eyby@cubyx.eu</a>
            </div>
          </div>
        </section>

        <span>
          Hinweis: Missbrauch von jeglichen Kontakt und personenbezogenen Daten
          wird zur Anzeige gebracht!
        </span>

        <section>
          <h3 className="text-xl font-bold">Kontakt</h3>
          <div className="flex flex-col">
            <span>
              E-Mail: <a href="mailto:cubyxteam@gmail.com">info@cubyx.eu</a>
            </span>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold">Geltungsbereich</h3>
          <div className="flex flex-col">
            <span>Dieses Impressum ist für die folgenden Seiten gültig:</span>
            <ul className="ml-8 list-disc">
              <li>
                <a href="https://cubyx.eu">cubyx.eu</a>
              </li>
              <li>
                <a href="https://www.cubyx.eu">www.cubyx.eu</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Impressum;
