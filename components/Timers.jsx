import Countdown from "./Countdown";
import { useServersStore } from "./store/serversStore";
import getSecondsLeft from "./utils/getSecondsLeft";

const Timers = () => {
  const { servers } = useServersStore();
  const { secondsLeftAsia } = getSecondsLeft(servers);
  return (
    <main
      className="flex flex-col gap-5 xl:gap-10"
      style={{ marginTop: "34vh", marginLeft: "14vw", width: "fit-content" }}
    >
      <div className="text-center">
        {/* <h3 className="mb-3 text-2xl font-bold xl:text-3xl">
        Asia <ServerStatus serverType={"Asia"} />
      </h3> */}
        <Countdown initialSeconds={secondsLeftAsia} />
      </div>
    </main>
  );
};

export default Timers;
