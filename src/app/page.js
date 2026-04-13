import { Header } from "@/app/components/header";
import { User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-900">

      <Header />

      <div className="flex flex-col items-center justify-center text-center px-6 h-[85vh]">

   
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
            <User size={60} className="text-white opacity-90" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Bem-vindo!
        </h1>

   
        <p className="text-gray-300 max-w-md mb-10 leading-relaxed">
          Faça login para continuar ou crie sua conta para começar.
        </p>

    
        <div className="w-full max-w-sm flex flex-col gap-4">

          <Link href="/page_login">
            <button className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition shadow-lg">
              Entrar
            </button>
          </Link>

          <Link href="/page_register">
            <button className="w-full border border-white/40 text-white py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Criar Conta
            </button>
          </Link>

        </div>

   
        <p className="text-gray-400 text-sm mt-10 max-w-md">
          Ao continuar, você concorda com nossos{" "}
          <span className="text-blue-300 cursor-pointer hover:underline">
            Termos de Uso
          </span>{" "}
          e{" "}
          <span className="text-blue-300 cursor-pointer hover:underline">
            Política de Privacidade
          </span>
        </p>

      </div>
    </div>
  );
}