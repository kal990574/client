import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { type Session} from "next-auth";

import {api} from "~/utils/api";

import '../styles/globals.css'

const App: AppType<{ session: Session | null }> = ({
                                                       Component,
                                                       pageProps: { session, ...pageProps },
                                                   }) => {

    console.log("session", session);
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default api.withTRPC(App);
