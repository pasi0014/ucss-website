import { Link, useMatch } from "react-router-dom";

function CustomLink({ to, children }: any) {
  const isActive = useMatch(to);
  const className = isActive ? "activeLink" : "";

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default CustomLink;
