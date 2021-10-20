import { IMAGES } from "../../assets/images_folder/images";
export default function Avatar() {
  return (
    <div>
      <img src={IMAGES.avatarIcon} alt="" className="avatar" />
    </div>
  );
}
