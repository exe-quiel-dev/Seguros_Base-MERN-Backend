import mongoose from 'mongoose';

const segurosSchema = mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    require: true
  },
  apellido: {
    type: String,
    trim: true,
    require: true
  },
  vigenciaDesde: {
    type: Date,
    trim: true,
    require: true,
    default: Date.now()
  },
  vigenciaHasta: {
    type: Date,
    trim: true,
    require: true,
    default: Date.now()
  },
  vehiculo: {
    type: String,
    trim: true,
    require: true
  },
  cobertura: {
    type: String,
    trim: true,
    require: true
  },
  empresa: {
    type: String,
    trim: true,
    require: true
  },
  pagado: {
    type: String
  },
  creador: {
    type: String,
    trim: true,
    require: true
  }

},{
  timestamps: true
});

const Seguro = mongoose.model('Seguro', segurosSchema);

export default Seguro
