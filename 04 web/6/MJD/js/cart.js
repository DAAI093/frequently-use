window.onload=function(){
    var dels=document.querySelectorAll('.del');
    var winBox=document.querySelector('.winbox');
    var removeBox=document.querySelector('.removebox');
    var cancel=document.querySelector('.cancel');
    //��ȡ���е�ɾ�����ӣ�
    // ����ú��ӣ�
    // 1-����ִ�ж���Ч��
    // 2-ģ̬����ʾ
    for(var i=0;i<dels.length;i++){
        dels[i].onclick=function(){
            this.classList.add('open'); //���opne����
            removeBox.classList.add('animated'); // ��� ����Ͱ���Ӷ���
            removeBox.classList.add('bounceInDown');
            winBox.style.display='block'; //��ģ̬����ʾ
        }
    }

    //���ȡ����ť
    //1-ģ̬������
    //2-ɾ��open����
    cancel.onclick=function(){
        winBox.style.display='none';
        removeBox.classList.remove('animated'); // ɾ�� ����Ͱ���Ӷ���
        removeBox.classList.remove('bounceInDown');
        var open=document.querySelector('.open'); //�� Ͱ�Ǵ򿪵ĺ���
        open.classList.remove('open');
    }

}