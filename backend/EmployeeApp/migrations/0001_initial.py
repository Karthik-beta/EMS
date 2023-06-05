# Generated by Django 4.2.1 on 2023-05-20 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Companies',
            fields=[
                ('CompanyId', models.AutoField(primary_key=True, serialize=False)),
                ('CompanyName', models.CharField(max_length=100)),
                ('CompanyLocation', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('DepartmentId', models.AutoField(primary_key=True, serialize=False)),
                ('DepartmentName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Designations',
            fields=[
                ('DesignationId', models.AutoField(primary_key=True, serialize=False)),
                ('DesignationName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('EmployeeId', models.AutoField(primary_key=True, serialize=False)),
                ('EmployeeName', models.CharField(max_length=100)),
                ('Department', models.CharField(max_length=100)),
                ('Company', models.CharField(max_length=100)),
                ('Location', models.CharField(max_length=100)),
                ('Designation', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Locations',
            fields=[
                ('LocationId', models.AutoField(primary_key=True, serialize=False)),
                ('LocationName', models.CharField(max_length=100)),
            ],
        ),
    ]
