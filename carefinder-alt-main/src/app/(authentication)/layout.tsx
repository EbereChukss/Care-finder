import Image from "next/image";
export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen xl:h-full">
      <div className="hidden lg:block">
        <Image
          src={"/medical.png"}
          alt="Sign-in/Sign-up pic"
          width={400}
          height={500}
          className="h-full w-screen"
        />
      </div>
      <div className="className">{children}</div>
    </div>
  );
}
