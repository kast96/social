import userPhoto from "../../../assets/images/user.png";

let UserPhoto = ({photo, alt}) => {
    return (
        <img src={(photo != null) ? photo : userPhoto} alt={alt} />
    )
}

export default UserPhoto;