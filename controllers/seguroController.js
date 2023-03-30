import Seguro from "../models/Seguro.js";

const obtenerSeguros = async (req, res) => {
  const seguros = await Seguro.find().where('creador').equals(req.usuario._id);
  res.json(seguros);
  console.log(req.usuario)
}

const nuevoSeguro = async (req, res) => {
  const seguro = new Seguro(req.body);
  seguro.creador = req.usuario._id;
  seguro.creadorNombre = req.usuario.nombre;

  try {
    const seguroAlmacenado = await seguro.save();
    res.json(seguroAlmacenado);

  } catch (error) {
    console.log(error);
  }
}

const obtenerSeguro = async (req, res) => {
  const { id } = req.params;
  const seguro = await Seguro.findById(id);

  if (!seguro) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.msg });
  }
  if (seguro.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error('No Autorizado');
    return res.status(401).json({ msg: error.msg });
  }

  res.json(seguro)
}

const editarSeguro = async (req, res) => {
  const { id } = req.params;
  const seguro = await Seguro.findById(id);

  if (!seguro) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.msg });
  }
  if (seguro.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error('No Autorizado');
    return res.status(401).json({ msg: error.msg });
  }

  seguro.nombre = req.body.nombre || seguro.nombre;
  seguro.apellido = req.body.apellido || seguro.apellido;
  seguro.vigencia = req.body.vigencia || seguro.vigencia;
  seguro.vehiculo = req.body.vehiculo || seguro.vehiculo;
  seguro.cobertura = req.body.cobertura || seguro.cobertura;
  seguro.empresa = req.body.empresa || seguro.empresa;
  seguro.pagado = req.body.pagado || seguro.pagado;

  try {
    const seguroAlmacenado = await seguro.save(); 
    res.json(seguroAlmacenado);
  } catch (error) {
    console.log(error)
  }
}

const eliminarSeguro = async (req, res) => {
  const { id } = req.params;
  const seguro = await Seguro.findById(id);

  if (!seguro) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.msg });
  }
  if (seguro.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error('No Autorizado');
    return res.status(401).json({ msg: error.msg });
  }

  try {
    await seguro.deleteOne();
    res.json({msg: 'Seguro Eliminado'});
    
  } catch (error) {
    console.log(error)
  }
}

export {
  obtenerSeguro,
  obtenerSeguros,
  nuevoSeguro,
  editarSeguro,
  eliminarSeguro
}