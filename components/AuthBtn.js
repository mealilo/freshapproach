import { ChevronDownIcon, RefreshIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import Image from "next/image";


const AuthBtn = () => {
  const { data: session, status } = useSession();

//   console.log('session', session?.user?.person_ID);
//   console.log('status', status);

//   if (status === "loading") {
//     return (
//       <div className="auth-btn">
//         <div className="auth-info">
//           {/* <RefreshIcon className="icon animate-spin" /> */}
//           Refresh
//         </div>
//       </div>
//     );
//   }
  if (status == "unauthenticated") {
    return (
      <div className="auth-btn text-white">
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
  }
  return (
    <button onClick={() => signOut()} className="cta text-white">
        Logout
    </button>
  );
};
export default AuthBtn;