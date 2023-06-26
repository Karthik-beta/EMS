from django.db import models

class Machines(models.Model):
    machineId = models.AutoField(primary_key=True)
    machineName = models.CharField(max_length=100)

class Products(models.Model):
    productId = models.AutoField(primary_key=True)
    productName = models.CharField(max_length=100)

class BreakdownCategory(models.Model):
    breakdownCategoryId = models.AutoField(primary_key=True)
    breakdownCategoryName = models.CharField(max_length=100)

class SubBreakdownCategory(models.Model):
    subBreakdownCategoryId = models.AutoField(primary_key=True)
    breakdownCategoryId = models.ForeignKey(BreakdownCategory, on_delete=models.CASCADE)
    subBreakdownCategoryName = models.CharField(max_length=100)

class AssemblyLine(models.Model):
    assemblylineId = models.AutoField(primary_key=True)
    assemblylineName = models.CharField(max_length=100)

class SubAssemblyLine(models.Model):
    subAssemblylineId = models.AutoField(primary_key=True)
    assemblylineId = models.ForeignKey(AssemblyLine, on_delete=models.CASCADE)
    subAssemblylineName = models.CharField(max_length=100)

class ShopFloor(models.Model):
    shopfloorId = models.AutoField(primary_key=True)
    shopfloorName = models.CharField(max_length=100)

class ProductReceipe(models.Model):
    productReceipeId = models.AutoField(primary_key=True)
    productId = models.CharField(max_length=100)
    stages = models.PositiveIntegerField()
    stage1 = models.PositiveIntegerField()
    target_time1 = models.DurationField()
    target_per_minute1 = models.PositiveIntegerField(editable=False, blank=True, null=True)
    target_per_hour1 = models.PositiveIntegerField(editable=False, blank=True, null=True)
    skill_matrix1 = models.CharField(max_length=100)
    stage2 = models.IntegerField(null=True)
    target_time2 = models.DurationField(null=True)
    target_per_minute2 = models.PositiveIntegerField(editable=False, blank=True, null=True)
    target_per_hour2 = models.PositiveIntegerField(editable=False, blank=True, null=True)
    skill_matrix2 = models.CharField(max_length=100, null=True)
    
    def save(self, *args, **kwargs):
        # Calculate target_per_minute and target_per_hour for stage1
        if self.target_time1:
            target_time_seconds = self.target_time1.total_seconds()
            self.target_per_minute1 = int(60 / target_time_seconds)
            self.target_per_hour1 = int(3600 / target_time_seconds)
        
        # Calculate target_per_minute and target_per_hour for stage2
        if self.target_time2:
            target_time_seconds = self.target_time2.total_seconds()
            self.target_per_minute2 = int(60 / target_time_seconds)
            self.target_per_hour2 = int(3600 / target_time_seconds)
        
        super().save(*args, **kwargs)