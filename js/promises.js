'use strict';


function wait(input) {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            if (typeof (input)=="number"){
                resolve()
            }else{
                reject()
            }
        },(1000*input))

    }).then(()=>{
        console.log(`You\'ll see this after ${input} second(s).`);
    }).catch(()=>{
       console.log(`${input} is not a number.`)
    });


}
// wait(3000).then(()=>console.log(`You\'ll see this after 3 seconds.`))




//
function commits(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization':`token ${githubkey}`}})
        .then (response=> response.json())
        .then ((data) => {
            console.log(data)

            // const userData = data.map((gitStat) => {
            //     // console.log(gitStat);
            //     if (gitStat.type === "PushEvent") {
            //         return gitStat
            //     }
            // });

            const userData = data.filter((gitStat) => {
                // console.log(gitStat);
                if (gitStat.type === "PushEvent") {
                    return gitStat
                }
            });

            console.log(userData[0].created_at)
        })
        .catch(error => console.error(error))

}

commits("susanlin0705");



