from django.urls import re_path, path
from andonApp import views


urlpatterns = [

    re_path(r'^machine/$', views.machineApi),
    re_path(r'^machine/([0-9]+)$', views.machineApi),
    # path('machine/', views.machineApi),
    # path('machine/<int:id>', views.machineApi),

    path('product/', views.productApi),
    path('product/<int:id>', views.productApi),

    path('breakdownCategory/', views.breakdownCategoryApi),
    path('breakdownCategory/<int:id>', views.breakdownCategoryApi),

    re_path(r'^subBreakdownCategory/$', views.subBreakdownCategoryApi),
    re_path(r'^subBreakdownCategory/([0-9]+)$', views.subBreakdownCategoryApi),

    re_path(r'^assemblyLine/$', views.assemblyLineApi),
    re_path(r'^assemblyLine/([0-9]+)$', views.assemblyLineApi),

    re_path(r'^subAssemblyLine/$', views.subAssemblyLineApi),
    re_path(r'^subAssemblyLine/([0-9]+)$', views.subAssemblyLineApi),

    re_path(r'^shopFloor/$', views.shopFloorApi),
    re_path(r'^shopFloor/([0-9]+)$', views.shopFloorApi),

    re_path(r'^productReceipe/$', views.productReceipeApi),
    re_path(r'^productReceipe/([0-9]+)$', views.productReceipeApi),

]
