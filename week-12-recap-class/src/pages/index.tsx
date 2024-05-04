import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {VideoCard} from "../components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/Leftbar";

export default function Home() {
  return (
    <div>
     <Appbar></Appbar>
     <div className="flex">
     <LeftBar />
     <VideoGrid></VideoGrid>
     </div>
    </div>
  )
}
