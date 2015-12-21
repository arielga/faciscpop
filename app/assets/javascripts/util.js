$(function() {
  initPage();
});
$(window).bind('page:change', function() {
  initPage();
});
function initPage() {


  /**set class active no menu**/
  $(".links-menu a").each(function () {
    var model = window.location.href.split('/');
    var href = this.href.split('/');

    if (model[3] && model[3] == href[3] && !$(this).hasClass('dropdown-toggle')) {
      $(this).parent().addClass("active");
      $(this).parents('.dropdown').addClass("active");
    }
  });


  /**focus no primeiro field no open das modais**/
  $('.modal').on('shown.bs.modal', function (e) {
    firstDiv = $(this).find('.modal-body div')[0];
    firstInput = $(firstDiv).find('input')[0];
    if(firstInput){
      $(firstInput).focus();
    }else{
      firstSelect = $(firstDiv).find('select')[0];
      $(firstSelect).focus();
    }
  })


  /**disable btns de submits depois do submit dos forms**/
  $("form").submit(function(event) {
    $(this).find('.btn-success').attr("disabled", 'disabled');
  });


  $(".mask-hr").mask("99:99");
}