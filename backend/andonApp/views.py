from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from andonApp.models import Machines, Products, BreakdownCategory, AssemblyLine, SubBreakdownCategory, ShopFloor, SubAssemblyLine, ProductReceipe
from andonApp.selializers import MachineSerializer, ProductsSerializer, BreakdownCategorySerializer, AssemblyLineSerializer, SubBreakdownCategorySerializer, ShopFloorSerializer, SubAssemblyLineSerializer, ProductReceipeSerializer


@csrf_exempt
def machineApi(request, id=0):
    if request.method == 'GET':
        machines = Machines.objects.all()
        machines_serializer = MachineSerializer(machines, many=True)
        return JsonResponse(machines_serializer.data, safe=False)
    
    elif request.method == 'POST':
        machine_data = JSONParser().parse(request)
        machine_serializer = MachineSerializer(data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        machine_data = JSONParser().parse(request)
        machine = Machines.objects.get(machineId=machine_data['machineId'])
        machine_serializer = MachineSerializer(machine, data=machine_data)
        if machine_serializer.is_valid():
            machine_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
 
    elif request.method == 'DELETE':
        machine = Machines.objects.get(machineId=id)
        machine.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt    
def productApi(request, id=0):
    if request.method == 'GET':
        products = Products.objects.all()
        products_serializer = ProductsSerializer(products, many=True)
        return JsonResponse(products_serializer.data, safe=False)
    
    elif request.method == 'POST':
        product_data = JSONParser().parse(request)
        product_serializer = ProductsSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        product_data = JSONParser().parse(request)
        product = Products.objects.get(ProductId=product_data['ProductId'])
        product_serializer = ProductsSerializer(product, data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        product = Products.objects.get(ProductId=id)
        product.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def breakdownCategoryApi(request, id=0):
    if request.method == 'GET':
        breakdownCategory = BreakdownCategory.objects.all()
        breakdownCategory_serializer = BreakdownCategorySerializer(breakdownCategory, many=True)
        return JsonResponse(breakdownCategory_serializer.data, safe=False)
    
    elif request.method == 'POST':
        breakdownCategory_data = JSONParser().parse(request)
        breakdownCategory_serializer = BreakdownCategorySerializer(data=breakdownCategory_data)
        if breakdownCategory_serializer.is_valid():
            breakdownCategory_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        breakdownCategory_data = JSONParser().parse(request)
        breakdownCategory = BreakdownCategory.objects.get(BreakdownCategoryId=breakdownCategory_data['BreakdownCategoryId'])
        breakdownCategory_serializer = BreakdownCategorySerializer(breakdownCategory, data=breakdownCategory_data)
        if breakdownCategory_serializer.is_valid():
            breakdownCategory_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        breakdownCategory = BreakdownCategory.objects.get(BreakdownCategoryId=id)
        breakdownCategory.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def subBreakdownCategoryApi(request, id=0):
    if request.method == 'GET':
        subBreakdownCategory = BreakdownCategory.objects.all()
        subBreakdownCategory_serializer = SubBreakdownCategorySerializer(subBreakdownCategory, many=True)
        return JsonResponse(subBreakdownCategory_serializer.data, safe=False)
    
    elif request.method == 'POST':
        subBreakdownCategory_data = JSONParser().parse(request)
        subBreakdownCategory_serializer = SubBreakdownCategorySerializer(data=subBreakdownCategory_data)
        if subBreakdownCategory_serializer.is_valid():
            subBreakdownCategory_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        subBreakdownCategory_data = JSONParser().parse(request)
        subBreakdownCategory = BreakdownCategory.objects.get(SubBreakdownCategoryId=subBreakdownCategory_data['SubBreakdownCategoryId'])
        subBreakdownCategory_serializer = SubBreakdownCategorySerializer(subBreakdownCategory, data=subBreakdownCategory_data)
        if subBreakdownCategory_serializer.is_valid():
            subBreakdownCategory_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        subBreakdownCategory = BreakdownCategory.objects.get(SubBreakdownCategoryId=id)
        subBreakdownCategory.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def assemblyLineApi(request, id=0):
    if request.method == 'GET':
        assemblyLine = AssemblyLine.objects.all()
        assemblyLine_serializer = AssemblyLineSerializer(assemblyLine, many=True)
        return JsonResponse(assemblyLine_serializer.data, safe=False)
    
    elif request.method == 'POST':
        assemblyLine_data = JSONParser().parse(request)
        assemblyLine_serializer = AssemblyLineSerializer(data=assemblyLine_data)
        if assemblyLine_serializer.is_valid():
            assemblyLine_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        assemblyLine_data = JSONParser().parse(request)
        assemblyLine = AssemblyLine.objects.get(AssemblyLineId=assemblyLine_data['AssemblyLineId'])
        assemblyLine_serializer = AssemblyLineSerializer(assemblyLine, data=assemblyLine_data)
        if assemblyLine_serializer.is_valid():
            assemblyLine_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        assemblyLine = AssemblyLine.objects.get(AssemblyLineId=id)
        assemblyLine.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def subBreakdownCategoryApi(request, id=0):
    if request.method == 'GET':
        subBreakdownCategory = SubBreakdownCategory.objects.all()
        subBreakdownCategory_serializer = SubBreakdownCategorySerializer(subBreakdownCategory, many=True)
        return JsonResponse(subBreakdownCategory_serializer.data, safe=False)
    
    elif request.method == 'POST':
        subBreakdownCategory_data = JSONParser().parse(request)
        subBreakdownCategory_serializer = SubBreakdownCategorySerializer(data=subBreakdownCategory_data)
        if subBreakdownCategory_serializer.is_valid():
            subBreakdownCategory_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        subBreakdownCategory_data = JSONParser().parse(request)
        subBreakdownCategory = SubBreakdownCategory.objects.get(SubBreakdownCategoryId=subBreakdownCategory_data['SubBreakdownCategoryId'])
        subBreakdownCategory_serializer = SubBreakdownCategorySerializer(subBreakdownCategory, data=subBreakdownCategory_data)
        if subBreakdownCategory_serializer.is_valid():
            subBreakdownCategory_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        subBreakdownCategory = SubBreakdownCategory.objects.get(SubBreakdownCategoryId=id)
        subBreakdownCategory.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def shopFloorApi(request, id=0):
    if request.method == 'GET':
        shopFloor = ShopFloor.objects.all()
        shopFloor_serializer = ShopFloorSerializer(shopFloor, many=True)
        return JsonResponse(shopFloor_serializer.data, safe=False)
    
    elif request.method == 'POST':
        shopFloor_data = JSONParser().parse(request)
        shopFloor_serializer = ShopFloorSerializer(data=shopFloor_data)
        if shopFloor_serializer.is_valid():
            shopFloor_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        shopFloor_data = JSONParser().parse(request)
        shopFloor = ShopFloor.objects.get(ShopFloorId=shopFloor_data['ShopFloorId'])
        shopFloor_serializer = ShopFloorSerializer(shopFloor, data=shopFloor_data)
        if shopFloor_serializer.is_valid():
            shopFloor_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        shopFloor = ShopFloor.objects.get(ShopFloorId=id)
        shopFloor.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def subAssemblyLineApi(request, id=0):
    if request.method == 'GET':
        subAssemblyLine = SubAssemblyLine.objects.all()
        subAssemblyLine_serializer = SubAssemblyLineSerializer(subAssemblyLine, many=True)
        return JsonResponse(subAssemblyLine_serializer.data, safe=False)
    
    elif request.method == 'POST':
        subAssemblyLine_data = JSONParser().parse(request)
        subAssemblyLine_serializer = SubAssemblyLineSerializer(data=subAssemblyLine_data)
        if subAssemblyLine_serializer.is_valid():
            subAssemblyLine_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        subAssemblyLine_data = JSONParser().parse(request)
        subAssemblyLine = SubAssemblyLine.objects.get(SubAssemblyLineId=subAssemblyLine_data['SubAssemblyLineId'])
        subAssemblyLine_serializer = SubAssemblyLineSerializer(subAssemblyLine, data=subAssemblyLine_data)
        if subAssemblyLine_serializer.is_valid():
            subAssemblyLine_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        subAssemblyLine = SubAssemblyLine.objects.get(SubAssemblyLineId=id)
        subAssemblyLine.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def productReceipeApi(request, id=0):
    if request.method == 'GET':
        productReceipe = ProductReceipe.objects.all()
        productReceipe_serializer = ProductReceipeSerializer(productReceipe, many=True)
        return JsonResponse(productReceipe_serializer.data, safe=False)
    
    elif request.method == 'POST':
        productReceipe_data = JSONParser().parse(request)
        productReceipe_serializer = ProductReceipeSerializer(data=productReceipe_data)
        if productReceipe_serializer.is_valid():
            productReceipe_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        productReceipe_data = JSONParser().parse(request)
        productReceipe = ProductReceipe.objects.get(ProductReceipeId=productReceipe_data['ProductReceipeId'])
        productReceipe_serializer = ProductReceipeSerializer(productReceipe, data=productReceipe_data)
        if productReceipe_serializer.is_valid():
            productReceipe_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        productReceipe = ProductReceipe.objects.get(ProductReceipeId=id)
        productReceipe.delete()
        return JsonResponse("Deleted Successfully", safe=False)