$(function(){
    var _showTabInd = 0;
    //�z�Leach��k�A�W�d�C�Ӫ���Ҷ��j�w���ʧ@
	$(".myTab").each(function(index, element) {
        var $tab = $(this);
	    //�j�w����click�ƥ�
        $("ul.tab-ul li", $tab).click(function () {
            //�إ�$this�ܼơA�ñNĲ�o�ƥ󪺪���ϥ�$this�ܼ��x�s
            var $this = $(this),
                //���o����target�ݩ�
			    _clickTab = $this.data('target');
            //�󪫥�W�s�Wclass�ݩʡA�P�ɴM���L�֦�active��class�ݩʪ�����
            //�N�Ӫ���class�ݩʪ�active�Ȳ���
            $this.addClass("active").siblings(".active").removeClass("active");
            //�N�l�϶������e�H�H�J���覡��ܡA�P�ɴM���L���l�϶��A�ñN�Ӱ϶�����
			$(_clickTab).stop().fadeIn().siblings().hide();
		});
	    //�I�s����hide��k�A���ê���
        $('.tab_content', $tab).hide();
	    //�I�s����_showTabInd��click�ƥ�
		$("ul.tab-ul li",$tab).eq(_showTabInd).click();
		
    });
});