import useCountdown from "./hooks/useCountdown";

const Countdown = ({ initialSeconds }) => {
  const { hours, minutes, seconds } = useCountdown(initialSeconds);
  return (
    <div className="flex items-center justify-center overflow-hidden text-lg lg:text-xl xl:text-2xl">
      <div
        className="flex items-center justify-center rounded-lg bg-black px-4 py-2"
        style={{ width: "40vw", height: "25vh", borderRadius: "18px" }}
      >
        <strong className="text-white" style={{ fontSize: "90px" }}>
          {hours}
        </strong>
        <span className="mx-2 text-white" style={{ fontSize: "90px" }}>
          :
        </span>
        <strong className="text-white" style={{ fontSize: "90px" }}>
          {minutes}
        </strong>
        <span className="mx-2 text-white" style={{ fontSize: "90px" }}>
          :
        </span>
        <strong className="text-white" style={{ fontSize: "90px" }}>
          {seconds}
        </strong>
      </div>
    </div>
  );
};

export default Countdown;
