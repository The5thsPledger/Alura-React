export default function UsuarioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
        <h1>Usuários</h1>
        {children}
    </section>
  );
}