import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
      <Link legacyBehavior href={href}>
      <a
        className={`nav-item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;