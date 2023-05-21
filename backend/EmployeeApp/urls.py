from django.urls import re_path
from EmployeeApp import views


urlpatterns = [

    re_path(r'^department/$', views.departmentApi),
    re_path(r'^department/([0-9]+)$', views.departmentApi),

    re_path(r'^employee/$', views.employeeApi),
    re_path(r'^employee/([0-9]+)$', views.employeeApi),

    re_path(r'^company/$', views.companyApi),
    re_path(r'^company/([0-9]+)$', views.companyApi),

    re_path(r'^designation/$', views.designationApi),
    re_path(r'^designation/([0-9]+)$', views.designationApi),

    re_path(r'^location/$', views.locationApi),
    re_path(r'^location/([0-9]+)$', views.locationApi),

]