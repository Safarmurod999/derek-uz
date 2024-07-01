const Dropdown = ({ path, title, style, links }) => {
  return (
    <div className={`dropdown ${style}`}>
      <a href={path} className={`dropdown__button `}>
        {title}
      </a>
      <div className="dropdown__content">
        {
          links.map((link) => {
            return <a key={link.id} href={link.path}>{link.title}</a>
          })
        }
      </div>
    </div>
  )
}

export default Dropdown