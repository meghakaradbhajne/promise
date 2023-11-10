console.log('person1:show ticket');
console.log('person2:show ticket');
const promisewifeBringging = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket'); 
     },3000)
 })
const getPopcorn =promisewifeBringging.then((t)=>{
    console.log('wife:i have the ticket')
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
})
   const getButter = getPopcorn.then((t)=>{
    console.log('husband:I got some popcorn')
        console.log('husband:we should go in');
        console.log('wife:i need butter on my popcorn');
        return new Promise((resolve,reject)=>resolve(`${t} butter`))

    })
    getButter.then((t)=>console.log(t))

promisewifeBringging .then((t)=>{
  console.log(`person': show ${t}`)
})
console.log('person4:show ticket');
console.log('person5:show ticket');