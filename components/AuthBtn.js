import { ChevronDownIcon, RefreshIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const AuthBtn = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="auth-btn">
        <div className="auth-info">
          {/* <RefreshIcon className="icon animate-spin" /> */}
          Refresh
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="auth-btn text-white">
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
  }
  return (
    // <div className="auth-btn">
    //     <div className="auth-info pr-2 text-white">
    //         {/* <Image src={session.user.image} alt={session.user.name} width={30} height={30} className="rounded-full" /> */}
    //         <p>Hi, {session.user.first_name}</p>
    //     </div>
        <button onClick={() => signOut()} className="cta text-white">
            Logout
        </button>
    // </div>
  );
};
export default AuthBtn;