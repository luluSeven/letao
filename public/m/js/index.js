
/**
 * Created by ���� on 2017/12/26.
 */


$(function(){

    //�ֲ�ͼ�Զ��ֲ�
    mui('.mui-slider').slider({
        interval:1000//�Զ��ֲ����ڣ���Ϊ0���Զ����ţ�Ĭ��Ϊ0��
    });

    //���򻬶�
    mui('.mui-scroll-wrapper').scroll({
        crollY: true, //�Ƿ��������
        scrollX: false, //�Ƿ�������
        startX: 0, //��ʼ��ʱ������x
        startY: 0, //��ʼ��ʱ������y
        indicators: false, //�Ƿ���ʾ������
        deceleration:0.0006, //����ϵ��,ϵ��ԽС����Խ����,flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
        bounce: true //�Ƿ����ûص�

    });
})
