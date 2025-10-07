import { launchpadApps } from "./launchpadApps";
import LaunchpadItem from "../../components/LaunchpadItem/LaunchpadItem";

const Launchpad = () => {
  return (
    <section className="container text-center d-flex flex-column align-items-center">
      {launchpadApps.map((arr, index) => (
        <div className="row" key={index}>
          {arr.map((obj, index) => (
            <LaunchpadItem { ...obj } key={index} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Launchpad;
