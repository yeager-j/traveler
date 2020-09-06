(this.webpackJsonptraveller=this.webpackJsonptraveller||[]).push([[0],{107:function(e,t,a){e.exports={TravelerTime:"TravelerTime_TravelerTime__3MK4e",DividerStyle:"TravelerTime_DividerStyle__3n9SL"}},145:function(e,t,a){e.exports=a(226)},150:function(e,t,a){},151:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),s=a.n(o),i=(a(150),a(52)),l=(a(151),a(229)),h=a(103),c=a(77),m=a(44),d=a(230),u=a(107),g=a.n(u),p=a(37),f=a(72),y=Object(f.b)({name:"time",initialState:{hour:7,day:1,season:"spring"},reducers:{setHour:function(e,t){e.hour=t.payload},incrementHour:function(e){24===e.hour+1?(e.hour=0,e.day++):e.hour++},setDay:function(e,t){e.day=t.payload},incrementDay:function(e){e.day++},setSeason:function(e,t){e.season=t.payload},incrementSeason:function(e){switch(e.season){case"spring":e.season="summer";break;case"summer":e.season="fall";break;case"fall":e.season="winter";break;case"winter":e.season="spring"}}}}),w=y.actions,b=w.setHour,v=w.incrementHour,k=w.setDay,E=(w.incrementDay,w.setSeason),x=w.incrementSeason,T=y.reducer,j=a(232),A=a(228),O=a(234),P=function(e){return e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()},C=function(e){return Math.floor((e-10)/2)},S=function(){var e,t=Object(p.b)(),a=Object(p.c)((function(e){return e.time}));return n.a.createElement("div",{className:g.a.TravelerTime},n.a.createElement(j.a.Paragraph,{strong:!0,style:{marginBottom:0}},P(a.season)),n.a.createElement(j.a.Title,{style:{marginTop:0}},0===(e=a.hour)?"12:00am":e>0&&e<12?"".concat(e,":00am"):12===e?"12:00pm":e>12?"".concat(e-12,":00pm"):"",n.a.createElement(A.a,{className:g.a.DividerStyle,type:"vertical"}),"Day ",a.day),n.a.createElement(O.b,null,n.a.createElement(h.a,{type:"primary",onClick:function(){t(v())}},"Advance Time"),n.a.createElement(h.a,{type:"primary",onClick:function(){t(x())}},"Advance Season")))},_=a(70),N=a.n(_),z=new _.Chance,I={hostile:1,neutral:4,feature:1},M={1:{text:"A group of 1d6 bandits, lying concealed in wait to waylay travellers on the road.",metadata:{monsters:["bandit"]}},2:{text:"A wagon train of 2d6 Duergar who are hostile to non-Dwarves (seeming merely irritable to their own kind), they have little interest in talking because they are carrying the body of a slain hero home. Attempts to delay or question them will be met with hostility and possibly an attack.",metadata:{monsters:["duergar"]}},3:{text:"A group of 1d6 thieves who poses as traders or travelling bards to ingratiate themselves with the PCs but\u2013given a chance\u2013they will incapacitate and rob them, leaving them lying by the roadside bereft of possessions.",metadata:{monsters:["bandit"]}},4:{text:"A group of 2d6 goblins who are starving, they are looking to scavenge from a local settlement, but are not above attacking an enemy they believe that they can defeat.",metadata:{monsters:["goblin"]}},5:{text:"A pack of 1d4 Dire Wolves have been rampaging through the local area, menacing villages and causing a hazard to travel. How the animals got so big and why it is taking out it's aggression on the locals is up to the GM.",metadata:{monsters:["dire-wolf"]}},6:{text:"A hostile group of 2d6 Elves who claim guardianship of a nearby natural feature, they take a dim view of outsiders, viewing them as despoilers and corruptors of nature.",metadata:{monsters:["scout"]}},7:{text:"A group of 2d6 evil humanoids who are on a mission for their dark master, if the PCs defeat them then they will gain XP and random loot as normal. This is good opportunity for GMs to drop in items that hint at the identity of the humanoid's master and can serve as a way to introduce a new villainous mastermind to a campaign.",metadata:{monsters:["cultist","thug","cult-fanatic"]}},8:{text:"A small pack of 1d6+2 dogs that escaped from their homes and have gone feral.",metadata:{monsters:["wolf"]}},9:{text:"A huge troll that makes it's lair under a local bridge, it charges all those who pass 1d6 gold pieces as a toll, attacking those who refuse.",metadata:{monsters:["troll"]}},10:{text:"A mob of 2d12 torch-wielding people from a local settlement are chasing a mutant, a suspected witch or just someone they don't like very much with the intent of burning them alive for some crime real or imagined (as determined by the GM).",metadata:{monsters:["commoner"]}},11:{text:"A brutish, inbred Ogre who is part of a tribe inhabiting the hills or mountains nearby, previously they have herded goats and caused little trouble, but a strange blight has killed their herds and now they take to raiding the nearby lowland settlements for food and other items.",metadata:{monsters:["ogre"]}},12:{text:"A group of 2d6 orcs lurking in nearby hills or forest, they are preparing to attack a nearby settlement once the sun goes down.",metadata:{monsters:["orc"]}}},D={1:{text:"A troupe of wandering troubadours and bards who are travelling the land performing plays and looking for stories and legends to add to their repertoire. If the PCs make friendly contact with them there is a 50% chance that the troupe will have heard a legend about any noteworthy beast or location (as determined by the GM).",metadata:{monsters:[]}},2:{text:"A woodsman returning from a nearby forest to his home in a local village, there is a 2-in-6 chance that he can point the player party in the direction of healing herbs or some such.",metadata:{monsters:[]}},3:{text:"A small group of dodgy, scruffy looking geezers pushing a barely working wheelbarrow piled high with various ramshackle goods and items. There is a 50% chance that the PCs will find any basic equipment they want if they search the cart and they will get it half-price. However there is a 50% chance the first time that the item is used that it breaks due to poor construction or lack of care, there is also a 1-in-6 chance any item purchased is stolen.",metadata:{monsters:[]}},4:{text:"A small group of children fishing in a creek, they have caught 1d4 rations worth of fish that they maybe willing to share with the PCs if they ingratiate themselves (as determined by the GM).",metadata:{monsters:[]}},5:{text:"A group of merchants that have been beset by hostile forces (if you wish you can roll on Table 2 to determine the nature of the hostile forces) whilst moving along a local trade route, when they meet the PCs they are fleeing with their enemies close behind them. If the PCs help the merchants then they will receive a 25% discount on any wares that they purchase from them (what the traders have is determined by the GM).",metadata:{monsters:[]}},6:{text:"A young couple from a nearby village engaged in a secret tryst, if approached by the PCs they are embarrassed and worried about what their parents will say. In return for the PCs silence they will be able to give them the low-down on important NPCs in their home village.",metadata:{monsters:[]}},7:{text:"A wealthy trade caravan of merchants and exotic spice dealers with an entourage of guards and mercenaries to protect them. There is a 4-in-6 chance that the caravan will have any basic equipment that the PC requests, and a 2-in-6 chance that the caravan has an exotic items they request (final say on this rests with the GM), however any exotic items will cost 25% more than the listed price due to their fine quality of workmanship.",metadata:{monsters:[]}},8:{text:"A farmer returning from his fields with a barrow full of fresh produce (1d6 rations worth), if the PCs are friendly then he may be willing to barter items for his produce (although he has little use for coin).",metadata:{monsters:[]}},9:{text:"A local farmer is taking their sheep, goats or cows (equal chance of either) to a nearby market, they are accompanied by 1d6 young girls and boys who help them manage the herd. The farmer will not be interested in selling his animals - since he knows he'll get a better price at market - but can supply the PCs with all the rumours from nearby villages (as determined by the GM).",metadata:{monsters:[]}},10:{text:"A group of local children mock-fighting each other with sticks, wearing old pans and bits of bark as make-shift armour. If the PCs are friendly to them then they'll be able to point them in the direction of the nearest village.",metadata:{monsters:[]}},11:{text:"A group of 1d6 woodsmen and rangers who are on the trail of some sort of dangerous beast that has been menacing the nearby settlements. Some of their number were killed in a recent encounter with the beast, they will happily share any rewards and glory with PCs who help them bring the monster down.",metadata:{monsters:[]}},12:{text:"A noble caravan, it has become stuck in the mud and one of it's wheels has broken. If the PCs are able to repair the wagon or escort the nobles to their destination they will receive a reward of 2d6*10 gold pieces.",metadata:{monsters:[]}},13:{text:"The party comes upon a long line of hooded figures. They move slowly, swaying side to side with their hand folded in front of them, and frequently looking skyward. If the party asks what is happening, the figures will respond that they are on a holy pilgrimage for a local deity. They will also describe miracles that they have witnessed personally, and try and convince the party to join them, at least until the next town where there is a renowned prophet who is expected to perform more miracles.",metadata:{monsters:[]}},14:{text:"An old man shuffles down the road, followed a few paces back by about a dozen people eagerly watching his every move. As the party passes, the man collapses and begins convulsing, and the other travelers surge up and surround him. The party can hear through the excited whispers of the other travelers the old man chanting in Abyssal.",metadata:{monsters:[]}},15:{text:"A minstrel and two flag bearers are stopped on the road up ahead, along with about a dozen soldiers. The party recognizes them as bearing the crest of a large, well-known kingdom. The minstrel will stop the party and ask them if they had considered joining the local military \u201cfor the defense of this fair land from her enemies\u201d. If the party refuses, the soldiers will step forward and the minstrel will ask again, reminding them that all they need to do is sign this agreement that says they will serve in the future. Whatever the players do from this point, they will face consequences next time they return.",metadata:{monsters:[]}},16:{text:"An overturned cart lies next to the road up ahead. As the players pass it, small rocks come flying out of various holes in the cart. The rocks are small enough that they don\u2019t do any damage and are an annoyance at most. After a few seconds of the barrage, a young child\u2019s voice yells out from under the cart \u201cGive us all your stuff or we won\u2019t stop!\u201d",metadata:{monsters:[]}},17:{text:"A flock of crows clusters around something up ahead accompanied the shouts of a young woman. As the party approaches, the crows fly off to reveal the corpse of a woman, half-decayed, clutching a stone chest. The small engravings on the chest depict a beautiful woman's face with striking red hair. A green light animates from within the chest along with the voice of the young woman, who thanks the party for scaring off the crows. The voice will deny that anything is unusual and seems unaware that it has no body and can\u2019t move, insisting instead that she\u2019s just tired and needs to rest for a while before continuing her journey.",metadata:{monsters:[]}},18:{text:"A calico cat comes wandering down the road. It stops as the party passes and meows/hisses at them loudly. It will follow them around, constantly trying to get the party\u2019s attention; rubbing legs, climbing in backpacks, and scratching up valuable magic items. The cat is actually another traveler who has been polymorphed, who needs to be \u201ckilled\u201d for the spell to end.",metadata:{monsters:[]}},19:{text:"A gnome saunters down the road ahead, carrying under his arm a cage with a chicken inside of it. The gnome appears to be chatting with the chicken until he notices the party, with whom he will engage in friendly conversation. The gnome will quickly turn the subject to his chicken if the party doesn't. According to the gnome \u201cOld Dan\u2019l\u201d can match any animal in the fighting ring, and if the party has any familiars he will offer to set up a fight, with betting of course.",metadata:{monsters:[]}},20:{text:"An awful smell wafts up from around a bend in the road. As the party follows it, they find a large, abhorrent corpse curled up on the road; something with black blood and too many limbs. The party also notices sickening sounds of gnawing and slurping coming from the corpse as they approach. Edging around the corpse, the party finds the noise is coming from what looks like a small girl, smeared with black visceral juices, and apparently eating the corpse. If the party confronts her, she will tell them that she won\u2019t share with anyone, no matter how hungry they say they are.",metadata:{monsters:[]}},21:{text:"A loud thumping is heard from up ahead, and the party can feel the earth rumble beneath their feet. Shortly after the party spots the source, a stone giant plodding down the path. The giant is oddly dressed though, clad in bright colors and flamboyant styles. If the party gets his attention, the giant will ask if they have seen Haakon (\u201ca very loud small one like yourself\u201d). The giant will look despondent when the party says they haven\u2019t but will offer to show them his talent anyway. If the party says yes, the giant will look around briefly before picking up three of the party members and start juggling them.",metadata:{monsters:[]}},22:{text:"The party come across a large river, too wide and swift to swim across safely. Fortunately, just downstream there are two ferrymen right next to each other, each with their own boat and willing to take the party across. As the party approaches, the ferrymen will both enthusiastically offer their services, but shortly begin arguing with one another. After a little bit, it becomes clear the ferrymen will do almost anything to win the party over to their side, as not many travelers come this way and they are both close to penniless due to the competition.",metadata:{monsters:[]}},23:{text:"The party hears some low growls and snarls coming from off the road up ahead. Investigating the noise leads the party to an owlbear (or some other suitable animal) caught with its leg in a hunting trap. The owlbear will growl at the party, but it clearly has been here for a while and is in a weakened state. As the party is debating what to do, a man in outlander garb appears. He looks at the party in shock for a second, but then shouts \u201cThieves! Get out of here, this one\u2019s mine!\u201d",metadata:{monsters:[]}},24:{text:"A small cart, piled high with stuff, moves down the road towards the party. As the party gets closer, the cart will stop and a merchant will rush out to greet the party. He eagerly offers his wares, but most of it is worthless junk (\u201ccombination hookah and coffee maker -- also makes julienne fries\u201d) and horribly overpriced. The merchant will do everything in his power to get the party to stay and buy something, and even if they leave he will follow them, still trying to get a sale.",metadata:{monsters:[]}},25:{text:"A rhythmic, grinding, sliding sound echoes from the path ahead. Moving toward the noise, the party finds a heavily damaged stone golem dragging itself along the road. The golem has been reduced to just a single arm but is determined to move ahead. It will answer the party\u2019s questions with single-word answers, saying it\u2019s been \u201ccalled,\u201d but it won\u2019t stop even while talking.",metadata:{monsters:[]}},26:{text:"The party sees a lone villager walking down the road. He is carrying a large sack over his shoulder and is so preoccupied with nervously looking over his shoulder he doesn't notice the party until they are quite close. Once the party reaches him, he will anxiously try to get through them and deflects any questions, with varying degrees of success. The party does notice that there is a foul smell coming from his sack and the villager never stops looking over his shoulder.",metadata:{monsters:[]}},27:{text:"The party hears the sound of someone singing up ahead, but can\u2019t quite make out the words. Once the party gets closer, they see a brightly festooned bard skipping down the path, singing loudly to himself. After listening to a few verses, the party realizes that he is singing about them; their heroic deeds and other exploits. However, he is also singing about things that he has no right to know (a party member\u2019s secret backstory, unsavory things the party did and tried to cover up, etc.).",metadata:{monsters:[]}},28:{text:"Rounding a corner, the party finds that the narrow path has been completely blocked. A huge silver dragon is snoozing right in the middle of the path, it\u2019s stomach clearly bloated with the dragon\u2019s latest meal. If the dragon is woken by the party (intentionally or unintentionally), she will immediately apologize for the inconvenience, but reveals that she is too full to move.",metadata:{monsters:[]}},29:{text:"Shouts come from up ahead on the road. The party runs to investigate and find themselves facing a tense standoff between two identical-looking young men. They both have their swords drawn and are slowly circling each other while a young woman clutching two small children watches nervously. One says he was returning from a business trip when he found his doppelganger leading his family away; the other says he returned early from that trip to save his family from the danger he discovered they were in.",metadata:{monsters:[]}},30:{text:"As the party approaches a bend in the road, a carriage suddenly comes careening around the corner at tremendous speed. Spotting the party too late, the driver tries to swerve away but ends up losing traction and causing the carriage to topple over. Immediately after the crash, the driver gets up off the ground, draws his sword, and quickly runs to put himself between the shocked party and the downed carriage. \u201cStay back!\u201d he says, \u201cDon\u2019t come any closer!\u201d Between the shouts of the driver, the party can hear a multitude of whispers coming from the carriage.",metadata:{monsters:[]}}},H={1:{text:"A huge cairn of stones carved with strange symbols rises from the nearby landscape, it is either a marker or the burial place of some forgotten hero (equal chance of each).",metadata:{monsters:[]}},2:{text:"A farmer's hut and a field groaning with produce, however the cabin seems to have been abandoned and all possessions\u2013save the produce in the field\u2013taken. PCs may freely take a total of 2d6 days worth of rations from the field, however there is a 50% chance that the produce is infected with a blight, consumption of blighted rations causes the PC to vomit for 1d4 damage.",metadata:{monsters:[]}},3:{text:"A single mighty tree rises from the ground here, it is many hundreds of years old and has millennia of carvings covering it's trunk. Some of these carvings may hint at local history or lore.",metadata:{monsters:[]}},4:{text:"Large worn slabs of stone bearing faint markings attest to this area having once been used as a graveyard, however it is long abandoned and extremely overgrown, but their may be underground tombs and grave goods in the area (as determined by the GM).",metadata:{monsters:[]}},5:{text:"The remnants of what must have once been a village cover this area, it seems as though it burnt down some time ago, although there may still be the odd item (or danger) lurking amidst the charred ruins.",metadata:{monsters:[]}},6:{text:"A mighty Oak whose trunk appears to have the pattern of a face visible in the lines and cracks of it's bark. Local legend says that when the whole land was once covered by a huge forest, great creatures, caretakers of the natural world moved across the land caring for the trees. With the coming of man they slept, but are best avoided lest they wake and be roused to furious anger.",metadata:{monsters:[]}},7:{text:"A crooked stone tower rises at a jaunty angle into the sky, the barely-visible roof is missing a number of slates, their smashed remnants litter the ground around it. The tower belongs to an eccentric sage, reclusive hermit or tormented prophet (equal chance of each).",metadata:{monsters:[]}},8:{text:"Pillars of rock rising from the ground, years ago primitive people carved homes in these huge pillars before some event caused them to abandon their rocky homes.",metadata:{monsters:[]}},9:{text:"The remnants of what must have been an expensive cart lie just off the road here, there are 1d6 skeletons and the long-dead bodies of the horses scattered nearby. Examination of the cart results in finding 1d6 gold pieces and a miscellaneous lesser piece of equipment, along with clues that the cart was waylaid\u2013and the occupants murdered\u2013by bandits.",metadata:{monsters:[]}},10:{text:"A tree with nooses hanging from the branches, local settlements use this tree to execute criminals who have committed capital crimes, when not in use the place has an evil reputation and is avoided.",metadata:{monsters:[]}},11:{text:"A great stone circle has been erected here, whether as some sort of solar calendar or as a means of communing with the gods it is not clear, but locals either revered the place and worship there or whisper of it as haunted and avoid it entirely (equal chance of each).",metadata:{monsters:[]}},12:{text:"A rocky outcropping that vaguely resembles a huge, sleeping humanoid. Local villagers say that it is a giant who once menaced these parts before he was forced into an eternal slumber by a great and powerful sorcerer.",metadata:{monsters:[]}}},q={text:"Nothing eventful happens.",metadata:{monsters:[]}};var W=a(61),L=a(233),F=a(64),G=a.n(F),R=a(143),B=a(231),J=a(235),V=a(33),X=a.n(V),K=a(236),U=function(){return n.a.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"810",height:"1em",width:"1em"},n.a.createElement("defs",null,n.a.createElement("style",{type:"text/css"})),n.a.createElement("path",{d:"M245.490241 430.114422L34.392979 741.890379c-6.15992 9.99987 0.199997 22.999702 11.859846 24.279685l416.514598 44.139427-217.277182-380.195069zM46.812818 630.851819L197.390865 386.154992 44.112853 294.196185c-5.339931-3.199959-12.119843 0.639992-12.119843 6.859911v325.615777c0 8.059895 10.579863 11.059857 14.819808 4.179946zM68.492537 847.189013l388.794957 175.317726c10.599863 4.899936 22.699706-2.859963 22.699706-14.519811v-131.338297l-407.09472-44.599422c-8.899885-0.999987-12.459838 11.179855-4.399943 15.139804z m162.437893-515.553314L390.788357 45.759407c8.679887-14.119817-7.179907-30.499604-21.559721-22.279712L67.612548 220.697138c-4.939936 3.239958-4.779938 10.519864 0.259997 13.559824l163.057885 97.378737zM511.986785 351.995435h218.417167L539.246432 15.239802C532.986513 5.079934 522.486649 0 511.986785 0s-20.999728 5.079934-27.259646 15.239802L293.569618 351.995435H511.986785z m467.873932-57.79925l-153.278012 91.978807 150.578047 244.696826c4.219945 6.879911 14.819808 3.87995 14.819808-4.199945V301.056096c0-6.219919-6.779912-10.05987-12.119843-6.859911z m-186.817577 37.439514l163.057885-97.398737c5.059934-3.039961 5.199933-10.319866 0.259997-13.559824l-301.616088-197.197443c-14.379814-8.219893-30.239608 8.159894-21.559721 22.279712l159.857927 285.876292z m158.037951 500.41351L543.98637 876.628631v131.338297c0 11.679849 12.099843 19.419748 22.699706 14.519812l388.794958-175.317727c8.059895-3.939949 4.499942-16.119791-4.399943-15.119804z m-172.597762-401.934787l-217.257182 380.195069 416.514598-44.139427c11.659849-1.299983 18.019766-14.279815 11.859846-24.279685L778.483329 430.114422zM511.986785 415.994605H311.12939L511.986785 767.490047 712.84418 415.994605H511.986785z","p-id":"811"}))},Y=function(e){return n.a.createElement(K.a,Object.assign({component:U},e))},$=function(e){var t=e.monster,a={STR:t.strength_save,DEX:t.dexterity_save,CON:t.constitution_save,INT:t.intelligence_save,WIS:t.wisdom_save,CHA:t.charisma_save},r=Object.keys(a).filter((function(e){return a[e]}));return n.a.createElement(n.a.Fragment,null,r.length>0&&n.a.createElement(j.a.Text,{strong:!0},"Saving Throws "),r.map((function(e,t){var o=e;return n.a.createElement(j.a.Text,{key:t},e," +",a[o],r.length-1!==t?", ":"")})))},Q=function(e){var t=e.ability,a=e.score,r=C(a),o=r>=0?"+".concat(r):r;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(j.a.Paragraph,{style:{marginBottom:0},strong:!0},t),n.a.createElement(j.a.Paragraph,{style:{marginBottom:0}},a," (",o,")"))},Z=function(e){var t=Object(r.useState)(),a=Object(i.a)(t,2),o=a[0],s=a[1];return Object(r.useEffect)((function(){var t=function(e){var t=!1;return{promise:new Promise((function(a,r){e.then((function(e){return t?r({isCanceled:!0}):a(e)}),(function(e){return r(t?{isCanceled:!0}:e)}))})),cancel:function(){t=!0}}}(fetch("https://api.open5e.com/monsters/".concat(e.monster)));return t.promise.then((function(e){return e.json()})).then(s).catch(console.error),function(){t.cancel()}}),[e]),n.a.createElement(d.a,{loading:!o,style:{marginTop:20,backgroundColor:"#F8F2D5"}},o&&n.a.createElement(n.a.Fragment,null,n.a.createElement(B.a,{title:o.name,subTitle:"".concat(o.size," ").concat(o.type,", ").concat(o.alignment),tags:n.a.createElement(J.a,{color:"red"},"CR ",o.challenge_rating),extra:[n.a.createElement(h.a,{key:1,type:"primary",target:"_blank",href:"https://www.dndbeyond.com/monsters/".concat(o.slug)},"D&D Beyond")]},n.a.createElement(c.a,{gutter:16},n.a.createElement(m.a,{span:12},n.a.createElement("hr",null),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Armor Class")," ",o.armor_class," (",o.armor_desc,")"),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Hit Points")," ",o.hit_points," (",o.hit_dice,")"),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Speed")," ",o.speed.walk," ft.",o.speed.fly&&", fly ".concat(o.speed.fly," ft."),o.speed.swim&&", swim ".concat(o.speed.swim," ft.")),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Roll Initiative!")," +",C(o.dexterity)),n.a.createElement("hr",null),n.a.createElement(c.a,null,n.a.createElement(m.a,{span:4},n.a.createElement(Q,{ability:"STR",score:o.strength})),n.a.createElement(m.a,{span:4},n.a.createElement(Q,{ability:"DEX",score:o.dexterity})),n.a.createElement(m.a,{span:4},n.a.createElement(Q,{ability:"CON",score:o.constitution})),n.a.createElement(m.a,{span:4},n.a.createElement(Q,{ability:"INT",score:o.intelligence})),n.a.createElement(m.a,{span:4},n.a.createElement(Q,{ability:"WIS",score:o.wisdom})),n.a.createElement(m.a,{span:4},n.a.createElement(Q,{ability:"CHA",score:o.charisma}))),n.a.createElement("hr",null),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement($,{monster:o})),Object.keys(o.skills).length>0&&n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Skills "),Object.keys(o.skills).map((function(e,t){return n.a.createElement(j.a.Text,{key:t},P(e)," +",null===o||void 0===o?void 0:o.skills[e],Object.keys(o.skills).length-1!==t?", ":"")}))),o.damage_immunities&&n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Damage Immunities "),n.a.createElement(j.a.Text,null,P(o.damage_immunities))),o.damage_resistances&&n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Damage Resistances "),n.a.createElement(j.a.Text,null,P(o.damage_resistances))),o.damage_vulnerabilities&&n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Damage Vulnerabilities "),n.a.createElement(j.a.Text,null,P(o.damage_vulnerabilities))),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Senses "),n.a.createElement(j.a.Text,null,o.senses.split(" ").map(P).join(" "))),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Languages "),n.a.createElement(j.a.Text,null,o.languages.split(" ").map(P).join(" "))),n.a.createElement("hr",null),Array.isArray(o.special_abilities)&&o.special_abilities.map((function(e,t){return n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph,key:t},n.a.createElement(j.a.Text,{strong:!0},e.name," "),n.a.createElement(j.a.Text,null,e.desc))})),Array.isArray(o.legendary_actions)&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",null),n.a.createElement(j.a.Title,{level:4},"Legendary Actions"),n.a.createElement(j.a.Paragraph,null,n.a.createElement("i",null,o.legendary_desc)),o.legendary_actions.map((function(e,t){return n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph,key:t},n.a.createElement(j.a.Text,{strong:!0},e.name,". "),n.a.createElement(j.a.Text,null,e.desc))})))),n.a.createElement(m.a,{span:12},n.a.createElement(j.a.Title,{level:4},"Actions"),o.actions.map((function(e,t){return n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph,key:t},n.a.createElement(j.a.Text,{strong:!0},e.name,". "),n.a.createElement(j.a.Text,null,e.desc))})),n.a.createElement(O.b,null,o.actions.filter((function(e){return e.damage_dice})).map((function(e,t){return n.a.createElement(h.a,{danger:!0,onClick:function(){return function(e){if(e.damage_dice){var t=+F.roll("d20"),a=t+(e.attack_bonus||0),r=(20===t?+F.roll(e.damage_dice)+ +F.roll(e.damage_dice):+F.roll(e.damage_dice))+(e.damage_bonus||0),o=n.a.createElement("div",null,n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Attack Roll: "),a),n.a.createElement(j.a.Paragraph,{className:X.a.monsterParagraph},n.a.createElement(j.a.Text,{strong:!0},"Damage Roll: "),20===t&&"Critical Hit! ",r," damage."));R.a.open({message:"Attack Roll for ".concat(P(e.name)),description:o})}}(e)},key:t},n.a.createElement(Y,null),P(e.name))}))))))))},ee=new N.a.Chance,te=function(){var e=Object(p.c)((function(e){return e.time})),t=function(){var e=Object(r.useCallback)((function(){return z.weighted(Object.keys(I),Object.values(I))}),[]),t=Object(r.useCallback)((function(){var e=z.natural({min:1,max:Object.keys(M).length});return M[e]}),[]),a=Object(r.useCallback)((function(){var e=z.natural({min:1,max:Object.keys(D).length});return D[e]}),[]),n=Object(r.useCallback)((function(){var e=z.natural({min:1,max:Object.keys(M).length});return H[e]}),[]),o=Object(r.useCallback)((function(){switch(e()){case"hostile":return t();case"neutral":return a();case"feature":return n();default:return q}}),[t,a,n,e]),s=Object(r.useCallback)((function(){return 1===z.d20()?t():q}),[t]);return{generateEncounter:Object(r.useCallback)((function(){return 1===z.d10()?o():q}),[o]),generateNightEncounter:s,forceEncounter:o,forceHostileEncounter:t,forceNeutralEncounter:a,forceFeatureEncounter:n}}(),a=t.generateEncounter,o=t.generateNightEncounter,s=t.forceEncounter,l=t.forceHostileEncounter,c=t.forceNeutralEncounter,m=t.forceFeatureEncounter,d=Object(r.useState)(),u=Object(i.a)(d,2),g=u[0],f=u[1],y=Object(r.useState)(),w=Object(i.a)(y,2),b=w[0],v=w[1],k=Object(r.useState)("random"),E=Object(i.a)(k,2),x=E[0],T=E[1];Object(r.useEffect)((function(){b!==e.hour&&(e.hour<6||e.hour>20?f(o()):f(a()),v(e.hour))}),[e,b,a,o]);var A=Object(r.useCallback)((function(){if(!g)return null;var e=g.text.split(" ").map((function(e){return/(\d+)?d(\d+)([+-]\d+)?/gi.test(e)?n.a.createElement("span",{key:ee.guid()},n.a.createElement(W.a,{title:"Roll: "+G.a.roll(e.toLowerCase()).toString()},n.a.createElement(j.a.Text,{mark:!0},e))," "):n.a.createElement(j.a.Text,{key:ee.guid()},e+" ")}));return n.a.createElement(j.a.Paragraph,null,e)}),[g]),P=Object(r.useCallback)((function(){switch(x){case"random":f(s());break;case"hostile":f(l());break;case"neutral":f(c());break;case"feature":f(m())}}),[s,l,c,m,x]),C=Object(r.useCallback)((function(e){T(e)}),[]);return n.a.createElement("div",null,n.a.createElement(j.a.Paragraph,null,A()),n.a.createElement(O.b,null,n.a.createElement(L.a,{defaultValue:"random",onChange:C},n.a.createElement(L.a.Option,{value:"random"},"Random"),n.a.createElement(L.a.Option,{value:"hostile"},"Hostile"),n.a.createElement(L.a.Option,{value:"neutral"},"Neutral"),n.a.createElement(L.a.Option,{value:"feature"},"Feature")),n.a.createElement(h.a,{type:"primary",danger:!0,onClick:P},"Force Encounter")),g&&g.metadata.monsters.map((function(e){return n.a.createElement(Z,{monster:e,key:ee.guid()})})))},ae={clear:36,cloudy:14,rain:7,storm:2,snow:0,blizzard:0,tornado:1},re={clear:44,cloudy:8,rain:3,storm:3,snow:0,blizzard:0,tornado:2},ne={clear:44,cloudy:11,rain:4,storm:1,snow:0,blizzard:0,tornado:0},oe={clear:36,cloudy:14,rain:2,storm:1,snow:6,blizzard:1,tornado:0},se=new _.Chance;var ie=Object(f.b)({name:"weather",initialState:{weatherType:"clear",temperature:71,windSpeed:6},reducers:{setWeather:function(e,t){e.weatherType=t.payload.weatherType,e.temperature=t.payload.temperature,e.windSpeed=t.payload.windSpeed},setWeatherType:function(e,t){e.weatherType=t.payload},setTemperature:function(e,t){e.temperature=t.payload},setWindSpeed:function(e,t){e.windSpeed=t.payload}}}),le=ie.actions,he=le.setWeather,ce=(le.setWeatherType,le.setTemperature,le.setWindSpeed,ie.reducer),me=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.time})),a=Object(p.c)((function(e){return e.weather})),o=function(){var e=Object(r.useCallback)((function(e){return se.weighted(Object.keys(e),Object.values(e))}),[]),t=Object(r.useCallback)((function(e,t){return Math.floor(e+Math.random()*t*(Math.random()>.5?-1:1))}),[]);return{generateWeather:Object(r.useCallback)((function(a){switch(a.season){case"spring":return{weatherType:e(ae),temperature:t(65,20),windSpeed:t(12,6)};case"summer":return{weatherType:e(re),temperature:t(80,15),windSpeed:t(8,4)};case"fall":return{weatherType:e(ne),temperature:t(60,20),windSpeed:t(10,5)};case"winter":var r=e(oe);return{weatherType:r,temperature:"snow"===r||"blizzard"===r?Math.min(32,t(40,20)):t(40,20),windSpeed:t(10,5)}}}),[t,e])}}().generateWeather,s=Object(r.useCallback)((function(t){var a=o(t);e(he(a))}),[o,e]),i=Object(r.useCallback)((function(){s(t)}),[t,s]);return Object(r.useEffect)((function(){t.hour%6===0&&s(t)}),[t,s]),Object(r.useEffect)((function(){}),[t]),Object(r.useEffect)((function(){}),[s]),n.a.createElement("div",null,n.a.createElement(j.a.Paragraph,null,n.a.createElement(j.a.Text,{strong:!0},"Weather Conditions: "),n.a.createElement(j.a.Text,null,P(a.weatherType||""))),n.a.createElement(j.a.Paragraph,null,n.a.createElement(j.a.Text,{strong:!0},"Temperature: "),n.a.createElement(j.a.Text,null,a.temperature,"\xb0F")),n.a.createElement(j.a.Paragraph,null,n.a.createElement(j.a.Text,{strong:!0},"Wind Speed: "),n.a.createElement(j.a.Text,null,a.windSpeed,"mph")),n.a.createElement(h.a,{type:"primary",danger:!0,onClick:i},"Force Change"))},de=a(100),ue=l.a.Header,ge=l.a.Content,pe=l.a.Footer;var fe=function(){var e=Object(p.c)((function(e){return e.time})),t=Object(p.b)(),a=Object(de.useThemeSwitcher)(),o=a.switcher,s=a.status,u=a.themes,g=Object(r.useState)(!1),f=Object(i.a)(g,2),y=f[0],w=f[1],v=Object(r.useState)(!1),x=Object(i.a)(v,2),T=x[0],j=x[1],A=Object(r.useCallback)((function(){t(b(7)),t(k(1)),t(E("spring")),localStorage.removeItem("traveler-state")}),[t]);return Object(r.useEffect)((function(){o({theme:e.hour<6||e.hour>20?u.dark:u.light})}),[e,o,u]),Object(r.useEffect)((function(){w(!0),e.hour%6===0&&j(!0),setTimeout((function(){w(!1),j(!1)}),500)}),[e]),"loading"===s?null:n.a.createElement(l.a,{className:"layout"},n.a.createElement(ue,{className:"header"},n.a.createElement("div",{className:"logo"},"Traveler"),n.a.createElement("div",{style:{flex:1}}),n.a.createElement(h.a,{type:"primary",danger:!0,onClick:A},"Reset Time")),n.a.createElement(ge,{style:{padding:"50px"}},n.a.createElement(c.a,{gutter:16},n.a.createElement(m.a,{span:10,offset:7},n.a.createElement(d.a,null,n.a.createElement(S,null)))),n.a.createElement(c.a,{gutter:16,style:{marginTop:10}},n.a.createElement(m.a,{span:8},n.a.createElement(d.a,{title:"Weather",loading:T},n.a.createElement(me,null))),n.a.createElement(m.a,{span:16},n.a.createElement(d.a,{title:"Encounters",loading:y},n.a.createElement(te,null))))),n.a.createElement(pe,{style:{textAlign:"center"}},"Traveler by Jackson Yeager"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(39),we=Object(ye.c)({time:T,weather:ce}),be=localStorage.getItem("traveler-state"),ve=be?JSON.parse(be):{},ke=Object(f.a)({reducer:we,preloadedState:ve});ke.subscribe((function(){console.log("storing...",ke.getState()),localStorage.setItem("traveler-state",JSON.stringify(ke.getState()))}));var Ee={dark:"".concat("","/dark-theme.css"),light:"".concat("","/light-theme.css")};s.a.render(n.a.createElement(p.a,{store:ke},n.a.createElement(de.ThemeSwitcherProvider,{themeMap:Ee,defaultTheme:"light",insertionPoint:"styles-insertion-point"},n.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){e.exports={image:"MonsterCard_image__2wGeK",monsterParagraph:"MonsterCard_monsterParagraph__2rUyA"}}},[[145,1,2]]]);
//# sourceMappingURL=main.b2f4c312.chunk.js.map