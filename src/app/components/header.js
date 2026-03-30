import Link from "next/link";
export function Header() {
  return (
    
        <header className="py-4 px-6 m-5 p-0 bg-blue-200 backdrop-blur-md rounded-2xl flex items-center justify-between">
           
           
      
      <h1 className="text-lg font-semibold">
        Meu App
      </h1>

      <nav className="flex gap-4">
            <Link href="/page_login" className="hover:text-blue-500 transition">
          Login
        </Link>
        <Link href="/page_register" className="hover:text-blue-500 transition">
          Cadastro
        </Link>
      </nav>

    </header>
  );
}