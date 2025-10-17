import useSWR from "swr";
import Card from "./components/Card.jsx";
import Loading from "./components/Loading.jsx";
import { motion } from "motion/react";
import fetcher from "./ApiCaller/ApiFetcher.js";
import { useEffect } from "react";
import { useState } from "react";
import Logo from "./assets/alien-svgrepo-com.svg";
import { useEffectEvent } from "react";
import { LucideClock10 } from "lucide-react";
const App = () => {
  const [P, setP] = useState(1);
  const [Data, setData] = useState([]);

  const { data, isLoading } = useSWR(
    `https://picsum.photos/v2/list?page=${P}&limit=10&grayscale`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000,
      keepPreviousData: true,
      suspense: false,
    }
  );

  const HandleDataUpdate = useEffectEvent((D) => {
    setData(D);
  });

  useEffect(() => {
    if (data);
    HandleDataUpdate(data);
  }, [data, HandleDataUpdate]);

  const PrevPage = () => {
    setP((e) => (P >= 1 ? e - 1 : 0));
  };

  const NextPage = () => {
    setP((e) => (P < 11 ? e + 1 : 0));
  };
  return (
    <>
      <div className="min-h-screen max-w-screen scroll-smooth bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0a0a04] text-white font-bold">
        <motion.div
          className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 flex flex-col items-center justify-center py-6 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-row gap-2 justify-between align-middle items-center">
            <img className="w-14 h-10" src={Logo} />
            <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold tracking-tight text-white italic drop-shadow-sm">
              Noir <span className="text-3xl text-cyan-400">Frame</span>
            </h1>
          </div>
        </motion.div>
        {isLoading ? (
          <Loading />
        ) : (
          <div
            id="Top"
            className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4  md:gap-6 p-5 xl:gap-8"
          >
            {Data?.map(({ id, url, author, download_url: img }) => (
              <Card key={id} img={img} w={author} url={url} />
            ))}
          </div>
        )}

        <div className="flex justify-between items-center gap-4 p-5  px-6">
          <button
            disabled={P <= 1}
            onClick={PrevPage}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold 
            shadow-md hover:from-gray-700 hover:to-gray-600 active:scale-95 
            disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 
            text-sm sm:text-base"
          >
            Previous {P - 1}
          </button>

          <button
            disabled={P > 10}
            onClick={NextPage}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold 
               shadow-md hover:from-indigo-500 hover:to-indigo-400 active:scale-95 
               disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 
               text-sm sm:text-base"
          >
            Next {P}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
