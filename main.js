/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var util = require('util');
var bind = require('bind');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 1337));

function Employee(id,name,surname,level,salary)
{
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.level=level;
    this.salary=salary;
}

var employees=[new Employee(1,"AAA","BBB",1,1000)];

function delete_employee(id)
{
    for (var i = 0; i < employees.length; i++)
    {
        if (id === employees[i].id) { employees.splice(i, 1); }
    }
}

app.use('/', function(request, response) 
{
    if ( typeof request.body !== 'undefined' /*&& request.body*/ )
    {
        var name = "";
        var surname = "";
        var level = "";
        var salary = "";
        var id ="";

        if(request.body.submit === "search")
        {
            var temp_id = parseInt(request.body.id_search);

            for (var i = 0; i < employees.length; i++)
            {
                if (temp_id === employees[i].id)
                {
                    id = employees[i].id;
                    name = employees[i].name;
                    surname = employees[i].surname;
                    level = employees[i].level;
                    salary = employees[i].salary;
                }
            }
        }
        else if(request.body.submit==="delete")
        {
            delete_employee(parseInt(request.body.id_search));
        }
        else if(request.body.submit==="insert")
        {
                id = parseInt(request.body.id);
                name = request.body.name;
                surname = request.body.surname;
                level = parseInt(request.body.level);
                salary = parseInt(request.body.salary);

            var index = -1, max_id = -1;
            
            for(var i = 0; i < employees.length; i++)
            {
                if(employees[i].id ===id ){index = i;}
                if(employees[i].id >= max_id){max_id = employees[i].id;}
            }

            if(isNaN(id))
            {
                employees.push(new Employee(max_id+1 ,name,surname,level,salary));
            }
            else if(index>-1)
            {
                delete_employee(index);
                employees.push(new Employee(id ,name,surname,level,salary));
            }
            else
            {
                employees.push(new Employee(id ,name,surname,level,salary));
            }

        }
        else
        {
                text = "body undefined";
        }
    }

    bind.toFile('public/index.tpl',
        {
            
            id: id,
            name: name,
            surname: surname,
            level: level,
            salary: salary
        },
        function(data)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});