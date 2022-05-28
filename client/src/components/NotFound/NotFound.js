import React from "react";


const NotFound = () => {
    return (    
    <div class="mainbox">
        <h1 class="err">404</h1>
        <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
           <p class="last">Let's go <a class="last-a" href="/">home</a> and try from there.</p>
        </div>
    </div>
    );
}
 
export default NotFound;