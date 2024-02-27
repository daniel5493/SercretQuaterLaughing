const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Kool@id1',
      database: 'secret_db'
    },
    console.log(`Connected to the books_db database.`)
  );
const prompt = inquirer.createPromptModule();
// todo:
//delete department delete role 
// update employee update department
// add employee ,departtment, roles
function start(){
    inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'delete an employee',
            'Exit'
          ]
        }
      ]).then(answers => {
        switch (answers.action) {
            case 'delete an employee':
                deleteEmployee()
                break
          case 'View all departments':
            viewDepartments();
            break;
          case 'View all roles':
            viewRoles();
            break;
          case 'View all employees':
            viewEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            updateEmployeeRole();
            break;
          case 'Exit':
            db.end();
            break;
        }
      });
}

async function viewDepartments(){
    db.query("SELECT * FROM department;",(err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
}

function viewEmployees(){db.query("SELECT * FROM employee;",(err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });


}

function viewRoles(){db.query("SELECT * FROM role;",(err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });

}

function addDepartment(){

}

function addEmployee(){

}

function addRole(){

}

function updateEmployeeRole(){

}
function deleteEmployee(){

    db.query("SELECT * FROM employee;",(err, result) => {
        if (err) {
          console.log(err);
        }
        const employees = result.map((r)=> `${r.first_name} ${r.last_name}` )
        const choices = result.map((r)=> {return {name:`${r.first_name} ${r.last_name}`, id: r.id}})
        inquirer.prompt([
            {
              type: 'list',
              name: 'action',
              message: 'which employee are you wanting to delete?',
              choices: employees
            }
          ]).then((answers) => {
            console.log(answers)
            const nameSplit= answers.action.split(' ')
            const firstname= nameSplit[0]
            const lastname= nameSplit[1]
            db.query(
                'DELETE FROM employee WHERE first_name = ? AND last_name = ?',
                [firstname, lastname],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                  console.log(result);
                }
              );
            
          })
       
      });
    

}
function deletedepartment(){
    // follow delete employee function switch employee name with department name. 

}
function deleteRole(){
    // follow delete role function switch employee name with department name.

}



start()