import {User} from "lucide-react";
import Link from "next/link";

export function Login() {
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
          className="w-full p-3 mb-4 rounded-lg bg-gray-200 outline-none"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-2 rounded-lg bg-gray-200 outline-none"
        />

   
        <p className="text-red-400 text-sm mb-4">
          Senha ou email incorreto
        </p>

        <button className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition">
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