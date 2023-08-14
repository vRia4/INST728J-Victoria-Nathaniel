// Form Validation - Contact Us page
function validate() {
			
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
}

// Location page
function toggleDropdown(overview) {
    overview.parentElement.classList.toggle('expanded');
}
