import MemberPhoto from "./components/member_photo";

const data = [
  {
    name: "Claudia A. Garcia",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Yaroslav A. Volkov",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Brenda Jimenez",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Jose Antonio Munóz",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Sergio García",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Andrea de los santos",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Lizeth Cameras",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Audrey Hevia",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Melchor A. Soto",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Ana Sofía Centeno",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Maren I. Marín",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Amanda Spínola",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Ariadna Alonso",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Amiel J. Rosete",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Valeria Torres",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Isabel Herández",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Hector A. Murro",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Humberto Carrillo",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Saúl Higadera",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Regina Rivas",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Jennifer Rivera",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Ximena Quintero",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Rebeca Patiño",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Ana Paula Martínez",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "José Gerardo Altamirano",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Salvador Chavez",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Mirelle Culebro",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Arturo Ortíz",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Rodrigo Labastida",
    imgUrl: "https://placeimg.com/192/192/people",
  },
];

const visualsTeam = [
  {
    name: "Sofía Azamar",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Selma M. Martínez",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Itzel Ortega",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Minerva Zamudio",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Sara S. Hernández",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Dino Hernández",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Zyanya Rojas",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Valeria G. Zúñiga",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Damiela Mejía",
    imgUrl: "https://placeimg.com/192/192/people",
  },
];

const professors = [
  {
    name: "Dulce V. Mello",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Cesar García",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Roberto Delgado",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Elías Octavio Gomez",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Carlos E. Gomez",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Ramon E. Rivero",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Aurora Antonio P.",
    imgUrl: "https://placeimg.com/192/192/people",
  },
  {
    name: "Ana Laura Torres",
    imgUrl: "https://placeimg.com/192/192/people",
  },
];

export default function TeamPage() {
  return (
    <div
      className="hero pt-20"
      style={{
        backgroundImage: `url(https://static.igem.wiki/teams/4260/wiki/imagen/team/team-page-bg.png)`,
        minHeight: 200,
      }}
    >
      <div className="p-10 text-center">
        <h1
          className=" text-5xl text-white pb-4"
          style={{ fontFamily: "Cano" }}
        >
          Our Team
        </h1>
        {data.map(function (value) {
          return <MemberPhoto name={value.name} imgUrl={value.imgUrl} />;
        })}
        <h1
          className=" text-5xl text-white pt-12"
          style={{ fontFamily: "Cano" }}
        >
          Visuals
        </h1>
        <h3
          className="text-white text-xl"
          style={{ color: "rgb(175,247,255)" }}
        >
          Art & Design Team
        </h3>
        {visualsTeam.map(function (value) {
          return <MemberPhoto name={value.name} imgUrl={value.imgUrl} />;
        })}
        <h1
          className=" text-5xl text-white pt-12"
          style={{ fontFamily: "Cano" }}
        >
          Professors
        </h1>
        {professors.map(function (value) {
          return <MemberPhoto name={value.name} imgUrl={value.imgUrl} />;
        })}
        }
      </div>
    </div>
  );
}
