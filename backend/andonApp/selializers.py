from rest_framework import serializers
from andonApp import models
from datetime import timedelta

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Machines
        fields = ('machineId',
                  'machineName')
        
class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = ('productId',
                  'productName')
        
class BreakdownCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BreakdownCategory
        fields = ('breakdownCategoryId',
                  'breakdownCategoryName')
        
class SubBreakdownCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SubBreakdownCategory
        fields = ('subBreakdownCategoryId',
                  'breakdownCategoryId',
                  'subBreakdownCategoryName')
        
class AssemblyLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AssemblyLine
        fields = ('assemblylineId',
                  'assemblylineName')
        
class SubAssemblyLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SubAssemblyLine
        fields = ('subAssemblylineId',
                  'assemblylineId',
                  'subAssemblylineName')

class ShopFloorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShopFloor
        fields = ('shopfloorId',
                  'shopfloorName')
        

class ProductReceipeSerializer(serializers.ModelSerializer):
    target_time1 = serializers.SerializerMethodField()
    target_time2 = serializers.SerializerMethodField(allow_null=True, required=False)
    target_per_minute1 = serializers.SerializerMethodField()
    target_per_hour1 = serializers.SerializerMethodField()
    target_per_minute2 = serializers.SerializerMethodField()
    target_per_hour2 = serializers.SerializerMethodField()
    stage1 = serializers.SerializerMethodField()
    stage2 = serializers.SerializerMethodField(allow_null=True, required=False)
    
    def get_target_time1(self, instance):
        seconds = instance.target_time1.total_seconds()
        return f'{seconds:.1f} Seconds/Unit'
    
    def get_target_time2(self, instance):
        seconds = instance.target_time2.total_seconds()
        return f'{seconds:.1f} Seconds/Unit'

    def get_target_per_minute1(self, instance):
        return f'{instance.target_per_minute1} Units'
    
    def get_target_per_hour1(self, instance):
        return f'{instance.target_per_hour1} Units'
    
    def get_target_per_minute2(self, instance):
        return f'{instance.target_per_minute2} Units'
    
    def get_target_per_hour2(self, instance):
        return f'{instance.target_per_hour2} Units'
    
    def get_stage1(self, instance):
        return f'Stage - {instance.stage1}'
    
    def get_stage2(self, instance):
        return f'Stage - {instance.stage2}'
    
    class Meta:
        model = models.ProductReceipe
        fields = ('productReceipeId',
                  'productId',
                  'stages',
                  'stage1',
                  'target_time1',
                  'target_per_minute1',
                  'target_per_hour1',
                  'skill_matrix1',
                  'stage2',
                  'target_time2',
                  'target_per_minute2',
                  'target_per_hour2',
                  'skill_matrix2')
        
