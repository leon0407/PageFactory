/* function: tab
 * compatible width platform of company for jquery version is under 1.4+
 * jquery 1.4+ can use function index()
 */

$(".tab").click(function(e){
    var $target = $(e.target);
    if($target.hasClass("active")) return;
    $target.addClass("active").siblings().removeClass("active");
    var len = $(this).children("li").length;
    var idx = 0;
    for(var i = 0;i < len; i++){
        if($target[0] == $(this).children("li:eq('" + i + "')")[0]){
            idx = i;
            break;
        }
    }
    // var idx = $target.index();
    $(this).next(".tabcon").find(">li:eq('" + idx +"')").show().siblings().hide();
});