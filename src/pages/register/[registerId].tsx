import { RegisterParams } from "../intern/admin";
import { GetServerSideProps } from "next";
import InternHeader from "../../components/intern/InternHeader";

const RegistrationByIdPage = ({
  registration,
}: {
  registration: RegisterParams | null;
}) => {
  if (!registration) return <div>Der Link ist ungültig!</div>;

  return (
    <>
      <InternHeader
        title={`Registrierung von ${registration.username}`}
        description={`Internes Registrierungsportal des Cubyx Teams`}
      />

      <main className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold">
            Registrierung von {registration.username}
          </h1>
          <span className="text-2xl text-text-third">{registration.email}</span>
          <span className="text-xl">
            Bitte fülle alle Felder aus, damit das System deinen Account
            erstellen kann. <br />
            Hinweise zum Datenschutz bei Cubyx findest du{" "}
            <a href="/datenschutz" className="text-text-third">
              hier
            </a>
            .
          </span>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { registerId } = context.params as { registerId: string };

  if (!prisma) {
    return {
      props: {
        registration: null,
      },
    };
  }

  const registration = await prisma.registration.findUnique({
    where: {
      id: registerId,
    },
  });

  if (!registration) {
    return {
      props: {
        registration: null,
      },
    };
  }

  return {
    props: {
      registration: {
        username: registration.username,
        email: registration.email,
      },
    },
  };
};

export default RegistrationByIdPage;
