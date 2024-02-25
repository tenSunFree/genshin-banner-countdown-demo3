import { useServersStore } from "../components/store/serversStore";
import Timers from "../components/Timers";
import getTimeFromServer from "./api/utils/getTimeFromServer";
import shallow from "zustand/shallow";

export default function Home({ servers }) {
  const setServers = useServersStore((state) => state.setServers, shallow);
  setServers(servers);

  return (
    <div className="min-h-screen bg-purple-600 bg-wallpaper bg-cover bg-fixed bg-no-repeat">
      <div className="flex flex-col justify-start gap-20 ">
        <Timers />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { servers: getTimeFromServer() },
  };
}
