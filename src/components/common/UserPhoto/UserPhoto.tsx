import userPhoto from "../../../assets/images/user.png";

type PropsType = {
    photo: string
    alt: string
}

let UserPhoto: React.FC<PropsType> = ({photo, alt}) => {
    return (
        <img src={(photo != null) ? photo : userPhoto} alt={alt} />
    )
}

export default UserPhoto;