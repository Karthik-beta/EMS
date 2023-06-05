from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authApp.urls')),
    re_path(r'^', include('EmployeeApp.urls')),
]
