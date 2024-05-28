var userName = prompt('Enter name please.')
var userAge = parseInt(prompt('Enter age please.'))
var gender=prompt('Enter gender')

    if(userName=='' || userAge=='')
        {
            userName='Sushil';
            userAge = 20;
          
        }
    if(gender=='m' || 'M')
        {
           gender=='He'
           console.log(`${gender} is ok.`)
        }
        else if (gender=='F' || 'f')
        {
            gender=='She'
            console.log(`${gender} is ok.`)
        }
        console.log(`Name:${userName}`)
        console.log(`Age:${userAge}`)
        console.log('All is good going in my life.');
        
        
    