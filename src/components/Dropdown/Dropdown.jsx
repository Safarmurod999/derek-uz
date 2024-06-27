const Dropdown = ({ title, style, links }) => {
  return (
    <div className={`dropdown ${style}`}>
      <p className={`dropdown__button `}>
        {title}
      </p>
      <div className="dropdown__content">
        {
          links.map((link) => {
            return <a key={link.id} href="/">{link.title}</a>
          })
        }
      </div>
    </div>
  )
}

export default Dropdown