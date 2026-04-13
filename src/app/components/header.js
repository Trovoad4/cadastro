
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl 
    bg-white/10 backdrop-blur-lg border border-white/20 
    rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">

      
      <Link href ="/"className="text-white text-lg font-semibold tracking-wide cursor-pointer">
        Meu App
      </Link>

      <nav className="flex items-center gap-6 text-white/80 font-medium">
        
        <Link 
          href="/page_login" 
          className="hover:text-white transition"
        >
          Login
        </Link>

        <Link 
          href="/page_register" 
          className="px-4 py-1.5 rounded-lg bg-blue-700 text-white 
          hover:bg-blue-800 transition shadow-md"
        >
          Cadastro
        </Link>

      </nav>
    </header>
  );
}