from rest_framework import serializers
from EmployeeApp.models import Departments, Employees, Companies, Designations, Locations, Andon

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
        





class AndonSerializer(serializers.ModelSerializer):
    andon_alerts = serializers.DateTimeField(allow_null=True, required=False)
    andon_acknowledge = serializers.DateTimeField(allow_null=True, required=False)
    andon_resolved = serializers.DateTimeField(allow_null=True, required=False)

    class Meta:
        model = Andon
        fields = (
                  'login',
                  'ticket',
                  'category',
                  'sub_category',
                  'andon_alerts',
                  'andon_acknowledge',
                  'andon_resolved') 