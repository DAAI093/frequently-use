/**
 * Created by Administrator on 2017/3/18.
 */
/**
 * ������һ�������ԵĻ�ȡ��ǩ������ı����ݵĺ���
 * @param ele
 * @returns {*}
 */
function getText(ele){
    // ������⣺ ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(typeof ele.innerText=="string"){
        return ele.innerText;//����ȡ���ı����ݷ���
    }else {
        return ele.textContent;
    }
}

/**
 * ��װ��һ�����ݰ汾�����ñ�ǩ�����ݵĺ���
 * @param ele
 * @param value
 */
function setText(ele,value){
    // ������⣺����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(typeof ele.innerText=="string"){
        ele.innerText = value;
    }else { // textContent
        ele.textContent = value;
    }
}