$wnd.showcase.runAsyncCallback24("function Lpb(a){this.a=a}\nfunction Opb(a){this.a=a}\nfunction Rpb(a){this.a=a}\nfunction Ypb(a,b){this.a=a;this.b=b}\nfunction wZb(a,b){oZb(a,b);ct((BLb(),a.gb),b)}\nfunction sLb(){var a;if(!pLb||uLb()){a=new Bnc;tLb(a);pLb=a}return pLb}\nfunction uLb(){var a=$doc.cookie;if(a!=qLb){qLb=a;return true}else{return false}}\nfunction ct(b,c){try{b.remove(c)}catch(a){b.removeChild(b.childNodes[c])}}\nfunction vLb(a){a=encodeURIComponent(a);$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction Gpb(a,b){var c,d,e,f;Ms(rZb(a.c));f=0;e=$F(sLb());for(d=Ekc(e);d.a.Ed();){c=eJ(Kkc(d),1);tZb(a.c,c);fgc(c,b)&&(f=rZb(a.c).options.length-1)}fp(($o(),Zo),new Ypb(a,f))}\nfunction Hpb(a){var b,c,d,e;if(rZb(a.c).options.length<1){b0b(a.a,xsc);b0b(a.b,xsc);return}d=rZb(a.c).selectedIndex;b=sZb(a.c,d);c=(e=sLb(),eJ(e.td(b),1));b0b(a.a,b);b0b(a.b,c)}\nfunction tLb(b){var c=$doc.cookie;if(c&&c!=xsc){var d=c.split(Qtc);for(var e=0;e<d.length;++e){var f,g;var i=d[e].indexOf(auc);if(i==-1){f=d[e];g=xsc}else{f=d[e].substring(0,i);g=d[e].substring(i+1)}if(rLb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.vd(f,g)}}}\nfunction Fpb(a){var b,c,d;c=new aXb(3,3);a.c=new yZb;b=new uPb('Delete');pj((BLb(),b.gb),tzc,true);pWb(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');sWb(c,0,1,a.c);sWb(c,0,2,b);a.a=new l0b;pWb(c,1,0,'<b><b>Name:<\\/b><\\/b>');sWb(c,1,1,a.a);a.b=new l0b;d=new uPb('Set Cookie');pj(d.gb,tzc,true);pWb(c,2,0,'<b><b>Value:<\\/b><\\/b>');sWb(c,2,1,a.b);sWb(c,2,2,d);wj(d,new Lpb(a),(Jy(),Jy(),Iy));wj(a.c,new Opb(a),(zy(),zy(),yy));wj(b,new Rpb(a),Iy);Gpb(a,null);return c}\na3(708,1,Nqc,Lpb);_.Jc=function Mpb(a){var b,c,d;c=cs(Pi(this.a.a),yyc);d=cs(Pi(this.a.b),yyc);b=new vI(y2(C2((new tI).p.getTime()),Wqc));if(c.length<1){tMb('You must specify a cookie name');return}wLb(c,d,b);Gpb(this.a,c)};a3(709,1,Oqc,Opb);_.Ic=function Ppb(a){Hpb(this.a)};a3(710,1,Nqc,Rpb);_.Jc=function Spb(a){var b,c;c=rZb(this.a.c).selectedIndex;if(c>-1&&c<rZb(this.a.c).options.length){b=sZb(this.a.c,c);vLb(b);wZb(this.a.c,c);Hpb(this.a)}};a3(711,1,Qqc);_.sc=function Wpb(){L5(this.b,Fpb(this.a))};a3(712,1,{},Ypb);_.uc=function Zpb(){this.b<rZb(this.a.c).options.length&&xZb(this.a.c,this.b);Hpb(this.a)};_.b=0;var pLb=null,qLb,rLb=true;var vT=bfc(Bxc,'CwCookies$1',708),wT=bfc(Bxc,'CwCookies$2',709),xT=bfc(Bxc,'CwCookies$3',710),zT=bfc(Bxc,'CwCookies$5',712);Erc($n)(24);\n//# sourceURL=showcase-24.js\n")