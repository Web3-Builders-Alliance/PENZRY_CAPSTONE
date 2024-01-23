import { Link } from "react-router-dom";

interface LogoProps {
  type?: string;
  className: string;
}

const Logo = ({ type, className, ...props }: LogoProps) => {
  const styles = "h-8 font-bold text-body-xxl text-primary " + className;
  if (type === "white") {
    return (
      <Link to="/">
        <h2 className={styles}>PENZRY</h2>
      </Link>
    );
  }
  return (
    <Link to="/">
      <h2 className={styles}>PENZRY</h2>
    </Link>
  );
};

export default Logo;
