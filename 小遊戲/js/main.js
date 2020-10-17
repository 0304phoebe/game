$(document).ready(function(){
    sceneSwitchItem();
    $('#btn-1-1-1').click(function(event){
        // $('Modal-1-1').modal('hide');
        // $('Modal-sus-1-1').modal('show');
        checkAns(1,1,1,true);
    })
    $('#btn-1-1-2').click(function(event){ //   第一個場景的第幾元件>跑到checkAns判斷
        // $('Modal-1-1').modal('hide');
        // $('Modal-fail').modal('show');
        checkAns(1,1,2,false);
    });
    $('#btn-1-1-3').click(function(event){
        checkAns(1,1,3,false);
    });
    $('#btn-1-1-4').click(function(event){
        checkAns(1,1,4,false);
    });
});

function checkAns(n1, n2, n3, isCorrect){ //判斷sus or fail
    $('#Modal-'+n1+'-'+n2).modal('hide');
    if(isCorrect == true){
        $('#Modal-sus-'+n1+'-'+n2).modal('show');
    }else{
        $('#Modal-fail').modal('show');
    }
}

function sceneSwitchItem(){
    $('.home').click(function(event){
        sceneSwitch(0);
    });

    for(let i=1;i<=5;i++){
        $('.scene-item-0-'+i).click(function(event){
            sceneSwitch(i);
        });
    }
}

// $('.scene-item-0-1').click(function(event){
//     sceneSwitch(1);
// });

// $('.scene-item-0-2').click(function(event){
//     sceneSwitch(2);
// });

// $('.scene-item-0-3').click(function(event){
//     sceneSwitch(3);
// });

// $('.game-'+sn).show();
// function sceneSwitch(sn){ 等於下面
//     $('.game-home').hide();
//     $('.game-1').hide();
//     $('.game-2').hide();
//     $('.game-3').hide();
//     $('.game-4').hide();
//     $('.game-5').hide();
//     if(sn==0){
//         $('.game-home').show();
//     }else{
//         $('.game-'+sn).show();
//     }
// }

let sceneSwitch = (sn)=> {
    $('.game-home').hide();
    $('.game-1').hide();
    $('.game-2').hide();
    $('.game-3').hide();
    $('.game-4').hide();
    $('.game-5').hide();
    if(sn==0){
        $('.game-home').show();
    }else{
        $('.game-'+sn).show();
    }
}

// function sceneSwitch0(sn){ 把scene-home 變 game-0
//     $('.game-0').hide();
//     $('.game-1').hide();
//     $('.game-2').hide();
//     $('.game-3').hide();
//     $('.game-4').hide();
//     $('.game-5').hide();
// } 
