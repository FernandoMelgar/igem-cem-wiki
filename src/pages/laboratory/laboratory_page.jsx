import laboratoryBg from "./Laboratory.png";
import CardContainer from "../../components/card/CardContainer";

export default function LaboratoryPage() {
  return (
    <div>
      <div
        className="relative hero min-h-screen"
        style={{ backgroundImage: `url(${laboratoryBg})` }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div
          className="relative hero-overlay text-center text-neutral-content"
          style={{ top: 0 }}
        >
          <div className="">
            <h1 className="my-10 text-9xl font-bold">L A B O R A T O R Y</h1>
            <CardContainer />

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
