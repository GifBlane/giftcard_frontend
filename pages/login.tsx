import axios, { AxiosInstance } from "axios";
import { useLogin } from "../hooks/auth/useLogin";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState, useRef } from "react";
import { Waves } from "../components/svg/Waves";

const Login: NextPage = () => {
  const [error, setError] = useState("");
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const router = useRouter();

  // const inputRef = useRef(null);

  // const resetFileInput = () => {
  //   // resetting the input value
  //   inputRef.current.value = "";
  // };

  const onSubmit = () => {
    if (!email || !password) {
      setError("Please enter information");
    } else {
      console.log("something went wrong");

      login(email, password)
        .then((res) => router.push("/dashboard"))
        .catch((e) => setError(e));
    }
  };

  // Verificar que la contraseña cumpla con los criterios de seguridad
  // const passwordValidator =
  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()/=+?[\]{}~-])[A-Za-z\d!@#$%^&*()/=+?[\]{}~-]{8,}$/;
  // const isPasswordValid = passwordValidator.test(password);
  // if (!isPasswordValid) {
  //   // resetFileInput();
  //   setError(
  //     "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un carácter numérico y un carácter especial y debe tener al menos 8 caracteres"
  //   );

  //   return;
  // }
  // try {
  // Enviar una solicitud a la ruta de inicio de sesión en el backend
  // const response = await axios.post(
  //   "http://34.148.248.36:3002/auth/login",
  //   {
  //     email: credentials.email,
  //     password: credentials.password,
  //   }
  // );
  // Si el inicio de sesión es exitoso, almacene el token en una cookie
  //   document.cookie = `token=${response.data.body.token}`;
  //   // Redirigir a la ruta protegida
  //   Router.push("/dashboard");
  // } catch (err: any) {
  // Obtener el estado de error y el mensaje

  // Obtener el estado de error y el mensaje
  // const status = err.response.code;
  // const message = err.response.data.message;

  // Establecer el mensaje de error apropiado según el estado del error
  // let errorMessage = "";
  // switch (status) {
  //   case 400:
  //     errorMessage = "You have entered an invalid password";
  //     break;
  //   case 401:
  //     errorMessage = "Unauthorized";
  //     break;
  //   case 403:
  //     errorMessage = "Forbidden";
  //     break;
  //   case 404:
  //     errorMessage = "Not found";
  //     break;
  //   case 500:
  //     errorMessage = 'parameter "email" has invalid "undefined" value';
  //     break;
  //   default:
  //     errorMessage = "An error occurred";
  //     break;
  // }
  // setError(errorMessage);
  // Resetear el formulario de inicio de sesión
  // Deshabilitado durante desarrollo=
  //     resetFileInput();
  //   }
  // };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Gift Card - Log In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pastel.ico" />
      </Head>

      <main
        className="flex flex-col items-center justify-between min-h-screen w-full py-16 relative bg-gradient-to-b from-[#f5ccb1] to-[#d0cee2]"
        style={{
          background:
            "linear-gradient(to bottom,#f5ccb1 0%,#f5ccb1 50%, #d0cee2 50%, #d0cee2 100%)",
        }}
      >
        {/* TODO: SVG no se estira 100% */}
        <Waves className="absolute z-[0] w-full h-full pb-40" />
        <div className="flex flex-col gap-14 items-center z-[1] pt-24 ">
          <div className="text-center">
            <h1 className="font-bold text-lg">Iniciar Sesión</h1>
            <p className="text-lg">Inicia Sesión de la forma más rápida</p>
          </div>

          <form className="flex flex-col gap-2 min-h-[340px] max-w-[388px] min-w-[388px] justify-between items-center bg-[#ffffff]/80 shadow-sm rounded-[20px] py-10 px-12 ">
            <input
              className="w-full py-2 px-5 rounded-[7px] placeholder:text-[#515151] text-black "
              name="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full py-2 px-5 rounded-[7px] placeholder:text-[#515151] text-black "
              type="password"
              name="password"
              value={password}
              required
              autoComplete="password"
              placeholder="Contraseña"
              aria-label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Check box "Recordar Inicio de sesion" */}
            <div>
              {/* <input type="checkbox" className="mr-2 w-3 h-3" /> */}
              <label className="text-[#515151]">
                {/* Recordar inicio de sesión */}
              </label>
            </div>
            {
              // Si hay un error, muestre el mensaje de error
              error && <p className="text-red-500">{error}</p>
            }
            <button
              onClick={onSubmit}
              className="bg-gradient-to-b w-full from-[#91BA4D] to-[#91BA4D] disabled:opacity-50 rounded-[7px] text-white py-2 px-4"
              type="submit"
              disabled={!password || !email}
            >
              Iniciar Sesión
            </button>

            <p className="text-[#181818]">
              {/* {" "}
              <a href="" className="font-bold">
                Click Aqui
              </a> */}
            </p>
          </form>
        </div>

        <div>
          <p className="text-white max-w-[420px] leading-5 tracking-wide text-center">
            Hay detalles que roban sonrisas e invaden el corazon. Con nosotros,
            seguro lo encontras
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
