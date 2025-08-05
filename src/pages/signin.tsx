import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <p>Not signed in</p>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("email")}>Sign in with Email</button>
    </div>
  );
}
