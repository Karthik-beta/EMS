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



class CustomCharField(models.CharField):
    def pre_save(self, model_instance, add):
        value = super().pre_save(model_instance, add)
        if value is None or value == '':
            value = self.generate_ticket_value(model_instance)
            setattr(model_instance, self.attname, value)
        return value

    def generate_ticket_value(self, model_instance):
        last_ticket = model_instance.__class__.objects.order_by('-ticket').first()
        if last_ticket is not None:
            last_ticket_number = int(last_ticket.ticket[2:])
            ticket_number = last_ticket_number + 1
        else:
            ticket_number = 1000
        return f"EN{ticket_number:04d}"


class Andon(models.Model):
    login = models.CharField(max_length=255)
    ticket = CustomCharField(max_length=6, primary_key=True)
    category = models.CharField(max_length=255)
    sub_category = models.CharField(max_length=255)
    andon_alerts = models.DateTimeField(null=True)
    andon_acknowledge = models.DateTimeField(null=True)
    andon_resolved = models.DateTimeField(null=True)

    class Meta:
        db_table = 'andon'

    def save(self, *args, **kwargs):
        if not self.ticket:
            self.ticket = self._generate_ticket_value()
        super().save(*args, **kwargs)

    def _generate_ticket_value(self):
        last_ticket = self.__class__.objects.order_by('-ticket').first()
        if last_ticket is not None:
            last_ticket_number = int(last_ticket.ticket[2:])
            ticket_number = last_ticket_number + 1
        else:
            ticket_number = 1000
        return f"EN{ticket_number:04d}"
