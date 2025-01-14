import Zen_Dots from "@/lib/fonts/zen-dots";

export default function Logo(props) {
  const { className, withTM } = props;
  return (
    <div className={`${Zen_Dots.className}`}>
      <span className={className}>LEXA</span>
      {withTM && <span className="ms-1 absolute">™</span>}
    </div>
  );
}
