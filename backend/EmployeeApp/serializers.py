from rest_framework import serializers
from EmployeeApp.models import Departments, Employees, Companies, Designations, Locations, Andon
from datetime import timedelta
from authApp.models import User

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
    total_time = serializers.SerializerMethodField()
    login = serializers.SerializerMethodField()

    class Meta:
        model = Andon
        fields = (
                  'login',
                  'machineId',
                  'ticket',
                  'category',
                  'sub_category',
                  'andon_alerts',
                  'andon_acknowledge',
                  'andon_resolved',
                  'total_time') 
        
    def get_login(self, obj):
        user = self.context['request'].user
        return user.name if user.is_authenticated else None

        
    def get_total_time(self, obj):
        andon_alerts = obj.andon_alerts
        andon_resolved = obj.andon_resolved

        if andon_alerts and andon_resolved:
            time_difference = andon_resolved - andon_alerts
            total_seconds = time_difference.total_seconds()
            total_time = str(timedelta(seconds=total_seconds))
            return total_time

        return "00:00"
    
    # def create(self, validated_data):
    #     user = self.context['request'].user
    #     if user.is_authenticated:
    #         validated_data['login'] = user.name
    #     return super().create(validated_data)
