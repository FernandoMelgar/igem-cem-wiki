import bgUrl from "../team/team_page_bg.png";

const months = [
    {
        month: "January",
        data: [
            {
                day: "21",
                month: "02",
                year: "2022",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                day: "24",
                month: "02",
                year: "2022",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                day: "27",
                month: "02",
                year: "2022",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                day: "29",
                month: "02",
                year: "2022",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                day: "30",
                month: "02",
                year: "2022",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
        ]
    }
]

export default function NotebookPage() {
    return (
        <div className="hero"
             style={{backgroundImage: `url(${bgUrl})`, minHeight: 200}}>
            <div className="hero-overlay p-10 text-center">
                {months.map(function (it) {
                    return (
                        <div>
                            <div className="block" style={{backgroundColor: 'rgba(75,230,255,.5)'}}>
                                <h1 className="text-6xl text-white"> {it.month} ></h1>
                            </div>
                            {
                                it.data.map(function (data){
                                    return <div
                                        className="relative inline-block content-center rounded-md m-4 p-2 z-10 backdrop-blur-lg from-[#fff2] to-[#fff1] bg-gradient-from-br bg-gradient-to-tl"
                                        style={{
                                            width: 300,
                                            backgroundColor: 'rgba(255, 255,255,.1)',
                                            borderColor: 'white',
                                            borderWidth: 1
                                        }}>
                                        <a className="block text-white text-sm text-start" style={{zIndex: 2}}>
                                            {data.text}
                                        </a>
                                        <div className="inline-block text-9xl absolute p-1 -z-10" style={{bottom: 0, right: 0}}>
                                            <p className="text-white opacity-30">{data.day}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}