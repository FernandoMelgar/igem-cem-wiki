import bgUrl from "./social_impact_bg.png";
import vennUrl from "./social_impact_venn.png"
import {ReactComponent as VennSvg} from "./social_impact_venn.svg";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ante nec sapien consectetur\n" +
    "                        vehicula. Maecenas elementum justo et ex aliquet consectetur. Aenean diam ipsum, dictum a odio\n" +
    "                        sed, accumsan varius lorem. Maecenas massa quam, volutpat nec lectus at, sagittis euismod erat.\n" +
    "                        Ut libero elit, interdum vitae metus vel, tempus laoreet nunc. Nunc convallis elit ut arcu\n" +
    "                        condimentum, a tempor arcu ornare. Vestibulum ante ipsum primis in faucibus orci luctus et\n" +
    "                        ultrices posuere cubilia curae; Donec tempor tempus nisl, at luctus nisl tincidunt id.\n" +
    "\n" +
    "                        Fusce sodales tellus ac semper iaculis. Aliquam fringilla, diam ut porttitor commodo, orci ipsum\n" +
    "                        condimentum arcu, eu laoreet lacus purus nec leo. In pharetra neque non dolor consectetur, id\n" +
    "                        pretium mauris suscipit. Maecenas volutpat urna ex, eget vestibulum erat ullamcorper nec. Nunc\n" +
    "                        molestie lorem non arcu feugiat, in scelerisque tortor dignissim. Vestibulum vestibulum, orci id\n" +
    "                        fermentum faucibus, diam ligula semper orci, id rutrum ligula libero eu elit. Nulla ac interdum\n" +
    "                        felis. Nullam convallis dictum rutrum. Nunc feugiat, libero ultricies rutrum porttitor, justo\n" +
    "                        turpis molestie mauris, quis congue magna augue et mi.";

export default function SocialImpactPage() {
    return (
        <div className="hero pt-16"
             style={{backgroundImage: `url(${bgUrl})`, minHeight: 200}}>
            <div className="p-10 text-center">
                <h1 className="text-7xl" style={{fontFamily: 'Cano', color: 'rgb(248,255,152)'}}>
                    Social Impact
                </h1>
                <div className="inline-block w-2/3 mt-6 text-white rounded-md"
                     style={{backgroundColor: 'rgba(255, 255,255,.1)', borderColor: 'white', borderWidth: 1}}>
                    <p className="p-2" style={{textAlign: "justify"}}>
                        {lorem}
                    </p>
                </div>
                <div className=" m-8">
                    <VennSvg className="social_impact_venn m-auto"
                             style={{height: '90vh'}}
                    ></VennSvg>
                </div>

                <section className="pt-16">
                    <h1 className="text-4xl" style={{color: 'rgb(248,255,152)'}}>Human Practices</h1>
                    <div className="inline-block w-1/2 mt-6 text-white rounded-md"
                         style={{backgroundColor: 'rgba(255, 255,255,.1)', borderColor: 'white', borderWidth: 1}}>
                        <p className="p-2" style={{textAlign: "justify"}}>
                            {lorem}
                        </p>
                    </div>
                </section>
                <section className="pt-16">
                    <h1 className="text-4xl" style={{color: 'rgb(248,255,152)'}}>Sustainability</h1>
                    <div className="inline-block w-1/2 mt-6 text-white rounded-md"
                         style={{backgroundColor: 'rgba(255, 255,255,.1)', borderColor: 'white', borderWidth: 1}}>
                        <p className="p-2" style={{textAlign: "justify"}}>
                            {lorem}
                        </p>
                    </div>
                </section>
                <section className="pt-16">
                    <h1 className="text-4xl" style={{color: 'rgb(248,255,152)'}}>Education & Communication</h1>
                    <div className="inline-block w-1/2 mt-6 text-white rounded-md"
                         style={{backgroundColor: 'rgba(255, 255,255,.1)', borderColor: 'white', borderWidth: 1}}>
                        <p className="p-2" style={{textAlign: "justify"}}>
                            {lorem}
                        </p>
                    </div>
                </section>
                <section className="pt-16">
                    <h1 className="text-4xl" style={{color: 'rgb(248,255,152)'}}>Colaborations</h1>
                    <div className="inline-block w-1/2 mt-6 text-white rounded-md"
                         style={{backgroundColor: 'rgba(255, 255,255,.1)', borderColor: 'white', borderWidth: 1}}>
                        <p className="p-2" style={{textAlign: "justify"}}>
                            {lorem}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}