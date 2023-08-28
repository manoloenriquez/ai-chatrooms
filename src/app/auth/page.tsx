import SigninForm from "@/components/auth/signin-form";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      Authentication
      <SigninForm />
    </main>
  );
}
