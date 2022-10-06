export default function MemberPhoto(props) {
    return (
        <div className="p-6 inline-block">
            <div className="avatar">
                <div className="w-52 rounded-full">
                    <img src={props.imgUrl}/>
                </div>
            </div>
            <h6 className="text-white text-center">{props.name}</h6>
        </div>
    );
}