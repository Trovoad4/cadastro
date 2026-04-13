import {User} from "lucide-react";
import Link from "next/link";

export function Register() {
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
          placeholder="Usuário"
          className="w-full p-3 mb-3 rounded-lg bg-gray-200 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded-lg bg-gray-200 outline-none"
        />

        <input
          type="date"
          className="w-full p-3 mb-3 rounded-lg bg-gray-200 outline-none text-gray-500"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-4 rounded-lg bg-gray-200 outline-none"
        />

        <button className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition">
          Cadastrar
        </button>

  
        <button className="w-full mt-3 bg-white/20 text-white font-medium py-2 rounded-lg hover:bg-white/30 transition">
          Cancelar
        </button>

        <div className="flex items-center gap-2 mt-6 text-sm text-gray-300">
          <span>Já tem uma conta?</span>

          <Link 
            href="/page_login"
            className="text-blue-300 hover:text-blue-400 font-semibold transition"
          >
            Entre agora
          </Link>
        </div>

      </div>
    </div>
  );
}