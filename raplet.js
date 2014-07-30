var gmail_raplet;

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

r(function(){

    gmail_raplet = new Gmail();

    jQuery(document).on('mouseenter', '.iw', function( e ) {
        // What is the email?
        var email = $(event.target).closest('.iw').find('[email]').attr('email');
        if (email){
            $.ajax('https://www.thecrag.com/raplet?email='+email, {
                dataType: 'json',
                success: function thecrag_details(data){
                    $('.u5').html('<style>'+data.css+'</style>' + data.html);
                }
            });
        }
    })
});

