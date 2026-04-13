'use client';

import { useState } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


export function Login() {
  const USUARIO_FIXO = "admin";
  const SENHA_FIXA = "1234";
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

 async function Validador() {
  if (email !== USUARIO_FIXO || senha !== SENHA_FIXA) {
    await Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Email ou senha incorretos",
      confirmButtonColor: "#1e3a8a"
    });
  } else {
    await Swal.fire({
      icon: "success",
      title: "Sucesso!",
      text: "Login realizado",
      confirmButtonColor: "#1e3a8a"
    });

    router.push("/admin"); // só vai DEPOIS que fechar
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-700 to-teal-900">
      
      <div className="flex flex-col items-center w-[350px]">

        <div className="mb-6">
          <div className="w-28 h-28 rounded-full border border-white/30 flex items-center justify-center">
            <User size={50} className="text-white" />
          </div>
        </div>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-200 outline-none"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-3 mb-2 rounded-lg bg-gray-200 outline-none"
        />

        <button 
          onClick={Validador}
          className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition"
        >
          Entrar
        </button>

        <p className="text-gray-300 mt-6 text-sm">
          Ainda não possui uma conta? 
          <Link 
            href="/page_register"
            className="text-blue-300 hover:text-blue-400 font-semibold transition p-2"
          >
            Entre agora
          </Link>
        </p>

      </div>
    </div>
  );
}