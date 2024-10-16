import Head from "next/head";
import About from "~/layout/About";
import Contact from "~/layout/Contact";
import Data from "~/layout/Data";
import Hero from "~/layout/Hero";
import NavBar from "~/layout/components/NavBar";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react';

import { api } from "~/utils/api";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const a = api.Admin.getAll.useQuery()
  const b = api.Admin.createMachineData.useMutation()
  
  console.log(a.data)
  return (
    <>
      <Head>
        <title>SPEN</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-GreenLight/10">
        <NavBar/>
        {/* TODO:Fazer a parte 3d do Hero */}
        <Hero/>
        <Data/>
        {/* <About/> */}
        {/* <MadeBy/> */}
        {/* <Contact/> */}
        {/* TODO: Remove that */}
        {/* <button onClick={() => b.mutate()}>Btn</button> */}
      </main>
    </>
  );
}
