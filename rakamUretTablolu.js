function yenile(){

var rakamlar = new Array(49);


var loto = new Array(6);

document.write('<center><img src="sayisalLotoLogo.jpg"></center>');
    

for(var i=0; i<49; i++){
    rakamlar[i]=i+1;
}
document.write('<table cellpadding="5" cellspacing="10" border="0" align="center">');


for(var i4=0; i4<6; i4++){
document.write('<tr>');

for(var i2=0; i2<6; i2++){
    var havuz = rakamlar.length;
    var secilen = Math.floor(Math.random() * havuz);
    loto[i2]=rakamlar[secilen];
    rakamlar.splice(secilen,1);
}
loto.sort(function(a, b){return a-b});


for(var i3=0; i3<6; i3++){
    document.write('<td align="right" background="top.png" >'+loto[i3]+'</td>');
}
document.write('</tr>');
}

document.write('</table>');

document.write('<center><img src="buton.png" onclick="yenile()" ></center>');
  
} 

   
yenile();
