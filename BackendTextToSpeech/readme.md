1 rota - > insere no bd o comentario - POST


react consome;

2 rota - > lista o que foi inserido 

3 -rota -> ao clicar, pega o nome do audio que passa no body da api e roda 


MED5kO2CERd1Sb7gMagbJP-beNXBxaOMw7p7IdJr_K7H

{
  "apikey": "qgm1lh_c27NcPu2wT5a9IVQN_Md2HsLbK2WKTldJckru",
  "iam_apikey_description": "Auto-generated for key 4a531349-79b9-4186-be46-ce4af8b1af6d",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/880c95653e4f43b3bdfe3b24e412f287::serviceid:ServiceId-53eb682f-94b6-4a15-ba64-89fcba997d90",
  "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/011074d3-ab4b-47df-b834-0627fec68e0d"
}


exports.up = function(knex) {
    return knex.schema.createTable('cadastro', function (tables){
        tables.string('id').primary();
        tables.string('nome').notNullable();
        tables.string('email').notNullable();
        tables.string('rg').notNullable();
        tables.string('cpf').notNullable();
    });
}


exports.down = function(knex) { 
    return knex.schema.dropTable('cadastro');
}

///////////////

        textToSpeech.synthesize(synthesizeParams, function (err, Buffer) {
            if (err) {
              console.log(err);
            } else {
                
                
                fileReader.onload = function () {
                    fs.writeFileSync(`./audio/${nome_audio}.mp3`, Buffer(new Uint8Array(this.result)));
                    console.log('File is written');
                };
                fileReader.readAsArrayBuffer(`${nome_audio}.mp3`);

            }
          });


          //

           textToSpeech.synthesize(synthesizeParams, function (err, buffer) {
            if (err) {
              console.log(err);
            } else {
                
                fs.writeFile(`./audio/${nome_audio}.mp3`, buffer, () => {
                    console.log('File is written');
        
                })
            }
          });