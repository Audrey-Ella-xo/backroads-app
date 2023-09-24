import { pageLinks } from '../data';

const PageLinks = ({ sectionClass, itemClass }) => {
  return (
    <ul className={sectionClass} id="nav-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
