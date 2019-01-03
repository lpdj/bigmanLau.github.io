window.__require=function t(n,e,i){function s(c,r){if(!e[c]){if(!n[c]){var a=c.split("/");if(a=a[a.length-1],!n[a]){var u="function"==typeof __require&&__require;if(!r&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+c+"'")}}var h=e[c]={exports:{}};n[c][0].call(h.exports,function(t){return s(n[c][1][t]||t)},h,h.exports,t,n,e,i)}return e[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<i.length;c++)s(i[c]);return s}({BackPackUI:[function(t,n,e){"use strict";cc._RF.push(n,"9a8ceQsgFBHyoYO0xwsWpOM","BackPackUI"),cc.Class({extends:cc.Component,properties:{scrollView:cc.ScrollView,totalCount:0,hero:cc.Prefab},onLoad:function(){this.init()},init:function(){this.heroSlots=[];for(var t=0;t<this.totalCount;t++){var n=this.addHeroSlot();this.heroSlots.push(n)}},addHeroSlot:function(){var t=cc.instantiate(this.hero);return this.scrollView.content.addChild(t),t},show:function(){this.node.active=!0,this.node.emit("fade-in")},hide:function(){this.node.emit("fade-out")},start:function(){}}),cc._RF.pop()},{}],ButtonScaler:[function(t,n,e){"use strict";cc._RF.push(n,"d61b4cyh0JA+4O2QUK04ilP","ButtonScaler"),cc.Class({extends:cc.Component,properties:{pressedScale:.8,transDuration:.1},onLoad:function(){var t=this.node.scale,n=cc.scaleTo(this.transDuration,this.pressedScale),e=cc.scaleTo(this.transDuration,t);function i(t){this.stopAllActions(),this.runAction(e)}this.node.on("touchstart",function(t){this.stopAllActions(),this.runAction(n)},this.node),this.node.on("touchend",i,this.node),this.node.on("touchcancel",i,this.node)}}),cc._RF.pop()},{}],ChargeUI:[function(t,n,e){"use strict";cc._RF.push(n,"a08e5IuTuNNMKfEnHnY9RuL","ChargeUI"),cc.Class({extends:cc.Component,properties:{},show:function(){this.node.active=!0,this.node.emit("fade-in")},hide:function(){this.node.emit("fade-out")},start:function(){}}),cc._RF.pop()},{}],EnergyCounter:[function(t,n,e){"use strict";cc._RF.push(n,"f6661/FSNZJ/Za7zrHURjQv","EnergyCounter"),cc.Class({extends:cc.Component,properties:{progressBar:cc.ProgressBar,leftTimeLabel:cc.Label,totalTime:15,currentTime:0},start:function(){},update:function(t){var n=this.currentTime/this.totalTime;this.progressBar.progress=n,this.currentTime+=t;var e=this.totalTime-Math.floor(this.currentTime);e=e>=10?e:"0"+e,this.leftTimeLabel.string="00:"+e,this.currentTime>=this.totalTime&&(this.currentTime=0)}}),cc._RF.pop()},{}],HeroSlot:[function(t,n,e){"use strict";cc._RF.push(n,"84ef1uCdCFLpIUfcry+zfuQ","HeroSlot");var i=function(t,n){var e=Math.random();return t+Math.floor((n-t)*e)};cc.Class({extends:cc.Component,properties:{bgs:{default:[],type:cc.SpriteFrame},heros:{default:[],type:cc.SpriteFrame},stars:{default:[],type:cc.Sprite},heroLevel:{default:null,type:cc.Label},bg:cc.Sprite,hero:cc.Sprite},onLoad:function(){this.refresh()},refresh:function(){var t=i(0,this.bgs.length);this.bg.spriteFrame=this.bgs[t];var n=i(0,this.heros.length);this.hero.spriteFrame=this.heros[n];var e=i(0,this.stars.length);this.refreshStars(e);var s=i(0,100);this.heroLevel.string="LV."+s},refreshStars:function(t){for(var n=0;n<this.stars.length;n++)this.stars[n].enabled=n<t}}),cc._RF.pop()},{}],PanelTransition:[function(t,n,e){"use strict";cc._RF.push(n,"a6dbb1kF1ZBrJ/rXqrTkhCo","PanelTransition"),cc.Class({extends:cc.Component,properties:{duration:0},onLoad:function(){this.outOfWorld=cc.v2(3e3,0),this.node.position=this.outOfWorld;var t=cc.callFunc(this.onFadeOutFinish,this),n=cc.callFunc(this.onFadeInFinish,this);this.actionFadeIn=cc.sequence(cc.spawn(cc.fadeTo(this.duration,255),cc.scaleTo(this.duration,1)),n),this.actionFadeOut=cc.sequence(cc.spawn(cc.fadeTo(this.duration,0),cc.scaleTo(this.duration,2)),t),this.node.on("fade-in",this.startFadeIn,this),this.node.on("fade-out",this.startFadeOut,this)},startFadeIn:function(){this.node.pauseSystemEvents(!0),this.node.position=cc.v2(0,0),this.node.setScale(2),this.node.opacity=0,this.node.runAction(this.actionFadeIn)},startFadeOut:function(){this.node.pauseSystemEvents(!0),this.node.runAction(this.actionFadeOut)},onFadeOutFinish:function(){this.node.position=this.outOfWorld},onFadeInFinish:function(){this.node.resumeSystemEvents(!0)},start:function(){}}),cc._RF.pop()},{}],ShopUI:[function(t,n,e){"use strict";cc._RF.push(n,"541f75Rl6pPHZAOwMwhfTRH","ShopUI"),cc.Class({extends:cc.Component,properties:{anim:cc.Animation,figure:cc.Sprite},onLoad:function(){this.figure.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1,1,.96),cc.scaleTo(1,1,1))))},show:function(){this.node.active=!0,this.playstate=this.anim.play("shop_intro")},hide:function(){this.anim.play("shop_out")},onOutFinish:function(){this.node.active=!1},start:function(){}}),cc._RF.pop()},{}],SubBtnsUI:[function(t,n,e){"use strict";cc._RF.push(n,"8e515reXDNFPqSAW5rIovGm","SubBtnsUI"),cc.Class({extends:cc.Component,properties:{subBtnsAnim:cc.Animation,btnContainer:cc.Node,btnShowSub:cc.Button,btnHideSub:cc.Button},showSubBtns:function(){this.btnContainer.active=!0,this.subBtnsAnim.play("sub_up")},hideSubBtns:function(){this.subBtnsAnim.play("sub_fold")},onFinishAnim:function(t){this.btnShowSub.active=t,this.btnHideSub.active=!t},start:function(){}}),cc._RF.pop()},{}]},{},["BackPackUI","ButtonScaler","ChargeUI","EnergyCounter","HeroSlot","PanelTransition","ShopUI","SubBtnsUI"]);