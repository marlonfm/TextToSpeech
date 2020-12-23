'use strict';

const connection = require('../Model/conexao');
const crypto = require('crypto')
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');
var FileReader = require('filereader')
  , fileReader = new FileReader()
  ;






module.exports = {

    async index(req, res) { 
        

        const id_cadastro = req.headers.authorization;

        const resp = await connection('cadastro')
        .where('id',id_cadastro)
        .select('*');

        const AudioShow = resp.map(point=> {
            return {
                ...point,
                audio_url: `http://localhost:3002/audio/${point.nome_audio}.mp3`,
            };
        })
        
        return res.json(AudioShow);

        
    },


    async create(req, res) {
        const { comentario } = req.body;

        const id = crypto.randomBytes(2).toString('HEX'); 

        const d = new Date();
        let nome_audio = `audio_${d.getHours()}-${id}`;

        await connection('cadastro').insert({
            id,
            comentario,
            nome_audio,
        })

        const textToSpeech = new TextToSpeechV1({
            //iam_apikey: 'qgm1lh_c27NcPu2wT5a9IVQN_Md2HsLbK2WKTldJckru',
            //url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/011074d3-ab4b-47df-b834-0627fec68e0d'

            authenticator: new IamAuthenticator({
                apikey: 'qgm1lh_c27NcPu2wT5a9IVQN_Md2HsLbK2WKTldJckru',
              }),
              serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/011074d3-ab4b-47df-b834-0627fec68e0d',
        });

        
      
          
        const synthesizeParams = {
            text: comentario,
            //voice: 'pt-BR_IsabelaVoice', // Optional voice
            voice: 'pt-BR_IsabelaVoice', // Optional voice
        
            accept: 'audio/mp3' // default is audio/ogg; codec=opus
          };
          
         


          textToSpeech.synthesize(synthesizeParams)
          .then(response => {
            return textToSpeech.repairWavHeaderStream(response.result);
          })
          .then(buffer => {
            fs.writeFileSync(`./audio/${nome_audio}.mp3`, buffer);
            console.log('audio ok');
            return Promise.resolve();
          });
          

        return res.json({ id, nome_audio })
    }
}