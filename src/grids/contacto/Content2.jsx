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
      <div className="contacto-container">
        <h2 className="contacto-titulo"> </h2>
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
              id='inputNombre'
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
              id='inputMail'
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
              id='inputMensaje'
            ></textarea>
          </div>
          <input class="btn btnEnviar" type="submit" value="Enviar"></input>
        </form>
      </div>
  )
}

export default Content2