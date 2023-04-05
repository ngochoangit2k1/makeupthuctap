$(function(){
    //Số lượng từ giới hạn
    var limitW = 600;
    //Số ký tự của từ
    var char = 4;
    var txt = $('.product-description>p').html();
    var txtStart = txt.slice(0,limitW).replace(/\w+$/,'');
    var txtEnd = txt.slice(txtStart.length);
    if ( txtEnd.replace(/\s+$/,'').split(' ').length > char ) {
        $('.product-description>p').html([
            txtStart,
            '<a href="#" class="more" style="font-size: 20px; color: #ff6a28; font-weight: bold"">xem thêm...</a>',
            '<span class="detail">',
            txtEnd,
            '</span>'
        ].join('')
      );
    }
    
    $('span.detail').hide();
    $('a.more').click(function() {
        $(this).hide().next('span.detail').fadeIn();
        return false;
    });
});