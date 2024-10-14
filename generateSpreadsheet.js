const xlsx = require('xlsx');


const data = [
  { "nome": "ANA VALERIA ", "nrcrm": 90463, "ufcrm": "SP", "pfcrm": "1", "email": "anaramirez@terra.com.br" },
  { "nome": "ANNA VIRGINIA PALMELA PINTO", "nrcrm": 927520, "ufcrm": "RJ", "pfcrm": "1", "email": "draannavirginia@gmail.com" },
  { "nome": "BERNARDO RODI CARVALHO BARROS", "nrcrm": 18586, "ufcrm": "SC", "pfcrm": "1", "email": null },
  { "nome": "CAMILA SANTOS RODRIGUES", "nrcrm": 10100094, "ufcrm": "RJ", "pfcrm": "9", "email": "nut.camilasr@gmail.com" },
  { "nome": "DIOGO MIRANDA BARBOSA ", "nrcrm": 17192, "ufcrm": "SC", "pfcrm": "1", "email": "78diogo@gmail.com" },
  { "nome": "ENRIQUE MARTIN LORA", "nrcrm": 168353, "ufcrm": "SP", "pfcrm": "1", "email": "enrique_lora@hotmail.com" },
  { "nome": "FABIANA GEISS TERRA", "nrcrm": 41255, "ufcrm": "RS", "pfcrm": "1", "email": "fabianagterra@gmail.com" },
  { "nome": "GABRIEL DOS SANTOS CUNHA", "nrcrm": 82606, "ufcrm": "MG", "pfcrm": "1", "email": "gdscunha@gmail.com,limacunhaconsultorio@gmail.com" },
  { "nome": "GIMMY GONCALVES SALES DA SILVA", "nrcrm": 8365, "ufcrm": "AM", "pfcrm": "1", "email": "gimmynutri@hotmail.com" },
  { "nome": "HELIDIA", "nrcrm": 16101040, "ufcrm": "RJ", "pfcrm": "9", "email": "helidiafuscaldo@gmail.com" },
  { "nome": "JOSE WILSON RIBAS", "nrcrm": 20261, "ufcrm": "DF", "pfcrm": "1", "email": "jw.ribas@hotmail.com" },
  { "nome": "KARINA FERNANDA SKONIECZNY", "nrcrm": 20424, "ufcrm": "PR", "pfcrm": "1", "email": "dra_karina@icloud.com" },
  { "nome": "LEONARDO HIGASHI", "nrcrm": 25067, "ufcrm": "PR", "pfcrm": "1", "email": "recepcao.higashi@gmail.com" },
  { "nome": "LICIA LOPES PIO PEREIRA", "nrcrm": 98100336, "ufcrm": "RJ", "pfcrm": "9", "email": "liciapiopereira@gmail.com" },
  { "nome": "LUCAS AUGUSTO RODRIGUES DE OLIVEIRA", "nrcrm": 1167090, "ufcrm": "RJ", "pfcrm": "1", "email": "drlucasaugusto.r@gmail.com" },
  { "nome": "LUCAS COSTA", "nrcrm": 1000896, "ufcrm": "RJ", "pfcrm": "1", "email": "drlucascostarj@gmail.com" },
  { "nome": "LUCAS SILVA TEIXEIRA", "nrcrm": 15871, "ufcrm": "CE", "pfcrm": "1", "email": "lucas1334@gmail.com" },
  { "nome": "LUIS GUILHERMO SIMOES COSTA E SILVA", "nrcrm": 14534, "ufcrm": "RO", "pfcrm": "9", "email": "luisguilhermo9@gmail.com" },
  { "nome": "MARCELO BONANZA", "nrcrm": 14684, "ufcrm": "BA", "pfcrm": "1", "email": "mmbonanza@yahoo.com.br" },
  { "nome": "MARTA TORNAVOI DE CARVALHO", "nrcrm": 84927, "ufcrm": "SP", "pfcrm": "1", "email": "contato@martatornavoi.com" },
  { "nome": "MÔNICA JANINE ANDRADE DE FREITAS OLIVEIRA", "nrcrm": 6943, "ufcrm": "PB", "pfcrm": "1", "email": null },
  { "nome": "PRISCILA DOS SANTOS DE BARROS", "nrcrm": 23816, "ufcrm": "BA", "pfcrm": "1", "email": "med_pri@hotmail.com" },
  { "nome": "RAFAEL TIMBO MOURAO", "nrcrm": 41164, "ufcrm": "MG", "pfcrm": "1", "email": "dr.rafaeltimbo@gmail.com,contato@rafaeltimbo.com.br" },
  { "nome": "RAISSA MENDONCA GONCALVES MOUTTE DE FREITAS", "nrcrm": 164981, "ufcrm": "SP", "pfcrm": "1", "email": null },
  { "nome": "RODRIGO MORAES RUSCHEL", "nrcrm": 41256, "ufcrm": "RS", "pfcrm": "1", "email": "r.ruschel@me.com" },
  { "nome": "TESTE", "nrcrm": 123456, "ufcrm": "SC", "pfcrm": "1", "email": null },
  { "nome": "VICTOR MESQUITA ARRAES", "nrcrm": 26371, "ufcrm": "PE", "pfcrm": "1", "email": "arraesvm@gmail.com" },
  { "nome": "WEBERT TEOTONIO DA SILVA", "nrcrm": 6902, "ufcrm": "RN", "pfcrm": "1", "email": "Theo@theowebert.com.br" }
];

const worksheet = xlsx.utils.json_to_sheet(data);

const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, 'Médicos');

xlsx.writeFile(workbook, 'medicos.xlsx');

console.log('Planilha gerada com sucesso!');