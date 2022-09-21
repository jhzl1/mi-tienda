export const Footer = () => {
  const socialLinks = ["instagram", "youtube", "facebook", "twitter"]

  return (
    <div className="bg-white p-5 text-gray-700 flex justify-center ">
      <div className="flex flex-col justify-center items-center">
        <span className="text-lg mb-3">Síguenos en nuestra redes sociales</span>

        <div className="grid grid-cols-4 gap-5">
          {socialLinks.map((social) => (
            <a href={`https://www.${social}.com/`} target="blank" key={social}>
              <i className={`text-3xl fa-brands fa-${social}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}