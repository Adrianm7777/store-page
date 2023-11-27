import styles from "./PhoneAnimation.module.scss";

interface PhoneAnimationProps {
  isHover: boolean;
}

const PhoneAniamtion = ({ isHover }: PhoneAnimationProps) => (
  <div className="w-100 h-100 position-relative m-0 p-0 overflow-hidden">
    <img
      className={`w-100 position-absolute top-0 m-0 p-0 ${styles.phoneImage} ${
        isHover ? styles.phoneHovered : ""
      } `}
      src="https://cdn.mcdonalds.pl/uploads/20230919152314/mobile1-2.png"
    />
  </div>
);

export default PhoneAniamtion;
