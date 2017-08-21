let myNickname: string = 'Fazt';

let myAge: number = 80;

let canVote: boolean = true;

let anything: any = 'dog';
anything = 2;

document.getElementById('output')
    .innerHTML = `My Name is ${myNickname}`;

document.write(`canVote is a ${typeof(canVote)} <br/>`);
document.write(`my nikname is a ${typeof(myNickname)} <br/>`);
document.write(`anything have the type ${typeof(anything)} <br/>`);
