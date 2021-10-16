



inquirer.prompt([{
    type: 'input',
    message: 'Please enter Interns name.',
    name: 'intName',
},
{
    type: 'input',
    message: 'Please enter Interns ID number.',
    name: 'intID'
},
{
    type: 'input',
    message: 'Please enter Interns email address.',
    name: 'intEmail'
},
{
    type: 'input',
    message: 'Please enter Interns School name',
    name: 'intSchool'
}]).then(test => console.log(test));