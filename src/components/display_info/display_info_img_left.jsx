/**props = {
 *   - title: string
 *   - imgUrl: string
 *   - paragraphs: <string>[]
 * }
 * **/
export default function DisplayInfoImgLeft(props) {
    return (
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        src={props.imgUrl}
                        alt="image"
                        loading="lazy" width="" height=""></img>
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{props.title}</h2>
                    {props.paragraphs.map(function (value) {
                        return <p className="mt-6 text-gray-600">
                            {value}
                        </p>
                    })}
                </div>
            </div>
        </div>
    );
}