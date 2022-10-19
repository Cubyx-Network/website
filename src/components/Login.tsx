import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "redaxios";
import useServerRefresher from "../hooks/useServerRefresher";
import InternHeader from "./intern/InternHeader";
import LoadingSpinner from "./loading/LoadingSpinner";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    isLoading,
    isError,
    mutate: loginMutation,
  } = useMutation((params) => axios.post("/api/sessions", params), {
    onSuccess: useServerRefresher(),
  });

  const onSubmit = async (params: any) => loginMutation(params);

  return (
    <>
      <InternHeader title={"Login"} description={"Interner Bereich"} />

      <div className="flex h-screen w-full flex-col items-center justify-center gap-32 lg:gap-32 xl:flex-row">
        <h1 className="text-center text-6xl font-bold md:text-left">
          Cubyx Network Intern
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Benutzername"
            className={`input`}
          />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Passwort"
            className={`input`}
          />

          {!isLoading ? (
            <input
              type="submit"
              value="Einloggen"
              disabled={Object.keys(errors).length > 0 || isLoading}
              className={`input`}
            />
          ) : (
            <LoadingSpinner />
          )}

          {isError && (
            <span className="text-red-700">
              Die Benutzerdaten konnten nicht gefunden werden.
            </span>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
