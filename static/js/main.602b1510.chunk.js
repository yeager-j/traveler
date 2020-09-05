(this.webpackJsonptraveller=this.webpackJsonptraveller||[]).push([[0],{127:function(e,t,a){e.exports=a(206)},132:function(e,t,a){},133:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),i=a.n(o),s=(a(132),a(133),a(212)),h=a(69),l=a(42),c=a(209),d=a(87),u=a.n(d),m=a(40),g=a(64),f=Object(g.b)({name:"time",initialState:{hour:7,day:1,season:"spring"},reducers:{setHour:function(e,t){e.hour=t.payload},incrementHour:function(e){24===e.hour+1?(e.hour=0,e.day++):e.hour++},setDay:function(e,t){e.day=t.payload},incrementDay:function(e){e.day++},setSeason:function(e,t){e.season=t.payload},incrementSeason:function(e){switch(e.season){case"spring":e.season="summer";break;case"summer":e.season="fall";break;case"fall":e.season="winter";break;case"winter":e.season="spring"}}}}),y=f.actions,p=(y.setHour,y.incrementHour),w=(y.setDay,y.incrementDay,y.setSeason,y.incrementSeason),b=f.reducer,v=a(208),k=a(207),T=a(213),E=a(211),j=function(e){return e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()},O=function(){var e,t=Object(m.b)(),a=Object(m.c)((function(e){return e.time}));return n.a.createElement("div",{className:u.a.TravelerTime},n.a.createElement(v.a.Paragraph,{strong:!0,style:{marginBottom:0}},j(a.season)),n.a.createElement(v.a.Title,{style:{marginTop:0}},0===(e=a.hour)?"12:00am":e>0&&e<12?"".concat(e,":00am"):12===e?"12:00pm":e>12?"".concat(e-12,":00pm"):"",n.a.createElement(k.a,{className:u.a.DividerStyle,type:"vertical"}),"Day ",a.day),n.a.createElement(T.b,null,n.a.createElement(E.a,{type:"primary",onClick:function(){t(p())}},"Advance Time"),n.a.createElement(E.a,{type:"primary",onClick:function(){t(w())}},"Advance Season")))},A=a(34),C=function(){var e=Object(r.useState)("Type your notes here..."),t=Object(A.a)(e,2),a=t[0],o=t[1];return n.a.createElement("div",null,n.a.createElement(v.a.Paragraph,{editable:{onChange:o}},a))},S=a(83),D=a(114),x=new S.Chance,P={hostile:1,neutral:4,feature:1},q={1:"A group of 1D6 bandits, lying concealed in wait to waylay travellers on the road.",2:"A wagon train of 2D6 Dwarves who are hostile to non-Dwarves (seeming merely irritable to their own kind), they have little interest in talking because they are carrying the body of a slain hero home. Attempts to delay or question them will be met with hostility and possibly an attack.",3:"A group of 1D6 thieves who poses as traders or travelling bards to ingratiate themselves with the PCs but\u2013given a chance\u2013they will incapacitate and rob them, leaving them lying by the roadside bereft of possessions.",4:"A group of 2D6 goblins who are starving, they are looking to scavenge from a local settlement, but are not above attacking an enemy they believe that they can defeat.",5:"A great beast that has been rampaging through the local area, menacing villages and causing a hazard to travel. The beast is a huge/dire version of a normal animal as appropriate for the terrain type, how the animal got so big and why it is taking out it's aggression on the locals is up to the GM.",6:"A hostile group of 2D6 Elves who claim guardianship of a nearby natural feature, they take a dim view of outsiders, viewing them as despoilers and corruptors of nature.",7:"A group of 2D6 evil humanoids who are on a mission for their dark master, if the PCs defeat them then they will gain XP and random loot as normal. This is good opportunity for GMs to drop in items that hint at the identity of the humanoid's master and can serve as a way to introduce a new villainous mastermind to a campaign.",8:"A small pack of 1D6+2 dogs that escaped from their homes and have gone feral.",9:"A huge troll that makes it's lair under a local bridge, it charges all those who pass 1D6 gold pieces as a toll, attacking those who refuse.",10:"A mob of torch-wielding people from a local settlement, they are chasing a mutant, a suspected witch or just someone they don't like very much with the intent of burning them alive for some crime real or imagined (as determined by the GM).",11:"A brutish, inbred Ogre who is part of a tribe inhabiting the hills or mountains nearby, previously they have herded goats and caused little trouble, but a strange blight has killed their herds and now they take to raiding the nearby lowland settlements for food and other items.",12:"A group of 2D6 orcs lurking in nearby hills or forest, they are preparing to attack a nearby settlement once the sun goes down."},z={1:"A troupe of wandering troubadours and bards who are travelling the land performing plays and looking for stories and legends to add to their repertoire. If the PCs make friendly contact with them there is a 50% chance that the troupe will have heard a legend about any noteworthy beast or location (as determined by the GM).",2:"A woodsman returning from a nearby forest to his home in a local village, there is a 2-in-6 chance that he can point the player party in the direction of healing herbs or some such.",3:"A small group of dodgy, scruffy looking geezers pushing a barely working wheelbarrow piled high with various ramshackle goods and items. There is a 50% chance that the PCs will find any basic equipment they want if they search the cart and they will get it half-price. However there is a 50% chance the first time that the item is used that it breaks due to poor construction or lack of care, there is also a 1-in-6 chance any item purchased is stolen.",4:"A small group of children fishing in a creek, they have caught 1D4 rations worth of fish that they maybe willing to share with the PCs if they ingratiate themselves (as determined by the GM).",5:"A group of merchants that have been beset by hostile forces (if you wish you can roll on Table 2 to determine the nature of the hostile forces) whilst moving along a local trade route, when they meet the PCs they are fleeing with their enemies close behind them. If the PCs help the merchants then they will receive a 25% discount on any wares that they purchase from them (what the traders have is determined by the GM).",6:"A young couple from a nearby village engaged in a secret tryst, if approached by the PCs they are embarrassed and worried about what their parents will say. In return for the PCs silence they will be able to give them the low-down on important NPCs in their home village.",7:"A wealthy trade caravan of merchants and exotic spice dealers with an entourage of guards and mercenaries to protect them. There is a 4-in-6 chance that the caravan will have any basic equipment that the PC requests, and a 2-in-6 chance that the caravan has an exotic items they request (final say on this rests with the GM), however any exotic items will cost 25% more than the listed price due to their fine quality of workmanship.",8:"A farmer returning from his fields with a barrow full of fresh produce (1D6 rations worth), if the PCs are friendly then he may be willing to barter items for his produce (although he has little use for coin).",9:"A local farmer is taking their sheep, goats or cows (equal chance of either) to a nearby market, they are accompanied by 1D6 young girls and boys who help them manage the herd. The farmer will not be interested in selling his animals - since he knows he'll get a better price at market - but can supply the PCs with all the rumours from nearby villages (as determined by the GM).",10:"A group of local children mock-fighting each other with sticks, wearing old pans and bits of bark as make-shift armour. If the PCs are friendly to them then they'll be able to point them in the direction of the nearest village.",11:"A group of 1D6 woodsmen and rangers who are on the trail of some sort of dangerous beast that has been menacing the nearby settlements. Some of their number were killed in a recent encounter with the beast, they will happily share any rewards and glory with PCs who help them bring the monster down.",12:"A noble caravan, it has become stuck in the mud and one of it's wheels has broken. If the PCs are able to repair the wagon or escort the nobles to their destination they will receive a reward of 2D6*10 gold pieces.",13:"The party comes upon a long line of hooded figures. They move slowly, swaying side to side with their hand folded in front of them, and frequently looking skyward. If the party asks what is happening, the figures will respond that they are on a holy pilgrimage for a local deity. They will also describe miracles that they have witnessed personally, and try and convince the party to join them, at least until the next town where there is a renowned prophet who is expected to perform more miracles.",14:"An old man shuffles down the road, followed a few paces back by about a dozen people eagerly watching his every move. As the party passes, the man collapses and begins convulsing, and the other travelers surge up and surround him. The party can hear through the excited whispers of the other travelers the old man chanting in Abyssal.",15:"A minstrel and two flag bearers are stopped on the road up ahead, along with about a dozen soldiers. The party recognizes them as bearing the crest of a large, well-known kingdom. The minstrel will stop the party and ask them if they had considered joining the local military \u201cfor the defense of this fair land from her enemies\u201d. If the party refuses, the soldiers will step forward and the minstrel will ask again, reminding them that all they need to do is sign this agreement that says they will serve in the future. Whatever the players do from this point, they will face consequences next time they return.",16:"An overturned cart lies next to the road up ahead. As the players pass it, small rocks come flying out of various holes in the cart. The rocks are small enough that they don\u2019t do any damage and are an annoyance at most. After a few seconds of the barrage, a young child\u2019s voice yells out from under the cart \u201cGive us all your stuff or we won\u2019t stop!\u201d",17:"A flock of crows clusters around something up ahead accompanied the shouts of a young woman. As the party approaches, the crows fly off to reveal the corpse of a woman, half-decayed, clutching a stone chest. The small engravings on the chest depict a beautiful woman's face with striking red hair. A green light animates from within the chest along with the voice of the young woman, who thanks the party for scaring off the crows. The voice will deny that anything is unusual and seems unaware that it has no body and can\u2019t move, insisting instead that she\u2019s just tired and needs to rest for a while before continuing her journey.",18:"A calico cat comes wandering down the road. It stops as the party passes and meows/hisses at them loudly. It will follow them around, constantly trying to get the party\u2019s attention; rubbing legs, climbing in backpacks, and scratching up valuable magic items. The cat is actually another traveler who has been polymorphed, who needs to be \u201ckilled\u201d for the spell to end.",19:"A gnome saunters down the road ahead, carrying under his arm a cage with a chicken inside of it. The gnome appears to be chatting with the chicken until he notices the party, with whom he will engage in friendly conversation. The gnome will quickly turn the subject to his chicken if the party doesn\u2019t. According to the gnome \u201cOld Dan\u2019l\u201d can match any animal in the fighting ring, and if the party has any familiars he will offer to set up a fight, with betting of course.",20:"An awful smell wafts up from around a bend in the road. As the party follows it, they find a large, abhorrent corpse curled up on the road; something with black blood and too many limbs. The party also notices sickening sounds of gnawing and slurping coming from the corpse as they approach. Edging around the corpse, the party finds the noise is coming from what looks like a small girl, smeared with black visceral juices, and apparently eating the corpse. If the party confronts her, she will tell them that she won\u2019t share with anyone, no matter how hungry they say they are.",21:"A loud thumping is heard from up ahead, and the party can feel the earth rumble beneath their feet. Shortly after the party spots the source, a stone giant plodding down the path. The giant is oddly dressed though, clad in bright colors and flamboyant styles. If the party gets his attention, the giant will ask if they have seen Haakon (\u201ca very loud small one like yourself\u201d). The giant will look despondent when the party says they haven\u2019t but will offer to show them his talent anyway. If the party says yes, the giant will look around briefly before picking up three of the party members and start juggling them.",22:"The party come across a large river, too wide and swift to swim across safely. Fortunately, just downstream there are two ferrymen right next to each other, each with their own boat and willing to take the party across. As the party approaches, the ferrymen will both enthusiastically offer their services, but shortly begin arguing with one another. After a little bit, it becomes clear the ferrymen will do almost anything to win the party over to their side, as not many travelers come this way and they are both close to penniless due to the competition.",23:"The party hears some low growls and snarls coming from off the road up ahead. Investigating the noise leads the party to an owlbear (or some other suitable animal) caught with its leg in a hunting trap. The owlbear will growl at the party, but it clearly has been here for a while and is in a weakened state. As the party is debating what to do, a man in outlander garb appears. He looks at the party in shock for a second, but then shouts \u201cThieves! Get out of here, this one\u2019s mine!\u201d",24:"A small cart, piled high with stuff, moves down the road towards the party. As the party gets closer, the cart will stop and a merchant will rush out to greet the party. He eagerly offers his wares, but most of it is worthless junk (\u201ccombination hookah and coffee maker -- also makes julienne fries\u201d) and horribly overpriced. The merchant will do everything in his power to get the party to stay and buy something, and even if they leave he will follow them, still trying to get a sale.",25:"A rhythmic, grinding, sliding sound echoes from the path ahead. Moving toward the noise, the party finds a heavily damaged stone golem dragging itself along the road. The golem has been reduced to just a single arm but is determined to move ahead. It will answer the party\u2019s questions with single-word answers, saying it\u2019s been \u201ccalled,\u201d but it won\u2019t stop even while talking.",26:"The sun has set, and as the party is looking for a spot to make camp, they see a lone villager walking down the road. He is carrying a large sack over his shoulder and is so preoccupied with nervously looking over his shoulder he doesn\u2019t notice the party until they are quite close. Once the party reaches him, he will anxiously try to get through them and deflects any questions, with varying degrees of success. The party does notice that there is a foul smell coming from his sack and the villager never stops looking over his shoulder.",27:"The party hears the sound of someone singing up ahead, but can\u2019t quite make out the words. Once the party gets closer, they see a brightly festooned bard skipping down the path, singing loudly to himself. After listening to a few verses, the party realizes that he is singing about them; their heroic deeds and other exploits. However, he is also singing about things that he has no right to know (a party member\u2019s secret backstory, unsavory things the party did and tried to cover up, etc.).",28:"Rounding a corner, the party finds that the narrow path has been completely blocked. A huge silver dragon is snoozing right in the middle of the path, it\u2019s stomach clearly bloated with the dragon\u2019s latest meal. If the dragon is woken by the party (intentionally or unintentionally), she will immediately apologize for the inconvenience, but reveals that she is too full to move.",29:"Shouts come from up ahead on the road. The party runs to investigate and find themselves facing a tense standoff between two identical-looking young men. They both have their swords drawn and are slowly circling each other while a young woman clutching two small children watches nervously. One says he was returning from a business trip when he found his doppelganger leading his family away; the other says he returned early from that trip to save his family from the danger he discovered they were in.",30:"As the party approaches a bend in the road, a carriage suddenly comes careening around the corner at tremendous speed. Spotting the party too late, the driver tries to swerve away but ends up losing traction and causing the carriage to topple over. Immediately after the crash, the driver gets up off the ground, draws his sword, and quickly runs to put himself between the shocked party and the downed carriage. \u201cStay back!\u201d he says, \u201cDon\u2019t come any closer!\u201d Between the shouts of the driver, the party can hear a multitude of whispers coming from the carriage."},I={1:"A huge cairn of stones carved with strange symbols rises from the nearby landscape, it is either a marker or the burial place of some forgotten hero (equal chance of each).",2:"A farmer's hut and a field groaning with produce, however the cabin seems to have been abandoned and all possessions\u2013save the produce in the field\u2013taken. PCs may freely take a total of 2D6 days worth of rations from the field, however there is a 50% chance that the produce is infected with a blight, consumption of blighted rations causes the PC to vomit for 1D4 damage.",3:"A single mighty tree rises from the ground here, it is many hundreds of years old and has millennia of carvings covering it's trunk. Some of these carvings may hint at local history or lore.",4:"Large worn slabs of stone bearing faint markings attest to this area having once been used as a graveyard, however it is long abandoned and extremely overgrown, but their may be underground tombs and grave goods in the area (as determined by the GM).",5:"The remnants of what must have once been a village cover this area, it seems as though it burnt down some time ago, although there may still be the odd item (or danger) lurking amidst the charred ruins.",6:"A mighty Oak whose trunk appears to have the pattern of a face visible in the lines and cracks of it's bark. Local legend says that when the whole land was once covered by a huge forest, great creatures, caretakers of the natural world moved across the land caring for the trees. With the coming of man they slept, but are best avoided lest they wake and be roused to furious anger.",7:"A crooked stone tower rises at a jaunty angle into the sky, the barely-visible roof is missing a number of slates, their smashed remnants litter the ground around it. The tower belongs to an eccentric sage, reclusive hermit or tormented prophet (equal chance of each).",8:"Pillars of rock rising from the ground, years ago primitive people carved homes in these huge pillars before some event caused them to abandon their rocky homes.",9:"The remnants of what must have been an expensive cart lie just off the road here, there are 1D6 skeletons and the long-dead bodies of the horses scattered nearby. Examination of the cart results in finding 1D6 gold pieces and a miscellaneous lesser piece of equipment, along with clues that the cart was waylaid\u2013and the occupants murdered\u2013by bandits.",10:"A tree with nooses hanging from the branches, local settlements use this tree to execute criminals who have committed capital crimes, when not in use the place has an evil reputation and is avoided.",11:"A great stone circle has been erected here, whether as some sort of solar calendar or as a means of communing with the gods it is not clear, but locals either revered the place and worship there or whisper of it as haunted and avoid it entirely (equal chance of each).",12:"A rocky outcropping that vaguely resembles a huge, sleeping humanoid. Local villagers say that it is a giant who once menaced these parts before he was forced into an eternal slumber by a great and powerful sorcerer."};var M=a(210),H=function(){var e=Object(m.c)((function(e){return e.time})),t=function(){var e=Object(r.useState)(Object.values(q)),t=Object(A.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(Object.values(z)),i=Object(A.a)(o,2),s=i[0],h=i[1],l=Object(r.useState)(Object.values(I)),c=Object(A.a)(l,2),d=c[0],u=c[1],m=Object(r.useCallback)((function(){return x.weighted(Object.keys(P),Object.values(P))}),[]),g=Object(r.useCallback)((function(e){for(var t=e,a=0,r=Array.from(e.matchAll(/(\d+)?d(\d+)([+-]\d+)?/gi));a<r.length;a++){var n=r[a],o=Object(A.a)(n,1)[0],i=D.roll(o.toLowerCase());t=t.replace(o,i)}return t}),[]),f=Object(r.useCallback)((function(){var e=x.natural({min:0,max:a.length-1}),t=a[e];return n((function(e){return e.filter((function(e){return e!==t}))})),0===a.length&&n(Object.values(q)),g("[Hostile] ".concat(t))}),[a,g]),y=Object(r.useCallback)((function(){var e=x.natural({min:0,max:s.length-1}),t=s[e];return h((function(e){return e.filter((function(e){return e!==t}))})),0===s.length&&h(Object.values(z)),g("[Neutral] ".concat(t))}),[s,g]),p=Object(r.useCallback)((function(){var e=x.natural({min:0,max:d.length-1}),t=d[e];return u((function(e){return e.filter((function(e){return e!==t}))})),0===d.length&&u(Object.values(I)),g("[Feature] ".concat(t))}),[d,g]),w=Object(r.useCallback)((function(){switch(m()){case"hostile":return f();case"neutral":return y();case"feature":return p();default:return""}}),[f,y,p,m]),b=Object(r.useCallback)((function(){return 1===x.d20()?f():"Nothing eventful happens."}),[f]);return{generateEncounter:Object(r.useCallback)((function(){return 1===x.d10()?w():"Nothing eventful happens."}),[w]),generateNightEncounter:b,forceEncounter:w,forceHostileEncounter:f,forceNeutralEncounter:y,forceFeatureEncounter:p}}(),a=t.generateEncounter,o=t.generateNightEncounter,i=t.forceEncounter,s=t.forceHostileEncounter,h=t.forceNeutralEncounter,l=t.forceFeatureEncounter,c=Object(r.useState)(),d=Object(A.a)(c,2),u=d[0],g=d[1],f=Object(r.useState)(),y=Object(A.a)(f,2),p=y[0],w=y[1],b=Object(r.useState)("random"),k=Object(A.a)(b,2),j=k[0],O=k[1];Object(r.useEffect)((function(){p!==e.hour&&(e.hour<7||e.hour>22?g(o()):g(a()),w(e.hour))}),[e,p,a,o]);var C=Object(r.useCallback)((function(){switch(j){case"random":g(i());break;case"hostile":g(s());break;case"neutral":g(h());break;case"feature":g(l())}}),[i,s,h,l,j]),S=Object(r.useCallback)((function(e){O(e)}),[]);return n.a.createElement("div",null,n.a.createElement(v.a.Paragraph,null,u),n.a.createElement(T.b,null,n.a.createElement(M.a,{defaultValue:"random",onChange:S},n.a.createElement(M.a.Option,{value:"random"},"Random"),n.a.createElement(M.a.Option,{value:"hostile"},"Hostile"),n.a.createElement(M.a.Option,{value:"neutral"},"Neutral"),n.a.createElement(M.a.Option,{value:"feature"},"Feature")),n.a.createElement(E.a,{type:"primary",danger:!0,onClick:C},"Force Encounter")))},N={clear:36,cloudy:14,rain:7,storm:2,snow:0,blizzard:0,tornado:1},W={clear:44,cloudy:8,rain:3,storm:3,snow:0,blizzard:0,tornado:2},G={clear:44,cloudy:11,rain:4,storm:1,snow:0,blizzard:0,tornado:0},F={clear:36,cloudy:14,rain:2,storm:1,snow:6,blizzard:1,tornado:0},L=new S.Chance;var _=function(){var e=Object(m.c)((function(e){return e.time})),t=function(){var e=Object(r.useCallback)((function(e){return L.weighted(Object.keys(e),Object.values(e))}),[]),t=Object(r.useCallback)((function(e,t){return Math.floor(e+Math.random()*t*(Math.random()>.5?-1:1))}),[]);return{generateWeather:Object(r.useCallback)((function(a){switch(a.season){case"spring":return{weatherType:e(N),temperature:t(65,20),windSpeed:t(12,6)};case"summer":return{weatherType:e(W),temperature:t(80,15),windSpeed:t(8,4)};case"fall":return{weatherType:e(G),temperature:t(60,20),windSpeed:t(10,5)};case"winter":var r=e(F);return{weatherType:r,temperature:"snow"===r||"blizzard"===r?Math.min(32,t(40,20)):t(40,20),windSpeed:t(10,5)}}}),[t,e])}}().generateWeather,a=Object(r.useState)(),o=Object(A.a)(a,2),i=o[0],s=o[1],h=Object(r.useState)(),l=Object(A.a)(h,2),c=l[0],d=l[1],u=Object(r.useCallback)((function(){s(t(e))}),[t,e]);return Object(r.useEffect)((function(){(void 0===c||c!==e.hour&&e.hour%6===0)&&(u(),d(e.hour))}),[e,u,c]),n.a.createElement("div",null,n.a.createElement(v.a.Paragraph,null,n.a.createElement(v.a.Text,{strong:!0},"Weather Conditions: "),n.a.createElement(v.a.Text,null,j((null===i||void 0===i?void 0:i.weatherType)||""))),n.a.createElement(v.a.Paragraph,null,n.a.createElement(v.a.Text,{strong:!0},"Temperature: "),n.a.createElement(v.a.Text,null,null===i||void 0===i?void 0:i.temperature,"\xb0F")),n.a.createElement(v.a.Paragraph,null,n.a.createElement(v.a.Text,{strong:!0},"Wind Speed: "),n.a.createElement(v.a.Text,null,null===i||void 0===i?void 0:i.windSpeed,"mph")),n.a.createElement(E.a,{type:"primary",danger:!0,onClick:u},"Force Change"))},B=a(84),J=s.a.Header,R=s.a.Content,K=s.a.Footer;var U=function(){var e=Object(m.c)((function(e){return e.time})),t=Object(B.useThemeSwitcher)(),a=t.switcher,o=t.status,i=t.themes;return Object(r.useEffect)((function(){a({theme:e.hour<6||e.hour>20?i.dark:i.light})}),[e,a,i]),"loading"===o?null:n.a.createElement(s.a,{className:"layout"},n.a.createElement(J,null,n.a.createElement("div",{className:"logo"},"Traveler")),n.a.createElement(R,{style:{padding:"50px"}},n.a.createElement(h.a,{gutter:16},n.a.createElement(l.a,{span:10,offset:7},n.a.createElement(c.a,null,n.a.createElement(O,null)))),n.a.createElement(h.a,{gutter:16,style:{marginTop:10}},n.a.createElement(l.a,{span:8},n.a.createElement(c.a,{title:"Weather"},n.a.createElement(_,null))),n.a.createElement(l.a,{span:8},n.a.createElement(c.a,{title:"Encounters"},n.a.createElement(H,null))),n.a.createElement(l.a,{span:8},n.a.createElement(c.a,{title:"Notes"},n.a.createElement(C,null))))),n.a.createElement(K,{style:{textAlign:"center"}},"Traveler by Jackson Yeager"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(37),X=Object(g.b)({name:"weather",initialState:{weatherType:"clear",temperature:70,windSpeed:0},reducers:{setWeatherType:function(e,t){e.weatherType=t.payload},setTemperature:function(e,t){e.temperature=t.payload},setWindSpeed:function(e,t){e.windSpeed=t.payload}}}),Y=X.actions,$=(Y.setWeatherType,Y.setTemperature,Y.setWindSpeed,X.reducer),Q=Object(V.c)({time:b,weather:$}),Z=Object(g.a)({reducer:Q}),ee={dark:"".concat("/traveler","/dark-theme.css"),light:"".concat("/traveler","/light-theme.css")};i.a.render(n.a.createElement(m.a,{store:Z},n.a.createElement(B.ThemeSwitcherProvider,{themeMap:ee,defaultTheme:"light",insertionPoint:"styles-insertion-point"},n.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports={TravelerTime:"TravelerTime_TravelerTime__3MK4e",DividerStyle:"TravelerTime_DividerStyle__3n9SL"}}},[[127,1,2]]]);
//# sourceMappingURL=main.602b1510.chunk.js.map