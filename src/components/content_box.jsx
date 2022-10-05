export function ContentBox() {
    return (

        <div className="relative flex min-h-1/2 flex-col justify-center overflow-hidden bg-white py-6 sm:py-12">
            <div className="mx-auto max-w-4xl rounded-3xl bg-[#092540] p-20 text-center">
                <h2 className="text-5xl font-bold leading-tight text-white">Grow rapidly with our unlimited Web Design &
                    development</h2>
                <p className="mt-5 text-xl leading-8 text-white">Get unlimited design & development requests for a flat
                    monthly rate. Fast turnaround. No contracts or surprises. Cancel anytime.</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <label htmlFor="my-modal2" className="btn modal-button my-4">open modal</label>
                    <label htmlFor="my-modal2" className="btn modal-button my-4">open modal</label>
                </div>
            </div>

            <input type="checkbox" id="my-modal2" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box max-w-full w-2/3">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use
                        Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal2" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
}