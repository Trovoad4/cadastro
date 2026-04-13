import { User } from "lucide-react";
import {Header} from "@/app/components/header";

export default function Admin() {
  return (
    <>

    <Header />
    <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-900 flex items-center justify-center">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 
      rounded-2xl p-10 text-center shadow-xl w-[350px]">

        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center">
            <User className="text-white" size={40} />
          </div>
        </div>

        <h1 className="text-2xl text-white font-bold mb-2">
          Painel Admin
        </h1>

        <p className="text-gray-300 mb-6 text-sm">
          Bem-vindo ao painel administrativo.
        </p>

        <div className="flex flex-col gap-3">

          <div className="bg-white/10 p-3 rounded-lg text-white">
            👤 Usuários cadastrados: 12
          </div>

          <div className="bg-white/10 p-3 rounded-lg text-white">
            📊 Acessos hoje: 34
          </div>

          <div className="bg-white/10 p-3 rounded-lg text-white">
            ⚙️ Sistema funcionando normalmente
          </div>

        </div>

      </div>
    </div>
    </>
  );
}