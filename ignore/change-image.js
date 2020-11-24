var oldWorldPosZ=0.0;
var newWorldPos=new THREE.Vector3();
var newWorldPosZ=0.0;
var entity;
var num=1;
var curKey='=';
var sideName="txt-r";
var wtf="nada";

AFRAME.registerComponent('change-image', {
    schema: {
    },
    init:function(){
        // entity= document.querySelector('#gif');
        //entity.pause();
        //AFRAME.utils.entity.setComponentProperty(entity,'visible',"true");
    },
    log : function () {
        //console.log("NEW:"+newWorldPosZ +"  OLD:"+oldWorldPosZ+"\nWTF:"+wtf+ " Num:"+num);
        console.log("WTFFFFF")
    },
    play: function () {
        this.data.timestamp = Date.now();
        this.log();
        //entity.pause();
      },
    tick: function () { 
        var cameraEl = this.el.sceneEl.camera.el;
        newWorldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
        newWorldPosZ=newWorldPos.z.toFixed(2);
        console.log("efwjknfejnfnjcejknce");
        if (!(newWorldPosZ>=oldWorldPosZ)) {
            entity.components.gif.nextFrame();
            //num++;
        }
        //logger; once every second
        if (Date.now() - this.data.timestamp > 1000) {
            this.data.timestamp += 1000;
            this.data.seconds += 1;
            this.log();
        }  
        oldWorldPosZ=newWorldPosZ;
    
    }
});

  