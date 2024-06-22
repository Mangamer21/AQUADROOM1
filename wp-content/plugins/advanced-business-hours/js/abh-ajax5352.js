jQuery(function ($) {
    count = 0;
    all_texts = new Array();
    $('.abh_ajax_widgets').each(function () {
        $widget = $(this);
        $widget.attr('id', 'abh_widget' + count);
        var text = $widget.attr('data-text');

        if (text !== null && typeof text !== 'undefined')
            all_texts[count] = text;

        if ($('.abh_ajax_widgets').length == count + 1) {
            $.post(abh_ajax.ajax_url, {
                action: 'abh_ajax_widget',
                data: all_texts,
                ajax_nonce : abh_ajax.ajax_nonce
            }, function (response) {
                response = $.parseJSON(response);
                for (i = 0; i <= response.length; i++) {
                    $('#abh_widget' + i).html(response[i]);
                }
            });
        }
        count++;
    });
});