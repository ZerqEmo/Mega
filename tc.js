const Discord = require('discord.js')

module.exports = {
    slash: false,                                   //false Değeri Komutun Prefixli Olduğunu Gösteriyor
    name: ['tc'],                        //Komut İsmini Belirtiyor
    cooldown: 10,                                   //Komutun CoolDown Süresini(Saniye) Gösteriyor




    async execute(client, message, args) {          //Komut Handlerına Göre Tanımlama Yeri. Burayı Ellemeyin
        var tcx = args[0]
        var mysql = require('mysql');
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "101m"
        });
        message.reply('Sorgulatdığınız kişi aranıyor.. lütfen sabırlı olunuz.')
        con.query(`SELECT * FROM 101m WHERE TC="${tcx}"`, function (err, result) {
              if (err) throw err;
              let data = JSON.parse(JSON.stringify(result))

              console.log(result)
              /*let ckt = new Discord.MessageAttachment ({
                attachment: Buffer.from('helo'),
                name: 'helo.txt'
              })
            message.reply({  files: [ckt] })*/
              let as31 = data.map((o) => `TCSİ ${o.TC} | ADI ${o.ADI} | SOYADI ${o.SOYADI} | DOGUMTARİHİ ${o.DOGUMTARIHI} | İL ${o.NUFUSIL} | İLÇE ${o.NUFUSILCE} | ANNE ADI ${o.ANNEADI} | ANNE TC ${o.ANNETC} | BABA ADI ${o.BABAADI} | BABA TC ${o.BABATC} | UYRUK ${o.UYRUK}`).join('\n')
              message.reply(`:tada: ${tcx} isminde **${data.length}** kişi bulundu.`)
              let dosyahazırla = new Discord.MessageAttachment(Buffer.from(as31), `dracocheck.txt`);
              message.reply({ files: [ dosyahazırla ] })
              message.channel.send(`${message.author.tag} tarafından ${tcx} kişisi sorgulandı.`)
            }); 
            
    }
}