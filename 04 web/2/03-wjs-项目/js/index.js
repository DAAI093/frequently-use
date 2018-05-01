window.onload=function(){
    /*�ֲ�ͼ*/
    banner();

    //��ʼ����ʾ����
    $('.bao').tooltip();
    $('.guang').tooltip();

    //����ul�Ŀ��
    setWidth();
}

/*�ֲ�ͼ*/
function banner(){
    var picBox=document.querySelector('.carousel');

    //������Ӱ�touch�¼�
    //�������������
    var startX=0;
    var moveX=0;
    var distanceX=0;

    picBox.addEventListener('touchstart',function(e){
        startX= e.targetTouches[0].clientX; //��ȡ��ʼ����ֵ
    })

    picBox.addEventListener('touchmove',function(e){
       moveX= e.targetTouches[0].clientX;    //��ȡ�ƶ��������ֵ
       distanceX=moveX-startX; //��������
    })

    //�����������ж��û��Ĳ�����ʽ
    picBox.addEventListener('touchend',function(){
        if(distanceX>0){
            // �Ҳ໬��  ��һ��
            console.log('right');
            $('.carousel').carousel('prev');
        }

        if(distanceX<0){
            //��໬��  ��һ��
            console.log('left');
            $('.carousel').carousel('next');
        }

        //��������
        startX=0;
        moveX=0;
        distanceX=0;
    })
}

function setWidth(){
    var w=0;
    $('.wjs-tabs li').each(function(index,e){
        w+=$(e).outerWidth(true);
        //wdith();
        //innerWidth();
        //outerWidth();
        //outerWidth(true);
    })

    $('.wjs-tabs').width(w); //���ۼӵĿ�����ø�ul
}