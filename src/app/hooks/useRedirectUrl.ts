import { useShallow } from "zustand/react/shallow";

import { useEffect } from "react";

import { useConfigStore } from "core/store/useConfigStore";

// import router from "mobile/routes";

import useAuthentication from "./useAuthentication";

// This hooks use when user first visit page
// Redirect to url if user click deep link with redirect url
export default function useRedirectUrl() {
  const isAuth = useAuthentication();

  const { redirectUrl, releaseRedirectUrl } = useConfigStore(
    useShallow(state => ({
      saveRedirectUrl: state.saveRedirectUrl,
      redirectUrl: state.redirectUrl,
      releaseRedirectUrl: state.releaseRedirectUrl,
    })),
  );

  useEffect(() => {
    if (
      redirectUrl &&
      isAuth 
    ) {
        console.log(encodeURI(redirectUrl));
    //   router.navigate(encodeURI(redirectUrl));
      releaseRedirectUrl();
    }
  }, [isAuth]);
}
