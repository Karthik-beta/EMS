from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view

from EmployeeApp.models import Departments, Employees, Companies, Designations, Locations, Andon
from EmployeeApp.serializers import DepartmentSerializer, EmployeeSerializer, CompanySerializer, DesignationSerializer, LocationSerializer, AndonSerializer



@csrf_exempt
def departmentApi(request, id=0):
    if request.method == 'GET':
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)
    
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        department_serializer = DepartmentSerializer(department, data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        department = Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    


@csrf_exempt
def employeeApi(request, id=0):
    if request.method == 'GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
    
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer = EmployeeSerializer(employee, data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        employee = Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def companyApi(request, id=0):
    if request.method == 'GET':
        companies = Companies.objects.all()
        companies_serializer = CompanySerializer(companies, many=True)
        return JsonResponse(companies_serializer.data, safe=False)
    
    elif request.method == 'POST':
        company_data = JSONParser().parse(request)
        company_serializer = CompanySerializer(data=company_data)
        if company_serializer.is_valid():
            company_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        company_data = JSONParser().parse(request)
        company = Companies.objects.get(CompanyId=company_data['CompanyId'])
        company_serializer = CompanySerializer(company, data=company_data)
        if company_serializer.is_valid():
            company_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        company = Companies.objects.get(CompanyId=id)
        company.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    
@csrf_exempt
def designationApi(request, id=0):
    if request.method == 'GET':
        designations = Designations.objects.all()
        designations_serializer = DesignationSerializer(designations, many=True)
        return JsonResponse(designations_serializer.data, safe=False)
    
    elif request.method == 'POST':
        designation_data = JSONParser().parse(request)
        designation_serializer = DesignationSerializer(data=designation_data)
        if designation_serializer.is_valid():
            designation_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        designation_data = JSONParser().parse(request)
        designation = Designations.objects.get(DesignationId=designation_data['DesignationId'])
        designation_serializer = DesignationSerializer(designation, data=designation_data)
        if designation_serializer.is_valid():
            designation_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        designation = Designations.objects.get(DesignationId=id)
        designation.delete()
        return JsonResponse("Deleted Successfully", safe=False)

    

@csrf_exempt
def locationApi(request, id=0):
    if request.method == 'GET':
        locations = Locations.objects.all()
        location_serializer = LocationSerializer(locations, many=True)
        return JsonResponse(location_serializer.data, safe=False)
    
    elif request.method == 'POST':
        location_data = JSONParser().parse(request)
        location_serializer = LocationSerializer(data=location_data)
        if location_serializer.is_valid():
            location_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        location_data = JSONParser().parse(request)
        location = Locations.objects.get(LocationId=location_data['LocationId'])
        location_serializer = LocationSerializer(location, data=location_data)
        if location_serializer.is_valid():
            location_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        location = Locations.objects.get(LocationId=id)
        location.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    



@csrf_exempt
def andonapi(request, id=0):
    if request.method == 'GET':
        andons = Andon.objects.all()
        andon_serializer = AndonSerializer(andons, many=True, context={'request': request})
        return JsonResponse(andon_serializer.data, safe=False)
    
    elif request.method == 'POST':
        andon_data = JSONParser().parse(request)
        andon_serializer = AndonSerializer(data=andon_data, context={'request': request})
        if andon_serializer.is_valid():
            andon_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse(andon_serializer.errors, status=400)

    
    elif request.method == 'PUT':
        andon_data = JSONParser().parse(request)
        andon = Andon.objects.get(AndonId=andon_data['AndonId'])
        andon_serializer = AndonSerializer(andon, data=andon_data, context={'request': request})
        if andon_serializer.is_valid():
            andon_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse(andon_serializer.errors, status=400)
    
    elif request.method == 'DELETE':
        andon = Andon.objects.get(ticket=id)
        andon.delete()
        return JsonResponse("Deleted Successfully", safe=False)



# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# def andonapi(request, id=0):
#     if request.method == 'GET':
#         andons = Andon.objects.all()
#         andon_serializer = AndonSerializer(andons, many=True, context={'request': request})
#         return JsonResponse(andon_serializer.data, safe=False)
    
#     elif request.method == 'POST':
#         andon_data = JSONParser().parse(request)
#         andon_serializer = AndonSerializer(data=andon_data, context={'request': request})
#         if andon_serializer.is_valid():
#             andon_serializer.save()
#             return JsonResponse("Added Successfully", safe=False)
#         return JsonResponse(andon_serializer.errors, status=400)

#     elif request.method == 'PUT':
#         andon_data = JSONParser().parse(request)
#         andon = Andon.objects.get(AndonId=andon_data['AndonId'])
#         andon_serializer = AndonSerializer(andon, data=andon_data, context={'request': request})
#         if andon_serializer.is_valid():
#             andon_serializer.save()
#             return JsonResponse("Updated Successfully", safe=False)
#         return JsonResponse(andon_serializer.errors, status=400)
    
#     elif request.method == 'DELETE':
#         andon = Andon.objects.get(ticket=id)
#         andon.delete()
#         return JsonResponse("Deleted Successfully", safe=False)