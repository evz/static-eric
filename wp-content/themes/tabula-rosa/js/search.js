(function($){
    $('#searchsubmit').live('click', function(){
        $('.result').remove();
        $.getJSON('http://static-eric-search.appspot.com/?query='+$(this).prev().val()+'&callback=?', function(data){
            var info = '';
            if (data['status'] == 'ok'){
                $.each(data['resp'], function(key,val){
                    info += '<div class="result"><h4><a href="#">' + val['title'] + '</a></h4>';
                    info += '<p><em>Updated: ' + val['updated'] + '</em></p>';
                    info += '<div class="result-summary" style="display:none;"><p>' + val['summary'] + '</p></div></div>'
                });
            } else {
                info += '<div class"result"><h4>Your search found nothing. Try again</h4></div>';
            }
            $('#search-results').append(info);
        });
    });
    $('.result h4 a').live('click', function(){ 
        $(this).parent().parent().find('.result-summary').toggle('blind');
    });
})(jQuery);