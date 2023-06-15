import moment from "moment"
export const analyze =(text) =>{
    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
    return 'Hi, How can i help you?'
    else if(text.includes('date'))
    return moment().format('MMMM DD YYYY')
    else if(text.includes('time'))
    return moment().format('h:mm:ss a')
    else if(text.includes('google link'))
    return 'http://www.google.com'
    else if(text.includes('youtube link'))
    return 'http://youtube.com'
    else if(text.includes('twitter link'))
    return 'http://twitter.com'
    else if(text.includes('instagram link'))
    return 'http://instagram.com'
    else if(text.includes('facebook link'))
    return 'http://facebook.com'
    else if(text.includes('linkedin link'))
    return 'http://linkedin.com'
    else if(text.includes('github link'))
    return 'http://github.com'
    else if(text.includes('codepen link'))
    return 'http://codepen.io'
    else if(text.includes('stackoverflow link'))
    return 'http://stackoverflow.com'
    else if(text.includes('bank interest rate'))
    return 'bank intrest rate 8.7'
    else if(text.includes('thank you'))
    return 'thanks for using me Have a nice day'
    return " I can't get you. Can you rephrase the message?"
}