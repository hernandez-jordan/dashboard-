import AvatarImage from "../../assets/images/cpunks.jpeg";
export default function Avatar() {
  return (
    <div>
      <img src={AvatarImage} alt="" className="avatar" />
    </div>
  );
}
