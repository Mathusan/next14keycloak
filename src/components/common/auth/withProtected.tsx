import LoadingScreen from "@/components/common/loader";
import UnAuthenticatedLandingView from "@/components/sign-in/SignInComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function withProtected(Component) {
  return function WithAuth(props) {
    const router = useRouter();
    const { status } = useSession();

    if (status === "loading") {
      return <LoadingScreen />;
    }

    if (status === "unauthenticated") {
      <UnAuthenticatedLandingView />;
      return null;
    }

    return <Component {...props} />;
  };
}
