import HeaderLogin from "@/components/navigation/HeaderLogin";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderLogin />
      <div className="flex-1 px-4 pt-4 flex justify-center mt-8">
        {children}
      </div>
    </>
  );
}
