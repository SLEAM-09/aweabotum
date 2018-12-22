const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**??Genel Komutlar??**\n\n\n  **🔰 /ping** \n  **🔰 /avatar <@kullanıcı>** \n  **🔰 /davet ** \n **🔰 /tavsiye ** \n **🔰 /ailemiz** \n **:beginner: /yap�mc�**',
              '**?? Moderasyon Komutları?? **\n\n\n  **⚠ /ban <@kullanıcı> <sebep> ** \n **⚠ /kick <@kullanıcı> <sebep> ** \n **⚠ /sustur <@kullanıcı> <sebep>** \n  **⚠ /uyar <@kişi> <sebep> **\n **⚠ /rol-ver <@kişi> <verilecekrol> ** \n **⚠ /reklam-tara** \n **⚠ /rol-bilgi** \n **⚠ /unban** \n **⚠ /mute** \n **⚠ /kilit <sure> <kanal>** \n ',
              '**??Eğlence Komutları??**\n\n\n **🌹 /gif** \n **🌹 /dcnitro** \n **🌹 /aşkölçer** \n **🌹 /çayiç** \n **🌹 /mc-ödül** \n **🌹 /stresçarkı** \n **🌹 /tkm** \n **🌹 /troll** \n **🌹 /wasted** \n **🌹 /woodie** \n **🌹 /söv** \n **🌹 /çekiç** \n **🌹 /8ball** \n **🌹 /rastgele-renk** \n **🌹 /ters-renk** \n **🌹 /koş**',
              '**??Diğer Komutlar**??\n\n\n **⚡ /havadurumu** \n **⚡ /döviz** \n **⚡ /afk** \n **⚡ /istatistik** \n **⚡ /çekiliş** \n **⚡ /hd** \n **⚡ /eval** \n **⚡ /top10**',
			  '**??Kullanıcı Komutları??**\n\n\n **📥 /emojiyazı** \n **📥 /kullanıcıbilgim** \n **📥 /yaz ** \n **📥 /slowmode** \n **📥 /yazı-tura** \n **📥 /mesajat** \n **📥 /sunucubilgi** \n  **📥 /saat** \n **📥 /temizle** \n **📥 /sahip** \n  **📥 /sor** \n **📥 /unload** \n **📥 /öner**',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length} 6 saniye işerisinde tiklayiniz.`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};