import safetyBg2 from './safety2.mp4'
import safetyBg3 from './safety3.mp4'
import safetyBg4 from './safety4.mp4'
import safetyBg5 from './safety5.mp4'

export default function Home1() {
    return (
        <div>
            <div className="relative hero min-h-screen">
                <video className='videoTag' autoPlay loop muted>
                    <source src={safetyBg2} type='video/mp4'/>
                </video>
                <div className="absolute hero-overlay h-3/4 w-10/12"
                     style={{bottom: 100, right: 20, backgroundColor: 'rgba(41, 0, 61, 0.5)'}}>
                    <div className="w-max h-max text-neutral-content ml-4">
                        <h1 className="mb-5 text-9xl font-bold" style={{fontFamily: 'Cano', color: 'rgb(255, 231, 135)'}}>Hidro Defense</h1>
                        <p className="mt-6 text-gray-600" style={{maxWidth: '45%', color: 'white'}}>Our main focus is Endocrine Disrupting Chemicals (EDCs), a
                            concern that will only worsen with the passing of time. This problem was approached by our
                            past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical
                            solutions, thus we are working this year around improving the past work but also going
                            further by proposing a practical solution. But what are EDCs and why is it problematic? </p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export function Home10() {
    return (
        <div>
            <div className="hero min-h-screen">
                <video className='videoTag' autoPlay loop muted>
                    <source src={safetyBg2} type='video/mp4'/>
                </video>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="w-max h-max">
                        <h1 className="mb-5 text-9xl font-bold">Hidro Defense</h1>
                        <h2 className="mb-5 text-3xl font-bold">Defending crops against disruptor's</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Home2() {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                <source src={safetyBg2} type='video/mp4'/>
            </video>
        </div>
    );
}


export function Home3() {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                <source src={safetyBg3} type='video/mp4'/>
            </video>
        </div>
    );
}

export function Home4() {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                <source src={safetyBg4} type='video/mp4'/>
            </video>
        </div>
    );
}


export function Home5() {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                <source src={safetyBg5} type='video/mp4'/>
            </video>
        </div>
    );
}