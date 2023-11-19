import React, {useState} from 'react'

const Content2 = () => {

  const initialFormData = {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  const [formData, setFormData]= useState(initialFormData);

  const handleChange= (e)=>{
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log('Datos enviados:', formData);
    setFormData(initialFormData);
  }
  return (
    <div>
      <p className="contacto">Contacto</p>
      <form onSubmit={handleSubmit} method="POST">

        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
              onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label"></label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="correo"
            value={formData.correo}
              onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label"></label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Dejanos tu consulta"
            name="mensaje"
            value={formData.mensaje}
              onChange={handleChange}
            required
          ></textarea>
        </div>
        <input class="btn btn-primary BtnEnviar" type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default Content2