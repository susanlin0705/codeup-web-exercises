const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const greaterThanThree = users.filter(language=>{
    return language.languages.length >= 3
});
console.log(greaterThanThree);


// Use .map to create an array of strings where each element is a user's email address

const emailNames = users.map(email=>{
    return email.email;
});
console.log(emailNames);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((instructor, years)=>{
    const howManyYears = years.yearsOfExperience;
    return (instructor +howManyYears);
},0);
const average =totalYears/ users.length
console.log(average);

// Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((previous, current)=>{
    const currentEmail = current.email;
    if(currentEmail.length> previous.length){
        return currentEmail;
    }else{
        return previous
    }
},'');
console.log(longestEmail);

const usersName = users.reduce((allUserName, user,index,arr)=>{
    if(index===(arr.length-1)) {
        return `${allUserName} ${user.name}.`;
    }else{
        return `${allUserName} ${user.name},`;
    }

},'Your instructors are: ');

console.log(usersName);


const allTheLanguages = users.reduce((total, current)=>{
    const newLanguages = current.languages.map (language=> {
         total.push(language);
    });
    return total;


},[]);

const filterLanguage= new Set(allTheLanguages);

console.log(filterLanguage);

//另一種解法
const uniqueLanguages = users.reduce(function(prev, current){
    const langs = current.languages;
    for(const lang of langs){
        prev.add(lang);
    }
    return prev;

},new Set);
//
// Set =====> .add()
// array =======>.push()











