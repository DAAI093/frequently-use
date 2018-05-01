window.onload=function(){
    //��໬��
    swipeLeft();

    //�Ҳ໬��
    swipeRight()
}
/*��໬����
* ����
* 1����� ����
*    �������li��ǩ ��ʽ�ı�
*    �������li��ǩ ������ҳ��Ķ���
*
* 2��������������
*    2-1������ʼ
*       ��¼��ʵλ��
*    2-2�����ƶ�
*       ��¼�ƶ�λ��
*       ��ul��������ƶ�
*    2-3��������
*       �ж�ul���ƶ��Ƿ�Խ�磬���Խ��������ȥ
*
* */
function swipeLeft(){
    var leftBox=document.querySelector('.body-left');
    var ul=leftBox.querySelector('ul');
    var lis=ul.querySelectorAll('li');

    var currentY=0;//��¼ul��ǰ��λ��
    //-------------------0-�ٽ�ֵ-------------------
    //��λ�ٽ�ֵ
    var maxTop=0;
    var minTop=leftBox.offsetHeight-ul.offsetHeight;
    //�����ٽ�ֵ
    var maxSwipe=maxTop+120;
    var minSwipe=minTop-120;
    //----------------0-��װ���ô���-----------------
    //��ӹ���
    var addTransition=function(){
        ul.style.webkitTransition='transform 0.2s';
        ul.style.transition='transform 0.2s';
    }
    //ɾ������
    var removeTransition=function(){
        ul.style.webkitTransition='none';
        ul.style.transition='none';
    }
    //ulλ��
    var setTranslateY=function(translateY){
        ul.style.webkitTransform='translateY('+translateY+'px)';
        ul.style.transform='translateY('+translateY+'px)';
    }
    //-----------------1-�������--------------------
    itcast.tap(leftBox,function(e){
        //1-1�������li��ǩ ��ʽ�ı�
        console.log(e.target.parentNode); //e.target�����¼���С��Ԫ��
        var target= e.target.parentNode;//��ȡ�������li��ǩ
        //����
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove('current');
            lis[i].index=i; //�Զ�������ֵ
        }
        //��ʾ�Լ�
        target.classList.add('current');
        //1-2�������li��ǩ ������ҳ��Ķ��� ulλ��
        /*
        *  0  0
        *  1  -50
        *  2  -100
        *  3  -150  -50*index
        * */
        //λ�Ƶľ���=-50*index;
        var y=-50*target.index;
        //���ݼ��
        if(y>maxTop){
            y=maxTop;
        }

        if(y<minTop){
            y=minTop;
        }
        //��ӹ���
        addTransition();
        //ulλ��
        setTranslateY(y);

        currentY=y; //��¼��ǰul��λ��

    });

    //---------2-�����ƶ� �л�����--------------------
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener('touchstart',function(e){
        startY= e.targetTouches[0].clientY;//��¼��ʼλ��
    });

    leftBox.addEventListener('touchmove',function(e){
        moveY= e.targetTouches[0].clientY;//��¼�ƶ�λ��
        distanceY=moveY-startY;//��������
        //��ul��������ƶ�  ul�ƶ��ľ���=֮ǰ��λ��+distanceY;
        var y=currentY+distanceY;
        //���ݼ��
        if(y>maxSwipe){
            y=maxSwipe;
        }
        if(y<minSwipe){
            y=minSwipe;
        }
        removeTransition();//ɾ������
        setTranslateY(y);//ulλ��
    });

    leftBox.addEventListener('touchend',function(){
        //����������ҲҪ��¼��ǰulλ��
        currentY=currentY+distanceY;
        //�ж��Ƿ񳬹���λ���ٽ�ֵ  minTop maxTop
        //���Խ�� ��Ҫ������ȥ
        //�߽���
        if(currentY>maxTop){
            currentY=maxTop;
            addTransition(); //��ӹ���
            setTranslateY(currentY); //ulλ��
        }
        if(currentY<minTop){
            currentY=minTop;
            addTransition(); //��ӹ���
            setTranslateY(currentY); //ulλ��
        }

        //��������
        startY=0;
        moveY=0;
        distanceY=0;
    })

}

function swipeRight(){
    var leftBox=document.querySelector('.body-right');
    var ul=leftBox.querySelector('.right-in');

    var currentY=0;//��¼ul��ǰ��λ��
    //-------------------0-�ٽ�ֵ-------------------
    //��λ�ٽ�ֵ
    var maxTop=0;
    var minTop=leftBox.offsetHeight-ul.offsetHeight;
    //�����ٽ�ֵ
    var maxSwipe=maxTop+120;
    var minSwipe=minTop-120;
    //----------------0-��װ���ô���-----------------
    //��ӹ���
    var addTransition=function(){
        ul.style.webkitTransition='transform 0.2s';
        ul.style.transition='transform 0.2s';
    }
    //ɾ������
    var removeTransition=function(){
        ul.style.webkitTransition='none';
        ul.style.transition='none';
    }
    //ulλ��
    var setTranslateY=function(translateY){
        ul.style.webkitTransform='translateY('+translateY+'px)';
        ul.style.transform='translateY('+translateY+'px)';
    }


    //---------2-�����ƶ� �л�����--------------------
    var startY=0;
    var moveY=0;
    var distanceY=0;
    leftBox.addEventListener('touchstart',function(e){
        startY= e.targetTouches[0].clientY;//��¼��ʼλ��
    });

    leftBox.addEventListener('touchmove',function(e){
        moveY= e.targetTouches[0].clientY;//��¼�ƶ�λ��
        distanceY=moveY-startY;//��������
        //��ul��������ƶ�  ul�ƶ��ľ���=֮ǰ��λ��+distanceY;
        var y=currentY+distanceY;
        //���ݼ��
        if(y>maxSwipe){
            y=maxSwipe;
        }
        if(y<minSwipe){
            y=minSwipe;
        }
        removeTransition();//ɾ������
        setTranslateY(y);//ulλ��
    });

    leftBox.addEventListener('touchend',function(){
        //����������ҲҪ��¼��ǰulλ��
        currentY=currentY+distanceY;
        //�ж��Ƿ񳬹���λ���ٽ�ֵ  minTop maxTop
        //���Խ�� ��Ҫ������ȥ
        //�߽���
        if(currentY>maxTop){
            currentY=maxTop;
            addTransition(); //��ӹ���
            setTranslateY(currentY); //ulλ��
        }
        if(currentY<minTop){
            currentY=minTop;
            addTransition(); //��ӹ���
            setTranslateY(currentY); //ulλ��
        }

        //��������
        startY=0;
        moveY=0;
        distanceY=0;
    })

}