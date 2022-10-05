export default function DisplayInfoCenter(props) {
    return (
        <div className="mt-10 w-1/3 m-auto">
            <h2 className=" mt-8 text-2xl text-gray-900 font-bold m-auto text-center">
                {props.title}</h2>

            {props.paragraphs.map(function (value) {
                return <p className="mt-6 text-gray-600">
                    {value}
                </p>
            })}
        </div>
    );
}