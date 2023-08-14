// Form Validation - Subscribe page
function validate() {
			
    if( document.myForm.fName.value == "" ) {
        alert( "Please provide your first name!" );
        document.myForm.fName.focus() ;
        return false;
    }
    if( document.myForm.EMail.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.EMail.focus() ;
        return false;
    }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
        document.myForm.Zip.value.length != 5 ) {
        
        alert( "Please provide a zip in the format #####." );
        document.myForm.Zip.focus() ;
        return false;
    }
    if( document.myForm.Country.value == "-1" ) {
        alert( "Please provide your country!" );
        return false;
    }
    return( true );
}

// Form Validation - Contact Us page
function validate2() {
			
    if( document.myForm.flName.value == "" ) {
        alert( "Please enter your first and last name!" );
        document.myForm.flName.focus() ;
        return false;
    }
    if( document.myForm.Email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.Email.focus() ;
        return false;
    }
    if( document.myForm.topic.value == "-1" ) {
        alert( "Please select the topic to discuss " );
        return false;
    }
    return( true );
    if( document.myForm.comment.value == "" ) {
        alert( "Please provide your comment!" );
        document.myForm.comment.focus() ;
        return false;
    }
    if( document.myForm.submit.value == "Submit" ) {
        alert( "Thanks for contacting us. You message has been recorded. Our response will be sent" );
        document.myForm.comment.focus() ;
        return false;
    }
}

// Location page
function toggleDropdown(overview) {
    overview.parentElement.classList.toggle('expanded');
}
