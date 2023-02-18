import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren){
    return(
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    )
}