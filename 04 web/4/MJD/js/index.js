window.onload=function(){
    //ͷ��������ɫ
    setHeader();
    //����ʱ
    downTime();
    //�ֲ�ͼ
    banner();
}


//ͷ��������ɫ
/*��������߶� С��banner�ĸ߶�
*   ͷ�����ӵ�͸����= ҳ�������ȥ�ĸ߶�/banner�߶�*
* ��������߶� С��banner�ĸ߶�  ͸���ȹ̶�������
*background: rgba(201, 21, 35, 0.8);
 *  */
function setHeader(){
    var header=document.querySelector('.header-in');
    var banner=document.querySelector('.jd-banner');
    var H=banner.offsetHeight; //��ȡbanner�ĸ߶�

    //��ҳ������¼�
    window.onscroll=function(){
        opacity=0;
        var top=document.body.scrollTop; // ��ȡҳ���ȥ�ĸ߶�

        opacity=top/H; //͸����= ҳ�������ȥ�ĸ߶�/banner�߶�*

        if(opacity>0.85){
            opacity=0.85;
        }
        console.log(opacity);
        //����header��͸����
        header.style.background='rgba(201, 21, 35,'+opacity+')';
    }
}

function downTime(){
    var time=5*60*60;

    var timer=setInterval(function(){
        time--;
        //�ѱ仯���ʱ��ת�� ʱ����
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);

        var  spans=document.querySelectorAll('.time span');

        spans[0].innerHTML=Math.floor(h/10); //ʮλ
        spans[1].innerHTML=Math.floor(h%10); //��λ

        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=Math.floor(m%10);

        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=Math.floor(s%10);
        //�ݴ��Ա��
        if(time<=0){
            clearInterval(timer); //�����ʱ��
        }
    },1000);
}

/*
* ����
* 1����ʱ���л��ֲ�ͼ
* 2��ʵ���޷����
* 3���Ǳ��ͬ��
* 4�����������л���ͼ
* */
function banner(){
    var banner=document.querySelector('.jd-banner');
    var ul=banner.querySelector('ul');
    var W=banner.offsetWidth;
    var index=1; //�ֲ�ͼ������ֵ

    //-------------------��װ���ô���--------------------
    //ulλ�Ƶķ���
    var  setTranslateX=function(x){
        ul.style.transform='translateX('+x+'px)';
        ul.style.webkitTransform='translateX('+x+'px)';
    }
    //��ӹ��ɷ���
    var addTransition=function(){
        ul.style.transition="transform 0.3s";
        ul.style.webkitTransition="transform 0.3s";
    }
    //ɾ�����ɷ���
    var removeTransition=function(){
        ul.style.transition="none";
        ul.style.webkitTransition="none";
    }

    //-----------------1����ʱ���л��ֲ�ͼ-----------------------

    var timer=setInterval(function(){
        index++;
        var  x=-index*W; //ulλ�Ƶľ���
        addTransition();//��ӹ���
        setTranslateX(x);//ulλ��

    },1000);

    //-----------------2��ʵ���޷����---------------------------

    //������Ҫ�� ÿ��ͼƬ������ɺ������ж�  ��ul���ɽ��������ж�
    //�ж��Ƿ�Խ��
    //ul.addEventListener('transitionend',function(){
    //    if(index>=9){
    //        index=1;
    //        //ul ������ת ����Ҫ����
    //        var x=-index*W;
    //        removeTransition(); //ɾ������
    //        setTranslateX(x);  //ulλ��
    //    }
    //
    //    if(index<=0){
    //        index=8;
    //        //ul ������ת ����Ҫ����
    //        var x=-index*W;
    //        removeTransition(); //ɾ������
    //        setTranslateX(x);  //ulλ��
    //    }
    //});
    ////����
    //ul.addEventListener('webkitTransitionEnd',function(){
    //    if(index>=9){
    //        index=1;
    //        //ul ������ת ����Ҫ����
    //        var x=-index*W;
    //        removeTransition(); //ɾ������
    //        setTranslateX(x);  //ulλ��
    //    }
    //
    //    if(index<=0){
    //        index=8;
    //        //ul ������ת ����Ҫ����
    //        var x=-index*W;
    //        removeTransition(); //ɾ������
    //        setTranslateX(x);  //ulλ��
    //    }
    //});

    //���ù��ɽ����ļ��ݵķ���

    bindTransitionEnd(ul,function(){
        if(index>=9){
            index=1;
            //ul ������ת ����Ҫ����
            var x=-index*W;
            removeTransition(); //ɾ������
            setTranslateX(x);  //ulλ��
        }

        if(index<=0){
            index=8;
            //ul ������ת ����Ҫ����
            var x=-index*W;
            removeTransition(); //ɾ������
            setTranslateX(x);  //ulλ��
        }
    });

    //���� transitionend �ļ��������� �����´�������
    //��װһ����������������������
    //���� �����Ӱ󶨼��ݵĹ��ɽ����ķ���
    /*
    * obj:Ҫ�󶨼��ݹ��ɽ����¼��� Ԫ��
    * callback: �����ɽ����¼�������Ҫִ�еĲ���
    * */
    function bindTransitionEnd(obj,callback){
        if(typeof obj=='object'){ //���obj�Ƕ�������¼�
            obj.addEventListener('transitionend',function(){
                //if(callback){ callback();}
                callback&&callback(); //���callback������ִ��callback
            });

            obj.addEventListener('webkitTransitionEnd',function(){
                callback&&callback();
            });
        }
    }

}

