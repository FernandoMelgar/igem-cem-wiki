import Card from "./card";
import "./CardContainer.css";

export default function CardContainer(props) {
  return (
    <div className="multiple-card-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}
