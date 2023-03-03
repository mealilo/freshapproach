import { useSession } from "next-auth/react";

export default function Secret() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return "Loading or not authenticated";
  }
  if (status === "authenticated") {
    return (
      <main>
        <div>
          <h1> Protected Page</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        <h1>You aren't signed in, please sign in first</h1>
      </div>
    </main>
  );
}

/* this is it's own chunkyyyyyyyyy: export default function Secret() {
  const {data: session, status} = useSession(); 
  if (status === "authenticated"){
    return <p> Signed in as {session.user.email}</p>
  }
  return <a href="/api/auth/signin"> Sign In</a>
} */
/*  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (session) { // <-- add this condition
        const res = await fetch("/api/secret");
        const json = await res.json();
        if (json.content) {
          setContent(json.content);
        }
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1> You aren't signed in, please sign in first</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1> Protected Page</h1>
        <p>{content}</p>
      </div>
    </main>
  );
}
*/
