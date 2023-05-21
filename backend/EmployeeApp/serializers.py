from rest_framework import serializers
from EmployeeApp.models import Departments, Employees, Companies, Designations, Locations

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId',
                  'DepartmentName')
        
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId',
                  'EmployeeName',
                  'Department',
                  'Company',
                  'Location',
                  'Designation')
        
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = ('CompanyId',
                  'CompanyName',
                  'CompanyLocation')
        
class DesignationSerializer(serializers.ModelSerializer):   
    class Meta:
        model = Designations
        fields = ('DesignationId',
                  'DesignationName')
        
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locations
        fields = ('LocationId',
                  'LocationName')