export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {" "}
      <h1 style={{ color: "red" }}> This is A User Layout </h1>
      {children}
    </div>
  );
}
