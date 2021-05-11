let {PythonShell} = require('python-shell')

export function runPy(){
    return new Promise(async function(resolve, reject){
          let options = {
          mode: 'text',
          pythonOptions: ['-u'],
          scriptPath: './',//Path to your script
          args: [JSON.stringify({"name": ["xyz", "abc"], "age": ["28","26"]})]//Approach to send JSON as when I tried 'json' in mode I was getting error.
         };

          await PythonShell.run('test.py', options, function (err: string, results: string) {
          //On 'results' we get list of strings of all print done in your py scripts sequentially. 
          if (err) throw err;
          console.log('results: ');
          for(let i of results){
                console.log(i, "---->", typeof i)
          }
      resolve(results[1])//I returned only JSON(Stringified) out of all string I got from py script
     });
   })
 } 

export function runMain(){
    return new Promise(async function(resolve, reject){
        let r: any =  await runPy()
         console.log(JSON.parse(JSON.stringify(r.toString())), "Done...!@")//Approach to parse string to JSON.
    })
 }

