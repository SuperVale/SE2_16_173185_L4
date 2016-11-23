<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<html>
    <head>
        <title>Employee Util</title>
    </head>
    <body>
        
        <form method="post" action="http://127.0.0.1:1337">
        <label> Employee ID: </label>
        <input type="text" name="id_search" value="">
        <input type="submit" value="search" name="submit">
        <input type="submit" value="delete" name="submit">
        </form>
        
        <button id="add" onclick= hide();> Show/Hide </button>
            
            <script>
                function hide()
                {
                    if(document.getElementById('form').style.display==='none')
                    {document.getElementById('form').style.display='block';}
                    else
                    {document.getElementById('form').style.display='none';}

                    document.getElementById('id').value="";
                    document.getElementById('name').value="";
                    document.getElementById('surname').value="";
                    document.getElementById('level').value="";
                    document.getElementById('salary').value="";
                }
            </script>
        
        <form id="form" action="http://127.0.0.1:1337" method="post" >
            
            <label for="id">ID</label>
            <input id="id" type="text" name="id" value="(:id:)">
            
            <label for="name">Name</label>
            <input id="name" type="text" name="name" value="(:name:)">
            
            <label for="surname">Surname</label>
            <input id="surname" type="text" name="surname" value="(:surname:)">
            
            <label for="level">Level</label>
            <input id="level" type="number" name="level" value="(:level:)">
            
            <label for="salary">Salary</label>
            <input id="salary" type="number" name="salary" value="(:salary:)">
            
            <input type="submit" value="insert" name="submit">
            
        </form>
            
        
            
    </body>
</html>
