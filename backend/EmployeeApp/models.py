from django.db import models

class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)

class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    Company = models.CharField(max_length=100) 
    Location = models.CharField(max_length=100)
    Designation = models.CharField(max_length=100)
    
class Companies(models.Model):
    CompanyId = models.AutoField(primary_key=True)
    CompanyName = models.CharField(max_length=100)
    CompanyLocation = models.CharField(max_length=100)
    

class Designations(models.Model):
    DesignationId = models.AutoField(primary_key=True)
    DesignationName = models.CharField(max_length=100)
    
class Locations(models.Model):
    LocationId = models.AutoField(primary_key=True)
    LocationName = models.CharField(max_length=100)






class Andon(models.Model):
    login = models.CharField(max_length=255)
    machineId = models.CharField(max_length=255, default='default_value')
    ticket = models.AutoField(primary_key=True)
    category = models.CharField(max_length=255)
    sub_category = models.CharField(max_length=255)
    andon_alerts = models.DateTimeField(null=True)
    andon_acknowledge = models.DateTimeField(null=True)
    andon_resolved = models.DateTimeField(null=True)
    total_time = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'andon'

