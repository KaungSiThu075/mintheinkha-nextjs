import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";


import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import {Nav} from "@/app/components/Nav";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav/>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span>&#169;CopyRight by Min Thein Kha</span>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
