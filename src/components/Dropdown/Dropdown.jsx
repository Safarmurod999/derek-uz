import { useNavigate } from "react-router-dom"

const Dropdown = ({ path, title, style, links, setOpenNavbar }) => {
  const navigate = useNavigate();
  return (
    <div className={`dropdown ${style}`}>
      <a aria-label="dropdown" href={path} onClick={(e) => {
        navigate(path);
        setOpenNavbar(false);
      }} className={`dropdown__button `}>
        {title}
      </a>
      <div className="dropdown__content">
        {
          links.map((link) => {
            return <a aria-label="dropdown-link" key={link.id} href={link.path} >{link.title}</a>
          })
        }
      </div>
    </div>
  )
}

export default Dropdown