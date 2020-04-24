import {Schema, model} from 'mongoose'

const ResClinicoSchema: Schema = new Schema({

    nombre:{type:String, required:true},
    idMuestra:{type:Number,required:true},
    fechaResultado:{ type: Date, default:Date.now, required:true},
    resultado: {type: String, required: false},
    tipoTest:['PCR', 'IgG', 'IgM'],

});
export default model('resClinico', ResClinicoSchema);