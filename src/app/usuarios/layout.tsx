import React from 'react';
import Link from 'next/link';

export default function UsuarioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-row">
      <nav className="bg-gray-100 dark:bg-gray-900" style={{ width: '200px' }}>
        <ul className="flex gap-4 flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Usuários</h1>
          <ul className="gap-4">
            <li>
                <Link href="/usuarios/cadastrar">Cadastrar</Link>
            </li>
            <li>
                <Link href="/usuarios/listar">Listar</Link>
            </li>
          </ul>
        </ul>
      </nav>
      <div className='form-container flex-1 justify-center items-center'>
        {children}
      </div>
    </section>
  );
}