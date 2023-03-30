import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  // Informacion del Email
  const info = await transport.sendMail({
    from: '"Administrador de Clientes de Seguros" <cuentas@segurosbase.com>',
    to: email,
    subject: 'Seguros Base - Confirma tu cuenta',
    text: 'Confirma tu Cuenta en Seguros Base',
    html: `
    <style>
    * {
      font-family: Arial, Helvetica, sans-serif;
    }
      div { 
        background-color: #4C4C4C;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem;}
        span {
          color: #1DB7F7;
          text-decoration: underline;
        }
      h1 {
        font-size: 2rem;
        color: white;
        text-transform: uppercase;
      }
      p{
        font-size: .8rem; 
        color: white;
      }
      a{
        text-decoration: none;
        color: #1DB7F7;
      }

    </style>
    <div>
    <h1>Hola <span>${nombre}</span></h1>
    <p>Has registrado una cuenta en Seguros Base. Para continuar, por favor confirma tu direccion de email.</p>
    <p>Haz click en el enlace para verificar y empezar a administrar tus clientes:</p>
    <a href='${process.env.FRONTEND_URL}/confirmar/${token}'>Confirmar Cuenta</a>
    
    <p>Si tu no has creado esta cuenta, puedes ignorar este mensaje.</p>
    </div>
    `
  })
}




export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  // Informacion del Email
  const info = await transport.sendMail({
    from: '"Administrador de Clientes de Seguros" <cuentas@segurosbase.com>',
    to: email,
    subject: 'Seguros Base - Reestablece tu Contraseña',
    text: 'Reestablece tu Contraseña',
    html: `
    <style>
    * {
      font-family: Arial, Helvetica, sans-serif;
    }
      div { 
        background-color: #4C4C4C;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem;}
        span {
          color: #1DB7F7;
          text-decoration: underline;
        }
      h1 {
        font-size: 2rem;
        color: white;
        text-transform: uppercase;
      }
      p{
        font-size: .8rem; 
        color: white;
      }
      a{
        text-decoration: none;
        color: #1DB7F7;
      }

    </style>
    <div>
    <h1>Hola <span>${nombre}</span></h1>
    <p>Para poder recuperar tu cuenta reestablece la contraseña ingresando en el siguiente link:</p>
    <a href='${process.env.FRONTEND_URL}/olvide-password/${token}'>Reestablecer Contraseña</a>
    <p>Y vuelve a administrar tus Clientes</p>
    
    <p>Si tu no has iniciado la recuperacion de contraseña puedes ignorar este email.</p>
    </div>
    `
  })
}


