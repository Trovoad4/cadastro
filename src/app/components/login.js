export function Login() {
  return (
    <div className="flex items-center justify-center bg-gray-200 rounded-2xl w-[500px] h-[400px] m-auto p-6 shadow-lg flex-col">
      
      <div className="mb-4 w-full">
        <p className="ml-4">Usuário</p>
        <input 
          type="text" 
          placeholder="Digite seu nome por favor" 
          className="m-3 p-2 rounded-2xl bg-gray-400 mt-3 w-full"
        />
      </div>

      <div className="mb-4 w-full">
        <p className="ml-4">Senha</p>
        <input 
          type="password" 
          placeholder="Digite sua senha" 
          className="m-3 p-2 rounded-2xl bg-gray-400 mt-3 w-full"
        />
      </div>
      
    
      <div className="flex justify-between w-full mt-6">
        <button className="bg-green-200 rounded-2xl px-6 py-2 text-black font-semibold text-center w-1/2 hover:bg-green-300">ENTRAR</button>
        <button className="bg-gray-300 rounded-2xl px-6 py-2 text-black font-semibold text-center w-1/2 hover:bg-gray-400">CANCELAR</button>
      </div>
    </div>
  );
}