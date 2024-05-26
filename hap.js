
let _0x204805 = '3.4';
var _0x3581a7 = require('https');
function _0x68cdc5() {
  var _0x32058d = {
      'host': 'raw.githubusercontent.com',
      'path': 'Walkoud/hap-selfbot-public/master/version.txt'
    },
    _0x3259ef = _0x3581a7.request(_0x32058d, function (_0x1eea66) {
      var _0x48da21 = '';
      _0x1eea66.on('data', function (_0x33aafd) {
        _0x48da21 += _0x33aafd;
      }), _0x1eea66.on('end', function () {
        let _0x1258e1 = _0x48da21.split(' ');
        _0x1258e1[0] !== '3.4' && (_0x74fd1f = false, console.log('[31m', '\n  \n    BOT BLOCKED : OLD VERSION\n  \n    OLD VERSION, please upgrade all files (INDEX.JS AND SETTINGS.JSON) from : https://github.com/Walkoud/hap-selfbot-public\n\n    NEW VERSION: v' + _0x1258e1[0] + '\n  \n    '));
      });
    });
  _0x3259ef.on('error', function (_0x5593bf) {
    console.log(_0x5593bf.message);
  }), _0x3259ef.end();
}
function _0x2a5516() {
  var _0x3c6c7c = {
      'host': 'raw.githubusercontent.com',
      'path': 'Walkoud/hap-selfbot-public/master/update.txt'
    },
    _0x57ffdb = _0x3581a7.request(_0x3c6c7c, function (_0x1f39a0) {
      var _0x1d35ac = '';
      _0x1f39a0.on('data', function (_0x5c2ed8) {
        _0x1d35ac += _0x5c2ed8;
      }), _0x1f39a0.on('end', function () {
        newupdate = _0x1d35ac, console.log('[35m', '\n______________________UPDATE_______________________\n\n' + _0x1d35ac + '\n___________________________________________________\n'), console.log('[0m', '====================');
      });
    });
  _0x57ffdb.on('error', function (_0x42b173) {
    console.log(_0x42b173.message);
  }), _0x57ffdb.end();
}
let _0x74fd1f = true;
console.log('[36m%s[0m', '\n██╗  ██╗ █████╗ ██████╗                                   \n██║  ██║██╔══██╗██╔══██╗                                  \n███████║███████║██████╔╝                                  \n██╔══██║██╔══██║██╔═══╝                                   \n██║  ██║██║  ██║██║                                       \n╚═╝  ╚═╝╚═╝  ╚═╝╚═╝                                       \n                                                          \n███████╗███████╗██╗     ███████╗██████╗  ██████╗ ████████╗\n██╔════╝██╔════╝██║     ██╔════╝██╔══██╗██╔═══██╗╚══██╔══╝\n███████╗█████╗  ██║     █████╗  ██████╔╝██║   ██║   ██║   \n╚════██║██╔══╝  ██║     ██╔══╝  ██╔══██╗██║   ██║   ██║   \n███████║███████╗███████╗██║     ██████╔╝╚██████╔╝   ██║   \n╚══════╝╚══════╝╚══════╝╚═╝     ╚═════╝  ╚═════╝    ╚═╝                  \n                                          v3.4'), setInterval(function () {
  _0x5b89ba();
}, 4000), console.log('[37m', '\n                          By Walkoud          (no token grabber)               \n  __________________________________________________________________________________'), console.log('[31m', '\n\n  Bot Version: 3.4\n  Bot url: https://github.com/Walkoud/hap-selfbot-public\n\n  '), console.log('[0m', 'discord.link/hap');
const _0x50d5f6 = require('discord.js-v11-stable'),
  {
    RichEmbed: _0x497609,
    Client: _0x4d317a,
    Util: _0x1a1e03,
    Message: _0x207bcd
  } = require('discord.js-v11-stable'),
  _0x4f4b97 = new _0x50d5f6.Client({
    'disableEveryone': true
  }),
  _0x2d66b6 = require('snekfetch'),
  _0x472fcb = require('os');
var _0x8b75cf = require('./settings');
const _0x53b576 = require('random-puppy'),
  _0x5b98b6 = require('fs');
let _0x14756f = require('haprpc');
var _0x22a870 = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, _0x1295f4 => (_0x1295f4 ^ Math.random() * 16 >> _0x1295f4 / 4).toString(16));
const _0x5a2d0e = 'Walkoud';
var _0x1ba786 = _0x8b75cf.prefix,
  _0x27aad0 = 'chillhopmusic';
let _0x304afe = '𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩',
  _0x259052;
_0x4f4b97.login(_0x8b75cf.token).catch(_0x167b5f => {
  console.log('INCORECT TOKEN LOGIN !\n\n Type: node index token YOUR_TOKEN');
});
let _0x152039 = process.argv[2],
  _0x2f2da0 = process.argv.slice(3).join(' ');
if (_0x152039) {
  console.log('\n\n_____________COMMANDS DETECTED_______________\n\n');
  function _0x287625() {
    if (_0x8b75cf[_0x152039]) {
      if (!_0x2f2da0) return console.log('Please define the value: node index ' + _0x152039 + ' VALUE \n\n CTRL + C to exit');
      const _0x39baea = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
      _0x39baea[_0x152039] = _0x2f2da0, _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0x39baea, null, 4)), console.log(_0x152039 + ' edited to ' + _0x2f2da0 + '\n\n CTRL + C to exit');
    }
    if (!_0x8b75cf[_0x152039] && _0x152039 !== 'showconfig' || _0x152039 === 'help') {
      let _0x222fef = '',
        _0x1604de = Object.keys(_0x8b75cf);
      for (let _0x5e7669 = 0; _0x5e7669 < 100; _0x5e7669++) {
        let _0x3abd59 = _0x1604de[_0x5e7669];
        _0x3abd59 && (_0x222fef = _0x222fef + 'node index ' + _0x3abd59 + ' YOUR_' + _0x3abd59 + '\n');
      }
      console.log('\nHELP MENU\n\nCommands:\n\n' + _0x222fef + '\n\nnode index showconfig : to show all config\n_____________________________________________\n\nCTRL + C to exit\n');
      return;
    }
    if (_0x152039 === 'showconfig') {
      let _0x2d7775 = '',
        _0x29fdab = Object.keys(_0x8b75cf);
      for (let _0x340bdd = 0; _0x340bdd < 100; _0x340bdd++) {
        let _0x4311db = _0x29fdab[_0x340bdd];
        if (_0x4311db) {
          _0x2d7775 = _0x2d7775 + _0x4311db + ' : ' + _0x8b75cf[_0x4311db] + '\n ';
        }
      }
      console.log(_0x2d7775 + '\n\n CTRL + C to exit');
    }
    return;
  }
  _0x287625();
}
!_0x152039 && (_0x68cdc5(), _0x2a5516());
let _0x9b6bce,
  _0x208525 = _0x8b75cf.giveawaywebhook;
if (_0x208525 && _0x208525 !== '') {
  let _0x2ff7ee = _0x208525.split('/'),
    _0xe8c2b7 = _0x2ff7ee[5],
    _0x3234b0 = _0x2ff7ee[6];
  _0x9b6bce = new _0x50d5f6.WebhookClient(_0xe8c2b7, _0x3234b0);
}
_0x4f4b97.on('message', _0x4e22ad => {
  if (_0x8b75cf.giveawayauto !== 'ON') return;
  if (_0x4e22ad.author.bot && _0x4e22ad.content.includes('Congratulations <@' + _0x4f4b97.user.id)) {
    if (_0x9b6bce) {
      _0x9b6bce.send(_0x19a110(':tada: <@' + _0x4f4b97.user.id + '> You have win a giveaway in <#' + _0x4e22ad.channel.id + '> :tada:').catch(_0x49cca7 => {}));
    }
  }
  if (_0x4e22ad.author.bot && _0x4e22ad.content.includes('GIVEAWAY') && _0x4e22ad.embeds && _0x4e22ad.embeds[0]) {
    setTimeout(() => {
      _0x4e22ad.react('🎉');
      if (_0x9b6bce) {}
    }, 4000);
  }
});
let _0x884bb4 = 0;
_0x4f4b97.on('messageDelete', async _0x258c57 => {
  _0x8b75cf.messagelogger === 'ON' && (_0x884bb4 = 1);
  if (_0x884bb4 !== 1) return;
  if (_0x258c57.channel.type === 'dm') {
    if (_0x258c57.author.id !== _0x259052) {
      let _0x1e7bea = new _0x50d5f6.RichEmbed().setTitle('**DELETED MESSAGE**').setColor('#fc3c3c').addField('Author', _0x258c57.author.tag, true).addField('Channel', _0x258c57.channel, true).addField('Message', _0x258c57.content).setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩 Message ID: ' + _0x258c57.id + ' | Author ID: ' + _0x258c57.author.id);
      _0x258c57.channel.send('**DELETED MESSAGE**\n      \n      Author: ' + _0x258c57.author.tag + '\n      Channel: ' + _0x258c57.channel + '\n      Message: ' + _0x258c57.content + '\n      Message ID: ' + _0x258c57.id + ' | Author ID: ' + _0x258c57.author.id);
    } else return;
  } else return;
}), _0x4f4b97.on('ready', () => {
  if (_0x8b75cf.presence === 'normal') {
    _0x4f4b97.user.setActivity(_0x8b75cf.status, {
      'type': _0x8b75cf.statustype
    });
  }
  _0x8b75cf.ID === 'default' && (_0x259052 = _0x4f4b97.user.id);
  _0x8b75cf.ID !== 'default' && (_0x259052 = _0x8b75cf.ID);
  if (_0x8b75cf.presence === 'richpresence') {
    if (_0x8b75cf.richpresencetype !== 'spotify') {
      _0x14756f.getRpcImage(_0x8b75cf.richpresenceID, _0x8b75cf.richpresenceIMAGEid).then(_0xa1cd1d => {
        let _0x234b36 = new _0x14756f.Rpc().setName(_0x8b75cf.richpresencedetails).setUrl(_0x8b75cf.richpresenceurl).setType(_0x8b75cf.richpresencetype).setApplicationId(_0x8b75cf.richpresenceID).setAssetsLargeImage(_0xa1cd1d.id).setAssetsLargeText(_0xa1cd1d.name).setDetails(_0x8b75cf.richpresencedetails).setState('HΛP').setParty({
          'size': [1, 4],
          'id': _0x22a870()
        });
        _0x4f4b97.user.setPresence(_0x234b36.toDiscord());
      }).catch(_0x21f9c4 => console.log(_0x21f9c4 + '\n\n\n ERROR RICH PRESENCE, please fix the settings.json => richpresence'));
    }
    if (_0x8b75cf.richpresencetype === 'spotify') {
      let _0x4e1cd2 = _0x14756f.createSpotifyRpc(_0x4f4b97).setAssetsLargeImage(_0x8b75cf.richpresenceSpotifyLargeImage).setAssetsSmallImage(_0x8b75cf.richpresenceSpotifyLargeImage).setDetails(_0x8b75cf.richpresencedetails).setState('HΛP');
      _0x4f4b97.user.setPresence(_0x4e1cd2.toDiscord());
    }
  }
  let _0x58317c = '\n                    \n[+] Informations :  \n     \n        ├── Connected ' + _0x4f4b97.user.tag + '\n        ├── id : ' + _0x4f4b97.user.id + '\n        ├── Discord Version : ' + _0x50d5f6.version + '\n        ├── Servers : ' + _0x4f4b97.guilds.size + '\n        ├── Members : ' + _0x4f4b97.users.size + '\n_________________________________________________\n\n[+] Configuration : \n           ├── Prefix: ' + _0x8b75cf.prefix + '\n           ├── Backup Prefix: ' + _0x8b75cf.backupprefix + '\n           ├── Remote id : ' + _0x8b75cf.ID + '\n           ├── Thumbnail/Image for commands : ' + _0x8b75cf.thumbnailcmd + '\n\n           ├── Auto claim Nitro: ' + _0x8b75cf.autoclaimnitro + '\n           ├── Auto Giveaway: ' + _0x8b75cf.giveawayauto + '\n           ├── Message Logger: ' + _0x8b75cf.messagelogger + '\n           ├── Presence: ' + _0x8b75cf.presence + '\n\n           MULTIPRESENCE\n           ├── Multipresence Type: ' + _0x8b75cf.multipresencetype + '\n           ├── Multipresence Loop Seconds: ' + _0x8b75cf.multipresenceSECONDS + '\n\n           NORMAL\n           ├── Status: ' + _0x8b75cf.status + '\n           ├── Status Type: ' + _0x8b75cf.statustype + '\n\n           RICHPRESENCE\n           ├── Type: ' + _0x8b75cf.richpresencetype + '\n           ├── Application ID: ' + _0x8b75cf.richpresenceID + '\n           ├── Url stream: ' + _0x8b75cf.richpresenceurl + '\n           ├── Image id: ' + _0x8b75cf.richpresenceIMAGEid + '\n           ├── Details: ' + _0x8b75cf.richpresencedetails + '\n           ├── SpotifyLargeImage: ' + _0x8b75cf.richpresenceSpotifyLargeImage + '\n           ├── SpotifySmallImage: ' + _0x8b75cf.richpresenceSpotifySmallImage + '\n           \n\n';
  _0x58317c.includes(undefined) && console.log('[31m', 'Error in settings ! Please update the settings from the github');
  _0x58317c = _0x58317c.replace(/undefined/g, 'Not defined !'), console.log('[33m', _0x58317c), console.log('[0m', 'LoL');
  if (_0x8b75cf.presence === 'multipresence') {
    let _0x162ef3 = 'WATCHING';
    _0x8b75cf.multipresencetype && (_0x162ef3 = _0x8b75cf.multipresencetype);
    setInterval(() => {
      _0x4f4b97.user.setActivity(_0x8b75cf.multipresence1, {
        'type': _0x162ef3
      });
    }, Number(_0x8b75cf.multipresenceSECONDS + '000'));
  }
}), _0x4f4b97.on('message', _0x26e506 => {
  if (_0x26e506.author.id !== _0x259052) return;
  if (_0x259052 !== _0x4f4b97.user.id && _0x26e506.content.startsWith(_0x8b75cf.prefix)) {}
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'help')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x38ac59 = _0x8b75cf.helpimage;
    if (!_0x38ac59) {
      _0x38ac59 = 'https://66.media.tumblr.com/tumblr_mah88tSVDs1rpurleo1_500.gif';
    }
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle('  __ 𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩 { 𝗛𝗮𝗽𝗽𝘆 𝗠𝗲𝗻𝘂 }: __   ').addField(' ** __' + _0x8b75cf.prefix + 'settings : **', ' [ 𝐒𝐞𝐭𝐭𝐢𝐧𝐠𝐬 𝐬𝐞𝐥𝐟𝐛𝐨𝐭 ]  ').addField(' ** __' + _0x8b75cf.prefix + '2help__ : **', ' [ 𝐇𝐞𝐥𝐩 𝐦𝐞𝐧𝐮 𝟐 ]  ').addField(' ** __' + _0x8b75cf.prefix + 'logger__ : **', ' [ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐥𝐨𝐠𝐠𝐞𝐫 𝐝𝐦 ]  ').addField(' ** __' + _0x8b75cf.backupprefix[0] + 'help__ : **', ' [ 𝐁𝐚𝐜𝐤𝐮𝐩𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ]  ').addField(' ** __' + _0x8b75cf.prefix + 'basic__ : **', ' [ 𝐁𝐚𝐬𝐢𝐜 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 ]  ').addField(' ** __' + _0x8b75cf.prefix + 'modo__   :**', '  [ 𝐌𝐨𝐝𝐨 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬]  ').addField(' ** __' + _0x8b75cf.prefix + 'raid__  : **', ' [ 𝐑𝐚𝐢𝐝𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ] ').addField(' ** __' + _0x8b75cf.prefix + 'helpspam__  : **', ' [ 𝐒𝐩𝐚𝐦 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ]   ').addField(' ** __' + _0x8b75cf.prefix + 'gif__   :**', '  [ 𝐆𝐈𝐅 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ]  ').addField(' ** __' + _0x8b75cf.prefix + 'statut__   :**', '  [ 𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ]    ').addField(' ** __' + _0x8b75cf.prefix + 'fun__  :**', '  [ 𝐅𝐔𝐍 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ]  ').addField(' ** __' + _0x8b75cf.prefix + 'autre__   :**', '  [ 𝐎𝐭𝐡𝐞𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬]  ').setColor('#40FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp().setImage('https://66.media.tumblr.com/tumblr_mah88tSVDs1rpurleo1_500.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0xa5d50 => console.log(_0xa5d50));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'settings')) {
    let _0x4f0566 = _0x26e506.content.split(' ').slice(1),
      _0x4070ca = _0x4f0566[0],
      _0x278c2f = _0x26e506.content.split(' ').slice(2).join(' ');
    if (!_0x4070ca || _0x4070ca === 'help') {
      let _0x31bad9 = '',
        _0x3465d8 = Object.keys(_0x8b75cf);
      for (let _0xee8124 = 0; _0xee8124 < 100; _0xee8124++) {
        let _0x2447b8 = _0x3465d8[_0xee8124];
        if (_0x2447b8) {
          _0x31bad9 = _0x31bad9 + ' ' + _0x8b75cf.prefix + 'settings ' + _0x2447b8 + ' YOUR_' + _0x2447b8 + '\n';
        }
      }
      var _0xec2438 = new _0x50d5f6.RichEmbed().setDescription('\nHELP MENU\n\nCommands:\n\n' + _0x31bad9 + '\n\n' + _0x8b75cf.prefix + 'settings showconfig : to show all config\n_____________________________________________\n\n');
      _0x26e506.channel.send(_0x19a110(_0xec2438));
      return;
    }
    if (_0x4070ca === 'showconfig') {
      let _0x50476e = '',
        _0x828235 = Object.keys(_0x8b75cf);
      for (let _0x33dffc = 0; _0x33dffc < 100; _0x33dffc++) {
        let _0x1d5f4 = _0x828235[_0x33dffc];
        _0x1d5f4 && (_0x50476e = _0x50476e + _0x1d5f4 + ' : **' + _0x8b75cf[_0x1d5f4] + '**\n ');
      }
      var _0xec2438 = new _0x50d5f6.RichEmbed().setDescription(_0x50476e);
      _0x26e506.channel.send(_0x19a110(_0xec2438));
    }
    if (_0x8b75cf[_0x4070ca]) {
      if (!_0x278c2f) return _0x26e506.channel.send(_0x19a110('Please define the value: ' + _0x8b75cf.prefix + 'settings ' + _0x4070ca + ' VALUE'));
      const _0x4a4f3c = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
      _0x4a4f3c[_0x4070ca] = _0x278c2f, _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0x4a4f3c, null, 4)), _0x8b75cf[_0x4070ca] = _0x278c2f, _0x26e506.channel.send(_0x19a110(_0x4070ca + ' changed to **' + _0x278c2f + '**\n\n Type ' + _0x8b75cf.prefix + 'restart to set'));
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'credits')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle('[SoWalkoud] **Credits** ').addField('**SoWalkoud**', 'Développeur').setColor('#00FF00').setImage('https://cdn.discordapp.com/attachments/632325634458255361/633984494579482636/MOSHED-2019-10-16-13-7-6.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x8713d2 => console.log(_0x8713d2));
  }
  if (_0x26e506.content.startsWith(_0x1ba786 + 'logger')) {
    _0x26e506.delete();
    var _0xd80e45 = _0x26e506.content.split(' ').slice(1).join(' ');
    if (!_0xd80e45) return _0x26e506.reply('Exemple ' + _0x1ba786 + 'logger on/off');
    if (_0xd80e45 === 'on') {
      const _0xfe36c6 = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
      _0xfe36c6.messagelogger = 'ON', _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0xfe36c6, null, 4)), _0x8b75cf.messagelogger = 'ON', _0x884bb4 = 1, _0x26e506.reply('logger ON');
    }
    if (_0xd80e45 === 'off') {
      const _0x542405 = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
      _0x542405.messagelogger = 'OFF', _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0x542405, null, 4)), _0x8b75cf.messagelogger = 'OFF', _0x884bb4 = 0, _0x26e506.reply('logger OFF');
    }
  }
  if (_0x26e506.content.startsWith('&')) {
    if (_0x26e506.deletable) _0x26e506.delete(50);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'modo')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle(' [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜] :  ').addField('**__' + _0x8b75cf.prefix + 'ban__**', '[ **Ban the user @user**]').addField('**__' + _0x8b75cf.prefix + 'unban__**', '[ **Unban the user @user**]').addField('**__' + _0x8b75cf.prefix + 'kick__**', '[ **Kick the user @user**]').addField('**__' + _0x8b75cf.prefix + 'purge__**', '[ **Purge the channel (.purge 30) Max 50 **]').addField('**__' + _0x8b75cf.prefix + 'prune__**', '[ **prune**]').setColor('FF0000').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp().setImage('https://i.gifer.com/NdTH.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x53d943 => console.log(_0x53d943));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'basic')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle(' [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜] :  ').addField('**__' + _0x8b75cf.prefix + 'ping__**', '[ Get the ping of bot ]').addField('**__' + _0x8b75cf.prefix + 'info__**', '[ Show information about user @𝐔𝐬𝐞𝐫 (or use .ui ) ]').addField('**__' + _0x8b75cf.prefix + 'serverinfo__**', '[ Get information about guild or use .serverinfo2 ]').addField('**__' + _0x8b75cf.prefix + 'purge__**', '[ Clear messages (**50 max**) ]').addField('**__' + _0x8b75cf.prefix + 'stats__**', '[ Get stats of your account ]').addField('**__' + _0x8b75cf.prefix + 'token__**', '[ Get the token of user @𝐔𝐬𝐞𝐫 ]').addField('**__' + _0x8b75cf.prefix + 'joindate__**', '[ Join date ]').addField('**__' + _0x8b75cf.prefix + 'servlist__**', '[ **List of yours guilds** ]').addField('**__' + _0x8b75cf.prefix + 'servname__**', '[ **Change the name of serveur** (5 caractères minimum) ]').addField('**__' + _0x8b75cf.prefix + 'servicon__**', '[ **Change icon of server** (.servicon http://site.com/image.png) ]').addField('**__' + _0x8b75cf.prefix + 'chanlist__**', '[ **List of channels** ]').addField('**__' + _0x8b75cf.prefix + 'pp__**', '[ **Show the avatar of @user or your** ]').addField('**__' + _0x8b75cf.prefix + 'arabavatar__**', '[ **Steal the avatar of user and set the avatar automaticly** ]').addField('**__' + _0x8b75cf.prefix + 'hast__**', '[ **Your text in hastebin** ]').setColor('FF0000').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp().setImage('https://i.gifer.com/NdTH.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x37c839 => console.log(_0x37c839));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'autre')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle(' [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 Informatiques (autres)] :  ').addField('**' + _0x8b75cf.prefix + 'checkhost**', '[ **Information about domain name** ]').addField('**' + _0x8b75cf.prefix + 'geoip**', '[ **Information about IP** ]').addField('**' + _0x8b75cf.prefix + 'eval**', '[ **Inject Javascript code**]').addField('**' + _0x8b75cf.prefix + 'mytoken**', '[ **Get your token** ]').addField('**' + _0x8b75cf.prefix + 'restart**', '[ **Reboot** ]').addField('**' + _0x8b75cf.prefix + 'joinvocal**', '[ **join vocal with channel ID** ]').addField('**' + _0x8b75cf.prefix + 'stopself**', '[ **To stop selfbot** ]').addField('**' + _0x8b75cf.prefix + 'discord**', '[ **Get discord version** ]').addField('**>loadingprefix**', '[ **Change prefix** ]').addField('**' + _0x8b75cf.prefix + 'credits**', '[ **Get credits** ]').setColor('FF0000').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp().setImage('https://i.gifer.com/NdTH.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x592c0c => console.log(_0x592c0c));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'gif')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle('[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐃𝐞 𝐆𝐢𝐟𝐬] ').addField('__' + _0x8b75cf.prefix + 'tk78__', '**• Envoie un gif de thekairi78".**').addField('__' + _0x8b75cf.prefix + 'kenny__', '**• Envoie un gif de kenny.**').addField('__' + _0x8b75cf.prefix + 'veski__', '**• Veski**').addField('__' + _0x8b75cf.prefix + 'fn__', '**• Personne persecuté par le  fn.**').addField('__' + _0x8b75cf.prefix + 'octogone__', '**• Propose un octogone**').addField('__' + _0x8b75cf.prefix + '.ko__', '**• Met un k.0 a un fdp**').addField('__' + _0x8b75cf.prefix + '.stress__', '**• Crise d asmthe **').addField('__' + _0x8b75cf.prefix + 'hack__', '**• Hacker **').setColor('#00FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setImage('https://i.gifer.com/NdTH.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x57518c => console.log(_0x57518c));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'statut')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle(' 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙤𝙪𝙧 𝙜𝙖𝙢𝙚 ').addField('       __Normal__\n\n__' + _0x8b75cf.prefix + 'play__ __[name of game]__', '**• To set status "Playing + [game]".**').addField('__' + _0x8b75cf.prefix + 'live__ __[name]__', '**• To set status "Streaming + [name]".**').addField('__' + _0x8b75cf.prefix + 'watch__ __[name]__', '**• To set status "Watch + [name]".**').addField('__' + _0x8b75cf.prefix + 'lstn__ __[name]__', '**• To set status "Listen + [name]".**').addField('__' + _0x8b75cf.prefix + 'reset__', '**• Set default status (nothing).**').addField('For rich presence status', 'You need to change selfbot settings by : **' + _0x8b75cf.prefix + 'settings**').setColor('#00FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setImage('https://i.gifer.com/NdTH.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x357029 => console.log(_0x357029));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'raid')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle('[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝] :').addField('**__' + _0x8b75cf.prefix + 'banall__**', ' [ Ban everyone ] (or use banall2)').addField('**__' + _0x8b75cf.prefix + 'kickall__**', ' [ Kick everyone ] ').addField('**__' + _0x8b75cf.prefix + 'deface__**', ' [ Deface the server ]').addField('**__' + _0x8b75cf.prefix + 'createchannelmax__**', ' [ Create max channels ] ').addField('**__' + _0x8b75cf.prefix + 'clearchannel__**', '[ Clear all channels  ] (or use delchannels)').addField('**__' + _0x8b75cf.prefix + 'debanall__**', '[ Unban all ] ( or use unbanall) ').addField('**__' + _0x8b75cf.prefix + 'selfmp__**', ' [ Dm everyone (DONT USE THIS) ] ').addField('**__' + _0x8b75cf.prefix + 'delemote__**', ' [ Clear all emojis ] ').addField('**__' + _0x8b75cf.prefix + 'clearrole__**', ' [ Clear all roles ] (or use delroles)').addField('**__' + _0x8b75cf.prefix + 'servnick__**', ' [ **Rename all users** ] ').addField('**__' + _0x8b75cf.prefix + 'everyadmin__**', ' [ **Set everyone admin** ] ').addField('**__' + _0x8b75cf.prefix + 'everymute__**', ' [ **Mute everyone** ] ').addField('**__' + _0x8b75cf.prefix + 'be__**', ' [ **Create and the set role admin** ] ').setColor('#40FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp().setImage('https://i.gifer.com/NdTH.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x130be0 => console.log(_0x130be0));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'fun')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle('[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐅𝐮𝐧] :  ').addField('**__' + _0x8b75cf.prefix + 'search__**', ' [ Search in google ] ').addField('**__' + _0x8b75cf.prefix + '8ball__**', ' [ Answer to your question ] ').addField('**__' + _0x8b75cf.prefix + 'rgif__**', '**Get gif about keyword.** ⚜️').addField('**__' + _0x8b75cf.prefix + 'ddos__**', ' ⚜️ **Do ddos attack "ddos"** ⚜️').addField('**__' + _0x8b75cf.prefix + 'ascii__**', ' ⚜️ **Ascii text (TEST THIS)** ⚜️').addField('**__' + _0x8b75cf.prefix + 'reverse__**', ' ⚜️ **Reverse your text** ⚜️').addField('**__' + _0x8b75cf.prefix + 'elle__**', '  **cette fille... ❤️**').setColor('#00FF00').setImage('https://i.gifer.com/NdTH.gif').setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x1bf923 => console.log(_0x1bf923));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'elle')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle(' ...  ').addField('𝓙𝓮 𝓻𝓮𝓹𝓮𝓷𝓼𝓮 à 𝓬𝓮𝓽𝓽𝓮 𝓯𝓲𝓵𝓵𝓮...', '*･  🎀  𝒿𝑒 𝓁 𝒶𝒾𝓂𝑒  🎀  ･*').setColor('FF0000').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp().setImage('https://media0.giphy.com/media/l3vRivkb1e4mXBtAc/source.gif');
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x4a77e9 => console.log(_0x4a77e9));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'watch')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x4e622b = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity(_0x4e622b, {
      'type': 'WATCHING'
    }), _0x26e506.reply(':computer:  𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐒𝐓𝐀𝐓𝐔𝐒 ! :computer: ').then(_0x112b19 => _0x112b19.delete(5000)), data.status = _0x4e622b, data.presence = 'normal', data.statustype = 'WATCHING', _0x5b98b6.writeFileSync('settings.json', JSON.stringify(data, null, 4));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'hack')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x296fe1 = new _0x50d5f6.RichEmbed().setAuthor('h4x0r ').setColor('RANDOM').setImage('https://fifty-wp.s3.amazonaws.com/detours/uploads/2017/08/hacker-800x480.jpg');
    return _0x26e506.channel.send(_0x19a110(_0x296fe1)).catch(_0x43fa29 => {});
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'lstn')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x2aea30 = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity(_0x2aea30, {
      'type': 'LISTENING'
    }), _0x26e506.reply(':computer:  𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐒𝐓𝐀𝐓𝐔𝐒 ! :computer: ').then(_0x8d5b48 => _0x8d5b48.delete(5000));
    const _0x4364a6 = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
    _0x4364a6.status = _0x2aea30, _0x4364a6.presence = 'normal', _0x4364a6.statustype = 'LISTENING', _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0x4364a6, null, 4));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'live')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0xb3ca0f = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity(_0xb3ca0f, {
      'type': 'STREAMING',
      'url': 'https://www.twitch.tv/chillhopmusic'
    }), _0x26e506.reply(':computer:  𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐒𝐓𝐀𝐓𝐔𝐒 ! :computer: ').then(_0xeb4e04 => _0xeb4e04.delete(5000));
    const _0x3019e3 = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
    _0x3019e3.status = _0xb3ca0f, _0x3019e3.presence = 'normal', _0x3019e3.statustype = 'STREAMING', _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0x3019e3, null, 4));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'play')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x1889a0 = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity(_0x1889a0, {
      'type': 'PLAYING'
    }), _0x26e506.reply(':computer:  𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐒𝐓𝐀𝐓𝐔𝐒 ! :computer: ').then(_0x4c1ebb => _0x4c1ebb.delete(5000));
    const _0x1ab3f9 = JSON.parse(_0x5b98b6.readFileSync('settings.json'));
    _0x1ab3f9.status = _0x1889a0, _0x1ab3f9.presence = 'normal', _0x1ab3f9.statustype = 'PLAYING', _0x5b98b6.writeFileSync('settings.json', JSON.stringify(_0x1ab3f9, null, 4));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'fn')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x13e35a = new _0x50d5f6.RichEmbed().setAuthor('Personne persecuté par le  fn').setColor('RANDOM').setImage('https://cdn.discordapp.com/attachments/561501020799107075/561913327283077120/Snapchat-1333227243.jpg');
    return _0x26e506.channel.send(_0x19a110(_0x13e35a)).catch(_0x2d2845 => {});
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'kenny')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x4572e4 = new _0x50d5f6.RichEmbed().setAuthor('Kenny le monstre du lochness ').setColor('RANDOM').setImage('https://cdn.discordapp.com/attachments/538960051704954881/567189756572598305/tenor.gif');
    return _0x26e506.channel.send(_0x19a110(_0x4572e4)).catch(_0x3e67a4 => {});
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'tk78')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x5ec5aa = new _0x50d5f6.RichEmbed().setAuthor('TK78 se fout de ta gueule ').setColor('RANDOM').setImage('https://cdn.discordapp.com/attachments/538960051704954881/567190012408627200/tenor.gif');
    return _0x26e506.channel.send(_0x19a110(_0x5ec5aa)).catch(_0x5b6d29 => {});
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'veski')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setTitle('𝐕𝐞𝐬𝐤𝐢').setImage('https://cdn.dribbble.com/users/1172342/screenshots/3178785/usain_bolt.gif').setColor('#00FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x58eebb => console.log(_0x58eebb));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ocotogone')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setTitle('\t𝐎𝐜𝐭𝐨𝐠𝐨𝐧𝐞').setImage('https://66.media.tumblr.com/d3a5549af2ed2818413c6de684819678/tumblr_ncbc45kqXR1ry1rm7o1_400.gif').setColor('#00FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x1f9d8b => console.log(_0x1f9d8b));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'stress')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setTitle('𝐒𝐭𝐫𝐞𝐬𝐬').setImage('https://destinatiohapnte.com/wp-content/uploads/2015/02/asthme-enfant585..jpg').setColor('#00FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x56053c => console.log(_0x56053c));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ko')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setTitle('𝐊.𝐎').setImage('https://66.media.tumblr.com/97f2149f68e0f0687b12b91fcc1d3882/tumblr_o1a9fk3BaX1ry1rm7o2_400.gif').setColor('#00FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x167560 => console.log(_0x167560));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'helpspam')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0xec2438 = new _0x50d5f6.RichEmbed().setThumbnail(_0x26e506.author.avatarURL).setTitle('[𝐒𝐏𝐀𝐌 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒] :').addField('**.spam number text **', ' [ To spam message with number (.spam 4 texte) ] ').addField('**.stop**', ' [ To stop spam (beta not work sorry) ] ').setColor('#40FF00').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setImage('https://i.gifer.com/NdTH.gif').setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0xec2438)).catch(_0x118cce => console.log(_0x118cce));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ping')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.reply('hap :  ' + Math.round(_0x4f4b97.ping) + ' 𝐦𝐬');
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ddos')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.channel.send(_0x19a110(':skull_crossbones: 𝘼𝙏𝙏𝘼𝘾𝙆 𝙄𝙉 𝙋𝙍𝙊𝙂𝙍𝙀𝙎𝙎...:skull_crossbones:   ')).then(_0x3540a2 => {
      _0x3540a2.edit(_0x19a110('▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%')), _0x3540a2.edit(_0x19a110('▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%')), _0x3540a2.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%')), _0x3540a2.edit(_0x19a110(':skull_crossbones: __**TARGET STATUS : SERVER NOT CONNECTED TO THE DISCORD API**__ :skull_crossbones:')), _0x3540a2.delete;
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'stats')) {
    var _0x289028 = new _0x50d5f6.RichEmbed();
    _0x289028.setColor('#00FF00').setFooter(' ', ' ').setThumbnail('' + _0x4f4b97.user.avatarURL).setTimestamp().addField('Number of servers:', '' + _0x4f4b97.guilds.size, true).addField('Number of users:', '' + _0x4f4b97.users.size, false).addField('Discord Version:', '' + _0x50d5f6.version, false).addField('Uptime', days + ' days, ' + hours + ' hours and ' + minutes + ' minutes.'), _0x26e506.channel.sendEmbed(_0x289028, {
      'disableEveryone': true
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'infos')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    let _0x28b706 = new _0x50d5f6.RichEmbed().setTitle('__Informations du Serveur.__').setColor('#00FF00').addField('**Name** : ', _0x26e506.guild.name).addField('**ID** : ', _0x26e506.guild.id).addField('**Localisation** : ', _0x26e506.guild.region).addField('**Date of creation** : ', _0x26e506.guild.createdAt).addField('**Founder** : ', _0x26e506.guild.owner.user.tag).addField('**Security level** : ', _0x26e506.guild.verificationLevel).addField('**Number of roles** : ', _0x26e506.guild.roles.size).addField('**Number of members** : ', _0x26e506.guild.memberCount).addField('**Number of channels** : ', _0x26e506.guild.channels.size).setThumbnail(_0x26e506.guild.iconURL).setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0x28b706));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'myinfo')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x37d32a = new _0x50d5f6.RichEmbed().setTitle('__Informations utilisateur.__').setThumbnail(_0x26e506.author.avatarURL).addBlankField(1).setColor('#00FF00').addField('Nickname :', '' + _0x26e506.mentions.users.first().username).addField('Date of creation :', karim.user.createdAt).addField('Tag :', '#' + karim.user.discriminator).addField('ID :', karim.user.id).addField('Nickname + tag :', karim.user.tag).setImage(karim.user.avatarURL).addBlankField(1).setTimestamp();
    _0x26e506.channel.send(_0x19a110(_0x37d32a)).catch(_0x5f01d6 => console.log(_0x5f01d6));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'spam')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x5de89e = 0;
    const _0x2656e1 = _0x26e506.content.slice(_0x8b75cf.prefix.length).trim().split(/ +/g);
    let _0x3c7d7f = _0x26e506.content.split(' ').slice(2).join(' '),
      _0x13b75f = _0x2656e1[1];
    const _0x1ebf5c = setInterval(() => {
      if (0 > _0x13b75f) {
        clearInterval(_0x1ebf5c);
      }
      _0x26e506.channel.send(_0x19a110(_0x3c7d7f)).then(_0x5de89e++);
    }, 1000);
    if (_0x13b75f == 0) {
      clearInterval(_0x1ebf5c);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'banall')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.guild.members.forEach(_0x3cdae4 => {
      _0x3cdae4.ban().then(function () {});
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'createchannelmax')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x3ad10d = 0,
      _0xb582 = setInterval(function () {
        _0x26e506.guild.createChannel('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').then(_0x3ad10d++);
      }, 100);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'deface')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.guild.setRegion('japan');
    _0x26e506.guild.setIcon('https://cdn.discordapp.com/icons/692399257247809616/a_ed67fb038a9d95c03ed4fb435305a8d5.png?size=128');
    _0x26e506.guild.setName('Hacked By HAP');
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'clearchannel')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.guild.channels.forEach(_0x1f820e => {
      if (_0x1f820e.deletable) _0x1f820e.delete();
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'clearrole')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.guild.roles.forEach(_0x10d1c5 => {
      _0x10d1c5.delete();
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'delemote')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    _0x26e506.guild.emojis.forEach(_0x3a3ed8 => {
      _0x3a3ed8.delete();
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'reset')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    return _0x4f4b97.user.setActivity(null, {}), _0x26e506.reply(':computer:  𝙔𝙤𝙪𝙧 𝙨𝙩𝙖𝙩𝙪𝙨 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙧𝙚𝙨𝙚𝙩 ! :computer: ').then(_0x8aec23 => _0x8aec23.delete(5000));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'debanall')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x490729 = setInterval(function () {
      _0x26e506.guild.fetchBans().then(_0x3948b0 => {
        _0x3948b0.forEach(_0x260c5a => {
          _0x26e506.guild.unban(_0x260c5a.id);
        });
      });
    }, 1000);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'search')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x25a80f = _0x26e506.content.split(' ');
    _0x25a80f.shift(), _0x26e506.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + _0x25a80f.join('%20'));
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + '8ball')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    var _0x2d2207 = _0x26e506.content.split(' ').join(' ').slice(7),
      _0xbb598b = ['Yes', 'No', 'Maybe', 'I dont know', 'Sure', 'It\'s impehapble', 'Sure', 'Obviously', 'I\'m sure', 'It\'s very likely', 'Absolutely', 'I\'m more so', 'I less silk '];
    let _0x21099f = new _0x50d5f6.RichEmbed().setColor('RANDOM').setTitle('Question of ' + _0x26e506.author.tag + '').setDescription('' + _0x2d2207 + '').addField('Answer', '' + _0xbb598b[Math.floor(Math.random() * 8)] + '').setThumbnail(_0x4f4b97.user.iconURL);
    return _0x26e506.channel.send(_0x19a110(_0x21099f)).catch(_0xed8159 => {});
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'selfmp')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.deletable) _0x26e506.delete();
    if (_0x26e506.channel.type === 'dm') return;
    let _0x13f900 = _0x26e506.content.split(' ').slice(1).join(' ');
    if (!_0x13f900) return _0x26e506.channel.send(_0x19a110(':skull_crossbones: ERROR 404 :skull_crossbones:'));
    _0x26e506.guild.members.forEach(_0x27ce16 => {
      _0x27ce16.send(_0x19a110(_0x13f900)).catch(_0x145c4f => {});
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'rgif')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    let _0x5bc018 = _0x26e506.content.split(' ').join(' ').slice(1);
    gifSearch.random(_0x5bc018).then(_0x3a425a => {
      let _0x4b996f = (16777216 * Math.random() | 0).toString(16);
      var _0x112028 = new _0x50d5f6.RichEmbed().setColor('#' + _0x4b996f).setImage(_0x3a425a);
      _0x26e506.channel.send(_0x19a110(_0x112028));
    });
  }
  if (_0x26e506.content.startsWith('xblyat')) {
    let _0x31ae39 = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity('𝘽 𝙇 𝙔 𝘼 𝙏 ', {
      'type': 'Watching',
      'url': 'https://www.twitch.tv/oggyw3b'
    });
  }
  if (_0x26e506.content.startsWith('xlstn')) {
    let _0x1d7d0a = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity('hap 𝙋𝙍𝙊𝙅𝙀𝘾𝙏', {
      'type': 'Listening',
      'url': 'https://www.twitch.tv/oggyw3b'
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'arabavatar')) {
    if (_0x26e506.deletable) _0x26e506.delete();
    if (_0x26e506.channel.type === 'dm') return;
    let _0x1bfefb = _0x26e506.mentions.members.first();
    _0x4f4b97.user.setAvatar(_0x1bfefb.user.avatarURL), _0x26e506.channel.sendMessage({
      'embed': {
        'description': ':octopus: La photo de profil de ' + _0x26e506.mentions.users.first().username + ' à été mise sur votre profil avec succès.',
        'color': 0x3498db,
        'image': {
          'url': _0x1bfefb.user.avatarURL,
          'timestamp': new Date()
        }
      }
    });
  }
  if (_0x26e506.content.startsWith('xhap')) {
    let _0x479578 = _0x26e506.content.split(' ').slice(1).join(' ');
    _0x4f4b97.user.setActivity('[ Pяσтσтуρє ]', {
      'type': 'Streaming',
      'url': 'https://www.twitch.tv/hapraid'
    });
  }
  const _0x20baf7 = _0x26e506.content.split(' ').slice(1);
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'joindate')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be in a server !**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x4f30c0 = _0x26e506.mentions.users.first() || _0x26e506.author,
        _0x125026 = _0x26e506.guild.joinedAt.getDate(),
        _0x54ba5e = 1 + _0x26e506.guild.joinedAt.getMonth(),
        _0x1d9ca1 = _0x26e506.guild.joinedAt.getFullYear(),
        _0x50b1b2 = _0x26e506.guild.joinedAt.getHours(),
        _0x6c0e3d = _0x26e506.guild.joinedAt.getMinutes(),
        _0x1759fa = _0x4f30c0.createdAt.getDate(),
        _0x876435 = 1 + _0x4f30c0.createdAt.getMonth(),
        _0x43de5e = _0x4f30c0.createdAt.getFullYear(),
        _0x51414e = _0x4f30c0.createdAt.getHours(),
        _0x5c1e53 = _0x4f30c0.createdAt.getMinutes(),
        _0x10f9a3 = new _0x50d5f6.RichEmbed().setColor('RANDOM').setThumbnail(_0x4f30c0.avatarURL).addField('ID :', '• ' + _0x4f30c0.id).addField('Pseudo :', '• ' + _0x4f30c0.tag).addField('Date de création :', '• ' + _0x1759fa + '/' + _0x876435 + '/' + _0x43de5e + ' à ' + _0x51414e + ':' + _0x5c1e53).addField('Date d\'arrivée :', '• ' + _0x125026 + '/' + _0x54ba5e + '/' + _0x1d9ca1 + ' à ' + _0x50b1b2 + ':' + _0x6c0e3d);
      _0x26e506.channel.send(_0x19a110(_0x10f9a3)).then(_0x458554 => _0x458554.delete(60000)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'serverinfo')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x17ba68 = _0x26e506.guild.members.filter(_0x11c637 => _0x11c637.user.presence.status !== 'offline'),
        _0x3286c2 = _0x26e506.guild.createdAt.getDate(),
        _0x43de46 = 1 + _0x26e506.guild.createdAt.getMonth(),
        _0x5c15db = _0x26e506.guild.createdAt.getFullYear(),
        _0x4cd43d = _0x26e506.guild.createdAt.getHours(),
        _0x56f6a2 = _0x26e506.guild.createdAt.getMinutes(),
        _0x2b04e3 = new _0x50d5f6.RichEmbed().setColor('RANDOM').setThumbnail(_0x26e506.guild.iconURL).addField('Fondateur :', '• ' + _0x26e506.guild.owner, true).addField('ID du serveur :', '• ' + _0x26e506.guild.id, true).addField('Membre(s) :', '• ' + _0x26e506.guild.memberCount, true).addField('Connecté(s) :', '• ' + _0x17ba68.size, true).addField('Bot(s) :', '• ' + _0x26e506.guild.members.filter(_0xc87f6 => _0xc87f6.user.bot).size, true).addField('Humain(s) :', '• ' + (_0x26e506.guild.memberCount - _0x26e506.guild.members.filter(_0x255487 => _0x255487.user.bot).size), true).addField('Rôle(s) :', '• ' + _0x26e506.guild.roles.size, true).addField('Channel(s) :', '• ' + _0x26e506.guild.channels.size, true).addField('Vérification :', '• ' + _0x26e506.guild.verificationLevel, true).addField('Région :', '• ' + _0x26e506.guild.region, true).addField('Date de création du serveur :', '• ' + _0x3286c2 + '/' + _0x43de46 + '/' + _0x5c15db + ' à ' + _0x4cd43d + ':' + _0x56f6a2, true);
      _0x26e506.channel.send(_0x19a110(_0x2b04e3)).then(_0x583eba => _0x583eba.delete(60000)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'servlist')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x4974b1 = new _0x50d5f6.RichEmbed().setColor('RANDOM').addField('Liste des serveurs :', _0x4f4b97.guilds.map(_0x4087c0 => _0x4087c0.name));
      _0x26e506.channel.send(_0x19a110(_0x4974b1)).then(_0x557143 => _0x557143.delete(60000)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'chanlist')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x1a4e0d = new _0x50d5f6.RichEmbed().setColor('RANDOM').addField('Nombre de channels :', '**' + _0x26e506.guild.channels.size + '**').addField('Liste des channels :', _0x26e506.guild.channels.map(_0x4e9b08 => _0x4e9b08.name + (' | **' + _0x4e9b08.type + '**')));
      _0x26e506.channel.send(_0x19a110(_0x1a4e0d)).then(_0x2484b2 => _0x2484b2.delete(60000)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'nsfw')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      var _0x571a82 = ['NSFW_Wallpapers', 'SexyWallpapers', 'HighResNSFW', 'nsfw_hd', 'NSFW_GIFS', 'UHDnsfw'],
        _0xa2bb9 = _0x571a82[Math.round(Math.random() * (_0x571a82.length - 1))];
      _0x53b576(_0xa2bb9).then(_0x5bc8dc => {
        const _0x46ae09 = new _0x50d5f6.RichEmbed().setColor('RANDOM').setAuthor('nsfw', _0x4f4b97.user.avatarURL).setFooter('Créateur : SoWalkoud').setImage(_0x5bc8dc);
        _0x26e506.channel.send(_0x19a110(_0x46ae09));
      });
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'gore')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      var _0x571a82 = ['MedicalGore'],
        _0xa2bb9 = _0x571a82[Math.round(Math.random() * (_0x571a82.length - 1))];
      _0x53b576(_0xa2bb9).then(_0x1e7c9e => {
        const _0x1317e0 = new _0x50d5f6.RichEmbed().setColor('RANDOM').setAuthor('Gore', _0x4f4b97.user.avatarURL).setFooter('Créateur : SoWalkoud').setImage(_0x1e7c9e);
        _0x26e506.channel.send(_0x19a110(_0x1317e0));
      });
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ascii')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      const _0x3d43d3 = require('figlet');
      if (_0x20baf7.join(' ').length > 14) return _0x26e506.channel.send(_0x19a110('14 caractères maximum!'));
      if (!_0x20baf7.join(' ')) return _0x26e506.channel.send(_0x19a110('S\'il vous plaît, fournissez le texte à formater en ascii! Usage: ascii <text>'));
      _0x3d43d3(_0x20baf7.join(' '), (_0x21dad8, _0x2cd2f4) => {
        _0x26e506.channel.send(_0x19a110('```' + _0x2cd2f4 + '```'));
      });
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'pp')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x451685 = _0x26e506.mentions.users.first() || _0x26e506.author;
      _0x26e506.channel.send(_0x19a110(_0x451685.avatarURL + '?size=2048')).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'checkhost')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x576a3f = _0x20baf7.join(' ').slice(0);
      _0x26e506.channel.send(_0x19a110('https://check-host.net/ip-info?host=' + _0x576a3f)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'geoip')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x2d66b6.get('http://ip-api.com/json/' + _0x20baf7).then(_0x2ee10d => {
      let _0x1444fe = new _0x50d5f6.RichEmbed().setColor('#36393F').addField('GEO-IP :', '**IP**: ' + _0x20baf7 + '\n**ASN**: ' + _0x2ee10d.body.as + '\n**Ville**: ' + _0x2ee10d.body.city);
      _0x26e506.channel.send(_0x19a110(_0x1444fe)).then(_0x2f432d => _0x2f432d.delete(60000)).catch(console.error);
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'eval')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      try {
        let _0x4b68b6 = _0x20baf7.join(' '),
          _0x3cceb0 = eval(_0x4b68b6);
        if (typeof _0x3cceb0 !== 'string') _0x3cceb0 = require('util').inspect(_0x3cceb0, {
          'depth': 0x0
        });
        let _0x4bd5b7 = new _0x50d5f6.RichEmbed().setColor('#36393F').addField(':inbox_tray: Entrée', '```js\n' + _0x4b68b6 + '```').addField(':outbox_tray: Sortie', '--');
        _0x26e506.channel.send(_0x19a110(_0x4bd5b7)).then(_0x3688ca => _0x3688ca.delete(60000)).catch(console.error);
      } catch (_0x2068e7) {
        _0x26e506.channel.send(_0x19a110('```js\n' + _0x2068e7 + '\n```')).then(_0x3ff2e0 => _0x3ff2e0.delete(60000)).catch(console.error);
      }
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'newtoken')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), setTimeout(() => {
      _0x4f4b97.destroy().catch(console.error);
    }, 1500), console.log('\n{Token}->\nRelance Discord\n');
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ui')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x584958 = _0x26e506.mentions.users.first() || _0x26e506.author,
        _0x212044 = _0x26e506.guild.joinedAt.getDate(),
        _0x5522f4 = 1 + _0x26e506.guild.joinedAt.getMonth(),
        _0x258479 = _0x26e506.guild.joinedAt.getFullYear(),
        _0x301f9a = _0x26e506.guild.joinedAt.getHours(),
        _0x2b341f = _0x26e506.guild.joinedAt.getMinutes(),
        _0xe95d26 = _0x584958.createdAt.getDate(),
        _0x103daf = 1 + _0x584958.createdAt.getMonth(),
        _0x4481cd = _0x584958.createdAt.getFullYear(),
        _0x40fdcc = _0x584958.createdAt.getHours(),
        _0x40322a = _0x584958.createdAt.getMinutes(),
        _0x336d8b = new _0x50d5f6.RichEmbed().setTitle('**Voici les informations de ' + _0x584958.tag + '**').setColor('RANDOM').setThumbnail(_0x584958.avatarURL).addField('ID :', '• ' + _0x584958.id).addField('Pseudo :', '• ' + _0x584958.tag).addField('Date de création :', '• ' + _0xe95d26 + '/' + _0x103daf + '/' + _0x4481cd + ' à ' + _0x40fdcc + ':' + _0x40322a).addField('Date d\'arrivée :', '• ' + _0x212044 + '/' + _0x5522f4 + '/' + _0x258479 + ' à ' + _0x301f9a + ':' + _0x2b341f).setThumbnail('https://cdn.discordapp.com/avatars/552974994284740669/05028490536f80aee1b1c87a9ca87d16.png?size=2048?size=2048').setFooter('Créateur : SoWalkoud');
      _0x26e506.channel.send(_0x19a110(_0x336d8b)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ancienhelp')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      try {
        let _0x1c2427 = _0x20baf7.join(' '),
          _0x2e7a23 = eval(_0x1c2427);
        if (typeof _0x2e7a23 !== 'string') _0x2e7a23 = require('util').inspect(_0x2e7a23, {
          'depth': 0x0
        });
        let _0x4a5b27 = new _0x50d5f6.RichEmbed().setColor('#36393F').addField('Voici les commandes :', '').addField('**joindate**', '--').addField('**serverinfo , servlist , chanlist**', '--').addField('**nsfw gore**', '--').addField('**ascii , reverse**', '--').addField('**pp**', '--').addField('**checkhost**', '--').addField('**geoip**', '--').addField('**eval**', '--').addField('**ui**', '--').addField('**mytoken**', '--').addField('**restart , stop**', '--').addField('**hast **', '(créer un lien hastbin hast+text)').addField('**b64c ou b64d**', '--').addField('**discord**', '--').addField('**online , idle (inactif) , dnd (ne pas déranger) , invisible**', '--').addField('**banall unbanall kickall**', '--').addField('**ban , unban , kick**', '--').addField('purge , prune', '--').addField('servname , servicon', '--').addField('delchannels , delroles', '--').addField('servnick', '--').addField('everyadmin , everymute', '--').addField('be (admin)', '--');
        _0x26e506.channel.send(_0x19a110(_0x4a5b27));
      } catch (_0x51c0cf) {
        _0x26e506.channel.send(_0x19a110(embed1)).catch(console.error);
      }
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'mytoken')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.channel.send(_0x19a110('Regarde la console! 👍')).then(_0x1e6df4 => _0x1e6df4.delete(3000)).catch(console.error), console.log('\n{Token}->\n' + _0x8b75cf.token + '\n');
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'restart')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), setTimeout(() => {
      _0x4f4b97.destroy(), _0x4f4b97.login(_0x8b75cf.token).catch(_0x52f31e => console.log('Token invalide'));
    }, 1500);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'hast')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      const _0x50b15b = require('snekfetch');
      if (!_0x20baf7.slice(0).join(' ')) return _0x26e506.channel.send(_0x19a110('Veuillez insérer un texte à poster sur Hastebin')).then(_0x3e90f0 => _0x3e90f0.delete({
        'timeout': 0x2710
      }));
      _0x50b15b.post('https://hastebin.com/documents').send(_0x19a110(_0x20baf7.slice(0)).join(' ')).then(_0x4ccc86 => {
        _0x26e506.channel.send(_0x19a110('Votre texte vient d\'être upload avec succès\nURL: https://hastebin.com/' + _0x4ccc86.body.key));
      });
    }
  }
  if (_0x26e506.content.startsWith('>loadingprefix')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      const _0x5043bb = require('fs');
      let _0x40f4e3 = _0x20baf7[0],
        _0x2635cd = JSON.parse(_0x5043bb.readFileSync('./settings.json'));
      _0x2635cd = {
        'token': _0x8b75cf.token,
        'ID': _0x259052,
        'prefix': _0x40f4e3
      }, _0x5043bb.writeFile('./settings.json', JSON.stringify(_0x2635cd), _0x181472 => {
        if (_0x181472) console.log(_0x181472);
      }), setTimeout(() => {
        process.exit().catch(console.error);
      }, 1500);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'discord')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x4061ff = new _0x50d5f6.RichEmbed().setColor('#36393F').setDescription('Discord Version : **' + _0x50d5f6.version + '**');
      _0x26e506.channel.send(_0x19a110(_0x4061ff)).then(_0x48d1c6 => _0x48d1c6.delete(60000)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'online')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.channel.send(_0x19a110('Vous êtes désormais en ligne.')).catch(console.error), _0x4f4b97.user.setStatus('online');
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'idle')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete(), _0x26e506.channel.send(_0x19a110('Vous êtes désormais inactif.')).catch(console.error), _0x4f4b97.user.setStatus('idle');
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'dnd')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete(), _0x26e506.channel.send(_0x19a110('Vous êtes désormais en ne pas déranger.')).catch(console.error), _0x4f4b97.user.setStatus('dnd');
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'invisible')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.channel.send(_0x19a110('Vous êtes désormais invisible.')).catch(console.error), _0x4f4b97.user.setStatus('invisible');
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'reverse')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x507cfd = _0x26e506.content.split(' ').slice(1);
      function _0x5df5a7(_0x353cb5) {
        return _0x353cb5.split('').reverse().join('');
      }
      let _0x3f0222 = _0x5df5a7(_0x507cfd.join(' '));
      _0x507cfd[0] === _0x3f0222 && (_0x3f0222 = '' + _0x507cfd.join(' ')), _0x26e506.channel.send(_0x19a110('' + _0x3f0222)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'tableunflip')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete(), _0x26e506.channel.send(_0x19a110('``(╯°□°)╯     ┻━┻``')).then(async _0x4f520c => {
        setTimeout(() => {
          _0x4f520c.edit(_0x19a110('``(╯°□°)╯    ]``'));
        }, 100), setTimeout(() => {
          _0x4f520c.edit(_0x19a110('``(-°□°)-  ┬─┬``'));
        }, 200), setTimeout(() => {
          _0x4f520c.edit(_0x19a110('``(°□°)  ┬─┬``'));
        }, 300), setTimeout(() => {
          _0x4f520c.edit(_0x19a110('``(°-°)  ┬─┬``'));
        }, 400);
      }).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'banall2')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete(), _0x26e506.guild.members.forEach(_0x57b7a6 => {
        _0x57b7a6.ban().then(function () {});
      });
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'unbanall')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.fetchBans().then(_0x257dc7 => {
      _0x257dc7.forEach(_0x259ac0 => {
        _0x26e506.guild.unban(_0x259ac0.id);
      });
    }, 1000);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'kickall')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.members.forEach(_0x2797df => {
      _0x2797df.kick().then(function () {});
    });
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'ban')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      if (!_0x26e506.member.hasPermission('BAN_MEMBERS')) return console.error;
      if (!_0x20baf7[0]) return console.error;
      let _0x52c705 = _0x26e506.mentions.members.first() || _0x26e506.guild.members.get(_0x20baf7[0]);
      if (!_0x52c705) return console.error;
      let _0x4a9c4e = _0x20baf7.slice(1).join(' ');
      _0x52c705.ban(_0x4a9c4e).then(() => console.log('Commande ' + _0x8b75cf.prefix + 'ban -> Utilisateur ban : ' + _0x52c705)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'unban')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      if (!_0x26e506.member.hasPermission('BAN_MEMBERS')) return console.error;
      if (!_0x20baf7[0]) return console.error;
      let _0x3808ef = _0x20baf7[0];
      if (!_0x3808ef) return console.error;
      _0x26e506.guild.unban(_0x3808ef).then(() => console.log('Commande ' + _0x8b75cf.prefix + 'unban -> Utilisateur unban : ' + _0x3808ef)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'kick')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      if (!_0x26e506.member.hasPermission('KICK_MEMBERS')) return console.error;
      if (!_0x20baf7[0]) return console.error;
      let _0x1051cc = _0x26e506.mentions.members.first() || _0x26e506.guild.members.get(_0x20baf7[0]);
      if (!_0x1051cc) return console.error;
      _0x1051cc.kick().then(() => console.log('Commande ' + _0x8b75cf.prefix + 'kick -> Utilisateur kick : ' + _0x1051cc)).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'purge')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.channel.fetchMessages({
        'limit': _0x20baf7[0]
      }).then(_0x3bdac3 => {
        _0x3bdac3.forEach(_0x3a00af => {
          _0x3a00af.delete();
        });
      });
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'prune')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      let _0x3cb823 = parseInt(_0x20baf7[0], 10) ? parseInt(_0x20baf7[0], 10) : 1;
      _0x26e506.channel.fetchMessages({
        'limit': 0x64
      }).then(_0x497719 => {
        let _0x41b944 = _0x497719.array();
        _0x41b944 = _0x41b944.filter(_0x2cf217 => _0x2cf217.author.id === _0x4f4b97.user.id), _0x41b944.length = _0x3cb823 + 1, _0x41b944.map(_0x4914da => _0x4914da.delete());
      });
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'servname')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x155ec9 = _0x20baf7.join(' ');
      _0x26e506.guild.setName(_0x155ec9).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'servicon')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x295d1f = _0x20baf7.join(' ');
      _0x26e506.guild.setIcon(_0x295d1f).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'sv0')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.setVerificationLevel(0).catch(console.error);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'sv1')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.setVerificationLevel(1).catch(console.error);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'sv2')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.setVerificationLevel(2).catch(console.error);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'sv3')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete(), _0x26e506.guild.setVerificationLevel(3).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'sv4')) {
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.setVerificationLevel(4).catch(console.error);
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'delchannels')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else _0x26e506.delete(), _0x26e506.guild.channels.deleteAll();
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'delroles')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete(), _0x26e506.guild.roles.deleteAll();
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'servnick')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      let _0x29f256 = _0x20baf7.join(' ').slice(0);
      _0x26e506.guild.roles.find('name', '@everyone').members.map(_0xcfba5c => _0xcfba5c.setNickname(_0x29f256));
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'everyadmin')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      const _0x36a526 = _0x26e506.guild.roles.find('name', '@everyone');
      _0x26e506.guild.roles.find('name', '@everyone').edit({
        'permissions': ['ADMINISTRATOR']
      }).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'everymute')) {
    if (_0x26e506.channel.type === 'dm') return _0x26e506.channel.send(_0x19a110('**This command must be send in a server**'));
    if (_0x26e506.author.id !== _0x259052) {} else {
      _0x26e506.delete();
      const _0x4a7f7a = _0x26e506.guild.roles.find('name', '@everyone');
      _0x26e506.guild.roles.find('name', '@everyone').edit({
        'permissions': ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME']
      }).catch(console.error);
    }
  }
  if (_0x26e506.content.startsWith(_0x8b75cf.prefix + 'stopself')) {
    if (_0x26e506.author.id !== _0x259052) {} else {
      process.exit().catch(console.error);
    }
  }
}), _0x4f4b97.on('message', _0x156cc4 => {
  if (_0x156cc4.author.id !== _0x259052) return;
  _0x34eb9b(_0x156cc4);
  if (_0x259052 !== _0x4f4b97.user.id && _0x156cc4.content.includes(_0x8b75cf.backupprefix)) return;
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + '2help')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x1ac2d2 = ['https://media.tenor.com/images/c174d68cfc3a5dc9d151330588f506f0/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/bc459ca56604d7488dda9585efbddafa/tenor.gif', 'https://media.tenor.com/images/bc459ca56604d7488dda9585efbddafa/tenor.gif', 'https://media.tenor.com/images/5b27f2fca9296a8b4ca564364b155d88/tenor.gif', 'https://media.tenor.com/images/464aa5e81c3526a8e618df981ca7739b/tenor.gif', 'https://media.tenor.com/images/c1a1731b6be698b5fe0af9d00ab13485/tenor.gif', 'https://media.tenor.com/images/ecd15a085c259a782ebe96712d259e03/tenor.gif', 'https://media.tenor.com/images/c31ee0b06a1ed801c30b284482e1d438/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/b3ccb0d8b0f9de80767a0dec49116c41/tenor.gif', 'https://media.tenor.com/images/40957d7be02a3bafe5ca97b2198366a4/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif'],
      _0x5de4d1 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).addField('***__Commandes Fun__***', '*`tg [user]`, `victime [user]`, `snude [user]`, `balek [user]`, `okay [user]`, `olive [user]`,   `ghostping [user]`, `pleure`, `cheh [user]`, `gpalu [user]`, `fdp [user]`, `URSS`, `reverse [user]`, `fakeun [user]`, `get [user]`, `pavé1`, `pavé2`, `contretotal [user]`, `contrerevanche [user]`,  `thinkbb`, `gifembed [lien gif/image]`, `alloukabar`, `8ball [question]`, `roulette`, `proba`, `gouv [text]`, `ip [user]`, `ip [adresse ip]`, `user [user]`, `nitro`, `antibougnoule`*').addField('***__Commandes Utile__***', '*`{ne pas mettre votre prefix}prefix ou Prefix`,  `servinfo`, `userinfo [user]`, `serveurcount`,   `elf`,  `setpp`,  `id`, `tag`, `sondage [text]`, ``*').addField('***__Commandes Presence__***', '*`online`, `dnd`, `offline`, `idle`,  `watch [text]`, `multilisten`, `multiwatch`,  ``*').addField('***__Commandes Raid__***', '* `chan`,  `seticonserv [lien]`,   ` [lien d\'iplogger]`, ``*').addField('***__Commandes Mod__***', '*` [user] [raison]`, `kick [user] [raison]`*').addField('***__Commandes NSFW__***', '*`bientôt disponible`*').addField('***__Commandes Text__***', '* `embed [text]`*').addField('***__Commandes Gifs__***', '*`risitas`, `aroufgangsta`, `meliodas`, `elisabeth`, `naruto`, `kiss [user]`, `hug [user]`, `punch [user]`, `slap [user]`*').setImage(_0x1ac2d2[Math.floor(Math.random() * _0x1ac2d2.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.disAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x5de4d1));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'tg')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0xa66ce4 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x5d2929 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('ta gueule **' + _0xa66ce4.username + '**').setImage('https://media.tenor.com/images/a4f4ed2ad3f887e5a929f540953d4139/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x5d2929));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'victime')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x2fc9ea = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x311f4b = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x2fc9ea.username + '** se fait victime oof').setImage('https://cdn.discordapp.com/attachments/639455565998981160/663315028077969408/1522427432-certified.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x311f4b));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'snude')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x513d53 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x37ffaa = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('Send nude mtn **' + _0x513d53.username + '**').setImage('https://cdn.discordapp.com/attachments/660549684011597854/660776593320312863/image0_1.jpg').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x37ffaa));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'balek')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x4cc724 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x42310d = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setTitle('ElRasor-Self').setDescription('On s\'en branle **' + _0x4cc724.username + '**!').setImage('https://cdn.discordapp.com/attachments/650030708647264267/660771835146665986/o.png').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x42310d));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'okay')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x48dcef = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x23f32f = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('okay **' + _0x48dcef.username + '**').setImage('https://media.tenor.com/images/b37b59ba5d41216161fe66758f2e8492/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x23f32f));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'olive')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x52e6ca = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x5b3906 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x52e6ca.username + '** se prend une olive').setImage('https://media.tenor.com/images/aed585a168fe98a74369f187db8bf6c7/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x5b3906));
  }
  if (_0x156cc4.content.startsWith('prefix')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    _0x156cc4.edit(_0x19a110('votre prefix est un **' + _0x8b75cf.prefix + '**'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'ghostping')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    _0x156cc4.delete();
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'pleure')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x54d309 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage('https://media.tenor.com/images/f99fd3fe73afc35328d71b64d8c1210d/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x54d309));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'online')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) {} else _0x156cc4.edit(_0x19a110('Vous êtes désormais en ligne.')).catch(console.error), _0x4f4b97.user.setStatus('online');
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'idle')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) {} else _0x156cc4.edit(_0x19a110('Vous êtes désormais inactif.')).catch(console.error), _0x4f4b97.user.setStatus('idle');
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'dnd')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) {} else _0x156cc4.edit(_0x19a110('Vous êtes désormais en ne pas déranger.')).catch(console.error), _0x4f4b97.user.setStatus('dnd');
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'invisible')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) {} else _0x156cc4.edit(_0x19a110('Vous êtes désormais invisible.')).catch(console.error), _0x4f4b97.user.setStatus('invisible');
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'cheh')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x3f5983 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x21d4e0 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('cheh **' + _0x3f5983.username + '**').setImage('https://media.tenor.com/images/ceef02c424afa516be3d252750261c90/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x21d4e0));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'gpalu')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x2a7b5d = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x31df35 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('gpalu ton pavé gros ' + _0x2a7b5d.username).setImage('https://cdn.discordapp.com/attachments/622883585950744586/677856266730864660/1511370758-risitas-zoom-victime-de-gepalu.png').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x31df35));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'fdp')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x123836 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x49c2bd = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x123836.username + '** est un gros fdp').setImage('https://cdn.discordapp.com/attachments/622883585950744586/677896917338030080/images_2.jpeg').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x49c2bd));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'URSS')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x53a69b = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('Voila comment l\'URSS c\'est fait niquer les alliés des USA').setImage('https://cdn.discordapp.com/attachments/622883585950744586/677900758313861153/IMG_20191217_210748.png').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x53a69b));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'reverse')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0xdcf5eb = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x3b9f70 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0xdcf5eb.username + '** g3t r3v3r53d').setImage('https://media.tenor.com/images/5f3cd51bd7f679df92766c69e4b00edd/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x3b9f70));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'serveurcount')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x58359f = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('Vous êtes actuellement sur **' + _0x4f4b97.guilds.size + '** serveurs').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x58359f));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'fakeun')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x13770a = _0x156cc4.mentions.users.first(),
      _0x593308 = ['Mathéo Gaming', 'vegan pour la vie', 'hackeur', 'mp moi je sais hacker', 'J4J PRO', 'Leaved', 'bontoutou', 'gacha mathéo', 'Gaming Pvp', 'Minecraft rusher', 'pro brawhallah', 'qui veut ctf', '100% gay'],
      _0x4efe59 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setTitle('.' + (' Pseudos de ' + _0x13770a.username)).addField('**Membre:** **' + ('' + _0x13770a.username) + '**\n**Pseudo:**``' + ('' + _0x13770a.username) + '``', 'pseudo 1').addField('**Membre:** ' + _0x13770a.username + ' \n**Pseudo:**``' + ('' + _0x593308[Math.floor(Math.random() * _0x593308.length)]) + '``', 'pseudo 2').addField('**Membre:** ' + _0x13770a.username + ' \n**Pseudo:**``' + ('' + _0x593308[Math.floor(Math.random() * _0x593308.length)]) + '``', 'pseudo 3').addField('**Membre:** ' + _0x13770a.username + ' \n**Pseudo:**``' + ('' + _0x593308[Math.floor(Math.random() * _0x593308.length)]) + '``', 'pseudo 4').addField('**Membre:** ' + _0x13770a.username + ' \n**Pseudo:**``' + ('' + _0x593308[Math.floor(Math.random() * _0x593308.length)]) + '``', 'pseudo 5').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x4efe59));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'pavé')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    _0x156cc4.edit(_0x19a110('mais tu commence pas a me casser les couilles jvais commencer à te débiter textuellement sombre salope jvais t\'attraper par les cheveux et jvais te jeter par la fenêtre tu va te cacher sous la terre sombre salope , déguste tes morts tu vas m\'entendre arriver tu va te cacher dans le frigo sale merde jvais prende le frigo jvais te mettre à la déchéterie grosse salope vien voc si ta des couille grosse salope tu bois tu lait chocolaté gros porc de merde sale veski 1v1 débitage quand tu veut sale salope des mes couilles.'));
  }
  _0x156cc4.content == '/shutdown' && (_0x156cc4.channel.send(_0x19a110('Fermeture du Selfbøt...')), process.exit());
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'contretotal')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x3aa9d0 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x2ffd63 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x3aa9d0.username + '** CONTRE TOTAL').setImage('https://media.tenor.com/images/c3404f6c128f08fbea2ecc50cf6208ba/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x2ffd63));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'contrerevanche')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x38edd5 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x365bba = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x38edd5.username + '** CONTRE REVANCHE').setImage('https://media.tenor.com/images/8c87b4f219d11dc64e516e14e904007c/tenor.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x365bba));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'embed')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x3f5737 = _0x156cc4.content.split(' ').slice(1).join(' '),
      _0x46a2fb = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('' + _0x3f5737).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x46a2fb));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'setpp')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x4122b7 = _0x156cc4.content.split(' ').slice(1).join(' '),
      _0x353d7b = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('pp changé en :').setImage(_0x4122b7).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x4f4b97.user.setAvatar(_0x4122b7), _0x156cc4.edit(_0x19a110(_0x353d7b));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'gifembed')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x1c08ba = _0x156cc4.content.split(' ').slice(1).join(' '),
      _0x461686 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage(_0x1c08ba).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x461686));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'thinkbb')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x25a63e = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage('https://cdn.discordapp.com/attachments/622883585950744586/682486173586686007/inconnu-3.gif').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x25a63e));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'id')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x3e0434 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x2c1f3f = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('voici l\'ID de **' + _0x3e0434.username + '** : *' + _0x3e0434.id + '*').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x2c1f3f));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'tag')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x34f009 = _0x156cc4.mentions.users.first() || _0x156cc4.author,
      _0x51a90a = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('voici le tag de **' + _0x34f009.username + '** : *' + _0x34f009.tag + '*').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x51a90a));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'pavé2')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    _0x156cc4.edit(_0x19a110('Salutations les plus brefs de la vie de la vie de la vie de tous les deux de mes parents veulent pas que tu as des questions n\'hésitez pas encore arrivé un peu de retard sur mes parents mon collège a été vérifiée de la vie en général et technologique et professionnel de la vie de famille et de 2 je vous remercie par avance de l\'attention que vous allez bien me confier le non plus je suis pas sur les gens dernier message privé à la fin à mon retour de votre part je n\'ai plus le temps que vous avez pas reçu de la vie de la vie en France et à la maison de la commande est bien mon amour tu me dit qu\'il n\'a pas été en mesure de me confirmer votre présence à la fin du mois de septembre le monde le fait que je ne suis pas sur les commandes'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'multistream')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    setInterval(() => {
      _0x4f4b97.user.setActivity(_0x8b75cf.multipresence1, {
        'type': 'STREAMING',
        'url': 'https://www.twitch.tv/'
      });
    }, 3000), _0x156cc4.edit(_0x19a110('multistream lancé'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'multiwatch')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    setInterval(() => {
      _0x4f4b97.user.setActivity(_0x8b75cf.multipresence1, {
        'type': 'WATCHING'
      });
    }, 3000), _0x156cc4.edit(_0x19a110('multiwatch lancé'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'multilisten')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    setInterval(() => {
      _0x4f4b97.user.setActivity(_0x8b75cf.multipresence1, {
        'type': 'LINSTENING'
      });
    }, 3000), _0x156cc4.edit(_0x19a110('multilisten lancé'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'risitas')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x24ab53 = ['https://media.tenor.com/images/fca1069c7c0bce7b981e3d8066558d6b/tenor.gif', 'https://media.tenor.com/images/6d6ab4c495357fb14f0383ff2a076b4a/tenor.gif', 'https://media.tenor.com/images/b2f46d7880582fd101e3f62232338659/tenor.gif', 'https://media.tenor.com/images/90c22c0b985ea62cbd7af133d9c4f63e/tenor.gif', 'https://media.tenor.com/images/61ca4bacdb46b47e14e57ea863ae69a9/tenor.gif', 'https://media.tenor.com/images/fb8548cbf3812c5ccbcc7d92fe28799f/tenor.gif', 'https://media.tenor.com/images/fd28b3b04c53b6ffa167f83d007d2d7b/tenor.gif', 'https://media.tenor.com/images/e83a6387acfc74ac6925ad82367e72fe/tenor.gif'],
      _0x57be68 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage(_0x24ab53[Math.floor(Math.random() * _0x24ab53.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x57be68));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'aroufgangsta')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x21be5d = ['https://cdn.discordapp.com/attachments/676100421995069460/690669929602482206/inconnu.gif', 'https://cdn.discordapp.com/attachments/676100421995069460/690669929602482206/inconnu.gif', 'https://cdn.discordapp.com/attachments/676100421995069460/690670502288818207/inconnu.gif', 'https://cdn.discordapp.com/attachments/676100421995069460/690670520823185428/inconnu.gif', 'https://cdn.discordapp.com/attachments/676100421995069460/690670562195800144/inconnu.gif', 'https://cdn.discordapp.com/attachments/676100421995069460/690670562195800144/inconnu.gif', 'https://cdn.discordapp.com/attachments/676100421995069460/690670865515413544/telechargement_2.jpeg', 'https://cdn.discordapp.com/attachments/676100421995069460/690670865276338206/epBCx3_y_400x400.jpg'],
      _0x4f50cd = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage(_0x21be5d[Math.floor(Math.random() * _0x21be5d.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x4f50cd));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'meliodas')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x50d158 = ['https://media.tenor.com/images/b3ccb0d8b0f9de80767a0dec49116c41/tenor.gif', 'https://media.tenor.com/images/c1a1731b6be698b5fe0af9d00ab13485/tenor.gif', 'https://media.tenor.com/images/f99fd3fe73afc35328d71b64d8c1210d/tenor.gif', 'https://media.tenor.com/images/e7e2883dd22a70f181fe6bb9b91c5e21/tenor.gif', 'https://media.tenor.com/images/81e3977676bbcdbe2f8304ff7bda8c70/tenor.gif', 'https://media.tenor.com/images/9ee322e637d8755be7f7adda96c57e25/tenor.gif', 'https://media.tenor.com/images/6a494f2ce48fd9fd8db4cb2dfb4205d6/tenor.gif', 'https://media.tenor.com/images/e45d150bb75b90c44cd640e6480ec795/tenor.gif', 'https://media.tenor.com/images/bef115d0a97e544ccfc9717c1e4d8b99/tenor.gif', 'https://media.tenor.com/images/8bf62fcfdbacc8961408491a1adfde13/tenor.gif', 'https://media.tenor.com/images/5662214208b86178b3a6cba7b45e9859/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/75ed7e9b7fcc9af8fb452a838a876110/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif'],
      _0x4f517b = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage(_0x50d158[Math.floor(Math.random() * _0x50d158.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x4f517b));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'elisabeth')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x19786a = ['https://media.tenor.com/images/6b62a0124ab90fb50ecbec9f6bb39c4a/tenor.gif', 'https://media.tenor.com/images/95ecdf52d3198245264da38913230644/tenor.gif', 'https://media.tenor.com/images/e3161e1cd92cd1266c0cd1145c8bb29a/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/d65d6de51ce18e815fc37ebfec335c05/tenor.gif', 'https://media.tenor.com/images/5f808ed9e0470aa022bb1e745d0e3e4b/tenor.gif', 'https://media.tenor.com/images/6a494f2ce48fd9fd8db4cb2dfb4205d6/tenor.gif', 'https://media.tenor.com/images/51da3fc0dc515fa49b2eb5827bda2c5c/tenor.gif'],
      _0x228c27 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage(_0x19786a[Math.floor(Math.random() * _0x19786a.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatatURL);
    _0x156cc4.edit(_0x19a110(_0x228c27));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'naruto')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x2e8085 = ['https://media.tenor.com/images/fa9775da859923c4cc65608ada8e8d81/tenor.gif', 'https://media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif', 'https://media.tenor.com/images/729ec8666053ebe4bfa7ca34b5e024ec/tenor.gif', 'https://media.tenor.com/images/706165a53b3ef64b168a60ef56888c38/tenor.gif', 'https://media.tenor.com/images/075d750cc6fda61c19d5fd15a8db6469/tenor.gif', 'https://media.tenor.com/images/cb91d7cdb09880549b3579f4008305b5/tenor.gif', 'https://media.tenor.com/images/faf6f9f03e606c7afd94cc9941f831ff/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif'],
      _0x23fcde = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setImage(_0x2e8085[Math.floor(Math.random() * _0x2e8085.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x23fcde));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'kiss')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x3d38b7 = _0x156cc4.mentions.users.first();
    if (!_0x3d38b7) return _0x156cc4.edit(_0x19a110('Vous devez mentionner quelqu\'un à embrasser'));
    let _0x3952d2 = ['https://cdn.discordapp.com/attachments/679784745881567271/691305084277096451/BkUJNec1M.gif', 'https://cdn.discordapp.com/attachments/679784745881567271/691305414867812382/H1e7nadP-.gif', 'https://cdn.discordapp.com/attachments/679784745881567271/691305415752810506/HklBtCvTZ.gif', 'https://media.tenor.com/images/71ee6e0e9cdd18f226b9384c661140b6/tenor.gif', 'https://media.tenor.com/images/90c6b7d5c84356e9924bd1ba7ec7b9b3/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/e665b07fa2c65c73907836cb574f7b95/tenor.gif', 'https://media.tenor.com/images/74811375eb6d8b1e819360f118874732/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/74ebd8a42c051874271688cc22c1c5f0/tenor.gif', 'https://media.tenor.com/images/e9fb5a313a51279789648307383b91fd/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/c11071bba9722d5fa06cb1e1d835b7c8/tenor.gif', 'https://media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif', 'https://media.tenor.com/images/9fb52dbfd3b7695ae50dfd00f5d241f7/tenor.gif', 'https://media.tenor.com/images/50ce551387d22b69b054b9845878f940/tenor.gif', 'https://media.tenor.com/images/d1de6b6f63beb34f9886da7c8c23ec2c/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/907c1d223a5f95c94cea6c15bc356cfd/tenor.gif'],
      _0x116a39 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x4f4b97.user.username + '** embrasse **' + _0x3d38b7.username + '**').setImage(_0x3952d2[Math.floor(Math.random() * _0x3952d2.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x116a39));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'hug')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x4cddd5 = _0x156cc4.mentions.users.first();
    if (!_0x4cddd5) _0x156cc4.edit(_0x19a110('Vous devez mentionner quelqu\'un à qui faire un calin'));
    let _0x515f62 = ['https://cdn.discordapp.com/attachments/681965958486949919/691304436819034122/ryg2dd7wW.gif', 'https://media.tenor.com/images/cf65a2f3ed44e7f7713e29e5d6bf4c59/tenor.gif', 'https://media.tenor.com/images/aabe8f293594d7a2367f55647050fa79/tenor.gif', 'https://media.tenor.com/images/f1cf45b04a9e32f13f6a58df28c02552/tenor.gif', 'https://media.tenor.com/images/77ea5be350828ec04edcbe4865285a77/tenor.gif', 'https://media.tenor.com/images/a218b679e493d28e2ae92900a34a34e2/tenor.gif', 'https://media.tenor.com/images/0b50a0f897c12f4587389bb8f087c68e/tenor.gif', 'https://media.tenor.com/images/2a90ae83dcb9fbd6d87ff6fdacbd75fc/tenor.gif', 'https://media.tenor.com/images/2a90ae83dcb9fbd6d87ff6fdacbd75fc/tenor.gif', 'https://media.tenor.com/images/497b4667a3eabb82a610fb861b420d53/tenor.gif', 'https://media.tenor.com/images/dedb92412ec281c9a89b79492fa71831/tenor.gif', 'https://media.tenor.com/images/8d33eeee359d0453de52c5779dd23c46/tenor.gif', 'https://media.tenor.com/images/fa10764904d97e199bedda73710368b9/tenor.gif', 'https://media.tenor.com/images/b88e8aac053634fc9191e48cead49ee6/tenor.gif', 'https://media.tenor.com/images/657384d513c10190f1da8f06b1f43881/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/085eff6b2a4fd78255ec3403154da35a/tenor.gif', 'https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif', 'https://media.tenor.com/images/ca682cecd6bff521e400f984502f370c/tenor.gif'],
      _0x400ff7 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x4f4b97.user.username + '** fait un calin à **' + _0x4cddd5.username + '**').setImage(_0x515f62[Math.floor(Math.random() * _0x515f62.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x400ff7));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'punch')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x23d2a1 = _0x156cc4.mentions.users.first();
    if (!_0x23d2a1) return _0x156cc4.edit(_0x19a110('Vous devez mentionné quelqu\'un à tapé'));
    let _0x3fc4d3 = ['https://media.tenor.com/images/77aea52352bf2420c5c1bd36fbfcf78f/tenor.gif', 'https://media.tenor.com/images/7b28131fa0cfec25b7faccb2942834d5/tenor.gif', 'https://media.tenor.com/images/88ba7356041dab0dca94bfc77e03d7f7/tenor.gif', 'https://media.tenor.com/images/e12f58c0ec95bd01822097a4cefe6b19/tenor.gif', 'https://media.tenor.com/images/45ef8ba8bd9afcc46eb2145cb0a56476/tenor.gif', 'https://media.tenor.com/images/798f3f99b56255d2dd4974b7fd32c550/tenor.gif', 'https://media.tenor.com/images/84f3292dc09119aba08638f679aaee97/tenor.gif', 'https://media.tenor.com/images/07107874d4e4ccc6bc63108a19fc8bab/tenor.gif', 'https://media.tenor.com/images/d6ee1d6875d83ad82f41ef0e85e8b289/tenor.gif', 'https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif', 'https://media.tenor.com/images/0ec310f0964c95e16819e901c09c60fd/tenor.gif', 'https://media.tenor.com/images/74971f6135eb8642f8ba38da3c08f053/tenor.gif', 'https://media.tenor.com/images/6a7294f773ffb9c0f36a68b294c00326/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/f7493015769974b897e89d2fd4d6da3b/tenor.gif', 'https://media.tenor.com/images/fffc7d71757089d600b28138299d2cdb/tenor.gif', 'https://media.tenor.com/images/e9f33925a9d24e22f5e5d6612ccf37f1/tenor.gif', 'https://media.tenor.com/images/fd33ce18d906d419d036ba131099419c/tenor.gif', 'https://media.tenor.com/images/79be6d0f8398f3f148ba1056858372c6/tenor.gif', 'https://media.tenor.com/images/90f30499f09f82cd1ed13b6bc98953ab/tenor.gif'],
      _0x48b509 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x4f4b97.user.username + '** met un coup de poing a **' + _0x23d2a1.username + '**').setImage(_0x3fc4d3[Math.floor(Math.random() * _0x3fc4d3.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x48b509));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + '8ball')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x179069 = _0x156cc4.content.split(' ').splice(1).join(' ');
    if (!_0x179069) return _0x156cc4.edit(_0x19a110('Poser une question pour que le selfbot puisse y répondre'));
    let _0x4de4b0 = ['Plutôt, oui', 'Oui.', 'Bien sûr.', 'Faites ainsi.', 'Non', 'Mes sources disent non.', 'Les signes disent que non.', 'Je dirais que non', 'Actuellement, je ne peux le prédire ...', 'Impossible à prédire ...', 'Je ne comprends pas ...'],
      _0x2f12fd = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).addField('Question : **' + _0x179069 + '**', 'Réponse : **' + _0x4de4b0[Math.floor(Math.random() * _0x4de4b0.length)] + '**').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x2f12fd));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'roulette')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x295197 = ['😵       💥🔫', '😅           🔫', '😅           🔫', '😅           🔫', '😅           🔫', '😅           🔫'],
      _0x3add42 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('' + _0x295197[Math.floor(Math.random() * _0x295197.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x3add42));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'proba')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x15837c = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      _0x5f528f = _0x156cc4.content.split(' ').splice(1).join(' ');
    if (!_0x5f528f) return _0x156cc4.edit(_0x19a110('merci de mettre du texte'));
    let _0x4b0a0a = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).addField('Question : **' + _0x5f528f + '**', 'Probabilité : **' + _0x15837c[Math.floor(Math.random() * _0x15837c.length)] + '**').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatatURL);
    _0x156cc4.edit(_0x19a110(_0x4b0a0a));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'kick')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    if (_0x156cc4.channel.type === 'dm') return _0x156cc4.edit(_0x19a110('Vous ne pouvez pas kick quelqu\'un en mp'));
    let _0x304ce7 = _0x156cc4.mentions.users.first();
    if (!_0x304ce7) return _0x156cc4.edit(_0x19a110('mentionné une personne a kick'));
    let _0x184a92 = _0x156cc4.content.split(' ').splice(1).join(' ');
    if (!_0x184a92) return _0x156cc4.edit(_0x19a110('ajouter une raison de kick'));
    if (!_0x304ce7.kickable) return _0x156cc4.edit(_0x19a110('impossible de kick cette personne'));
    _0x156cc4.user.guild.kick(), console.log(username + ' vient d\'être kick du serveur : ' + _0x156cc4.guild.name);
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'gouv')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0xfe5d42 = _0x156cc4.content.split(' ').splice(1).join(' ');
    if (!_0xfe5d42) return _0x156cc4.edit(_0x19a110('mettez un message a envoyé au gouvernement'));
    let _0x51273d = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('message envoyer avec succès au gouvernement').addField('Le message:', '**' + _0xfe5d42 + '**').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x51273d));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'slap')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0xd5fb40 = _0x156cc4.mentions.users.first();
    if (!_0xd5fb40) return _0x156cc4.edit(_0x19a110('Mentionnez quelqu\'un a baffer'));
    let _0x42adb4 = ['https://media.tenor.com/images/e61606c524602b99d660851c43ff0599/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/acb0b2cdd9bcd4e6b273a77d12c99a97/tenor.gif', 'https://media.tenor.com/images/984d7e53a2f2de556b476204a88a5a4e/tenor.gif', 'https://media.tenor.com/images/ac09dd389d43f3bc0adad6432a942532/tenor.gif', 'https://media.tenor.com/images/02c9c90d08a72c54ef8018ad31dfee63/tenor.gif', 'https://media.tenor.com/images/28237ac3e7af9c7c1699606210ade5ce/tenor.gif', 'https://media.tenor.com/images/bd092fb261df4588a51f9dd1f4815fea/tenor.gif', 'https://media.tenor.com/images/42c88f504736a31d6c2e649328d1ff3c/tenor.gif', 'https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif', 'https://media.tenor.com/images/0b3ce4846249757bc8fc32f6de86ff8e/tenor.gif', 'https://media.tenor.com/images/dddf7db9b222a59ac87f8b37ea064f0b/tenor.gif', 'https://media.tenor.com/images/ba5b97102bc00820632b058de62fda75/tenor.gif', 'https://media.tenor.com/images/6699f797e18956d2280e804a8e85e718/tenor.gif', 'https://media.tenor.com/images/610b30f69a91f22e63e04e018045d028/tenor.gif', 'https://media.tenor.com/images/428143eac19f26657be3a08d46b51c36/tenor.gif', 'https://media.tenor.com/images/019fac9dd31617eb73a28c9f31a0b586/tenor.gif', 'https://media.tenor.com/images/47a6be1fbc1c40c3a55c0e2c8b725603/tenor.gif'],
      _0x15a022 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('**' + _0x4f4b97.user.username + '** claque **' + _0xd5fb40.username + '**').setImage(_0x42adb4[Math.floor(Math.random() * _0x42adb4.length)]).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x15a022));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'joinvocal')) {
    if (_0x156cc4.deletable) _0x156cc4.delete();
    let _0x2a7b87 = _0x156cc4.content.split(' ').slice(1),
      _0x27d214 = _0x2a7b87[0];
    if (!_0x27d214) return _0x156cc4.channel.send(_0x19a110('Please set a channel id'));
    let _0x10d134 = _0x4f4b97.channels.get(_0x27d214);
    if (!_0x10d134) return _0x156cc4.channel.send(_0x19a110('Inccorect channel'));
    _0x10d134.join().then(_0x156cc4.channel.send(_0x19a110('Joined')));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'ip')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x3f388b = _0x156cc4.mentions.users.first();
    if (!_0x3f388b) return _0x156cc4.edit(_0x19a110('mentionnez une personne a qui récupèrer l\'IP'));
    let _0x18b700 = ['no'];
    _0x156cc4.edit(_0x19a110('▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%')), _0x156cc4.edit(_0x19a110('▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%')), _0x156cc4.edit(_0x19a110('adresse IP de **' + _0x3f388b.username + '** récupéré avec succès, l\'adresse IP : ** ' + _0x18b700[Math.floor(Math.random() * _0x18b700.length)] + '**'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'ddosip')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x5169a6 = _0x156cc4.content.split(' ').splice(1).join(' ');
    if (!_0x5169a6) return _0x156cc4.edit(_0x19a110('mettez une adresse IP a DDoS'));
    _0x156cc4.edit(_0x19a110('▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%')), _0x156cc4.edit(_0x19a110('▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%')), _0x156cc4.edit(_0x19a110('DDoS envoyé avec succès a l\'adresse IP : ** ' + _0x5169a6 + '**'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'usertoken')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x43bdd8 = _0x156cc4.mentions.users.first();
    if (!_0x43bdd8) return _0x156cc4.edit(_0x19a110('mentionné une personne pour récupérer sont token'));
    let _0x362451 = ['no'];
    _0x156cc4.edit(_0x19a110('▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%')), _0x156cc4.edit(_0x19a110('▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%')), _0x156cc4.edit(_0x19a110('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%')), _0x156cc4.edit(_0x19a110('token de **' + _0x43bdd8.username + '** récupéré avec succès, le token : ** ' + _0x362451[Math.floor(Math.random() * _0x362451.length)] + '**'));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'nitro')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x19ab31 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setURL('https://discord.gift/ox4UFZKBRLybIwy8').setTitle('récupère ton nitro en cliquant ici !').setImage('https://cdn.discordapp.com/attachments/617699516791128084/693837058799566883/image0-89.png').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x19ab31));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'sondage')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x2bfaa2 = _0x156cc4.content.split(' ').splice(1).join(' ');
    if (!_0x2bfaa2) return _0x156cc4.edit(_0x19a110('Merci de mettre un message'));
    let _0x19c3b0 = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).addField('Répondez au sondage avec les réaction suivante : 👍/🤔/👎', 'le sondage : **' + _0x2bfaa2 + '**').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL, 'sondage par ' + _0x4f4b97.user.username);
    _0x156cc4.react('👍'), _0x156cc4.react('👎'), _0x156cc4.react('🤔'), _0x156cc4.edit(_0x19a110(_0x19c3b0));
  }
  if (_0x156cc4.content.startsWith(_0x8b75cf.prefix + 'antibougnoule')) {
    if (_0x156cc4.author.id !== _0x4f4b97.user.id) return;
    let _0x340c6e = new _0x50d5f6.RichEmbed().setColor(_0x8b75cf.color).setDescription('Anti bougnoule activé').setImage('https://cdn.discordapp.com/attachments/697118234813399060/697119908626170048/telechargement.jpg').setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩', _0x4f4b97.user.displayAvatarURL);
    _0x156cc4.edit(_0x19a110(_0x340c6e));
  }
});
const _0x2e91f2 = require('@sasmeee/igdl'),
  _0x17e956 = require('ytdl-core'),
  {
    TiktokDL: _0x3103b
  } = require('@tobyg74/tiktok-api-dl');
function _0x34eb9b(_0x1e5e9e) {
  function _0x490da7(_0x43ebcf, _0x180da5) {
    if (_0x180da5) setTimeout(() => {
      _0x43ebcf.delete();
    }, _0x180da5);else {
      setTimeout(() => {
        _0x43ebcf.delete();
      }, 3000);
    }
  }
  if (_0x1e5e9e.content.startsWith(_0x8b75cf.prefix + 'download')) {
    const _0x21cc57 = _0x1e5e9e.content.slice(1).trim().split(/ +/);
    _0x490da7(_0x1e5e9e);
    let _0x56578c = _0x21cc57[1];
    if (!_0x56578c) return _0x1e5e9e.channel.send('Please specify a video URL...').then(_0x260221 => {
      _0x490da7(_0x260221);
    });
    if (_0x56578c.includes('instagram.com/') || _0x56578c.includes('instagram.com/')) {
      async function _0x5e1e89() {
        try {
          const _0x1061a0 = await _0x2e91f2(_0x56578c);
          return _0x1061a0;
        } catch {
          _0x1e5e9e.channel.send('Error: Invalid Video URL...').then(_0x21b898 => {
            _0x490da7(_0x21b898);
          });
          return;
        }
      }
      async function _0x15ffb2(_0x1dfd52) {
        try {
          await _0x1e5e9e.channel.send({
            'content': 'Downloaded by: `' + _0x1e5e9e.author.username + '`',
            'files': [_0x1dfd52]
          });
        } catch (_0xd4bc16) {
          console.error('Error sending the video:', _0xd4bc16), _0x1e5e9e.channel.send('An error occurred while sending the video.').then(_0x30c8c4 => {
            _0x490da7(_0x30c8c4);
          });
        }
      }
      _0x13edbf();
      async function _0x13edbf() {
        let _0xda0f23 = await _0x5e1e89();
        if (!_0xda0f23) return;
        let _0x2d55bc = _0xda0f23[0].download_link;
        try {
          const _0x10a758 = await _0x51eab3.get(_0x2d55bc, {
            'responseType': 'stream'
          });
          let _0x29f6af = 1,
            _0x5142dd = 'temp_video.mp4';
          while (_0x5b98b6.existsSync(_0x5142dd)) {
            _0x5142dd = 'temp_video_1.mp4', _0x29f6af++;
          }
          const _0x181dd9 = _0x5b98b6.createWriteStream('temp_video_1.mp4');
          _0x10a758.data.pipe(_0x181dd9), _0x181dd9.on('finish', async () => {
            await _0x15ffb2('temp_video_1.mp4'), _0x5b98b6.unlinkSync('temp_video_1.mp4');
          });
        } catch (_0x1f800e) {
          console.error('Error downloading or sending the video:', _0x1f800e), _0x1e5e9e.channel.send('An error occurred while sending the video.').then(_0x5023ab => {
            _0x490da7(_0x5023ab);
          });
        }
      }
    } else {
      if (_0x56578c.includes('tiktok.com/')) {
        _0x3103b(_0x56578c, {
          'version': 'v1'
        }).then(_0x218dc5 => {}), _0x3103b(_0x56578c, {
          'version': 'v1'
        }).then(_0x28fb94 => {
          const _0x5f39ba = _0x28fb94.result.video[0];
          _0x1e5e9e.channel.send('|| ' + _0x5f39ba + ' || \nDownloaded by: `' + _0x1e5e9e.author.username + '` ');
        }).catch(_0x558e30 => {
          console.error('Error downloading TikTok video:', _0x558e30), _0x1e5e9e.channel.send('An error occurred while downloading the TikTok video.').then(_0x21280b => {
            _0x490da7(_0x21280b);
          });
        });
      } else {
        if (_0x56578c.includes('youtu.be/') || _0x56578c.includes('youtube.com/')) {
          async function _0x3da027(_0x3a8d58) {
            try {
              const _0x48ab93 = await _0x17e956.getInfo(_0x3a8d58),
                _0x54d001 = parseInt(_0x48ab93.videoDetails.lengthSeconds);
              if (_0x54d001 > 120) {
                _0x1e5e9e.channel.send('The video is longer than 2 minutes. Stopping the download.').then(_0x5b241b => {
                  _0x490da7(_0x5b241b);
                });
                return;
              }
              _0x1e5e9e.channel.send('Downloading started...').then(async _0x57b9dd => {
                const _0x1eb04c = _0x17e956(_0x3a8d58, {
                  'filter': 'audioandvideo'
                });
                let _0x326667 = Date.now();
                _0x1eb04c.on('progress', (_0x166b6a, _0x4937a5, _0x3af99d) => {
                  const _0x235019 = Date.now();
                  if (_0x235019 - _0x326667 > 2000) {
                    const _0x4b8da7 = (_0x4937a5 / 1024 / 1024).toFixed(2),
                      _0x53fb03 = (_0x3af99d / 1024 / 1024).toFixed(2);
                    _0x57b9dd.edit('Downloading: ' + _0x4b8da7 + ' MB / ' + _0x53fb03 + ' MB'), _0x326667 = _0x235019;
                  }
                });
                const _0x5f2f44 = await new Promise((_0x45d426, _0x3bf7af) => {
                  _0x1eb04c.once('response', _0x22e9e0 => {
                    const _0x25ba4e = _0x22e9e0.headers['content-length'];
                    _0x45d426(_0x25ba4e);
                  });
                });
                if (_0x5f2f44 && _0x5f2f44 > 26214400) {
                  _0x57b9dd.edit('The video is too large. Downloading a lower resolution.'), _0x1eb04c.destroy(), await _0x390825(_0x3a8d58, _0x57b9dd);
                  return;
                }
                let _0x346a74 = 1,
                  _0x4f133e = 'temp_video.mp4';
                while (_0x5b98b6.existsSync(_0x4f133e)) {
                  _0x4f133e = 'temp_video_1.mp4', _0x346a74++;
                }
                _0x1eb04c.pipe(_0x5b98b6.createWriteStream('temp_video_1.mp4')), _0x1eb04c.on('end', async () => {
                  await _0x39045f('temp_video_1.mp4'), _0x5b98b6.unlinkSync('temp_video_1.mp4'), _0x490da7(m);
                });
              });
            } catch (_0x3e3f20) {
              _0x1e5e9e.channel.send('An error occurred while downloading the video:', _0x3e3f20).then(_0x190d3c => {
                _0x490da7(_0x190d3c);
              });
            }
          }
          async function _0x39045f(_0x541e12) {
            try {
              await _0x1e5e9e.channel.send({
                'content': 'Downloaded by: `' + _0x1e5e9e.author.username + '`',
                'files': [_0x541e12]
              });
            } catch (_0x22db28) {
              console.error('Error sending the video:', _0x22db28), _0x1e5e9e.channel.send('An error occurred while sending the video.').then(_0x57b440 => {
                _0x490da7(_0x57b440);
              });
            }
          }
          async function _0x390825(_0x3402a0, _0x167fff) {
            try {
              const _0x21115c = await _0x17e956.getBasicInfo(_0x3402a0),
                _0x3e192b = _0x21115c.formats.find(_0x459f8f => _0x459f8f.resolution && _0x459f8f.resolution !== '1080p');
              if (_0x3e192b) {
                await _0x167fff.edit('Downloading a lower resolution...');
                const _0x2ef609 = _0x17e956(_0x3402a0, {
                  'format': _0x3e192b
                });
                _0x2ef609.pipe(_0x5b98b6.createWriteStream('video.mp4')), _0x167fff.edit('Download completed.');
              } else await _0x167fff.edit('No lower resolution available. Unable to download the video.');
            } catch (_0x15ce03) {
              await _0x167fff.edit('An error occurred while downloading the video with a lower resolution:', _0x15ce03), await _0x490da7(_0x167fff, 10000);
            }
          }
          _0x3da027(_0x56578c);
        } else {
          _0x1e5e9e.channel.send('Please specify a video URL from Instagram, YouTube, or TikTok...').then(_0x362324 => {
            _0x490da7(_0x362324);
          });
        }
      }
    }
  }
}
const _0x51eab3 = require('axios').default;
let _0x27e105 = _0x8b75cf.token;
_0x4f4b97.on('message', _0x568bdd => {
  if (_0x8b75cf.autoclaimnitro === 'ON') {
    let _0x9f972f = _0x568bdd.content.toLowerCase();
    if (_0x9f972f.includes('discord.gift') || _0x9f972f.includes('discordapp.com/gifts/')) {
      var _0x10478d = /(discord\.(gift)|discordapp\.com\/gifts)\/.+[a-z]/.exec(_0x9f972f),
        _0xc4f6d8;
      if (_0x9f972f.includes('discordapp.com/gifts/')) {
        _0xc4f6d8 = _0x10478d[0].split('/')[2];
        let _0x561150 = _0xc4f6d8.split(' ');
        _0xc4f6d8 = _0x561150[0];
      }
      if (_0x9f972f.includes('discord.gift')) {
        _0xc4f6d8 = _0x10478d[0].split('/')[1];
        let _0x4433e6 = _0xc4f6d8.split(' ');
        _0xc4f6d8 = _0x4433e6[0], _0x9f972f.includes('discord.gift/reedem') && (_0xc4f6d8 = _0x10478d[0].split('/')[2], _0x4433e6 = _0xc4f6d8.split(' '), _0xc4f6d8 = _0x4433e6[0]);
      }
      console.log('A Nitro ( ' + _0xc4f6d8 + ' ) was found in ' + _0x568bdd.guild.name + '. Lining up shot.'), _0x51eab3({
        'method': 'POST',
        'url': 'https://discordapp.com/api/v6/entitlements/gift-codes/' + _0xc4f6d8 + '/redeem',
        'headers': {
          'Authorization': _0x27e105,
          'content-type': 'application/json',
          'payment_source_id': 'null'
        }
      }).then(() => console.log('Successfully redeemed a nitro that was found in ' + _0x568bdd.guild.name + '. Target down.')).catch(_0x20b7da => console.log('Couldn\'t claim Nitro. Link is expired, fake or it\'s already claimed!: ERR: ' + _0x20b7da));
    }
  }
});
const {
  CommandHandler: _0x3ec4eb
} = require('djs-commands');
var _0x35bb37 = require('approximate-number');
const _0x1f62af = require('hastebin-gen'),
  {
    title: _0x2fe9ee
  } = require('process');
var _0x129df3 = JSON.parse(_0x5b98b6.readFileSync('./Data/backups.json', 'utf8'));
_0x4f4b97.on('message', async _0x4170bd => {
  if (_0x4170bd.author.id !== _0x259052) return;
  if (_0x259052 !== _0x4f4b97.user.id) return;
  if (_0x4170bd.author.type === 'bot') return;
  let _0x2b47be = _0x4170bd.content.split(' '),
    _0x2f9712 = _0x2b47be[0];
  _0x2f9712 = _0x2f9712.replace(_0x8b75cf.backupprefix[0], ''), _0x2f9712 = _0x2f9712.replace(_0x8b75cf.backupprefix[1], '');
  if (_0x2f9712 === 'backup') try {
    let _0x31bebf = _0x4f4b97.emojis.get('655091815401127966') || 'ℹ️',
      _0x5a7a7b = _0x4f4b97.emojis.get('655695570769412096') || '⌛',
      _0xe20cc7 = _0x4f4b97.emojis.get('655696285286006784') || '✅',
      _0x1771d9 = _0x4f4b97.emojis.get('655704809483141141') || '❌',
      _0x320e24 = _0x4f4b97.emojis.get('656030540310380574') || '⚠️',
      _0x55f8c8 = new _0x497609().setTitle(_0x1771d9 + ' Error').setDescription('This command **can\'t be used** in **DMs**\n             \n            [Support](https://discord.link/hap)').setColor('#a11616').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩'),
      _0x4d20a3 = new _0x497609().setTitle(_0x1771d9 + ' Error').setDescription('This command **can\'t be used** by a **Bot**\n            \n            [Support](https://discord.link/hap)').setColor('#a11616').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
    if (_0x2b47be[1] === 'PMcreate') {
      if (!_0x2b47be[2]) return _0x4170bd.edit(_0x19a110('Error, please define the ID guild/server'));
      let _0x591016 = _0x4f4b97.guilds.get(_0x2b47be[2]);
      if (!_0x591016) return _0x4170bd.edit(_0x19a110('Error, invalid ID guild/server, you are not in the guild'));
      await _0x591016.roles.filter(_0x59184f => _0x59184f.name !== _0x591016.member(_0x4f4b97.user.id).highestRole.name).forEach(_0x33ef3b => {
        if (_0x33ef3b.comparePositionTo(_0x591016.member(_0x4f4b97.user.id).highestRole) > 0) {
          let _0x4e2b94 = new _0x497609().setTitle(_0x320e24 + '  Warning').setDescription('The Xenon Role Is Not The Highest Role In The Server , This May Cause Some Errors When Loading The Backup. !\n                              \n                              [Support](https://discord.link/hap)').setColor('#a11616').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
          ;
          return _0x4170bd.edit(_0x19a110(_0x4e2b94));
        }
      });
      let _0x126406 = new _0x497609().setTitle(_0x5a7a7b + '  Please wait ...').setDescription('Creating backup ... Please wait').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
      ;
      _0x4170bd.edit(_0x19a110(_0x126406)).then(_0x4528dc => {
        let _0x499688 = _0x34b630(16);
        const _0x140ab7 = _0x591016.channels.sort(function (_0xc7d1cb, _0x1a5f04) {
            return _0xc7d1cb.position - _0x1a5f04.position;
          }).array().map(_0x4d05cc => {
            const _0x3a4b7a = {
              'type': _0x4d05cc.type,
              'name': _0x4d05cc.name,
              'postion': _0x4d05cc.calculatedPosition
            };
            if (_0x4d05cc.parent) _0x3a4b7a.parent = _0x4d05cc.parent.name;
            return _0x3a4b7a;
          }),
          _0x14a974 = _0x591016.roles.filter(_0x2b471c => _0x2b471c.name !== '@everyone').sort(function (_0x429992, _0x2c902d) {
            return _0x429992.position - _0x2c902d.position;
          }).array().map(_0x27ffb2 => {
            const _0x747b06 = {
              'name': _0x27ffb2.name,
              'color': _0x27ffb2.color,
              'hoist': _0x27ffb2.hoist,
              'permissions': _0x27ffb2.permissions,
              'mentionable': _0x27ffb2.mentionable,
              'position': _0x27ffb2.position
            };
            return _0x747b06;
          });
        if (!_0x129df3[_0x4170bd.author.id]) _0x129df3[_0x4170bd.author.id] = {};
        _0x129df3[_0x4170bd.author.id][_0x499688] = {
          'icon': _0x591016.iconURL,
          'name': _0x591016.name,
          'owner': _0x591016.ownerID,
          'members': _0x591016.memberCount,
          'createdAt': _0x591016.createdAt,
          'roles': _0x14a974,
          'channels': _0x140ab7
        }, _0x26c72d();
        let _0x3b7692 = new _0x497609().setTitle(_0x31bebf + '  Info').setDescription('Created backup of **' + _0x591016.name + '** with the Backup id `' + _0x499688 + '`').addField('Usage', '```x!backup load ' + _0x499688 + '```\n  ```x!backup info ' + _0x499688 + '```').setColor('#5DBCD2').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
        ;
        _0x4170bd.edit(_0x19a110(_0x3b7692));
      });
    }
    if (_0x4170bd.channel.type === 'dm' && !_0x4170bd.content.includes('PM')) return _0x4170bd.channel.send(_0x19a110(_0x55f8c8));
    if (_0x4170bd.author.bot) return _0x4170bd.channel.send(_0x19a110(_0x4d20a3));
    if (_0x2b47be[1] === 'create' || _0x2b47be[1] === 'c') {
      await _0x4170bd.guild.roles.filter(_0x1266e8 => _0x1266e8.name !== _0x4170bd.guild.member(_0x4f4b97.user.id).highestRole.name).forEach(_0x3050bb => {
        if (_0x3050bb.comparePositionTo(_0x4170bd.guild.member(_0x4f4b97.user.id).highestRole) > 0) {
          let _0x16a4f1 = new _0x497609().setTitle(_0x320e24 + '  Warning').setDescription('The Xenon Role Is Not The Highest Role In The Server , This May Cause Some Errors When Loading The Backup. !\n                            \n                            [Support](https://discord.link/hap)').setColor('#a11616').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
          ;
          return _0x4170bd.edit(_0x19a110(_0x16a4f1));
        }
      });
      let _0x32b445 = new _0x497609().setTitle(_0x5a7a7b + '  Please wait ...').setDescription('Creating backup ... Please wait').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
      ;
      _0x4170bd.edit(_0x19a110(_0x32b445)).then(_0x37868c => {
        let _0x253db7 = _0x34b630(16);
        const _0x28fe32 = _0x4170bd.guild.channels.sort(function (_0x319d91, _0xcb5b4e) {
            return _0x319d91.position - _0xcb5b4e.position;
          }).array().map(_0x49949f => {
            const _0x5360ea = {
              'type': _0x49949f.type,
              'name': _0x49949f.name,
              'postion': _0x49949f.calculatedPosition
            };
            if (_0x49949f.parent) _0x5360ea.parent = _0x49949f.parent.name;
            return _0x5360ea;
          }),
          _0x4f99c4 = _0x4170bd.guild.roles.filter(_0x3d0b99 => _0x3d0b99.name !== '@everyone').sort(function (_0x94263c, _0x41a459) {
            return _0x94263c.position - _0x41a459.position;
          }).array().map(_0x134c8c => {
            const _0x2b9fdb = {
              'name': _0x134c8c.name,
              'color': _0x134c8c.color,
              'hoist': _0x134c8c.hoist,
              'permissions': _0x134c8c.permissions,
              'mentionable': _0x134c8c.mentionable,
              'position': _0x134c8c.position
            };
            return _0x2b9fdb;
          });
        if (!_0x129df3[_0x4170bd.author.id]) _0x129df3[_0x4170bd.author.id] = {};
        _0x129df3[_0x4170bd.author.id][_0x253db7] = {
          'icon': _0x4170bd.guild.iconURL,
          'name': _0x4170bd.guild.name,
          'owner': _0x4170bd.guild.ownerID,
          'members': _0x4170bd.guild.memberCount,
          'createdAt': _0x4170bd.guild.createdAt,
          'roles': _0x4f99c4,
          'channels': _0x28fe32
        }, _0x26c72d();
        let _0x38552 = new _0x497609().setTitle(_0x31bebf + '  Info').setDescription('Created backup of **' + _0x4170bd.guild.name + '** with the Backup id `' + _0x253db7 + '`').addField('Usage', '```x!backup load ' + _0x253db7 + '```\n```x!backup info ' + _0x253db7 + '```').setColor('#5DBCD2').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
        ;
        _0x4170bd.edit(_0x19a110(_0x38552));
      });
    }
    if (_0x2b47be[1] === 'delete') {
      let _0x132169 = _0x2b47be[2],
        _0x1c1613 = new _0x497609().setTitle(_0x1771d9 + '  Error').setDescription('You forgot to define the argument backup_id. Use x!help backup load for more information.\n[Support](https://discord.link/hap)').setColor('#a11616').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
      if (!_0x132169) return _0x4170bd.channel.send(_0x19a110(_0x1c1613));
      let _0x5efd20 = new _0x497609().setTitle(_0x1771d9 + '  Error').setTitle('You have no backup with the id ' + _0x132169 + '.').setDescription('\n[Support](https://discord.link/hap)').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setColor('#a11616');
      if (!_0x129df3[_0x4170bd.author.id][_0x132169]) return _0x4170bd.channel.send(_0x19a110(_0x5efd20));
      delete _0x129df3[_0x4170bd.author.id][_0x132169], _0x26c72d();
      let _0x31b388 = new _0x497609().setTitle(_0xe20cc7 + '  Voila!').setDescription('Successfully **deleted backup**.').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setColor('#59C57B');
      _0x4170bd.channel.send(_0x19a110(_0x31b388));
    }
    if (_0x2b47be[1] === 'load' || _0x2b47be[1] === 'l') {
      let _0x1f9f89 = _0x4f4b97.emojis.get('655704809483141141') || '❌',
        _0x28cdf7 = _0x2b47be[2],
        _0x4e9b27 = new _0x497609().setTitle(_0x1f9f89 + '  Error').setDescription('You forgot to define the argument backup_id. Use x!help backup load for more information.\n[Support](https://discord.link/hap)');
      if (!_0x28cdf7) return _0x4170bd.channel.send(_0x19a110(_0x4e9b27));
      let _0x59f02c = new _0x497609().setTitle(_0x1f9f89 + '  Error').setTitle('You have no backup with the id ' + _0x28cdf7 + '.').setDescription('[Support](https://discord.link/hap)').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setColor('#a11616');
      if (!_0x129df3[_0x4170bd.author.id][_0x28cdf7]) return _0x4170bd.channel.send(_0x19a110(_0x59f02c)).catch(_0x322542 => {});
      _0x4170bd.guild.channels.forEach(_0x55efb0 => {
        _0x55efb0.delete('For Loading A Backup HAP').catch(_0x55f12e => {});
      });
      let _0xe28df7 = 1000;
      _0x4170bd.guild.roles.filter(_0x56d4ca => _0x56d4ca.members.every(_0x2d8bec => !_0x2d8bec.user.bot)).forEach(_0x4a381f => {
        _0x4a381f.managed === false && _0x4a381f.delete('For Loading A Backup HAP').catch(_0x32d406 => {});
      }), await _0x129df3[_0x4170bd.author.id][_0x28cdf7].roles.forEach(async function (_0x3f7344) {
        _0xe28df7 = _0xe28df7 + 1000, setTimeout(() => {
          _0x4170bd.guild.createRole({
            'name': _0x3f7344.name,
            'color': _0x3f7344.color,
            'permissions': _0x3f7344.permissions,
            'hoist': _0x3f7344.hoist,
            'mentionable': _0x3f7344.mentionable,
            'position': _0x3f7344.position
          }).then(_0xef7e99 => {
            _0xef7e99.setPosition(_0xef7e99.position).catch(_0x53bd29 => {});
          }).catch(_0x53e251 => {});
        }, _0xe28df7);
      }), await _0x129df3[_0x4170bd.author.id][_0x28cdf7].channels.filter(_0x3700e3 => _0x3700e3.type === 'category').forEach(async function (_0x38e574) {
        _0x4170bd.guild.createChannel(_0x38e574.name, {
          'type': _0x38e574.type,
          'permissionOverwrites': _0x38e574.permissionOverwrites
        }).catch(_0x31b6e4 => {});
      }), await _0x129df3[_0x4170bd.author.id][_0x28cdf7].channels.filter(_0x3e2517 => _0x3e2517.type !== 'category').forEach(async function (_0x15f759) {
        _0x4170bd.guild.createChannel(_0x15f759.name, {
          'type': _0x15f759.type,
          'permissionOverwrites': _0x15f759.permissionOverwrites
        }).then(_0x3117d4 => {
          const _0x20eebd = _0x4170bd.guild.channels.filter(_0x4b788c => _0x4b788c.type === 'category').find(_0x23bc5b => _0x23bc5b.name === _0x15f759.parent);
          _0x15f759.parent ? _0x3117d4.setParent(_0x20eebd).catch(_0x43405c => {}) : '';
        }).catch(_0xd874b1 => {});
      }), _0x4170bd.guild.setName(_0x129df3[_0x4170bd.author.id][_0x28cdf7].name).catch(_0x38322e => {}), _0x4170bd.guild.setIcon(_0x129df3[_0x4170bd.author.id][_0x28cdf7].icon).catch(_0x3c9bf9 => {});
    }
    if (_0x2b47be[1] === 'info' || _0x2b47be[1] === 'i') {
      let _0xa7889c = _0x2b47be[2],
        _0x181722 = new _0x497609().setTitle(_0x1771d9 + '  Error').setDescription('You forgot to define the argument **backup_id**. Use `x!help backup info` for more information   \n                    [Support](https://discord.link/hap)').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setColor('#a11616');
      if (!_0xa7889c) return _0x4170bd.edit(_0x19a110(_0x181722));
      let _0x20ce34 = new _0x497609().setTitle(_0x1771d9 + '  Error').setDescription('You have **no backup** with the id `' + _0xa7889c + '`.\n                "[Support](https://discord.link/hap)').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setColor('#a11616');
      if (!_0x129df3[_0x4170bd.author.id][_0xa7889c]) return _0x4170bd.edit(_0x19a110(_0x20ce34));
      try {
        let _0x2204dd = new _0x497609().setTitle(_0x129df3[_0x4170bd.author.id][_0xa7889c].name).setThumbnail(_0x129df3[_0x4170bd.author.id][_0xa7889c].icon).addField('Creator', '<@' + _0x129df3[_0x4170bd.author.id][_0xa7889c].owner + '>', true).addField('Members', _0x129df3[_0x4170bd.author.id][_0xa7889c].members, true).addField('Created At', _0x129df3[_0x4170bd.author.id][_0xa7889c].createdAt).addField('Channels', '```' + _0x129df3[_0x4170bd.author.id][_0xa7889c].channels.map(_0x15c576 => _0x15c576.name).join('\n') + '```', true).addField('Roles', '```' + _0x129df3[_0x4170bd.author.id][_0xa7889c].roles.map(_0x1f3229 => _0x1f3229.name).join('\n') + '```', true);
        _0x4170bd.edit(_0x19a110(_0x2204dd));
      } catch (_0x201304) {
        _0x1f62af(_0x129df3[_0x4170bd.author.id][_0xa7889c].channels.map(_0x22cec2 => _0x22cec2.name).join('\n'), 'txt').then(_0x23e388 => {
          _0x1f62af(_0x129df3[_0x4170bd.author.id][_0xa7889c].roles.map(_0x234ab9 => _0x234ab9.name).join('\n'), 'txt').then(_0xe2b6de => {
            let _0x3c26fb = new _0x497609().setTitle(_0x129df3[_0x4170bd.author.id][_0xa7889c].name).setThumbnail(_0x129df3[_0x4170bd.author.id][_0xa7889c].icon).addField('Creator', '<@' + _0x129df3[_0x4170bd.author.id][_0xa7889c].owner + '>', true).addField('Members', _0x129df3[_0x4170bd.author.id][_0xa7889c].members, true).addField('Created At', _0x129df3[_0x4170bd.author.id][_0xa7889c].createdAt).addField('Channels', _0x23e388, true).addField('Roles', _0xe2b6de, true).setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
            _0x4170bd.edit(_0x19a110(_0x3c26fb));
          });
        });
      }
    }
    if (_0x2b47be[1] === 'purge') {
      delete _0x129df3[_0x4170bd.author.id], _0x5b98b6.writeFileSync('./Data/backups.json', JSON.stringify(_0x129df3, null, 2));
      let _0x3c8ee0 = new _0x497609().setTitle(_0xe20cc7 + '  Voila!').setDescription('Deleted all your backups.').setColor('#59C57B').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
      _0x4170bd.edit(_0x19a110(_0x3c8ee0));
    }
    if (_0x2b47be[1] === 'list') {
      let _0x252c3b = 0,
        _0x45b8e3 = Object.keys(_0x129df3)[0];
      if (!_0x45b8e3) return _0x4170bd.edit(_0x19a110('No backup'));
      let _0x4f1682 = [],
        _0x4b49d3 = 'lol ';
      for (let _0x136088 = 0; _0x136088 <= 1000; _0x136088++) {
        let _0x119fa5 = Object.keys(_0x129df3[_0x45b8e3])[_0x136088],
          _0x22066e = _0x129df3[_0x45b8e3][_0x119fa5];
        _0x119fa5 && !'lol '.includes(_0x119fa5) && (_0x4b49d3 = _0x4b49d3 + _0x119fa5 + ' ', _0x4f1682.push('\n' + _0x22066e.name + ' : `' + _0x119fa5 + '`')), !_0x119fa5 && (_0x252c3b++, Object.keys(_0x129df3)[_0x252c3b] && (_0x45b8e3 = Object.keys(_0x129df3)[_0x252c3b]));
      }
      const _0x24d4ec = new _0x50d5f6.RichEmbed().setAuthor(_0x4170bd.author.username, _0x4170bd.author.avatarURL).setColor('RANDOM').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩').setDescription('__Backup list:__\n' + _0x4f1682).setTimestamp().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
      _0x4170bd.edit(_0x19a110(_0x24d4ec));
    }
    if (!_0x2b47be[1]) {
      const _0x4519d5 = new _0x497609().setTitle('**x!backup**\n\nCreate & load backups of your servers\n\n__**Commands**__\n').setDescription('\n                x!backup create\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Create a backup\n                x!backup PMcreate\u2002\u2002\u2002\u2002\u2002\u2002Create a backup in private channel (DM) with ID of guild\n                x!backup delete\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Delete one of your backups\n                x!backup info\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Get information about a backup\n                x!backup list\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Get a list of your backups\n                x!backup load\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Load a backup\n                x!backup purge\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Delete all your backups').addBlankField().setFooter('Use `x!help [command]` for more info on a command.\nYou can also use `x!help [category]` for more info on a category.').setColor('#5DBCD2');
      _0x4170bd.edit(_0x19a110(_0x4519d5));
      return;
    }
    function _0x34b630(_0x3518e0) {
      var _0x3f77eb = '',
        _0x4e54e7 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
      for (var _0x5ebae8 = 0; _0x5ebae8 < _0x3518e0; _0x5ebae8++) {
        _0x3f77eb += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * _0x4e54e7));
      }
      return _0x3f77eb;
    }
    function _0x26c72d() {
      _0x5b98b6.writeFile('./Data/backups.json', JSON.stringify(_0x129df3), _0x2b837a => {
        if (_0x2b837a) console.error(_0x2b837a);
      });
    }
  } catch (_0x5de5af) {
    throw _0x5de5af;
  }
  if (_0x2f9712 === 'help') try {
    if (!_0x2b47be[1]) {
      let _0x1ef409 = new _0x497609().setTitle('__**Creating**__').setDescription('\n        \n        __**Security**__\n        \n        **x!backup**\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Create & load backups of your servers\n        \n        __**Others**__\n        \n        **x!help**\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Shows this message\n        **x!info**\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Get Information about Xenon\n  \n        ').setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩, Use `**x!help [command]` for more info on a command.\n        You can also use `**x!help [category]` for more info on a category.').setColor('#5DBCD2');
      _0x4170bd.edit(_0x19a110(_0x1ef409));
      return;
    }
    if (_0x2b47be[1] === 'backup') {
      const _0x44aa48 = new _0x497609().setTitle('**x!backup**\n\nCreate & load backups of your servers\n\n__**Commands**__\n').setDescription('\n            x!backup create\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Create a backup\n            x!backup delete\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Delete one of your backups\n            x!backup info\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Get information about a backup\n            x!backup list\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Get a list of your backups\n            x!backup load\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Load a backup\n            x!backup purge\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 Delete all your backups').addBlankField().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩, Use `x!help [command]` for more info on a command.\nYou can also use `x!help [category]` for more info on a category.').setColor('#5DBCD2');
      _0x4170bd.edit(_0x19a110(_0x44aa48));
    }
    if (_0x2b47be[1] === 'help') {
      let _0x167c7f = new _0x497609().setTitle('**x!help [command]**').setDescription('Shows this message').addBlankField().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩, Use `x!help [command]` for more info on a command.\nYou can also use `x!help [category]` for more info on a category.').setColor('#5DBCD2');
      _0x4170bd.edit(_0x19a110(_0x167c7f));
    }
    if (_0x2b47be[1] === 'info') {
      let _0x5cf89a = new _0x497609().setTitle('**x!info**').setDescription('Get Information about Xenon').addBlankField().setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩, Use `x!help [command]` for more info on a command.\nYou can also use `x!help [category]` for more info on a category.').setColor('#5DBCD2');
      _0x4170bd.edit(_0x19a110(_0x5cf89a));
    }
  } catch (_0x3c71c7) {
    throw _0x3c71c7;
  }
  if (_0x2f9712 === 'info') try {
    let _0x1ab017 = new _0x497609().setTitle('**Xenon**').setThumbnail('https://cdn.discordapp.com/avatars/416358583220043796/8f702ebf579bce2d7a6f0a4419ac5faf.webp?size=1024').setDescription('Server Backups, Templates and more').addField('Discord', '[Click Here](https://discord.link/hap)').addField('Prefix', _0x8b75cf.backupprefix, true).addField('Guilds', _0x4f4b97.guilds.size, true).addField('Users:', _0x4f4b97.users.size, true).setFooter('𝙃𝘼𝙋 𝙎𝙚𝙡𝙛𝙗𝙤𝙩');
    _0x4170bd.edit(_0x19a110(_0x1ab017));
  } catch (_0x153274) {
    throw _0x153274;
  }
}), process.on('uncaughtException', function (_0x1c3d22) {
  console.log(_0x1c3d22);
});
function _0x19a110(_0xda70d8) {
  if (_0xda70d8 instanceof _0x50d5f6.RichEmbed) {
    let _0x478c90 = '';
    _0x478c90 += '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n';
    if (_0xda70d8.title) {
      _0x478c90 += '' + _0xda70d8.title;
    }
    if (_0xda70d8.description) {
      _0x478c90 += '\n' + _0xda70d8.description;
    }
    if (_0xda70d8.author) {
      if (_0xda70d8.author?.['name']['includes']('*')) _0x478c90 += '\n' + _0xda70d8.author?.['name'];else {
        _0x478c90 += '\n\n*' + _0xda70d8.author?.['name'] + '*';
      }
    }
    if (_0xda70d8.fields) {
      _0xda70d8.fields.forEach(_0x3e5a71 => {
        _0x478c90 += '\n' + _0x3e5a71.name + '  ' + _0x3e5a71.value;
      });
    }
    if (_0xda70d8.thumbnail && _0x8b75cf.thumbnailcmd) {
      _0x478c90 += '\n' + _0xda70d8.thumbnail.url;
    }
    if (_0xda70d8.image?.['url'] && !_0xda70d8.thumbnail?.['url'] && _0x8b75cf.thumbnailcmd) {
      _0x478c90 += '\n' + _0xda70d8.image?.['url'];
    }
    if (_0xda70d8.footer && _0xda70d8.footer.text) {
      if (_0xda70d8.footer.text.includes('*')) _0x478c90 += '\n' + _0xda70d8.footer.text;else {
        _0x478c90 += '\n*' + _0xda70d8.footer.text + '*';
      }
    }
    return _0x478c90 += '\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀', _0x478c90;
  } else {
    if (typeof _0xda70d8 === 'string') return _0xda70d8;else {
      return 'Error embed';
    }
  }
}
module.exports = {
  'embedtostring': _0x19a110
};