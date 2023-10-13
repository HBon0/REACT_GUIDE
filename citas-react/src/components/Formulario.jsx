

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className=" text-indigo-600 font-bold">Administrarlos</span>
      </p>

      <form className="bg-white shadow-xl rounded-xl py-5 px-5 mb-10">
        <div className=" mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">NOMBRE MASCOTA</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="propietario" className="block text-gray-700 font-bold">NOMBRE PROPIETARIO</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="alta" className="block text-gray-700 font-bold">ALTA</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">SINTOMAS</label>
          <textarea id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="Describe los sintomas">

          </textarea>
        </div>
        <div className="mb-5">
          <input type="submit"
          className=" bg-indigo-600 rounded-md w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value="Agregar Paciente"/>
        </div>
      </form>
    </div>
  )
}

export default Formulario


